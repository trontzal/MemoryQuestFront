<template>
    <MemoriaVisualComp/>
    <RankingTopComp/>
    <GraficaComp :tipoDeJuego="'vis'"/>
</template>

<script>
    import MemoriaVisualComp from "../components/MemoriaVisualComp.vue"
    import GraficaComp from "@/components/GraficaComp.vue";
    import RankingTopComp from "../components/RankingTopComp.vue";
    export default{
        name: 'MemoriaVisual',
        components:{
            MemoriaVisualComp,
            RankingTopComp,
            GraficaComp
        },
    }
</script>
