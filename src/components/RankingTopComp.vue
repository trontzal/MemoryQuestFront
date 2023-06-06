<template>
    <h1>ranking</h1>
    <h2>Usuario</h2>
    <div>
      {{ datosUsuario }}
      <p>Posición: {{ posicionUsuario }}</p>
    </div>
    <h2>Top5</h2>
    <div v-for="(top, index) in top5" :key="index">
        {{ index + 1 }} {{ top.usuario }}  {{ top.puntos }} {{ top.tipo_de_juego }}
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
        juego : "memoriaVisual",
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
        const url = "http://127.0.0.1:5000/todo/game/" + this.juego;
        try {
          const response = await fetch(url);
          const data = await response.json();
          this.datosJuego = data;
          console.log(this.datosJuego);
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
        console.log(this.datosUsuario);
        const posicionUrl =
          "http://127.0.0.1:5000/todo/posicion/" +
          this.usuario +
          "/" +
          this.juego;
        const posicionResponse = await fetch(posicionUrl);
        const posicionData = await posicionResponse.json();
        this.posicionUsuario = posicionData;
        console.log(this.posicionUsuario);
      } catch (error) {
        console.error(error);
      }
      },
      

    },
  
    mounted() {
      this.recibirDbDeJuegoEspecifico();
      this.recibirDbDeUsuario();
    }
  };
  </script>
  
