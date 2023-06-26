<template>
    <div class="header color1">
      <div>
        <select v-model="selectedOption" @change="navigateToGame">
          <option v-for="route in routes" :key="route.path" :value="route.path">{{ route.name }}</option>
        </select>
      </div>

      <div class="divLogo">
        <router-link to="/" class="juegoEspecifico" >
          <img src="../assets/imagenes/logo/logopequeno.png" alt="" class="logoPequeno">
        </router-link>
      </div>

      <ul class="dropdowns">
        <li class="rank">
          <img src="../assets/imagenes/dropdowns/rank.png" alt="">
        </li>
        <li class="perfil">
          <img src="../assets/imagenes/dropdowns/perfil.png" alt="">
        </li>
        <li class="ajustes">
          <img src="../assets/imagenes/dropdowns/ajustes.png" alt="">
        </li>
      </ul>
    </div>
</template>

<script>
  export default{
    name: 'NavBar',
    data() {
      return {
        selectedOption: '',
        routes: [
          { path: '/', name: 'Home' },
          { path: '/MemoriaVisual', name: 'MemoriaVisual' },
          { path: '/PlantillaEjemplo.vue', name: 'PlantillaView' },
        ]
      };
    },
    created() {
    this.selectedOption = this.$route.path;
    },
    watch: {
      '$route.path': function (newPath) {
        this.selectedOption = newPath;
      }
    },
    methods: {
      navigateToGame() {
        this.$router.push(this.selectedOption);
      }
    }
  };
</script>

<style>

  
  li{
    list-style: none;
  }
  
  .header{
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    margin-bottom: 1.5rem;
    color: white;
  }

  .dropdowns{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: end;
    margin-right: 3rem;
  }

  .dropdowns > div > img{
    width: 70%;
  }

  .divLogo{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logoPequeno{
    width: 15rem;
    height: 4rem;

  }
</style>