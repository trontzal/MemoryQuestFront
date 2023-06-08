<template>
    <div>
      <h2>Grafico</h2>
      <div v-if="datosGrafico">
        <div v-for="(dato, index) in datosGrafico" :key="index">
            {{ dato.x }} {{ dato.y }}
        </div>
      </div>
      <div v-else>
        Cargando...
      </div>
    </div>
  </template>
  
<script>
    export default {
        data() {
            return {
                tipo_de_juego: "memoriaVisual",
                datosGrafico : null
            }
        },
        methods:{
            async recibirDatosGrafico() {
                const url = "http://127.0.0.1:5000/todo/grafico/" + this.tipo_de_juego;
                try {
                const response = await fetch(url);
                const data = await response.json();
                this.datosGrafico = data;
                console.log(this.datosGrafico.x)
                } catch (error) {
                console.error(error);
                }
            },
        },
        mounted() {
                    this.recibirDatosGrafico();
                }
    }
</script>