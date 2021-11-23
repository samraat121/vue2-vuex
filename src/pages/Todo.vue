<template lang="">
    <div class="container">
        <h1 class="text-center">Todos App</h1>
            <p>by: {{name}}</p>
         <hr />

        <p>Total Book: {{ $store.getters.totalBook }}</p>

    <input type="text" v-model="bookName" name="name" placeholder="Enter book" /> <button @click="addBook" type="button" class="btn btn-primary">Add</button>

    <ul>
        <li v-for="(book, index) in bookList" :key="index"> {{index+1}}. {{book}} <button @click="removeBook(index)">Delete</button></li> 
    </ul>



        
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: 'Todo',
    data() {
        return {
            bookName: ''
        }
    },

    // computed property use korar karon hocche for loop a je logic dekhchi seta ke vejal na kore akhanei define kore diye shudhu use kora okk
    computed: {
        ...mapState({
            bookList: "bookList",
            name: "name"
        }),
        // bookList() {
        //     return this.$store.state.bookList
        // }
    },
    methods: {
        addBook() {
            this.$store.dispatch("addBook", this.bookName)
        },
        removeBook(index) {
            // console.log(index);
            // this.$store.commit("REMOVE_BOOK",index )
            this.$store.dispatch("removeBook", index);
        }
    },
}
</script>
<style lang="">
    
</style>