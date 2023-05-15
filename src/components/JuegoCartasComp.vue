<template>
    <div class="componente">
        <h2>componente cartas</h2>
        <div v-if="juegoIniciado == true" class="juegoIniciado">
            <div v-for="(carta, index) in cartasDesordenadas" :key="index">
                {{ carta }}
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
                
                juegoIniciado : false,
                cartas : [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
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
            }
        }
    }
</script>