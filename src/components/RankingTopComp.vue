<template>
  <div v-if="datosUsuario || datosJuego || posicionUsuario" class="ranking">
    <h2>Ranking</h2>
    <div class="posicionUsuario">
      <p>Tu Posicion:</p>
      <div v-if="datosUsuario">
        {{ posicionUsuario }} {{ datosUsuario.usuario }} {{ datosUsuario.puntos }}
      </div>
      <div v-else>
        Cargando...
      </div>

    </div>
    <h2>Top5</h2>
    <div v-for="(top, index) in top5" :key="index">
        {{ index + 1 }} {{ top.usuario }}  {{ top.puntos }}  {{ top.tipo_de_juego }}
    </div>
  </div>
  <div v-else class="cargando">
    Cargando...
  </div>
</template>
  
  <script>
  export default {
    name: "RankingTopComp",
  
    data() {
      return {
        datosUsuario: null,
        datosJuego: null,
        usuario : "anonimo",
        tipo_de_juego : "memoriaVisual",
        posicionUsuario : null,
      };
    },
    // computed para mejor eficiencia al manejar datos
    computed: {
      top5() {
        //se comprueba que datos tiene datos
        if (this.datosJuego) {
          return [...this.datosJuego]
          .sort((a, b) => b.puntos - a.puntos)
          .slice(0, 5);
        } else {
          return [];
        }
      }
    },
  
    methods: {
      async recibirDbDeJuegoEspecifico() {
        const url = "http://127.0.0.1:5000/todo/game/" + this.tipo_de_juego;
        try {
          const response = await fetch(url);
          const data = await response.json();
          this.datosJuego = data;
        } catch (error) {
          console.error(error);
        }
      },
      async recibirDbDeUsuario() {
        const url = "http://127.0.0.1:5000/todo/user/" + this.usuario;
        try {
          const response = await fetch(url);
          const data = await response.json();
          // Filtrar el dato de mayor puntuación del usuario
          const maxPuntos = Math.max(...data.map((item) => item.puntos));
          this.datosUsuario = data.find((item) => item.puntos === maxPuntos);
        } catch (error) {
          console.error(error);
        }
      },
      async recibirDbDePosicionUsuario() {
        const url = "http://127.0.0.1:5000/todo/posicion/" + this.usuario + "/" + this.tipo_de_juego;
        try {
          const response = await fetch(url);
          const data = await response.json();
          this.posicionUsuario = data;
          console.log("****************" + this.posicionUsuario);
        } catch (error) {
          console.error(error + "******************");
        }
      }
      

    },
  
    mounted() {
      this.recibirDbDeJuegoEspecifico();
      this.recibirDbDeUsuario();
      this.recibirDbDePosicionUsuario();
    }
  };
  </script>
  
