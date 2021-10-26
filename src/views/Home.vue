<template>
  <div>
    <Slider />
    <Cuadros />
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '../components/Slider.vue'
import Cuadros from '../components/Cuadros.vue'
export default {
  name: 'Home',
  components: {
    Slider,
    Cuadros
  }
}
</script>
