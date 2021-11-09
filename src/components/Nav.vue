<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand>ORTYFY-Service</b-navbar-brand>

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
          <b-navbar-nav class="ml-auto" v-if="!usuario" >
            <b-nav-item>
               <router-link class="nav-link" to="login"> Iniciar Sesión </router-link>
            </b-nav-item>

            <b-nav-item>
               <router-link class="nav-link" to="registro"> Registrate </router-link>
            </b-nav-item>
          </b-navbar-nav>

<b-navbar-nav style="margin-bottom:-20px" class="ml-auto" v-else >
            <b-nav-item>


               <router-link class="nav-link" to="UserMenu"> Mi Perfil</router-link>
               </b-nav-item>
                <b-nav-item>
              <p class="nav-link" @click="logout()">Cerrar Sesión</p>

            
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
export default {
  name: "NAV",
  data() {
    return {
      usuario: [],
    };
  },
  mounted() {
    this.usuario = JSON.parse(window.localStorage.getItem("userData"));
    console.log(this.usuario);
  },
  methods: {
    logout() {
      window.localStorage.removeItem("userData");
      this.$router.push("/login");
    },
  },
};
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