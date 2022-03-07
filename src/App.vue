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
        <Todos v-bind:todoslist="copyTodos"/>
    </div>
    <pagination v-model="page" :records="total" :per-page="perPage" @paginate="changePage"/>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import Todos from './components/Todos.vue';
import api from './api'
import Pagination from 'v-pagination-3';


export default {
  name: 'App',
  components: {
     Todos, Search, Pagination
  },
  methods:{
    querySearch(query){
      if(query.trim()=== ''){
        this.copyTodos = [...this.todos];
      }else{
        const temp = this.todos.filter(todo =>{
          return todo.name.toLowerCase().includes(query.toLowerCase())
        });
        this.copyTodos = [...temp]
      }
    },
    selectContinent(selected){
        if (selected.trim() === '') {
          this.copyTodos = [...this.todos];
        } else {
          const temp = this.todos.filter( todo =>{
            return todo.continent === selected
          });
          this.copyTodos = [...temp]
        }
    },
    queryCountry(country){
      if(country.trim()=== ''){
        this.copyTodos = [...this.todos];
      }else{
        const temp = this.todos.filter(todo =>{
          return todo.country.toLowerCase().includes(country.toLowerCase())
        });
        this.copyTodos = [...temp]
      }
    },
    changePage(page){
      this.page=page
    },
    fetchPorts(page){
      api
      .get(`/ports?page=${page}`)
      .then( response => {
        this.todos = response.data.data;
        this.copyTodos = [...this.todos];
        this.total= response.data.meta.total;
        this.page= response.data.meta.current_page;
        this.perPage= response.data.meta.per_page;
      })
    }

  },
  data(){
    return{
      todos:[],
      copyTodos:[],
      total:0,
      perPage:1,
      page: 1,
    }
  },
  mounted(){
    this.fetchPorts(this.page)
  },
  watch: {
    page: {
      handler: function(value){
        this.fetchPorts(value)
      }
    },
    selected: {
      handler: function(value){
        console.log(value)
        this.selectContinent(value)
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
