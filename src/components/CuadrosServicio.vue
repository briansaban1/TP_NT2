<template>
    <div>

<div id="titulo">
<h3>Listado de Servicios</h3>
</div>
        <b-container  > 
      <b-card-group deck class="row">

    <b-card class="mb-4" style="max-width: 18rem; margin:20px" v-for="(services, index) in servicios" :key="services" title="asd" img-src="asd" img-alt="Image" img-top>
      <b-card-text>
       {{ index }} {{ services.desc }}
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

  </b-card-group>

 <p v-if="services.length">
    <ul>
      <li v-for="(service, index) in services" :key="service">{{ index }} - Nombre: {{ service.name }} - Desc: {{ service.desc }}</li>
    </ul>
  </p>

  </b-container>
</div>
</template>

<script>
export default ({
  props:{
    services: Array
  },
})
</script>


<style >
#titulo{
    margin-top: 25px;

}
</style>