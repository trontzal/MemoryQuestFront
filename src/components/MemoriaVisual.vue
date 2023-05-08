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
    return {
      // tamaño inicial de 3 osea 3x3 en la cuadricula
      tamano: 3,
      cuadriculas: [],
    }
  },
  created() {
    //crear las cudriculas dinamicas, cogemos el tamaño y lo multiplicamos por si mismo
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
      const cuadriculasIluminadas = []
      while(cuadriculasIluminadas.length < 3) {
        const indice = Math.floor(Math.random() * this.cuadriculas.length)
        if (!cuadriculasIluminadas.includes(indice)) {
          cuadriculasIluminadas.push(indice)
        }
      }
      //Agregamos la clase "cuadricula-iluminada" a las cuadrículas seleccionadas
      cuadriculasIluminadas.forEach((indice) =>{
      this.cuadriculas [indice].class = 'cuadricula cuadricula-iluminada'
      //Despues de un segundo quitamos la clase cuadricula iluminada
      setTimeout(() => {
          this.cuadriculas[indice].class = 'cuadricula'
        }, 2000)
      })
    },
    seleccionarCuadricula(cuadricula){
      alert(cuadricula.class)
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

</style>

