<template>
<div style="text-align: left; ">
    <b-container  > 
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Buscá tu servicio"
     style="align-content: left"
  >
    <b-card-text class="row " style="width:25%; text-align: left;margin-top:15px">
      <form>
          <b-form-group >
          <label style="margin-bottom:10px">Seleccioná un Barrio</label>
          <select class="form-control" @change="handleBarrio" v-model="barrio" value="Todos">
            <option selected=true>Todos</option>
            <option>Agronomía</option>
<option>Almagro</option>
<option>Balvanera</option>
<option>Barracas</option>
<option>Belgrano</option>
<option>Boedo</option>
<option>Caballito</option>
<option>Chacarita</option>
<option>Coghlan</option>
<option>Colegiales</option>
<option>Constitución</option>
<option>Flores</option>
<option>Floresta</option>
<option>La Boca</option>
<option>La Paternal</option>
<option>Liniers</option>
<option>Mataderos</option>
<option>Monte Castro</option>
<option>Monserrat</option>
<option>Nueva Pompeya</option>
<option>Núñez</option>
<option>Palermo</option>
<option>Parque Avellaneda</option>
<option>Parque Chacabuco</option>
<option>Parque Chas</option>
<option>Parque Patricios</option>
<option>Puerto Madero</option>
<option>Recoleta</option>
<option>Retiro</option>
<option>Saavedra</option>
<option>San Cristóbal</option>
<option>San Nicolás</option>
<option>San Telmo</option>
<option>Vélez Sársfield</option>
<option>Versalles</option>
<option>Villa Crespo</option>
<option>Villa del Parque</option>
<option>Villa Devoto</option>
<option>Villa General Mitre</option>
<option>Villa Lugano</option>
<option>Villa Luro</option>
<option>Villa Ortúzar</option>
<option>Villa Pueyrredón</option>
<option>Villa Real</option>
<option>Villa Riachuelo</option>
<option>Villa Santa Rita</option>
<option>Villa Soldati</option>
<option>Villa Urquiza</option>
            
          </select>
        </b-form-group>

      <b-form-group style="margin-top:12px">
          <label style="margin-bottom:10px">Seleccioná un Servicio</label>
          <select class="form-control" @change="handleRubro" v-model="rubro">
            <option selected="true">Todos</option>
            <option>Plomería</option>
            <option>Electricista</option>
            <option>Carpiteria</option>
          </select>
        </b-form-group>

      </form>
    </b-card-text>
  </b-card>
 </b-container  > 

</div>
</template>

<script>
export default {
  data() {
    return {
      barrio: "Todos",
      rubro: "Todos"
    }
  },
   methods: {
    handleRubro() {
      this.$emit("update:rubro",this.rubro);
    },
    handleBarrio() {
      this.$emit("update:barrio",this.barrio);
    }
  }
}
</script>
