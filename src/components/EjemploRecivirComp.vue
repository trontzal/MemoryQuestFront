<template>
    <h1>Ejemplo de obetener datos</h1>
    <div v-if="datos">
        <div v-for="dato in datos" :key="dato">
            <p>Nombre: {{ dato.Nombre }}</p>
            <p>Texto: {{ dato.Texto }}</p>
        </div>
    </div>
    <div v-else>
        no sale
    </div>
</template>

<script>

    import axios from 'axios'

    export default{
        name: "RecivirEjemplo",
        data(){
            return{
                datos: null
            };
        },
        mounted(){
            axios.get('http://localhost:5000/ejemplo')
            .then(response => {
                this.datos = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
</script>

<style scoped>
*{
    background-color: blue;
}
</style>