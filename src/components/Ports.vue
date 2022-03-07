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

