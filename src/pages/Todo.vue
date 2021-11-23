<template lang="">
    <div class="container">
        <h1 class="text-center">Todos App</h1> <hr />


    <input type="text" v-model="bookName" name="name" placeholder="Enter book" /> <button @click="addBook" type="button" class="btn btn-primary">Add</button>

    <ul>
        <li v-for="(book, index) in bookList" :key="index"> {{index+1}}. {{book}} <button @click="removeBook(index)">Delete</button></li> 
    </ul>



        
    </div>
</template>
<script>
export default {
    name: 'Todo',
    data() {
        return {
            bookName: ''
        }
    },

    // computed property use korar karon hocche for loop a je logic dekhchi seta ke vejal na kore akhanei define kore diye shudhu use kora okk
    computed: {
        bookList() {
            return this.$store.state.bookList
        }
    },
    methods: {
        addBook() {
            this.$store.dispatch("addBook", this.bookName)
        },
        removeBook(index) {
            // console.log(index);
            this.$store.commit("REMOVE_BOOK",index )
        }
    },
}
</script>
<style lang="">
    
</style>