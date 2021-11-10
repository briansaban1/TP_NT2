<template>
  <div id="slider" >
     <b-container >  
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      :sliding-start="onSlideStart"
      :sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Bienvenido"
        text="En Ortyfy-Service encontrarás el servicio que estás buscando de forma fácil y segura"
        img-src="https://librosaguilar.com/wp-content/uploads/2019/05/servicios-del-hogar.png"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://homesolution.net/blog/wp-content/uploads/2017/06/home-repairs-davie-florida-broward-county-hollywood.jpg">
        <h1>¡Estamos para ayudarte!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="http://www.tarjetasas.com/images/articulos/servicioshogar.jpg"
      ></b-carousel-slide>



    </b-carousel>
</b-container > 
    
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
   onSlideStart() {
        this.sliding = true
      },
    onSlideEnd() {
        this.sliding = false
      }
  },
};
</script>
