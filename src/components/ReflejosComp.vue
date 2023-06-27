<template>
    <div class="comp color2">
        <h2 v-if="juegoIniciado == false">Juego de Reflejos</h2>
        <div v-if="juegoIniciado == false" class="vistaInicial">
            <img src="" alt="icono-de-reflejos">
            <div v-if="resultado == false" class="descripcion">
                <p>En el juego de Reflejos Rápidos, tu objetivo es hacer clic lo más rápido posible cuando la pantalla se ilumine en verde, evitando hacer clic cuando se ilumine en naranja. Pon a prueba tus reflejos y consigue la mejor puntuación evitando los colores equivocados.</p>
            </div>
            <div v-if="resultado" class="resultado">
                Aqui sale el resultado al terminar el juego
            </div>
        </div>
        <div v-if="juegoIniciado" class="juego">
            <div>
                <div v-if="juegoIniciado2 == true" :class="juegoIniciado2">
                    <div v-if="verde ==true" class="verde" @click="esVerde">
                        
                    </div>
                    <div v-if="naranja" class="naranja">
                    
                    </div>
                    <div v-else>
                        
                    </div>
                </div>
                <div v-else class="preparado" @click="generarColores()">
                    <p>Haz click cuando estes preparado</p>
                </div>
            </div>
        </div>

        <button @click="iniciarJuego" v-if="empezar" class="btn">Preparado</button>
    </div>
</template>

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
            juegoIniciado2: false,
            verde: false,
            naranja: false,
        }
    },
    methods: {
        iniciarJuego(){
            this.juegoIniciado = true;
            this.empezar = false;
        },
        generarColores() {
            this.juegoIniciado2 = true;
            const aleatorio = Math.random();
            this.verde = aleatorio < 0.5;
            this.naranja = aleatorio >= 0.5;

            if (this.naranja) {
                setTimeout(() => {
                    this.naranja = false;
                    setTimeout(() => {
                        this.generarColores();
                    }, 2000 + Math.random() * 5000); // Tiempo aleatorio en milisegundos
                }, 2000);
            } else{
                
            }
        },

    }
}
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