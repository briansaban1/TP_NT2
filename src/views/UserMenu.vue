<template>
<div>
<h3 v-if="user">Hola, {{user.nombre}} {{user.apellido}}</h3>
    <h3 v-if="!user">No estás logeado</h3>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'UserMenu',
    
    computed:{
        ...mapGetters(['user'])
    }
}
</script>
