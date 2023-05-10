<template>
  <div class="componente">
    <h2>Juego de memoria visual {{ resultados }}</h2>
    <div v-if="juegoIniciado" class="juego">
      <div class="nivel-vidas"><h2>Nivel {{ nivel }}</h2><h3>Vidas:{{ vidas }}</h3></div>
      <div class="cuadriculas" :style="{ 'grid-template-columns': `repeat(${tamano}, 1fr)` }">
        <div v-for="(cuadricula, index) in cuadriculas" :key="index" :class="cuadricula.class" @click="seleccionarCuadricula(cuadricula)">
        </div>
      </div>
    </div>
    <div v-if="resultado" class="resultado">
      Has llegado al nivel {{ nivel }}
    </div>
    <button @click="iniciarJuego" v-if="empezar">Preparado</button>
  </div>
</template>

<script>
export default {
  name: 'MemoriaVisual',
  data() {
    //return para los datos que vamos a manejaren el componente
    return {
      tamano: 3,// tamaño inicial de 3 osea 3x3 en la cuadricula
      cuadriculas: [],
      cuadriculasIluminadas:[],
      vidas : 3,
      juegoIniciado : false, // por defecto el juego no se ve
      nivel : 1,
      jugando : false, // Por defecto no se puede clickar el los cuadrados 
      resultado : false,
      empezar : true,
      numero : 3,
      resultados : [],
    }
  },

  methods: {
    renderizarCuadros(){
      for(let i= 0;i < this.tamano * this.tamano; i ++){
      this.cuadriculas.push({class:`cuadricula`})
      }
    },

    iniciarJuego() {
      // lógica para iniciar el juego
      console.log('Juego iniciado')
      this.cuadriculas = []
      this.tamano = 3 //reiniciar tamaño
      this.numero = 3 //reiniciamos numero de iluminadas
      this.renderizarCuadros()
      this.juegoIniciado = true //mostrar cuadricula
      this.vidas = 3 //reiniciar vidas
      this.cuadriculasIluminadas = []//no se si es necesaria
      this.nivel = 1 // reiniciar nivel
      this.empezar = false //el boton desaparece al iniciar
      this.resultado = false
      this.iluminarCuadriculasAleatorias()
    },

    siguienteNivel(){
      this.cuadriculas = []
      this.nivel = this.nivel +1
      
      if(this.nivel > 1){
        this.numero = this.numero +1

        if(this.nivel %2 == 0){
          this.tamano = this.tamano +1
        }

        }else{
        console.log("faltan niveles")
      }
      this.renderizarCuadros()
      this.iluminarCuadriculasAleatorias()
    },

    iluminarCuadriculasAleatorias() {
      this.cuadriculasIluminadas = []
      this.jugando = false
      while(this.cuadriculasIluminadas.length < this.numero) {
        const indice = Math.floor(Math.random() * this.cuadriculas.length)// numero random entre el tamaño total
        if (!this.cuadriculasIluminadas.includes(indice)) {
          this.cuadriculasIluminadas.push(indice)//solo se agregan si no estan repetidas
        }
      }
      //Agregamos la clase "cuadricula-iluminada" a las cuadrículas seleccionadas
      this.cuadriculasIluminadas.forEach((indice) =>{
      this.cuadriculas[indice].class = 'cuadricula cuadricula-iluminada'
      //Despues de 2 segundos quitamos la clase cuadricula iluminada
      setTimeout(() => {
          this.cuadriculas[indice].class = 'cuadricula'
          this.jugando = true
        }, 1000)
      })
    },

    seleccionarCuadricula(cuadricula){

      if(this.jugando === true){
        //si clicamos en una casilla ya acertada no hace nada
        if(cuadricula.class.includes('bien')){
          return

        //si clicamos en una casilla fallada no hace nada
        }else if(cuadricula.class.includes('mal')){
          return

        // si clikamos en la cuadricula anteriormente iluminada se vuelve verde
        }else if(this.cuadriculasIluminadas.includes(this.cuadriculas.indexOf(cuadricula))){
          cuadricula.class = 'cuadricula bien'
          this.cuadriculasIluminadas.splice(this.cuadriculasIluminadas.indexOf(this.cuadriculas.indexOf(cuadricula)), 1);

          if(this.cuadriculasIluminadas.length == 0) {
            this.siguienteNivel()
          }

        //si nos equivocamos roja y restamos una vida
        }else if(!this.cuadriculasIluminadas.includes(this.cuadriculas.indexOf(cuadricula))){
          cuadricula.class = 'cuadricula mal'
          this.vidas = this.vidas-1

          //el juego se acaba si llegamos a 0 vidas
          if (this.vidas === 0) {
            this.juegoIniciado = false
            this.resultado = true
            this.empezar = true            
            this.resultados.push({
              puntuacion: this.nivel,
              fecha: new Date()
            })
            // reiniciamos las clases de las cuadriculas
            this.cuadriculas.forEach((cuadricula, index) => {
              cuadricula.class = `cuadricula${index}`
            })
          }

        }else{
          alert("error en seleccionarcuadriculas()")
          }

      }else{
        return
      }
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

