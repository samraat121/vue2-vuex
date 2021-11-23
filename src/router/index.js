import Vue from "vue";
import Router from "vue-router";
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Blog from '../pages/Blog.vue';
import Todo from '../pages/Todo.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/todo",
      name: "Todo",
      component: Todo
    },
  ]
});
