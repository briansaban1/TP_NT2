<template >
  <div id="log">
    <b-container style="width: 300px">
      <form @submit.prevent="handleSubmit">
        <h3 style="margin: 20px">Iniciar Sesión</h3>

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
        <div style="margin: 20px">
          <b-button class="btn btn-primary btn-block">Iniciar Sesión</b-button>
        </div>
      </form>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  components:{

  },
  data: function() {
    return {
      user: '',
      password: '',
      error: false,
      error_msg:""
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('login', {
        user: this.user,
        password: this.password,
      });
      localStorage.setItem("token", response.data.token);
      this.$router.push("/");
      console.log(response);
    },
  },
};
</script>

<style>
#log {
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