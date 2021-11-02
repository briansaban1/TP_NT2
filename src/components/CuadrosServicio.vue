<template>
    <div>

<div id="titulo">
<h3>Listado de Servicios</h3>
</div>
        <b-container  > 
  <b-card-group deck class="row">
    <b-card class="mb-4" style="max-width: 18rem; margin:20px" title="{titulo}" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        {{servicio}}
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card class="mb-4" style="max-width: 18rem; margin:20px" title="Servicio 2" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
Descripción.....
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card class="mb-4" style="max-width: 18rem; margin:20px" title="Servicio 3" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
       Descripción.....
        </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

<b-card class="mb-4" style="max-width: 18rem; margin:20px" title="Servicio 4" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
       Descripción.....
          </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card class="mb-4" style="max-width: 18rem; margin:20px" title="Servicio 4" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
       Descripción.....
          </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card class="mb-4" style="max-width: 18rem; margin:20px" title="Servicio 4" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
       Descripción.....
          </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card class="mb-4" style="max-width: 18rem; margin:20px" title="Servicio 4" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
       Descripción.....
          </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card class="mb-4" style="max-width: 18rem; margin:20px" title="Servicio 4" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
       Descripción.....
          </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

  </b-card-group>

  </b-container>
</div>
</template>

<style >
#titulo{
    margin-top: 25px;

}
</style>

<script>


export default{

  name: 'CuadroServicios',
  props: {
        servicios: {
            type: Array,
            description: "servicio"
        }
    },
    mounted(){
      console.log(this.servicios);
    }


}

</script>
