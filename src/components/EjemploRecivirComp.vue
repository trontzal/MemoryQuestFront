<template>
    <div v-if="datos">
        <p>{{ datos.mensaje }}</p>
        <p>Numero: {{ datos.numero }}</p>
        <ul>
            <li v-for="item in datos.lista" :key="item">{{ item }}</li>
        </ul>
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