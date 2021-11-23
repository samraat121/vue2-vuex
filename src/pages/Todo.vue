<template lang="">
    <div class="container">
        <h1 class="text-center">Todos App</h1>
            <p>by: {{name}}</p> <button @click="alertMe">Alert</button>
         <hr />

        <p>Total Book: {{ totalBook }}</p>

    <input type="text" v-model="bookName" name="name" placeholder="Enter book" /> <button @click="addBook(bookName)" type="button" class="btn btn-primary">Add</button>

    <ul>
        <li v-for="(book, index) in bookList" :key="index"> {{index+1}}. {{book}} <button @click="removeBook(index)">Delete</button></li> 
    </ul><hr />

    <div>
        <form v-on:submit.prevent="onSubmit">
            <input type="text" v-model="title" placeholder="Add Todo" />
            <input type="submit" value="Submit">
      </form>
      <h1>Todos</h1>
      <div class="todos">
        <div
          v-for="(todo, index) in allTodos"
          class="todo"
          v-bind:key="todo.key"
        >
          {{todo.id}}. {{ todo.title }} <button @click="removeTodo(index)">Delete</button>
        </div>
      </div>
    </div>


        
    </div>
</template>
<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
    name: 'Todo',
    data() {
        return {
            bookName: '',
            title: '',
        }
    },
    computed: {
        ...mapState({
            bookList: "bookList",
            name: "name"
        }),
        ...mapGetters({
            totalBook: "totalBook",
            allTodos: "allTodos"  //Todos get
        })
    },
    created() {
        this.fetchTodos(); //Todos get
    },
    methods: {
        ...mapActions({
            removeBook: "removeBook",
            addBook: "addBook",
            alertMe: "alertMe",
            fetchTodos: "fetchTodos",  //Todos get
            removeTodo: "removeTodo",
            addTodo: "addTodo",
        }),
        onSubmit() {
            this.addTodo(this.title);
            this.title = '';
        }
    },
}
</script>
<style lang="">
    
</style>