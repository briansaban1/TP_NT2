import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nosotros from '../views/Nosotros.vue'
import Servicios from '../views/Servicios.vue'
import Contacto from '../views/Contacto.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import UserMenu from '../views/UserMenu.vue'
import CrearServicio from '../views/CrearServicio.vue'
import DetalleServicio from '../views/DetalleServicio.vue'
import MisServicios from '../views/MisServicios.vue'
import EliminarServicio from '../views/EliminarServicio.vue'
import ModificarDatos from '../views/ModificarDatos.vue'


Vue.use(VueRouter)

export default new VueRouter ({

  mode: 'history',
  base: process.env.BASE_URL,
  routes:  [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Nosotros
  },
  {
    path: '/servicios',
    name: 'Servicios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Servicios,
    props: true
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contacto
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login, 
    props: true
  },
  {
    path: '/registro',
    name: 'Registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Registro
  },
  {
    path: '/usermenu',
    name: 'Usermenu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserMenu
  },
  {
    path: '/crearservicio',
    name: 'CrearServicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CrearServicio
  },
  {
    path: '/detalleservicio/:id',
    name: 'DetalleServicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DetalleServicio
  },
  {
    path: '/misservicios',
    name: 'MisServicios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MisServicios
  },
  {
    path: '/eliminarservicio',
    name: 'EliminarServicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EliminarServicio
  },
  {
    path: '/modificardatos',
    name: 'ModificarDatos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ModificarDatos
  },

]


})



