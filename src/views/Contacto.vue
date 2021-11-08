<template>
<div id="contact">
   <b-container style="width: 1500px">
<form
 id="app"
  @submit="checkForm"
  class="needs-validation"
  method="post"
  novalidate>

<p v-if="errors.length">
    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
    <ul>
      <li v-for="(error, index) in errors" :key="error">{{ index }} - {{ error }}</li>
    </ul>
  </p>

  <div class="form-group">
    <label for="exampleInputEmail1">Correo electronico</label>
    <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Ingresar correo">
    <small id="email" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
  </div>
  <div class="form-group">
    <label for="name">Nombre</label>
    <input type="text" class="form-control" id="name" placeholder="Ingrese su nombre">
  </div>
   <div class="form-group">
    <label for="message">Mensaje</label>
    <textarea  class="form-control" id="message" placeholder="Ingrese su mensaje"/>
  </div>
  <div class="form-group">
    <label for="category">Categoria</label>
    <select class="form-control" id="category">
      <option>Soporte</option>
      <option>Atencion al cliente</option>
      <option>Ventas</option>

    </select>
  </div>
    <div style="margin: 20px">
    <b-button type="submit" class="btn btn-primary" :disabled=isCompleted>Enviar</b-button>
    </div>

</form>
 </b-container>
</div>
</template>

<script>
export default {
  name: "Contacto",
  components: {},
  data: function () {
    return {
      errors: [],
      name: null,
      email: null,
      category: null,
      message: null,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("El nombre es obligatorio.");
      }
      if (!this.email) {
        this.errors.push("El correo electrónico es obligatorio.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("El correo electrónico debe ser válido.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      // eslint-disable-next-line
      var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      return re.test(email);
    },
  },
};
</script>

<style>
#contact {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  justify-content: center;
  align-content: center;
}
</style>