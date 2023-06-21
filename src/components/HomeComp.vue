<template>
    <div class="color2 comp">
        <div class="overlay">
            Formulario
        </div>
        <div class="cuerpoHome">
            <h2>Memory Quest</h2>
            <div class="flex izq">
                <img src="../assets/imagenes/home/cerebro.png" alt="">
                <p>Bienvenidos a Memory Quest, una página de juegos cognitivos y de memoria. Como mi proyecto personal, he creado esta plataforma con el objetivo de crear desafios mentales divertidos y estimulantes.</p>
            </div>
            <h3>Nuestra Base de Datos</h3>
            <div class="flex izq">
                <p>Memory Quest guarda las puntuaciones de todos los juegos que juegues. Esto nos permite crear graficos y rankings que reflejan tus logros y los de otros jugadores. Cuantas mas personas se unan, mas rica será nuestra base de datos y mas interesanres seran los rankings.</p>
                <img src="../assets/imagenes/home/grafico.png" alt="">
            </div>
            <h3>Registrarse</h3>
            <div>
                <p class="centrado">Se recomienda <a href="#">registrarse</a> o <a href="#">iniciar sesión</a> para reflejar tus puntuaciones en los rankings y ayudarme a hacer crecer la base de datos.¡Muchas gracias por tu colaboracion!</p>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        name : 'HomeDescripcion'
    }
</script>

<style>
    .overlay {
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.586);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    }

    .cuerpoHome{
        width:80%;
        margin:0 auto;
    }



    .izq{
        text-align: left;

    }

    .flex{
        display: flex;
        gap: 8rem;
    }


</style>