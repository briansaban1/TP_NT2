<template >
  <div id="reg">
    <b-container style="width: 300px">
      <form @submit.prevent="handleSubmit">
        <h3 style="margin: 20px">Registrate</h3>

        <b-form-group>
          <label>Nombre de Usuario</label>
          <b-input
            type="text"
            class="form-control"
            v-model="user"
            placeholder="Usuario"
          />
        </b-form-group>

        <b-form-group>
          <label>Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            placeholder="Password"
          />
        </b-form-group>

        <b-form-group>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="confpassword"
            placeholder="Confirmar Password"
          />
        </b-form-group>

        <b-form-group>
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            placeholder="Email"
          />
        </b-form-group>

        <b-form-group>
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="nombre"
            placeholder="Nombre"
          />
        </b-form-group>

        <b-form-group>
          <label>Apellido</label>
          <input
            type="text"
            class="form-control"
            v-model="apellido"
            placeholder="Apellido"
          />
        </b-form-group>

        <b-form-group>
          <label>Seleccioná un tipo de usuario</label>
          <select class="form-control" v-model="tipo">
            <option disabled value="">Seleccioná un elemento</option>
            <option>Vendedor</option>
            <option>Comprador</option>
          </select>
        </b-form-group>

        <div style="margin: 20px">
          <b-button class="btn btn-primary btn-block">Registrate</b-button>
        </div>
      </form>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registro",
  data() {
    return {
      user: "",
      password: "",
      confpassword: "",
      email: "",
      nombre: "",
      apellido: "",
      tipo:"",
      error: ""
    };
  },
  methods: {
    async handleSubmit() {
    try{
       await axios.post('register', {
        user: this.user,
        password: this.password,
        confpassword: this.confpassword,
        email: this.email,
        nombre: this.nombre,
        apellido: this.apellido,
        tipo: this.tipo
      });
        this.$router.push('/login')
      } catch (e){
this.error = 'Error'
      }

      
    },
  },
};
</script>

<style>
#reg {
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