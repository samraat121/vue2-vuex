import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        bookList: ["Book 1", "Book 2", "Book 3"]
    }

})


export default store