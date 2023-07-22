<template>
    <nav>
        <div class="menu-item"><a href="#">Ranking</a></div>
        <div class="menu-item"><a href="#">Ajustes</a></div>
        <div v-if="estaAutenticado()" class="menu-item"><a href="">Hola {{ obtenerUsuario() }}</a></div>
        
    </nav>
</template>

<script>
    import { estaAutenticado, obtenerUsuario } from '@/auth';
    export default{
        name: "DropdowsnComp",
        methods:{
            estaAutenticado,
            obtenerUsuario
        }
    }
</script>

<style>
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav .menu-item{
        color: white;
        position: relative;
        padding: 10px 20px;
        border-bottom: 3px solid transparent;
        display: flex;
        transition:0.4s;
    }

    nav .menu-item.active,
    nav .menu-item:hover{
        background-color: #444;
        border-bottom-color: red;
    }

    nav .menu-item a{
        color: inherit;
        font-size: 1.5rem;
    }
</style>