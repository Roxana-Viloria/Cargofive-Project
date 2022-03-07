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