<template>
    <h2>Grafico</h2>
    <div v-if="datosGrafico">
        {{ datosgrafico }}
    </div>
    <div v-else>
        cargando...
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
                console.log(this.datosGrafico)
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