<template >
  <div id="reg">
    <b-container style="width: 40%">
      <form>
        <h3 style="margin: 20px">Actualizá tus datos</h3>

        <b-form-group>
          <label style="justify-content: left; display: flex"
            >Nombre de Usuario</label
          >
          <b-input
            type="text"
            class="form-control"
            v-model="usuario.user"
            disabled
            placeholder="Usuario"
          />
        </b-form-group>

        <b-form-group>
          <label style="justify-content: left; display: flex">Email</label>
          <input
            type="email"
            class="form-control"
            v-model="usuario.email"
            placeholder="Email"
          />
        </b-form-group>

        <b-form-group>
          <label style="justify-content: left; display: flex">Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="usuario.nombre"
            placeholder="Nombre"
            value="${}"
          />
        </b-form-group>

        <b-form-group>
          <label style="justify-content: left; display: flex">Apellido</label>
          <input
            type="text"
            class="form-control"
            v-model="usuario.apellido"
            placeholder="Apellido"
          />
        </b-form-group>

        <b-form-group>
          <label style="justify-content: left; display: flex"
            >Seleccioná un tipo de usuario</label
          >
          <select class="form-control" v-model="usuario.tipo">
            <option disabled value="">Seleccioná un elemento</option>
            <option>Vendedor</option>
            <option>Comprador</option>
          </select>
        </b-form-group>

        <p v-if="msg">
          <b>¡Datos actualizados correctamente!</b>
        </p>

        <div style="margin: 20px; justify-content: center; display: flex">
          <b-button
            type="button"
            @click="
              getServicios(
                usuario.id,
                usuario.nombre,
                usuario.apellido,
                usuario.email,
                usuario.tipo
              )
            "
            class="btn btn-primary btn-block"
          >
            Actualizar Datos
          </b-button>
        </div>
      </form>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ModificarDatos",
  data() {
    return {
      usuario: [],
      msg: false,
    };
  },
  mounted() {
    //Se obtiene el usuario del local storage
    this.usuario = JSON.parse(window.localStorage.getItem("userData"));
    console.log(this.usuario);
  },

  methods: {
    logout() {
      window.localStorage.removeItem("userData");
      this.$router.push("/login");
    },

    async getServicios(id, nombre, apellido, mail, tipo) {
      console.log(id, nombre, apellido, mail, tipo);

      try {
        const datosUpdate = {
          email: mail,
          nombre: nombre,
          apellido: apellido,
          tipo: tipo,
        };

        console.log(datosUpdate);

        const url = `https://618072ba8bfae60017adfaec.mockapi.io/usuario/${id}`;
        const response = await axios.put(url, datosUpdate);
        this.servicios = response.data;
        this.msg = true;

        //se agrega para que se almacene nuevamente en el local storage los nuevos datos actualizados
        if (response.data != "") {
          const res = await axios.get(
            `https://618072ba8bfae60017adfaec.mockapi.io/usuario?user=${this.usuario.user}&password=${this.usuario.password}`
          );

          console.log(res);

          console.log(res.data);
          window.localStorage.setItem("userData", JSON.stringify(res.data[0]));
        }
        //
        
        console.log(this.servicios);
      } catch (error) {
        console.log(error);
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