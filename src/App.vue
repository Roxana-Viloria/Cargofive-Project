<!-- El componente App reune a todos los demás componentes de la aplicación. En el HTML para mostrar en pantalla 
y en el Script para el funcionamiento-->
<template>
  <div>
    <div id="header">
      <span>Sea Port</span>
      <img class="ship" v-bind:src="require('./assets/ship.svg')">
    </div>
    <div id="main-container">
      <div class="portsWorld">
        <h2>Ports around the World</h2>
        <Search v-on:query-change="querySearch" v-on:country-change="queryCountry" @onSelected="selectContinent"/>
      </div> 
        <Ports v-bind:portslist="copyPorts"/>
    </div>
    <pagination v-model="page" :records="total" :per-page="perPage" @paginate="changePage"/>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import Ports from './components/Ports.vue';

/** importación del archivo api que se creó para conectar la Api mediante el endpoint*/
import api from './api'

/** importación del paquete de paginación*/
import Pagination from 'v-pagination-3';


export default {
  name: 'App',
  components: {
     Ports, Search, Pagination
  },

  /** funciones que corresponden a cada filtro del componente search, para traer puertos según nombre, continente o pais.
   *  la función changePage, es la encargada de hacer la renderización de la paginación y en fetchpoint es el endpoint,
   *  para conectar con la api. */
  methods:{
    querySearch(query){
      if(query.trim()=== ''){
        this.copyPorts = [...this.ports];
      }else{
        const temp = this.ports.filter(port =>{
          return port.name.toLowerCase().includes(query.toLowerCase())
        });
        this.copyPorts = [...temp]
      }
    },
    selectContinent(selected){
        if (selected.trim() === '') {
          this.copyPorts = [...this.ports];
        } else {
          const temp = this.ports.filter( port =>{
            return port.continent === selected
          });
          this.copyPorts = [...temp]
        }
    },
    queryCountry(country){
      if(country.trim()=== ''){
        this.copyPorts = [...this.ports];
      }else{
        const temp = this.ports.filter(port =>{
          return port.country.toLowerCase().includes(country.toLowerCase())
        });
        this.copyPorts = [...temp]
      }
    },
    changePage(page){
      this.page=page
    },
    fetchPorts(page){
      api
      .get(`/ports?page=${page}`)
      .then( response => {
        this.ports = response.data.data;
        this.copyPorts = [...this.ports];
        this.total= response.data.meta.total;
        this.page= response.data.meta.current_page;
        this.perPage= response.data.meta.per_page;
      })
    }

  },
  data(){
    return{
      ports:[],
      copyPorts:[],
      total:0,
      perPage:1,
      page: 1,
    }
  },

  /** Conexión de cada puerto por pagina */
  mounted(){
    this.fetchPorts(this.page)
  },

  /** Renderización del componente App para que actualice las páginas */
  watch: {
    page: {
      handler: function(value){
        this.fetchPorts(value)
      }
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  padding: 0;
  margin: 0;
}

#main-container{
  width: 100%;
  margin: auto;
}

#header{
  background-color:rgb(234, 244, 245);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bolder;
  font-size: 30px;
  color: #00c3ff;
  margin: auto;
  padding: 10px;
  height: 100px;
}

h2{
  padding: 0 10px;
}

.ship{
  width: 30px;
  height: 25px;
  margin: auto;
  margin-left: 10px;
}

.portsWorld{
  display: flex;
  background-color:rgb(234, 244, 245);
  color: #4a5153;
  margin:auto;
  padding-bottom: 20px;
  box-shadow: 2px 2px 2px #91b1bb;  
}
</style>
