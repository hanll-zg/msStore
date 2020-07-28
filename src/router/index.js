import { routes } from './router';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routerConfig = {
    mode: 'hash',
    routes
};
export const router = new VueRouter(routerConfig);
