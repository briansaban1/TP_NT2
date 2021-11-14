<template>
  <div>
    <Slider />

    <div style="margin-top:25px">
      <h2>Servicios destacados</h2>
    </div>
    <b-container>
      <b-row>
        <b-col
          v-for="servicio in servicios.slice(0,8)"
          :key="servicio.id"
          cols="4"
          sm="5"
          md="5"
          lg="3"
          class="align-center"
          v-on:click="verServicio(servicio.id)"
          
        >
          <CuadrosServicio :servicio="servicio" />
        </b-col>
      </b-row>
      </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '../components/Slider.vue'
import CuadrosServicio from "../components/CuadrosServicio.vue";
import axios from "axios";

export default {
  name: 'Home',
  components: {
    Slider,
    CuadrosServicio
  },
  data() {
    return {
      barrio: "",
      rubro: "",
      servicios: [],
      servicioSeleccionado: null,
    };
  },
  methods: {
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

    verServicio(id) {
    this.$router.push({name: 'DetalleServicio', params: {id: id}});
     console.log(id)
  }
  },
  computed: {

},
  created() {
    this.getServicios();
  },
};
</script>