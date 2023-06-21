<template>
    <div class="color2 comp">
        <div v-if="overlay == true" class="overlay">
            <div class="formularioRegistro">
        <img src="" alt="Imagen del formulario">
        <form v-if="registrar == true">
            <div>
                <input type="text" id="username" name="username" placeholder="Usuario" required>
            </div>
            <div>
                <input type="password" id="password" name="password" placeholder="Contraseña" required>
            </div>
            <div>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirmar contraseña" required>
            </div>
            <button type="submit" class="btn">Registrarse</button>
        </form>

        <form v-if="iniciar == true">
                <div>
                    <input type="text" id="username" name="username" placeholder="Usuario" required>
                </div>
                <div>
                    <input type="password" id="password" name="password" placeholder="Contraseña" required>
                </div>

                <button type="submit" class="btn">Registrarse</button>
            </form>
    </div>

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
                <p class="centrado">Se recomienda <a @click="registrarse" class="link">registrarse</a> o <a @click="iniciarSesion" class="link">iniciar sesión</a> para reflejar tus puntuaciones en los rankings y ayudarme a hacer crecer la base de datos.¡Muchas gracias por tu colaboracion!</p>
            </div> 
        </div>
    </div>
</template>

<script>
import { registerables } from 'chart.js'
    export default {
        name : 'HomeDescripcion',
        data() {
            return {
                overlay : false,
                registrar : false,
                iniciar : false
            }
        },
        methods() {
            registrarse(){
                this.overlay = true
            }
        }
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
<style scoped>
.formularioRegistro {
    background-color: white;
    margin: 0 auto;
    width: 20rem;
    height: auto;
    margin-top: 10rem;
    padding: 2rem;

}

.formularioRegistro > form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
}

.formularioRegistro input[type="text"],
.formularioRegistro input[type="password"] {
    width: 80%;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
    outline: none;
}
</style>
