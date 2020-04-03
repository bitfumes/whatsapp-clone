import Vue from "vue";
import VueRouter from "vue-router";
import Chats from "../views/Chats.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Chats",
    component: Chats
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contacts.vue")
  },
  {
    path: "/calls",
    name: "Calls",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Calls.vue")
  },
  {
    path: "/messages",
    name: "Messages",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Messages.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
