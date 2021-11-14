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
<div class="mb-1">
     <b-button @click="mostrarModal(servicio.id)">Eliminar</b-button>
    </div>
        </b-col>

      </b-row>

  <b-modal id="modal-center" centered title="BootstrapVue">
    
  </b-modal>


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
      msg: "",
      box: "",
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

async eliminarServicio(id) {
   try {
       console.log(id)
        const url = `https://618072ba8bfae60017adfaec.mockapi.io/servicio/${id}`
        const response = await axios.delete(url);
        this.serviciosDelete = response.data;
        console.log(this.serviciosDelete);
        const msg = `El servicio ${id} fue eliminado`
        console.log(msg)

        //se vuelve a llamar a la funcion para obtener nuevamente los servicios
        this.getServicios(this.usuario.user);
        //
      } catch (error) {
        console.log(error);
      }
  },


    mostrarModal(id) {
        console.log(id)
        this.box = ''
        this.$bvModal.msgBoxConfirm('Por favor confirmá que deseas eliminar el item seleccionado.', {
          title: '¿Estás seguro?',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Continuar',
          cancelTitle: 'Cancelar',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            this.box = value
            console.log(id)
            this.eliminarServicio(id)
          })
          .catch(err => {
            console.log(err)
          })
      }

  },
  computed: {

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