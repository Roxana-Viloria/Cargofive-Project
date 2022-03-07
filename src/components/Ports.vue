<!-- Es el header de la tabla de los puertos, en donde se indican las categorias que traer la Api-->
<template>
    <div>
        <div>
          <table class="table">
            <tr class="categories">
              <th><strong>Name</strong></th>
              <th><strong>Country</strong></th>
              <th><strong>Continent</strong></th>
              <th><strong>Coordinates</strong></th>
            </tr>
            <tr v-bind:key="port.id" v-for="port in portslist">
                <PortItem  v-bind:port="port" />
            </tr>
          </table>
        </div>
    </div>
</template>

<script>

import PortItem from './PortItem.vue';
/** 
 * Importación del componente PorItem ( quien trae cada puerto encontrado) dentro de la api.
 * @vue-prop {String} portslist - lista de puertos.
 */
    export default {
        name: 'Ports-name',
        props: ['portslist'],
        components: {PortItem}
    }
</script>

<style scoped>

    .categories{
            color: #4a5153;
        }

    .table{
        width: 100%;
        margin-top: 20px;
        margin-bottom: 100px;
        color: #4a5153;
        --bs-table-striped-color: blue;
    }

    
</style>>

