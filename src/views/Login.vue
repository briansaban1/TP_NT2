<template >
  <div id="log">
    <b-container style="width: 300px">
      <form>
        <h3 style="margin: 20px">Iniciar Sesión</h3>

        <b-form-group>
          <label>Nombre de Usuario</label>
          <b-input
            type="text"
            class="form-control"
            v-model="username"
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

        <p v-if="error" class="error">
          Has ingresado mal el email o la contraseña.
        </p>

        <div style="margin: 20px">
          <b-button
            @click="login"
            class="btn btn-primary btn-block"
            :disabled="isCompleted"
            >Iniciar Sesión</b-button
          >
        </div>
      </form>
      <p class="msg">
        ¿No tenés cuenta?
        <router-link to="/registro">Registrate</router-link>
      </p>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  components: {},
  data: function () {
    return {
      username: "",
      password: "",
      error: false,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const res = await axios.get(
          `https://618072ba8bfae60017adfaec.mockapi.io/usuario?user=${this.username}&password=${this.password}`
          );

        console.log(res);

if(res.data.length > 0) {

console.log(res.data)
        window.localStorage.setItem("userData", JSON.stringify(res.data[0]));
        //window.localStorage.setItem('bookmarks', JSON.stringify(user.bookmarks))

        this.$router.push("/UserMenu");
        }else{
          this.error = true;
        }
      } catch (error) {
        this.error = true;
        this.password = "";
      }
    },
  },
  computed: {
    isCompleted() {
      return (
        this.username == "" || this.username.length < 4 || this.password == ""
      );
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