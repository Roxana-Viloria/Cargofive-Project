<!--Archivo de busqueda. En él se encuentran los filtros para encontrar puertos segun nombre, país o continente. 
Importante: el filtro que se realiza es solamente en la pagina en donde se esté haciendo la busqueda, es decir, por cada 100 elementos que trae cada pagina.
Hay 3 filtros de búsqueda. Un Select para escoger el continente y dos inputs de busqueda segun el nombre o el páis en donde se quiera encontrar un puerto -->
<template>
    <div id="search-container">
            <select class="input-continent" v-model="selected" @change="this.$emit('onSelected', selected)">
                <option value="">Continent</option>
                    <option>AS</option>
                    <option>EU</option>
                    <option>NA</option>
                    <option>SA</option>
                    <option>AF</option>
                    <option>OC</option>
            </select>
            <input class="input" type="text" placeholder="Name" v-model="query" v-on:input="$emit('query-change', query)">
            <input class="input-country" type="text" placeholder="Country" v-model="country" v-on:input="$emit('country-change', country)"> 
    </div>
</template>

<script>
/** La data retorna: 1) query, que corresponde a la name del puerto que se busca.
 * 2) select, que corresponde al input de busqueda por continente, en donde se selecciona segun los predeterminados y
 *  3) counttry, también es un input de busqueda en relación al pais en donde quiere hallarse un puerto */
export default {
    name:'Search-name',
    data(){
        return{
            query: '',
            selected:'',
            country:''
        }
    },
}
</script>

<style>
    #search-container{
        width: 500px;
        margin: auto;
        margin-right: 100px;
        display: flex;
    }

    .input{
        padding: 10px;
        width: 200px;
        outline: none;
        border: none;
        box-shadow: 2px 2px 2px;
        color: #4a5153;
        
    }

    .input-continent{
        border-radius: 5px 0px 0px 5px;
        padding: 10px;
        width: 200px;
        outline: none;
        border: none;
        box-shadow: 2px 2px 2px;
        color: #4a5153;
    }

    .input-country{
        border-radius: 0px 5px 5px 0px;
        padding: 10px;
        width: 200px;
        outline: none;
        border: none;
        box-shadow: 2px 2px 2px;
        color: #4a5153;
    }

</style>