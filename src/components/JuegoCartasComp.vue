<template>
    <div class="componente">
        <h2>componente cartas</h2>
        <div v-if="juegoIniciado == true" class="juegoIniciado">
            <div v-for="(carta, index) in cartasDesordenadas" :key="index" @click="seleccionarCarta(carta)">
                <div v-if="verCarta == true" class="ensenando">
                    {{ carta }}
                </div>
                <div v-if="verCarta == false" class="sinEnsenar">

                </div>
            </div>
        </div>
        <button @click="iniciarJuego">Empezar</button>
    </div>
</template>

<script>
    export default{
        name:"JuegoCartas",
        data(){
            return{
                verCarta : false,
                juegoIniciado : false,
                cartas : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                cartasDesordenadas:[]
            }
        },
        created() {
            this.cartasDesordenadas = this.barajar(this.cartas);
            },

        methods: {
            barajar(array) {
                var newArray = array.slice();
                for (var i = newArray.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = temp;
                }
                return newArray;
            },

            iniciarJuego(){
                this.juegoIniciado = true;
            },

            seleccionarCarta(carta){
                console.log(carta);
                this.verCarta = true;
            }
        }
    }
</script>

<style scoped>

    *{
        border: 1px solid black;
    }
    .juegoIniciado{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        justify-content: center;
        width: fit-content;
        margin: 0 auto;
    }

    .juegoIniciado > div{
        height: 3.5rem;
        width: 3rem;
        margin: 0.5rem;
    }
</style>