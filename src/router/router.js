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
            path: '/PrivacyAreement',
            title: '隐私协议',
            name: '/PrivacyAreement',
            meta: {
                id: 1000,
                parenId: 1
            },
            component: resolve => {
                require(['../components/PrivacyAreement.vue'], resolve);
            }
        },
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
        },
        {
            path: 'someOmeTop',
            title: '专题',
            name: 'someOmeTop',
            meta: {
                id: 120,
                parenId: 1
            },
            component: resolve => {
                require(['../components/someOmeTop.vue'], resolve);
            }
        },
        {
            path: 'aboutMe',
            title: '关于我们',
            name: 'aboutMe',
            meta: {
                id: 120,
                parenId: 1
            },
            component: resolve => {
                require(['../components/aboutMe/aboutMe.vue'], resolve);
            }
        },
        {
            path: 'download',
            title: '下载',
            name: 'download',
            meta: {
                id: 120,
                parenId: 1
            },
            component: resolve => {
                require(['../components/download/download.vue'], resolve);
            }
        }

    ]
};
export const routes = [
    otherRouter,
];
