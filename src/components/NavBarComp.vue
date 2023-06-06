<template>
    <div class="header color1">
      <div></div>
      <h2>Logo</h2>
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
    name: 'NavBar'
  }
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
    width: 80%;
  }
</style>