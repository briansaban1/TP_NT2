<template>
      <b-card
        v-bind:id="servicio.id"
        style="max-width: 18rem; margin: 20px"
        :title="servicio.titulo"
        :img-src="servicio.img"
        :img-alt="servicio.detalle"
        img-top
      >
        <b-card-text>
          {{ servicio.descripcion }}
        </b-card-text>
        <template #footer>
          <small class="text-muted"
            >Rubro: {{ servicio.rubro }} | Barrio: {{ servicio.barrio }}</small
          >
        </template>
      </b-card>
</template>

<style >
#titulo {
  margin-top: 25px;
}
</style>

<script>
export default {
  name: "CuadroServicios",
  props: {
    servicio: {
      type: Object,
    },
  },
};
</script>
