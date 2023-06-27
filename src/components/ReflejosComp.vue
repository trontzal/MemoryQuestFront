<template>
    <div class="comp color2">
        <h2 v-if="!juegoIniciado">Juego de Reflejos</h2>

        <div v-if="!juegoIniciado" class="vistaInicial">
            <img src="" alt="icono-de-reflejos">
            <div v-if="!resultado" class="descripcion">
                <p>
                    En el juego de Reflejos Rápidos, tu objetivo es hacer clic lo más
                    rápido posible cuando la pantalla se ilumine en verde, evitando hacer
                    clic cuando se ilumine en naranja. Pon a prueba tus reflejos y
                    consigue la mejor puntuación evitando los colores equivocados.
                </p>
            </div>
            <div v-if="resultado" class="resultado">
                <p>Aquí sale el resultado al terminar el juego</p>
                <p>Tiempo total: {{ tiempoTotal }} ms</p>
            </div>
        </div>

        <div v-if="juegoIniciado" class="juego">
            <div>
                <div v-if="juegoIniciado2">
                    <div v-if="verde" class="verde" @click="verdeClicado"></div>
                    <div v-if="naranja" class="naranja" @click="naranjaClicada"></div>
                </div>
                <div v-else class="preparado" @click="iniciarJuego">
                    <p>Haz clic cuando estés preparado</p>
                </div>
            </div>
        </div>

        <button v-if="empezar" class="btn" @click="iniciarJuego">Preparado</button>
    </div>
</template>

<script>
export default {
    name: 'PlantillaComp',
    data() {
        return {
            empezar: true,
            juegoIniciado: false,
            resultado: false,
            juegoIniciado2: false,
            verde: false,
            naranja: false,
            tiempoInicio: 0,
            tiempoTotal: 0,
            timeoutID: null,
        };
    },
    methods: {
        iniciarJuego() {
            this.juegoIniciado = true;
            this.empezar = false;
            this.generarColores();
        },
        generarColores() {
            this.juegoIniciado2 = true;
            this.verde = false;
            this.naranja = false;
            this.timeoutID = setTimeout(() => {
                const aleatorio = Math.random();
                this.verde = aleatorio < 0.5;
                this.naranja = aleatorio >= 0.5;
                this.tiempoInicio = Date.now();

                if (this.naranja) {
                    this.timeoutID = setTimeout(() => {
                        this.generarColores();
                    }, 2000);
                }
            }, Math.random() * 5000);
        },
        verdeClicado() {
            if (this.verde) {
                const tiempoFin = Date.now();
                this.tiempoTotal = tiempoFin - this.tiempoInicio;
                window.alert(`¡Correcto! Tardaste ${this.tiempoTotal.toString()} ms en hacer clic.`);
                this.reiniciarJuego();
            }
        },


        naranjaClicada() {
            if (this.naranja) {
                window.alert('¡Incorrecto! Hiciste clic en naranja. Inténtalo de nuevo.');
                this.reiniciarJuego();
            }
        },
        reiniciarJuego() {
            clearTimeout(this.timeoutID);
            this.juegoIniciado = false;
            this.resultado = true;
            this.juegoIniciado2 = false;
            this.verde = false;
            this.naranja = false;
            this.tiempoInicio = 0;
            this.tiempoTotal = 0;
        },
    },
};
</script>





<style scoped>

    .comp{
        height: 24rem;
    }
    .juego{
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .preparado{
        background-color: red;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .naranja{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: orange;
    }

    .verde{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: green;
    }
</style>