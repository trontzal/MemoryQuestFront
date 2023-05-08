<template>
  <div class="componente">
    <h2>Juego de memoria visual</h2>
    <div class="juego">
      <div class="cuadriculas" :style="{ 'grid-template-columns': `repeat(${tamano}, 1fr)` }">
        <div v-for="(cuadricula, index) in cuadriculas" :key="index" :class="cuadricula.class" @click="seleccionarCuadricula(cuadricula)">
        </div>
      </div>
    </div>
    <button @click="iniciarJuego">Preparado</button>
  </div>
</template>

<script>
export default {
  name: 'MemoriaVisual',
  data() {
    //return para los datos que vamos a manejaren el componente
    return {
      // tamaño inicial de 3 osea 3x3 en la cuadricula
      tamano: 3,
      cuadriculas: [],
      cuadriculasIluminadas:[],
      vidas : 3,
    }
  },
  created() {
    // created se usa para crear la cuadricula antes de que el componente se rendereice
    //crear las cuadriculas dinamicas, cogemos el tamaño y lo multiplicamos por si mismo
    for(let i= 0;i < this.tamano * this.tamano; i ++){
      // damos a cada cuadricula su index en la clase para diferenciarlas
      this.cuadriculas.push({class:`cuadricula${i}`})
    }
  },
  methods: {
    iniciarJuego() {
      // lógica para iniciar el juego
      console.log('Juego iniciado')
      this.iluminarCuadriculasAleatorias()
    },
    iluminarCuadriculasAleatorias() {
      this.cuadriculasIluminadas = []
      while(this.cuadriculasIluminadas.length < 3) {
        const indice = Math.floor(Math.random() * this.cuadriculas.length)
        if (!this.cuadriculasIluminadas.includes(indice)) {
          this.cuadriculasIluminadas.push(indice)
        }
      }
      //Agregamos la clase "cuadricula-iluminada" a las cuadrículas seleccionadas
      this.cuadriculasIluminadas.forEach((indice) =>{
      this.cuadriculas[indice].class = 'cuadricula cuadricula-iluminada'
      //Despues de un segundo quitamos la clase cuadricula iluminada
      setTimeout(() => {
          this.cuadriculas[indice].class = 'cuadricula'
        }, 2000)
      })
    },
    seleccionarCuadricula(cuadricula){
      if(this.cuadriculasIluminadas.includes(this.cuadriculas.indexOf(cuadricula))){
        cuadricula.class = 'cuadricula bien'
      }else if(!this.cuadriculasIluminadas.includes(this.cuadriculas.indexOf(cuadricula))){
        cuadricula.class = 'cuadricula mal'
        this.vidas = this.vidas-1
      }else{
        alert("error")
      }
      alert(this.vidas)
    }
  },
}
</script>

<style scoped>
  *{
    border: 1px solid black;
  }

  .juego {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .cuadriculas{
    display: grid;
  }

  .cuadriculas > div{
    height: 3rem;
    width: 3rem;
  }

  .cuadricula{
    background-color: white;
  }

  .cuadricula-iluminada{
    background-color: black;
  }

  .bien{
    background-color: green;
  }
  
  .mal{
    background-color: red;
  }
</style>

