<template class="body">
  <div class="header">
    <div></div>
    <h2>Logo</h2>
    <div class="opciones">

    </div>
  </div>

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

  .header{
    display: flex;
    justify-content:space-between;
    margin-bottom: 0.5rem;
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