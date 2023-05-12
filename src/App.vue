<template class="body">
  <div class="header">
    <div></div>
    <h2>Logo</h2>
    <div class="opciones">

    </div>
  </div>

  <div class="flex">
    <div class="sidebar">

      <router-link to="/">
        <div class="juegoEspecifico">
          <div class="imagenJuego">
            <img src="@/assets/imagenes/miniaturas/Group38.png" alt="">
          </div>
          <div class="nombreJuegoEspecifico">
            Home
          </div>
        </div>
      </router-link>

      <router-link to="/MemoriaVisual">
        <div class="juegoEspecifico">
          <div class="imagenJuego">
            <img src="@/assets/imagenes/miniaturas/Group38.png" alt="">
          </div>
          <div class="nombreJuegoEspecifico">
            Memoria Visual
          </div>
        </div>
      </router-link>

      <router-link to="/MemoriaVisual">
        <div class="juegoEspecifico">
          <div class="imagenJuego">
            <img src="@/assets/imagenes/miniaturas/Group38.png" alt="">
          </div>
          <div class="nombreJuegoEspecifico">
            Memoria Visual
          </div>
        </div>
      </router-link>


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
    width: 20%;
  }
  
  .routerview{
    width: 75%;
  }
 /*  Items del sidebar*/
  .juegoEspecifico{
    display: flex;
  }

  .juegoEspecifico > div{
    display: flex;
    align-items: center;
  }

  .nombreJuegoEspecifico{
    padding: 0 1rem 0 1rem;
  }
</style>