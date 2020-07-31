// import App from '@/App.vue';
import Main from '../components/Main'

export const otherRouter = {
    path: '/',
    name: 'error-page',
    redirect: '/',
    component: Main,
    meta: {
        title: '404-页面不存在'
    },
    // mode: 'hash',
    children: [
        // {
        //     path: '/*',
        //     name: 'error404',
        //     meta: {
        //         title: '404-页面不存在'
        //     },
        //     component: resolve => { require(['../components/HelloWorld.vue'], resolve); }
        // },
        {
            path: '/',
            title: '首页',
            name: '/',
            meta: {
                id: 1000,
                parenId: 1
            },
            component: resolve => {
                require(['../components/HelloWorld.vue'], resolve);
            }
        },
        {
            path: 'shoppingList',
            title: '首页',
            name: 'shoppingList',
            meta: {
                id: 120,
                parenId: 1
            },
            component: resolve => {
                require(['../components/shoppingList/shoppingList.vue'], resolve);
            }
        },
        {
            path: 'shoppingId',
            title: '首页',
            name: 'shoppingId',
            meta: {
                id: 120,
                parenId: 1
            },
            component: resolve => {
                require(['../components/shoppingList/shoppingId.vue'], resolve);
            }
        },
        {
            path: 'homePage',
            title: '首页',
            name: 'homePage',
            meta: {
                id: 120,
                parenId: 1
            },
            component: resolve => {
                require(['../components/homePage.vue'], resolve);
            }
        }

    ]
};
export const routes = [
    otherRouter,
];
