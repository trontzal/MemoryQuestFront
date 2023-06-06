<template>
    <MemoriaVisualComp/>
    <RankingTopComp/>
    <EjemploRecivirComp/>
</template>

<script>
    import MemoriaVisualComp from "../components/MemoriaVisualComp.vue"
    import EjemploRecivirComp from "@/components/EjemploRecivirComp.vue";
    import RankingTopComp from "../components/RankingTopComp.vue";
    export default{
        name: 'MemoriaVisual',
        components:{
            MemoriaVisualComp,
            EjemploRecivirComp,
            RankingTopComp
        },
    }
</script>
