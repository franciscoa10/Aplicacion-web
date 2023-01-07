<template>
  <nav  class="nav">
    <router-link to="/" class="link">Crud</router-link> 
  </nav>
  <router-view/>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav{
  background-color: red;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link{
  text-decoration: none;
  color: white;
  font-size: 25px;
  
}

</style>
