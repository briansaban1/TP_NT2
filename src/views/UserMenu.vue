<template>
  <div id="userMenu">
    <h1>Hola, {{ usuario.user }}!</h1>
    <p>Bienvenido a tu cuenta de ORTY-Service</p>

    <ul>
      <li>Nombre: {{ usuario.nombre }}</li>
      <li>Apellido: {{ usuario.apellido }}</li>
      <li>Email: {{ usuario.email }}</li>
      <li>Usuario: {{ usuario.user }}</li>
    </ul>

    <div v-if="usuario.tipo = 'vendedor'">
      <div style="margin: 20px">
        <b-button @click="login" class="btn btn-primary btn-block"
          >Crear Servicio</b-button
        >
      </div>
      <div style="margin: 20px">
        <b-button @click="login" class="btn btn-primary btn-block"
          >Listado de Servicios</b-button
        >
      </div>
      <div style="margin: 20px">
        <b-button @click="login" class="btn btn-primary btn-block"
          >Eliminar Servicio</b-button
        >
      </div>
    </div>
    <div v-else></div>

    <div style="margin: 20px">
      <b-button @click="logout" class="btn btn-primary btn-block"
        >Cerrar Sesión</b-button
      >
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