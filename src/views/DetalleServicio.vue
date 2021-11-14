<template>
      <div style="display: flex; justify-content: center;">
 <div style="width:80%; margin:15px;" class="row">
          <div style="width: 55%; margin-top:15px; display: flex; justify-content: right;">
         <img style="max-width:85%; max-height:90%;" v-bind:src="`${serviciosPorId['0'].img}`" />
        </div>
         <div style="width: 45%;">
             <div style="margin-top:20px; display: flex; justify-content: center;">
         <h2> {{ serviciosPorId['0'].titulo }}</h2>
          </div>
          <div style="margin-top:20px; width: 50%; margin-left: 90px">
         <h5 style="display: flex; justify-content: left;">Detalle: {{ serviciosPorId['0'].descripcion }}</h5>
         <h5 style="display: flex; justify-content: left;">Barrio: {{ serviciosPorId['0'].barrio }}</h5>
         <h5 style="display: flex; justify-content: left;">Rubro: {{ serviciosPorId['0'].rubro }}</h5>
          </div>

          <div style="margin-top:20px; width: 50%; margin-left: 90px">
         <h6 style="display: flex; justify-content: left;">Descripción: {{ serviciosPorId['0'].detalle }}</h6>
         </div>

          <div style="margin-top:20px">
        <b-button @click="goToWsp(serviciosPorId['0'].telefono)" variant="outline-primary">Contactar Anuncio</b-button>
          </div>

           </div>
       </div>  
        
           

        </div>
</template>

<style >
#titulo {
  margin-top: 25px;
}
</style>

<script>
import axios from "axios";

export default {
  name: "DetalleServicios",
  props: {

  },
  

data() {
    return {

      serviciosPorId: [],
    };
  },
  
  methods: {
      

    async getServiciosPorId(ids) {
      try {
        const url = `https://618072ba8bfae60017adfaec.mockapi.io/servicio?id=${ids}`
        const response = await axios.get(url);
        this.serviciosPorId = response.data;
        console.log(this.serviciosPorId);
      } catch (error) {
        console.log(error);
      }
    },

    goToWsp(telefono){
       
        window.location = `https://whatsapp.com/${telefono}`;

    }

  },
    created() {
    const ids = this.$route.params.id
    this.getServiciosPorId(ids);
  },
};
</script>
