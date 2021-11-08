<template>
  <div class="servicios">
    <ImgServicio />
    <CuadrosServicio :services="services" />
  </div>
</template>

<script>
// @ is an alias to /src
import ImgServicio from '../components/ImgServicio.vue'
import CuadrosServicio from '../components/CuadrosServicio.vue'

export default {
  name: 'Home',
  data() {
    return {
      services: [{name:"test1",desc:"desc1",img:"url"},{name:"test2",desc:"desc2",img:"url"}]
    }
  },
  components: {
    ImgServicio,
    CuadrosServicio
  }
}
</script>
