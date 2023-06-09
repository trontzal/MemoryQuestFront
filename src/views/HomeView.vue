<template>
  <div class="comp color2">
    <div class="ampliarMinimizar">
      <img src="../assets/imagenes/botones/Ampliar.png" alt="" @click="enviarTamano(true); ampliado = true" v-if="ampliado == false">
      <img src="../assets/imagenes/botones/Minimizar.png" alt="" @click="enviarTamano(false); ampliado = false" v-else>
    </div>

    <h2>Plantilla</h2>
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

    </div>

    <button @click="iniciarJuego" v-if="empezar" class="btn">Preparado</button>
  </div>
</template>

<style>

</style>

<script>

export default{
  name: 'HomeView',
  components:{
  },
  data(){
    return {
      empezar : true,
      juegoIniciado : false,
      resultado : false,
      ampliado : true
    }
  },
  methods: {
    enviarTamano(ampliado){
      this.$emit('tamano', ampliado)
      console.log(ampliado)
    }
  }
}
</script>

