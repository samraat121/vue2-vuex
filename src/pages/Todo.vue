<template lang="">
    <div class="container">
        <h1 class="text-center">Todos App</h1> <hr />


    <input type="text" name="name" placeholder="Enter book" /> <button type="button" class="btn btn-primary">Add</button>

    <ul>
        <li v-for="(book, index) in $store.state.bookList" :key="index"> {{index+1}}. {{book}} </li>
    </ul>



        
    </div>
</template>
<script>
export default {
    name: 'Todo',

    // computed property use korar karon hocche for loop a je logic dekhchi seta ke vejal na kore akhanei define kore diye shudhu use kora okk
    // computed: {
    //     bookList() {
    //         return this.$store.state.bookList
    //     }
    // },
}
</script>
<style lang="">
    
</style>