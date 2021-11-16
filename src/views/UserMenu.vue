<template>
  <div id="userMenu">
    <div class="row" style="width: 100%; ">
      <b-container style="width: 1000px; margin-top: 25px">
        <h1>Hola, {{ usuario.user }}!</h1>
        <p>Bienvenido a tu cuenta de ORTYFY-Service</p>

        <div v-if="usuario.tipo == 'Administrador'">
          <div>
            <div class="alert alert-success" role="alert">
              El servicio más contratado fue:  <strong>{{ ObtenerMayor.titulo }}</strong>, perteneciente al rubro:
               <strong>{{ ObtenerMayor.rubro }}</strong>, ubicado en el barrio:  <strong>{{ ObtenerMayor.barrio }} </strong>
              <div> Tuvo un total de
               <strong>{{ ObtenerMayor.mascontratado }}</strong> contrataciones
            </div>
            </div>
          </div>

          <div class="alert alert-info" role="alert">
            <div class="servicios" >
              <div style="margin-top:5px; margin-bottom:10px">
               <h4> Total de servicios por Barrio y/o Rubro</h4>
                </div>
              <ImgServicio
                v-on:update:rubro="rubro = $event"
                v-on:update:barrio="barrio = $event"
              />
              <div style="margin-top:15px; margin-bottom:5px">
              <strong
                >El barrio de: "<strong>{{ barrio }}</strong>", perteneciente al rubro: "<strong>{{ rubro }}</strong>", tiene
                <strong>{{ filteredServices.length }}</strong> Servicios en total.</strong
              >
              </div>
            </div>
          </div>

          <div>
            <div class="alert alert-danger" role="alert">
              Cantidad de usuarios registrados: <strong>{{ totalUsuarios }}</strong>
            </div>
          </div>
        </div>
        <div v-else>
          <div style="justify-content: left;">
            <p id="detalleuser">Nombre: {{ usuario.nombre }}</p>
            <p id="detalleuser">Apellido: {{ usuario.apellido }}</p>
            <p id="detalleuser">Email: {{ usuario.email }}</p>
            <p id="detalleuser">Usuario: {{ usuario.user }}</p>
            <p id="detalleuser">Tipo: {{ usuario.tipo }}</p>
          </div>
        </div>
      </b-container>
      <b-container id="contenedorboton">
        <div v-if="usuario.tipo == 'Vendedor' || usuario.tipo == 'Administrador'">
          <div style="margin: 20px">
            <router-link to="/CrearServicio" class="btn btn-primary btn-block"
              >Crear Servicio</router-link
            >
          </div>
          <div style="margin: 20px">
            <router-link to="/MisServicios" class="btn btn-primary btn-block"
              >Mis Servicios</router-link
            >
          </div>
          <div style="margin: 20px">
            <router-link
              to="/EliminarServicio"
              class="btn btn-primary btn-block"
              >Eliminar Servicio</router-link
            >
          </div>
        </div>

        <div v-if="usuario.tipo == 'Vendedor' || usuario.tipo == 'Comprador'">
          <div style="margin: 20px">
            <router-link to="/ModificarDatos" class="btn btn-primary btn-block"
              >Modificar Datos</router-link
            >
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
#detalleuser {
  display: flex;
  justify-content: left;
  margin-left: 20px;
}
#contenedorboton {
  width: 300px;
  margin-top: 15px;
  margin-left: 20px;
}

</style>

<script>
import axios from "axios";
import ImgServicio from "../components/ImgServicio.vue";

export default {
  name: "UserMenu",
  components: {
    ImgServicio,
  },
  data() {
    return {
      usuario: [],
      servicios: [],
      rubro: "Todos",
      barrio: "Todos",
      usuarios: 0
    };
  },
  mounted() {
    //Se obtiene el usuario del local storage
    this.usuario = JSON.parse(window.localStorage.getItem("userData"));

    if(this.usuario.tipo == 'Administrador'){
      this.obtenerUsuarios();
    }
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
        this.servicios = await response.data;
        console.log(this.servicios);
      } catch (error) {
        console.log(error);
      }
    },
    async obtenerUsuarios(){

      try {
        const url = "https://618072ba8bfae60017adfaec.mockapi.io/usuario";
        const response = await axios.get(url);
        this.usuarios = await response.data.length;
        console.log(this.usuarios);
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    ObtenerMayor() {
      let max = 0;
      if (this.servicios.length > 0) {
        max = this.servicios.reduce((prev, current) =>
          prev.mascontratado > current.mascontratado ? prev : current
        );
      }
      return max;
    },
    filteredServices() {
      let servicios = this.servicios;

      let filterRubro = new RegExp(
        this.rubro == "Todos" ? "" : this.rubro,
        "i"
      );
      let filterBarrio = new RegExp(
        this.barrio == "Todos" ? "" : this.barrio,
        "i"
      );

      return servicios.filter(
        (el) => el.rubro.match(filterRubro) && el.barrio.match(filterBarrio)
      );
    },
    totalUsuarios() {
      return this.usuarios;
    }
  },
  created() {
    this.getServicios();
  },
};
</script>