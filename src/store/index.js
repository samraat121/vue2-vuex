import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        bookList: ["Book 1", "Book 2", "Book 3"],
        name: "Jahangir Alam",
        
        //Todos get
        todos: [],
    },
    getters: {
        totalBook(state) {
            return state.bookList.length
        },
        
        //Todos get
        allTodos: (state) => {
            return state.todos
        },
    },
    mutations: {
        ADD_BOOK (state, data) {
            // console.log(data)
            state.bookList.push(data);
        },
        REMOVE_BOOK(state, data) {
            console.log(data)
            state.bookList.splice(data,1)
        },
        
        //Todos get
        setTodos(state, todos) {
            state.todos = todos
        },
        REMOVE_TODO(state, data) {
            console.log(data),
            state.todos.splice(data, 1)
        },
        addTodo(state, data) {
            state.todos.push(data);
        },
        
    },
    actions: {
        addBook({commit}, data) {
            commit("ADD_BOOK", data);
        },
        removeBook({commit}, data) {
            commit("REMOVE_BOOK", data);
        },
        alertMe() {
            alert('Hello Jahangir Alam');
        },

        //Todos get
        async fetchTodos({ commit }) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            commit('setTodos', response.data);
        },
        async removeTodo({commit}, data) {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${data}`);
            commit("REMOVE_TODO", data);
        },
        async addTodo({commit},data){
            const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,
            {title:data,completed:false})
      
            commit('addTodo',response.data)
        },
    }

})


export default store