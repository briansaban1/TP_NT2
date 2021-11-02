<template>
  <div class="servicios">
    <ImgServicio />
    <CuadrosServicio :servicios="servicios"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ImgServicio from '../components/ImgServicio.vue'
import CuadrosServicio from '../components/CuadrosServicio.vue'
import axios from 'axios'

export default {
  name: 'Servicios',
  components: {
    ImgServicio,
    CuadrosServicio
  },
  data(){
    return{
      servicios:[],
      servicioSeleccionado:null
    }
  },
  methods:{
    async getServicios(){
      const url = "https://618072ba8bfae60017adfaec.mockapi.io/servicio"
      const response = await axios.get(url)
      this.servicios = response.data
      console.log(this.servicios)
    },
  }
  ,created(){this.getServicios()}
};

</script>