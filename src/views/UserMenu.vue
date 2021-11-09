<template>
  <div id="userMenu">
    <div class="row" style="width: 100%">
   <b-container style="width: 500px; margin-top:25px;">
    <h1>Hola, {{ usuario.user }}!</h1>
    <p>Bienvenido a tu cuenta de ORTY-Service</p>

    <div style="">
      <p>Nombre: {{ usuario.nombre }}</p>
      <p>Apellido: {{ usuario.apellido }}</p>
      <p>Email: {{ usuario.email }}</p>
      <p>Usuario: {{ usuario.user }}</p>
      </div>
</b-container>
<b-container style="width: 300px; margin-top:15px; margin-left: 20px">
    <div v-if="usuario.tipo = 'vendedor'">
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
    <div v-else></div>

    <div style="margin: 20px">
      <b-button @click="logout" class="btn btn-primary btn-block"
        >Cerrar Sesión</b-button
      >
    </div>

</b-container>
</div>

    
  </div>
</template>

<script>
export default {
  name: "UserMenu",
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