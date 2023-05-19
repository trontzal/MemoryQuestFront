<template>
    <MemoriaVisualComp/>
    <EjemploRecivirComp/>
    <EjemploEnviarComp/>
</template>

<script>
    import MemoriaVisualComp from "../components/MemoriaVisualComp.vue"
    import EjemploRecivirComp from "@/components/EjemploRecivirComp.vue";
    import EjemploEnviarComp from "../components/EjemploEnviaComp.vue"
    export default{
        name: 'MemoriaVisual',
        components:{
            MemoriaVisualComp,
            EjemploRecivirComp,
            EjemploEnviarComp
        },
    }
</script>
