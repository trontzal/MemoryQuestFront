<template >
  <div class="body">
    <NavBarComp :oculto="oculto"/>

    <div class="flex">
      <div class="sidebar" v-show="oculto == false">
        <div class="ocultar">
          <p @click="oculto = true">Ocultar sidebar</p>
        </div>
        <router-link to="/" class="juegoEspecifico" >         
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

        <router-link to="/JuegoReflejos.vue" class="juegoEspecifico">         
            <div class="imagenJuego">
              <img src="@/assets/imagenes/miniaturas/MemoriaVisual.png" alt="">
            </div>
            <div class="nombreJuegoEspecifico">
              Reflejos
            </div>
        </router-link>


        <router-link to="/PlantillaEjemplo.vue" class="juegoEspecifico">         
              <div class="imagenJuego">
                <img src="@/assets/imagenes/miniaturas/MemoriaVisual.png" alt="">
              </div>
              <div class="nombreJuegoEspecifico">
                Plantilla
              </div>
        </router-link>

        <router-link to="/PlantillaEjemplo.vue" class="juegoEspecifico">         
            <div class="imagenJuego">
              <img src="@/assets/imagenes/miniaturas/MemoriaVisual.png" alt="">
            </div>
            <div class="nombreJuegoEspecifico">
              Plantilla
            </div>
        </router-link>

        <router-link to="/PlantillaEjemplo.vue" class="juegoEspecifico">         
              <div class="imagenJuego">
                <img src="@/assets/imagenes/miniaturas/MemoriaVisual.png" alt="">
              </div>
              <div class="nombreJuegoEspecifico">
                Plantilla
              </div>
        </router-link>
      </div>

      <div class="routerview">
        <router-view/>
      </div>
    </div>

    <FooterComp />
  </div>
</template>

<script>
  import NavBarComp from './components/NavBarComp.vue'
  import FooterComp from './components/FooterComp.vue'

  export default{
    name: 'NavBar',
    components:{
      NavBarComp,
      FooterComp
    },
    data() {
      return {
        oculto : false,
      }
    },
    methods: {
    }
  }
</script>

<style>
/* colores pricipales y elementos globales*/
  h2{
    font-size: 2.5rem;
    margin: 0;
    padding-top:3rem;
    padding-bottom: 1.5rem;
  }

  h3{
    font-size: 2rem;
  }

  p{
    font-size:1.5rem;
    margin-top:0;
  }

  .link{
    border-bottom: solid 1px #551A8B;
    color: #551A8B;
    cursor: pointer;
  }

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
    color: white;
    font-size: large;
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }

  .comp{
    height: auto;
    padding-bottom: 5rem;
    position: relative;
    padding-bottom: 10rem;
  }

  .vistaInicial{
    width: 70%;
    margin:0 auto;
    margin-bottom: 4rem;
  }

  .vistaInicial > img{
    margin: 0 0 1rem 0;
  }

  .descripcion{
    margin: 1.5rem 0 1.5rem 0;
  }
  /* colores cuando la ruta esta seleccionada */
  .router-link-exact-active{
  background-color: #4B5D5F;
  color: white;
  }

  .ocultar{
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .ocultar > p{
    margin:0;
    cursor: pointer;
    width: fit-content;
  }

  .ocultar > p:hover{
    color: blue;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>



<style scoped>

  *{
    text-align: center;
  }

  .body{
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
    width: 25%;
    font-size: x-large;
    height: min-content;
  }
  
  .routerview{
    width: 100%;
  
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

</style>