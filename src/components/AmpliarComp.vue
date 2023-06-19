<template>
    <div class="ampliarMinimizar">
        <img src="../assets/imagenes/botones/Ampliar.png" alt="" @click="enviarTamano(true); ampliado = true" v-if="ampliado == false">
        <img src="../assets/imagenes/botones/Minimizar.png" alt="" @click="enviarTamano(false); ampliado = false" v-else>
        {{ ampliado }}
    </div>
</template>

<script>
    export default {
        name: 'AmpliarMinimizar',
        data() {
            return {
                ampliado: false
            }
        },
        methods: {
            enviarTamano(tamano) {
                this.ampliado = tamano;
                this.$emit('actualizar-ampliado', tamano);
                console.log("console del componente "+ this.ampliado);
            }
        }
    }
</script>