<template>
  <div id="userMenu">
    <h1>Hola, {{username}}</h1>
    <p>Bienvenido a tu cuenta de ORTY-Service</p>

<div v-if="tipo == 'vendedor'">
   <div style="margin: 20px">
          <b-button @click="login" class="btn btn-primary btn-block">Crear Servicio</b-button>
        </div>
     <div style="margin: 20px">
          <b-button @click="login" class="btn btn-primary btn-block">Listado de Servicios</b-button>
        </div>
     <div style="margin: 20px">
          <b-button @click="login" class="btn btn-primary btn-block">Eliminar Servicio</b-button>
        </div>
   

</div>
<div v-else>
  <div style="margin: 20px">
          <b-button @click="login" class="btn btn-primary btn-block">Mi Perfil</b-button>
        </div>
</div>

<div style="margin: 20px">
          <b-button @click="logout" class="btn btn-primary btn-block">Cerrar Sesión</b-button>
        </div>
  </div>
</template>

<script>
import AuthService from '../services/AuthService.js';
export default {
  data() {
    return {
      secretMessage: '',
      username: ''
    };
  },
  async created() {
    
    this.username = this.$store.getters.getUser.username;
    this.secretMessage = await AuthService.getSecretContent();
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }
};
</script>