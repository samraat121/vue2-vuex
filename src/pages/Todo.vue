<template lang="">
    <div class="container">
        <h1 class="text-center">Todos App</h1> <hr />


    <input type="text" name="name" placeholder="Enter book" /> <button type="button" class="btn btn-primary">Add</button>
{{bookList}}



        
    </div>
</template>
<script>
export default {
    name: 'Todo',

    computed: {
        bookList() {
            return this.$store.state.bookList
        }
    },
}
</script>
<style lang="">
    
</style>