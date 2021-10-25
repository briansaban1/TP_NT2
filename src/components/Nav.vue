<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand>ORTY-Service</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav style="width:75%">
            <router-link class="nav-link" to="/" exact>Inicio</router-link>
            <router-link class="nav-link" to="servicios">Servicios</router-link>
            <router-link class="nav-link" to="contacto">Contacto</router-link>
            <router-link class="nav-link" to="nosotros">Nosotros</router-link>
           
          </b-navbar-nav>

          <!-- Right aligned nav items -->
        <div id="login" >
          <b-navbar-nav class="ml-auto" v-if="!user" >
            <b-nav-item>
               <router-link class="nav-link" to="login"> Iniciar Sesión </router-link>
            </b-nav-item>

            <b-nav-item>
               <router-link class="nav-link" to="registro"> Registrate </router-link>
            </b-nav-item>
          </b-navbar-nav>

<b-navbar-nav class="ml-auto" v-if="user" >
            <b-nav-item>
               <router-link class="nav-link" to="login"> Mi Perfil </router-link>
            </b-nav-item>

            <b-nav-item>
               <router-link class="nav-link" href="javascript:void(0)" @click="handleClick"> Cerrar Sesión </router-link>
            </b-nav-item>
          </b-navbar-nav>

       </div>
        </b-collapse>
      </b-container>
    </b-navbar>
   
    <router-view />
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'nav',
  methods:{
      handleClick(){
          localStorage.removeItem('token');
          this.$store.dispatch('user', null)
          this.$router.push('/')
      }
  },
  computed:{
      ...mapGetters(['user'])
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
#login{
  justify-content: flex-end;
  
}
</style>