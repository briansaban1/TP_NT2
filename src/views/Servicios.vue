<template>
  <div class="servicios">
    <ImgServicio v-on:update:rubro="rubro = $event" v-on:update:barrio="barrio = $event"/>
    <div id="titulo">
      <h3>Listado de Servicios</h3>

    <b-container>
      <b-row>
        <b-col
          v-for="servicio in filteredServices"
          :key="servicio.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="align-center"
          v-on:click="verServicio(servicio.id)"
        >
          <CuadrosServicio :servicio="servicio" />
        </b-col>
      </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImgServicio from "../components/ImgServicio.vue";
import CuadrosServicio from "../components/CuadrosServicio.vue";
import axios from "axios";

export default {
  name: "Servicios",
  components: {
    ImgServicio,
    CuadrosServicio,
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
  filteredServices() {

    let filterRubro = new RegExp(this.rubro == "Todos" ? "" : this.rubro, 'i');
    let filterBarrio = new RegExp(this.barrio == "Todos" ? "" : this.barrio, 'i');

    return this.servicios.filter(el => el.rubro.match(filterRubro) && el.barrio.match(filterBarrio));
  }
},
  created() {
    this.getServicios();
  },
};
</script>