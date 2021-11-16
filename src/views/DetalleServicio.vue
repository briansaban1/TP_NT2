<template>
      <div style="display: flex; justify-content: center;">
 <div style="width:80%; margin:15px;" class="row">
          <div id="contenedor">
         <img id="imagen" v-bind:src="`${serviciosPorId['0'].img}`" />
        </div>
         <div style="width: 45%;">
             <div id="titulo">
         <h2> {{ serviciosPorId['0'].titulo }}</h2>
          </div>
          <div id="opciones" >
         <h5 id="detalles">Detalle: {{ serviciosPorId['0'].descripcion }}</h5>
         <h5 id="detalles">Barrio: {{ serviciosPorId['0'].barrio }}</h5>
         <h5 id="detalles">Rubro: {{ serviciosPorId['0'].rubro }}</h5>
          </div>

          <div id="opciones">
         <h6 id="detalles">Descripción: {{ serviciosPorId['0'].detalle }}</h6>
         </div>

          <div style="margin-top:20px">
        <b-button @click="goToWsp(serviciosPorId['0'].telefono) & agregarContratacion(serviciosPorId['0'].id, serviciosPorId['0'].mascontratado)" variant="outline-primary">Contactar Anuncio</b-button>
          </div>

           </div>
       </div>  
        
           

        </div>
</template>

<style >
#titulo {
  margin-top:20px;
   display: flex;
   justify-content: center;
}
#opciones{
margin-top:20px;
 width: 50%;
  margin-left: 90px
}
#detalles{
    display: flex; justify-content: left;
}
#contenedor{
    width: 55%; margin-top:15px; display: flex; justify-content: right;
}
#imagen{
    max-width:85%; max-height:90%;
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
      num:0
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
    async agregarContratacion(ids, mascontratado) {
      try {

const i = Number(mascontratado) + 1
console.log(i)
        const datosUpdate = {
          mascontratado: i

        };

        const url = `https://618072ba8bfae60017adfaec.mockapi.io/servicio/${ids}`;
        const response = await axios.put(url, datosUpdate);
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
