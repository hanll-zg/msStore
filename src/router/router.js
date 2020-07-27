import App from '@/App.vue';

export const otherRouter = {
    path: '/',
    name: 'error-page',
    redirect: '/overview',
    component: App,
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
            path: 'overview',
            title: '首页',
            name: 'overview',
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
        }

    ]
};
export const routes = [
    otherRouter,
];
