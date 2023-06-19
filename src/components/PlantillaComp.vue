<template>
    <div class="comp color2">
        <h2>Plantilla</h2>
        <div v-if="juegoIniciado == false" class="vistaInicial">
            <img src="../assets/imagenes/iconosGrandes/MemoriaVisual.png" alt="">
            <div v-if="resultado == false" class="descripcion">
                <p>Esta es una plantilla para hacer los demas juegos.</p>
            </div>
            <div v-if="resultado" class="resultado">
                Aqui sale el resultado al terminar el juego
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

export default {
    name: 'PlantillaComp',
    components: {
    },
    data() {
        return {
            empezar: true,
            juegoIniciado: false,
            resultado: false,
        }
    },
    methods: {
    }
}
</script>