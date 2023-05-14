<template class="body">
  <body>
    <div class="header color1">
      <div></div>
      <h2>Logo</h2>
      <div class="opciones">
        <div class="ranks">
          <i class="fa-regular fa-trophy-star"></i>
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="sidebar">

        <router-link to="/" class="juegoEspecifico">         
            <div class="imagenJuego">
              <img src="@/assets/imagenes/miniaturas/MemoriaVisual.png" alt="">
            </div>
            <div class="nombreJuegoEspecifico">
              Home
            </div>
        </router-link>

        <router-link to="/MemoriaVisual" class="juegoEspecifico">        
            <div class="imagenJuego">
              <img src="@/assets/imagenes/miniaturas/MemoriaVisual.png" alt="">
            </div>
            <div class="nombreJuegoEspecifico">
              Memoria Visual
            </div>        
        </router-link>


      </div>

      <div class="routerview">
        <router-view/>
      </div>
    </div>
  </body>
</template>

<style>
/* colores pricipales */
  .color1{
    background-color: #4B5D5F;
  }

  .color2{
    background-color: #ABB7CA;
  }

  .color3{
    background-color: white;
  }

  /* colores cuando la ruta esta seleccionada */
  .router-link-exact-active{
  background-color: #4B5D5F;
  color: white;
}
</style>

<style scoped>

  *{
    text-align: center;
  }

  body{
    margin: 0 auto;
    width: 90%;
  }

  .header{
    display: flex;
    justify-content:space-between;
    margin-bottom: 1.5rem;
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
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .juegoEspecifico > div{
    display: flex;
    align-items: center;
  }

  .imagenJuego{
    background-color: #ABB7CA ;
    border-radius: 10px;
  }

  .imagenJuego > img{
    margin: 0 auto;
    padding: 0.3rem;
  }

  .nombreJuegoEspecifico{
    padding: 0 1rem 0 1rem;
    flex-grow: 1;
  }
</style>