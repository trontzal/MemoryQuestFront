<template class="body">
  <body>
    <div class="header color1">
      <div></div>
      <h2>Logo</h2>
      <div class="dropdowns">
        <div class="rank">
          <img src="./assets/imagenes/dropdowns/rank.png" alt="">
        </div>
        <div class="perfil">
          <img src="./assets/imagenes/dropdowns/perfil.png" alt="">
        </div>
        <div class="ajustes">
          <img src="./assets/imagenes/dropdowns/ajustes.png" alt="">
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

        <router-link to="/JuegoCartas.vue" class="juegoEspecifico">        
            <div class="imagenJuego">
              <img src="@/assets/imagenes/miniaturas/MemoriaVisual.png" alt="">
            </div>
            <div class="nombreJuegoEspecifico">
              Cartas
            </div>        
        </router-link>

      </div>

      <div class="routerview">
        <router-view/>
      </div>
    </div>
    <!-- <div class="footer">
      <div class="redes">
        iconos de redes
      </div>
      <div class="contacto">
        email
      </div>
      <div class="derechos">
        derechos
      </div>
    </div> -->
  </body>
</template>

<style>
/* colores pricipales y elementos globales*/
  .color1{
    background-color: #4B5D5F ;
  }

  .color2{
    background-color: #ABB7CA ;
  }

  .color3{
    background-color: white ;
  }

  .btn{
    background-color: #4B5D5F;
    height: 2rem;
    width: 8rem;
  }

  .comp{
    height: 40rem;
    padding: 1.5rem;
  }

  .vistaInicial{
    width: 70%;
    margin:0 auto;
  }

  .vistaInicial > img{
    margin: 2rem 0 1rem 0;
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
    width: 80%;
  }
  
  .flex{
    display: flex;
    gap: 2rem;
  }


  .sidebar{
    display: flex;
    flex-direction: column;
    width: 20%;
    font-size: x-large;
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
    text-decoration: none;
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

  /* footer */
  .footer{
    bottom: 0;
    display: flex;
    justify-content: space-around;
  }
</style>