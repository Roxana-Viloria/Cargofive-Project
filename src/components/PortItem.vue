 <!--tabla con cada elemento que debe contener y traer de la api -->

<template class="contents">
    <td v-text="port.name"></td>
    <td v-text="port.country"></td>
    <td v-text="port.continent"></td>
    <td v-text="port.coordinates"></td>
</template>

<script>
/**Este es el componente a exportar en Ports para que lleve los datos de cada puerto de forma indidividual.*/
    export default {
        name:'PortItem',
        props: ['port']
    }
</script>

<style scoped>

    *{
        font-family: Arial, Helvetica, sans-serif;
    }
    .todo{
        border-bottom: solid 1px #ccc;
        padding: 10px;
    }

    .name{
        font-size: 25px;
        color: #4a5153
    }

    .information{
        font-size: 18px;
        color: #4a5153
    }

    .contents{
        color: #4a5153
    }
</style>