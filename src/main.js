import './assets/style.css'
import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import TreeSimulator from "@/pages/TreeSimulator.vue";
import Saplings from "@/pages/Saplings.vue";
import Essences from "@/pages/Essences.vue";
import LeafFragment from "@/pages/LeafFragment.vue";
import ResourcesTypes from "@/pages/ResourcesTypes.vue";

const routes = [
    { path: '/Home', component: Home },
    { path: '/TreeSimulator', component: TreeSimulator },
    { path: '/Saplings', component: Saplings },
    { path: '/Essences', component: Essences },
    { path: '/LeafFragment', component: LeafFragment },
    { path: '/ResourcesTypes', component: ResourcesTypes },
    { path: '/:pathMatch(.*)*', redirect: '/Home' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');