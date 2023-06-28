<template>
    <div class="footer color1">
        <div class="contacto">
            <h4>Contacto</h4>
            <a href="mailto:gonzalo.lekunberri@gmail.com" class="link">gonzalo.lekunberri@gmail.com</a>
        </div>
        <div class="redes">
            <h4>Redes</h4>
            <div class="redesFlex">
                <a href="" target="_blank" class="instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                <a href="https://github.com/trontzal" target="_blank" class="github"><font-awesome-icon :icon="['fab', 'github']" /></a>
                <a href="https://www.linkedin.com/in/gonzalo-lecumberri-496686259/" target="_blank" class="linkedin"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            </div>
        </div>
        <div class="Informacion">
            <h4>Informacion</h4>
            <p>Proyecto personal y final de PeñascalF5. Para mas informacion haz <a href="#" class="link">click aqui</a></p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "FooterComp"
    }
</script>

<style>
    .footer{
        height: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1.5rem;
        padding-bottom: 1.5rem;
    }

    .footer > div{
        width: 20rem;
    }

    .redesFlex{
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .redesFlex > a{
        font-size: 2rem;
    }

    .redesFlex > a:hover{
        color: white;
    }

    .instagram{
        color:#F67944;
    }

    .github{
        color: #1F2328;
    }

    .linkedin{
        color:#0A66C2;
    }
</style>

<style scoped>
    p{
        font-size: 1rem;
    }
</style>