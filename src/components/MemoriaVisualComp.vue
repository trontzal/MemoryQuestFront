<template>
  <div class="comp color2">
    <h2>Juego de memoria visual</h2>
    <div v-if="juegoIniciado == false" class="vistaInicial">
      <img src="../assets/imagenes/iconosGrandes/MemoriaVisual.png" alt="">
      <div v-if="resultado == false" class="descripcion">
        <p>El objetivo de este juego es recordar y repetir la secuencia de iluminación en una cuadrícula de cuadrados. Por cada nivel superado la dificultad aumenta.</p>
      </div>
      <div v-if="resultado" class="resultado">
        Has llegado al nivel {{ nivel }}
      </div>
    </div>
    <div v-if="juegoIniciado" class="juego">
      <div class="nivel-vidas">
        <h2 class="nivel">Nivel {{ nivel }}</h2>
        <div class="vidas">
          <img v-if="vidas >2" src="../assets/imagenes/Vidas.png" alt="">
          <img v-if="vidas >1" src="../assets/imagenes/Vidas.png" alt="">
          <img v-if="vidas > 0" src="../assets/imagenes/Vidas.png" alt="">
        </div>
      </div>
      <div class="cuadriculas" :style="{ 'grid-template-columns': `repeat(${tamano}, 1fr)` }">
        <div v-for="(cuadricula, index) in cuadriculas" :key="index" :class="cuadricula.class" @click="seleccionarCuadricula(cuadricula)">
        </div>
      </div>
    </div>

    <button @click="iniciarJuego" v-if="empezar" class="btn">Preparado</button>
  </div>
</template>

<script>
import {guardarPuntos} from '@/api'
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
      resultados : "", // El resultado final que se envia al back
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
      // hacemos que al empezar se apunte automaticamente al juego al empezar
      window.scrollTo({
        top: 100,
        behavior: 'smooth'
      })

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
      this.vidas = 3
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
        }, 1500)
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
            setTimeout(() =>{
            this.siguienteNivel()
          }, 500)
        }

        //si nos equivocamos roja y restamos una vida
        }else if(!this.cuadriculasIluminadas.includes(this.cuadriculas.indexOf(cuadricula))){
          cuadricula.class = 'cuadricula mal vibrate'
          this.vidas = this.vidas-1

          //el juego se acaba si llegamos a 0 vidas
          if (this.vidas === 0) {
            setTimeout(() =>{
              this.juegoIniciado = false
              this.resultado = true
              this.empezar = true
              this.resultados = this.nivel
              guardarPuntos(this.resultados, "vis")
            // reiniciamos las clases de las cuadriculas
              this.cuadriculas.forEach((cuadricula, index) => {
                cuadricula.class = `cuadricula${index}`
              })
            }, 1000)
            }

        }else{
          alert("error en seleccionarcuadriculas()")
          }

      }else{
        return
      }
    },
    

    // async guardarPuntos(resultados){
    //   const url = "http://127.0.0.1:5000/todo"
    //   await fetch(url, {
    //     method: "POST",
    //     headers: {'Content-Type': 'application/json'},
    //     body: `{"usuario":"prueba", "puntos":"${resultados}", "tipo_de_juego":"memoriaVisual"}`
    //   })
    //   .catch((e) => {
    //     console.log("**************** Error: ", e)
    //   }) 
    // }
  },
}
</script>

<style scoped>

  .juego {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .nivel-vidas{
    width: 50%;
    display: flex;
    justify-content: space-between;
  }


  .cuadriculas{
    display: grid;
    height: 24rem;
    width: 24rem;
  }

  .cuadriculas > div{
    margin: 0.3rem;
    border-radius: 10px;
  }

  .cuadricula{
    background-color: white;
  }

  .cuadricula-iluminada{
    background-color: #4B5D5F;
  }

  .bien{
    background-color: #4B5D5F;
  }

@keyframes vibrate {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.mal.vibrate {
  animation: vibrate 0.5s ;
  background-color: rgba(206, 206, 206, 0.582);
}


  .vidas{
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .vidas{
    width: 1rem;
  }


</style>

