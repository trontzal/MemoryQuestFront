<template>
    <h2>Enviar datos</h2>
    <form @submit.prevent="enviarDatos">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required>

        <label for="nombre">Texto:</label>
        <input type="text" id="texto" v-model="texto" required>

        <button type="submit">enviar</button>
    </form>
    
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return  {
                nombre: "",
                texto: ""
            };
        },
        methods:{
            
            enviarDatos(){
                const datos = {
                    nombre : this.nombre,
                    texto : this.texto
                };

                axios.post('http://localhost:5000/guardar', datos)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
        }
    }
</script>

<style scoped>
    *{
        background-color: bisque;
    }
</style>