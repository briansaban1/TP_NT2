<template>
  <div>

    <div style="margin-top:25px">
      <h2>Mis Servicios</h2>
    </div>
    <b-container>
      <b-row>
        <b-col
          v-for="servicio in servicios"
          :key="servicio.id"
          cols="4"
          sm="5"
          md="5"
          lg="3"
          class="align-center"
          
        >
          <CuadrosServicio :servicio="servicio" />
        </b-col>
      </b-row>
      </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CuadrosServicio from "../components/CuadrosServicio.vue";
import axios from "axios";

export default {
  name: 'Home',
  components: {
    CuadrosServicio
  },
  data() {
    return {
      barrio: "",
      rubro: "",
      servicios: [],
      servicioSeleccionado: null,
      usuario: [],
    };
  },
  methods: {
    async getServicios(user) {
      try {
        const url = `https://618072ba8bfae60017adfaec.mockapi.io/servicio?usuario=${user}`
        const response = await axios.get(url);
        this.servicios = response.data;
        console.log(this.servicios);
      } catch (error) {
        console.log(error);
      }
    },

    verServicio(id) {
    this.$router.push({name: 'DetalleServicio', params: {id: id}});
     console.log(id)
  }
  },
  computed: {

},
  created() {

   
  },
mounted() {
    //Se obtiene el usuario del local storage
    this.usuario = JSON.parse(window.localStorage.getItem("userData"));
    console.log(this.usuario);
        this.getServicios(this.usuario.user);
 console.log(this.usuario.user)

  },
};
</script>