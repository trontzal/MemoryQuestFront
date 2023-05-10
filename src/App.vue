<template class="body">
  <div class="flex">
    <div class="sidebar">
      <router-link to="/">Home</router-link>
      <router-link to="/MemoriaVisual">Memoria Visual</router-link>
    </div>
    <div class="routerview">
      <router-view/>
    </div>
  </div>
  
</template>

<style scoped>
  *{
    border: 1px solid black;
  }
  .flex{
    display: flex;
    gap: 2rem;
  }

  .sidebar{
    display: flex;
    flex-direction: column;
    width: 15%;
  }
  
  .routerview{
    width: 80%;
  }


</style>