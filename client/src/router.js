import Vue from 'vue';
import Router from 'vue-router';
import TaskComponent from './components/TaskComponent.vue';
import UserComponent from './components/UserComponent.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'users',
            component: UserComponent
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: TaskComponent
        }
    ]
});