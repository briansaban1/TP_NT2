<template>
  <div class="servicios">
    <ImgServicio />
    <CuadrosServicio />
  </div>
</template>

<script>
// @ is an alias to /src
import ImgServicio from '../components/ImgServicio.vue'
import CuadrosServicio from '../components/CuadrosServicio.vue'

export default {
  name: 'Home',
  components: {
    ImgServicio,
    CuadrosServicio
  }
}
</script>
