<template class="contents">
    <td v-text="todo.name"></td>
    <td v-text="todo.country"></td>
    <td v-text="todo.continent"></td>
    <td v-text="todo.coordinates"></td>
</template>

<script>
    export default {
        name:'TodoItem',
        props: ['todo'],
        data() {
            return {
                completed: this.todo.completed
            }
        },
        methods: {
            checkTodo(){
                this.completed = !this.completed;
            }
        }
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