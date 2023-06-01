<template>
    <h1>Ejemplo de obetener datos de la db</h1>
    <div>
        <button @click="puntuaciones">Obtener</button>
        <div v-for="dato in datos" :key="dato.id">
            {{ dato }}
        </div>
    </div>

    <h2>Recibir solo de un usuario</h2>
    <label>Nombre: <input type="text" v-model="usuario"></label>
    <button @click="unUsuario">Obtener</button>
    <div>
        {{ enUsuario }}
    </div>
</template>

<script>
    export default{
        name: "RecivirEjemplo",
        data(){
            return{
                datos: [],
                enUsuario: [],
                usuario: ""
            };
        },

        methods: {
            puntuaciones: async function () {
                const url = "http://127.0.0.1:5000/todo";
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    this.datos = data;
                    console.log(this.datos);
                } catch (error) {
                    console.error(error);
                }
            },

            unUsuario: async function () {
                const url = "http://127.0.0.1:5000/todo/" + this.usuario;
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    this.enUsuario = data;
                    console.log(this.enUsuario);
                } catch (error) {
                    console.error(error);
                }
            }
        },  
    }
</script>

<style scoped>
*{
    background-color: blue;
}
</style>