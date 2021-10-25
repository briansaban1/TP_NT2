<template>
  <div id="app">
    <Nav :user="user" />

    
   
     <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import axios from './axios'

export default {
  name: 'App',
  components:{
    Nav,
    Footer
  },
  
  async created(){
    const response = await axios.get('user');
    this.$store.dispatch('user', response.data)
  }
  
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>