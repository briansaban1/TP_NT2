<template >
  <div id="log">
    <b-container style="width: 300px">
      <form>
        <h3 style="margin: 20px">Iniciar Sesión</h3>

        <div v-if="msg" class="alert alert-danger" role="alert">
          {{ msg }}
        </div>

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
        <div style="margin: 20px">
          <b-button class="btn btn-primary btn-block" :disabled=isCompleted>Iniciar Sesión</b-button>
        </div>
      </form>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import AuthService from '../services/AuthService.js';

export default {
  name: "Login",
  components: {},
  data: function () {
    return {
      username: '',
      password: '',
      msg: '',
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          user: this.username,
          password: this.password,
        };
       const response = await AuthService.login(credentials);
       this.msg = response.msg

       const token = response.token
       const user = response.user

       this.$store.dispatch('login', {token, user});

       console.log(user)

        this.$router.push("/UserMenu");
      } catch (e) {
        this.msg = e.response.data.msg
      }
    },
  },
  computed: {
    isCompleted(){
      return this.user == "" || this.user.length < 4 || this.password == "";
    }
  }
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