<template>
    <h1>Ejemplo de obetener datos de la db</h1>
    <div>
        <button @click="puntuaciones">Obtener</button>
        <div v-for="dato in datos" :key="dato.id">
            {{ dato }}
        </div>
    </div>
</template>

<script>
    export default{
        name: "RecivirEjemplo",
        data(){
            return{
                datos: []
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
            }
        },  
    }
</script>

<style scoped>
*{
    background-color: blue;
}
</style>