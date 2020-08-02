<template>
    <div>
        下载地址
    </div>
</template>

<script>
    export default {
        name: "download",
        data(){
            return{
                ua : navigator.userAgent.toLocaleLowerCase(),
                browser: '',
                universal_link : 'https://apps.apple.com/us/app/id1519256883',//ios下载地址
                getVersionUrl : 'Android下载地址',//Android移动端下载地址
            }
        },
        methods:{
            getphone(){
                if (this.browser.versions.mobile) { // 判断是否是移动设备打
                    // 在微信中打开
                }
                if (this.ua.match(/WeiBo/i) == "Weibo") {
                    // 在新浪微博客户端打开
                }
                if (this.ua.match(/QQ/i) == "QQ") {
                    // 在QQ端打开
                }
                if (this.browser.versions.ios) {
                        // this.initwx();
                        // window.location.href="weixin://dl/chat";

                        window.location.href = this.universal_link + "?schema=" + encodeURIComponent('https://apps.apple.com/us/app/id1519256883');
                    console.log(this)
                    // 在IOS浏览器打开
                }
                if (this.browser.versions.android) {
                    //如果是微信,直接下载

                    if (this.browser.versions.mobile) {
                        console.log('mobile')
                        window.location.href = 'shopping://main'; /***Android移动端下载地址***/
                    } else {
                        console.log('安卓')
                        window.location.href = 'shopping://main'; /***打开app的协议，有安卓同事提供***/
                        window.setTimeout(function () {
                            //window.location.href = "Android下载地址";/***Android移动端下载地址***/
                            window.location.href = this.getVersionUrl; /***Android移动端下载地址***/
                        }, 100);
                    }
                    // 在安卓浏览器打开
                }
            }
        },
        mounted() {
            this.ua = navigator.userAgent;
            let that = this;
            this.browser = {
                versions: function () { // 浏览器版本信息
                    return {
                        trident: that.ua.indexOf('Trident') > -1, // IE浏览器 trident内核
                        presto: that.ua.indexOf('Presto') > -1, // opera浏览器 presto内核
                        webKit: that.ua.indexOf('AppleWebKit') > -1, // chrome safari浏览器 webkit内核
                        gecko: that.ua.indexOf('Gecko') > -1 && that.ua.indexOf('KHTML') == -1, //firefox浏览器 gecko内核
                        mobile: !!that.ua.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
                        ios: !!that.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
                        android: that.ua.indexOf('Android') > -1 || that.ua.indexOf('Linux') > -1, // android终端或UC浏览器
                        iPad: that.ua.indexOf('iPad') > -1, //iPad终端
                        webApp: that.ua.indexOf('Safari') == -1 //是否web应用程序，没有头部与底部
                    }
                }(),
                language: (navigator.browserLanguage || navigator.language).toLowerCase() // 文档语言
            }
            this.getphone()
        }
    }
</script>

<style scoped>

</style>