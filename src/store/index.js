import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        bookList: ["Book 1", "Book 2", "Book 3"]
    },
    // mutations 2 ta data dorbe 1 ta state arekta action theke payload hisabe je data ta patabo setake dorbe.
    mutations: {
        ADD_BOOK (state, data) {
            // console.log(data)
            state.bookList.push(data);
        }
    },
    actions: {
        addBook({commit}, data) {
            commit("ADD_BOOK", data);
        }
    }

})


export default store