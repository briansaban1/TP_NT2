<template>
  <div id="userMenu">
    <div class="row" style="width: 100%">

      <b-container style="width: 450px; margin-top: 25px">
        <h1>Creá tu Servicio</h1>

        <form>
          <div class="form-group">
            <label for="titulo">Titulo del Servicio</label>
            <input
              type="test"
              class="form-control"
              id="titulo"
              v-model="titulo"
              placeholder="Ingresá un titulo"
            />
          </div>
          <div class="form-group">
            <label for="name">Descripción</label>
            <input
              type="text"
              class="form-control"
              id="descripcion"
              v-model="descripcion"
              placeholder="Ingresá una descripción"
            />
          </div>
          <div class="form-group">
            <label for="message">Detalle</label>
            <textarea
              class="form-control"
              id="detalle"
              v-model="detalle"
              placeholder="Ingresá el detalle"
            />
          </div>
          <div class="form-group">
            <label for="message">Imagen Url</label>
            <input
              type="text"
              class="form-control"
              id="image"
              v-model="image"
              placeholder="Ingresá la imagen en formato url"
            />
          </div>
          <div class="form-group">
            <label for="category">Rubro</label>
            <select class="form-control" v-model="rubro" id="rubro">
              <option disabled value="">Seleccioná un Rubro</option>
              <option>Carpinteria</option>
              <option>Plomeria</option>
              <option>Electricista</option>
            </select>
          </div>
          <div class="form-group">
            <label for="category">Barrio</label>
            <select class="form-control" id="barrio" v-model="barrio">
              <option disabled value="">Seleccioná un Barrio</option>
              <option>Agronomía</option>
              <option>Almagro</option>
              <option>Balvanera</option>
              <option>Barracas</option>
              <option>Belgrano</option>
              <option>Boedo</option>
              <option>Caballito</option>
              <option>Chacarita</option>
              <option>Coghlan</option>
              <option>Colegiales</option>
              <option>Constitución</option>
              <option>Flores</option>
              <option>Floresta</option>
              <option>La Boca</option>
              <option>La Paternal</option>
              <option>Liniers</option>
              <option>Mataderos</option>
              <option>Monte Castro</option>
              <option>Monserrat</option>
              <option>Nueva Pompeya</option>
              <option>Núñez</option>
              <option>Palermo</option>
              <option>Parque Avellaneda</option>
              <option>Parque Chacabuco</option>
              <option>Parque Chas</option>
              <option>Parque Patricios</option>
              <option>Puerto Madero</option>
              <option>Recoleta</option>
              <option>Retiro</option>
              <option>Saavedra</option>
              <option>San Cristóbal</option>
              <option>San Nicolás</option>
              <option>San Telmo</option>
              <option>Vélez Sársfield</option>
              <option>Versalles</option>
              <option>Villa Crespo</option>
              <option>Villa del Parque</option>
              <option>Villa Devoto</option>
              <option>Villa General Mitre</option>
              <option>Villa Lugano</option>
              <option>Villa Luro</option>
              <option>Villa Ortúzar</option>
              <option>Villa Pueyrredón</option>
              <option>Villa Real</option>
              <option>Villa Riachuelo</option>
              <option>Villa Santa Rita</option>
              <option>Villa Soldati</option>
              <option>Villa Urquiza</option>
            </select>
          </div>

          <div class="row" align="center">
            <b-button
              style="margin: 20px"
              type="button"
              @click="crearServicio()"
              class="btn btn-primary"
              >Aceptar</b-button
            >
            
          </div>
        </form>
        <p v-if="msg" class="submit">
            Se ha creado el servicio exitosamente.
          </p>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CrearServicio",
  components: {},
  data: function () {
    return {
      usuario: [],
      titulo: "",
      detalle: "",
      descripcion: "",
      rubro: "",
      image: "",
      barrio: "",
      msg: false,
    };
  },
  mounted() {
    this.usuario = JSON.parse(window.localStorage.getItem("userData"));
  },
  methods: {
    logout() {
      window.localStorage.removeItem("userData");
      this.$router.push("/login");
    },
    async crearServicio() {
 
      try {
        const result = await axios.post(
          "https://618072ba8bfae60017adfaec.mockapi.io/servicio",
          {
            titulo: this.titulo,
            descripcion: this.descripcion,
            detalle: this.detalle,
            rubro: this.rubro,
            img: this.image,
            barrio: this.barrio,
            usuario: this.usuario.user
          }
        );
        console.log("TEST RESULT ",result);
        this.msg = true;
      } catch (error) {
        console.log(error);
        this.msg = false;
      }
    },
  },
};
</script>