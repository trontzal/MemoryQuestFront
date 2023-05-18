<template>
    <MemoriaVisualComp/>
    <EjemploRecivirComp/>
</template>

<script>
    import MemoriaVisualComp from "../components/MemoriaVisualComp.vue"
    import EjemploRecivirComp from "@/components/EjemploRecivirComp.vue";

    export default{
        name: 'MemoriaVisual',
        components:{
            MemoriaVisualComp,
            EjemploRecivirComp
        },
    }
</script>
