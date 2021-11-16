<template>
  <div id="userMenu">
    <div class="row" style="width: 100%">
   <b-container style="width: 500px; margin-top:25px; ">
    <h1>Hola, {{ usuario.user }}!</h1>
    <p>Bienvenido a tu cuenta de ORTYFY-Service</p>
    
    <div v-if="usuario.tipo == 'Administrador'">

<div>
<p id="detalleuser">El servicio más contratado fue: {{ObtenerMayor }}</p>
</div>

<div>
<p id="detalleuser">Cantidad de servicios por barrio: {{ servicios }}</p>
</div>

<div>
<p id="detalleuser">Cantidad de usuarios registrados: {{ usuario.nombre }}</p>
</div>

    </div>
  <div v-else>
    <div style="justify-content: left;">
      <p id="detalleuser">Nombre: {{ usuario.nombre }}</p>
      <p id="detalleuser" >Apellido: {{ usuario.apellido }}</p>
      <p id="detalleuser" >Email: {{ usuario.email }}</p>
      <p id="detalleuser" >Usuario: {{ usuario.user }}</p>
      <p id="detalleuser" >Tipo: {{ usuario.tipo }}</p>
      </div>
    </div>
</b-container>
<b-container id="contenedorboton">
    <div v-if="usuario.tipo == 'Vendedor'">
      <div style="margin: 20px">
        <router-link to="/CrearServicio" class="btn btn-primary btn-block"
          >Crear Servicio</router-link>
      </div>
      <div style="margin: 20px">
        <router-link to="/MisServicios" class="btn btn-primary btn-block"
          >Mis Servicios</router-link>
      </div>
      <div style="margin: 20px">
        <router-link to="/EliminarServicio" class="btn btn-primary btn-block"
          >Eliminar Servicio</router-link>
      </div>
    </div>

    <div v-if="!usuario.tipo == 'Administrador'">
    <div style="margin: 20px">
      <router-link to="/ModificarDatos" class="btn btn-primary btn-block"
          >Modificar Datos</router-link>
          </div>
           </div>

    <div style="margin: 20px">

      <b-button @click="logout" class="btn btn-primary btn-block"
        >Cerrar Sesión</b-button
      >
    </div>

</b-container>
</div>

    
  </div>
</template>

<style scoped>
#detalleuser{
  display: flex; justify-content: left;margin-left: 20px
}
#contenedorboton{
width: 300px; margin-top:15px; margin-left: 20px
}
</style>

<script>
import axios from "axios";

export default {
  name: "UserMenu",
  data() {
    return {
      usuario: [],
      servicios: [],
    };
  },
  mounted() {
    //Se obtiene el usuario del local storage
    this.usuario = JSON.parse(window.localStorage.getItem("userData"));
    console.log(this.usuario);
  },
  methods: {
    logout() {
      window.localStorage.removeItem("userData");
      this.$router.push("/login");
    },
    async getServicios() {
      try {
        const url = "https://618072ba8bfae60017adfaec.mockapi.io/servicio";
        const response = await axios.get(url);
        this.servicios = response.data;
        console.log(this.servicios);
      } catch (error) {
        console.log(error);
      }
    },

    
  },
computed: {
ObtenerMayor(){
  return Math.max(this.servicios.mascontratado, this.servicios)
    }
},
  created() {
    this.getServicios();
  },
};
</script>