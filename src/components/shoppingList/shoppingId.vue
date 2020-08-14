<template>
    <div>
        <div style="height: 100px;text-align: center;line-height: 100px">
            商品详情
        </div>
        <div>
            <van-swipe class="detailImg zmy-swipe" :autoplay="300000" indicator-color="white">
                <van-swipe-item  v-for="(src, index) in data.images" :key="index" style="display: flex;align-items: center;text-align: center;">
                    <img :src="src" alt="">
                </van-swipe-item>
            </van-swipe>
            <div style="min-height: 50px;text-align: center">
                {{data.productName}}
            </div>
            <div style="margin: 0 auto">
                <div style="display: flex;width: 50%;flex-shrink: 0;margin: 0 auto">
                    <div style="color: #FF87C7E9;height: 50px;width: 150px;font-size: 20px" v-if="data.price != undefined">
                        ${{data.price}}
                    </div>
                    <div style="height: 50px;width: 150px;;line-height: 22px;text-align: right" v-if="data.salePrice != undefined">
                        <del>${{data.salePrice}}</del>
                    </div>
                </div>
                <div style="display: flex;width: 50%;flex-shrink: 0;margin: 0 auto">
                    <div style="color: #FF87C7E9;height: 50px;width: 150px;font-size: 20px" v-if="data.rmb != undefined">
                        ¥{{data.rmb}}
                    </div>
                    <div style="height: 50px;width: 150px;line-height: 22px;text-align: right" v-if="data.priceRMB != undefined">
                        <del>¥{{data.priceRMB}}</del>
                    </div>
                </div>
            </div>
        </div>
        <div >
            <span v-for="(item,index) in data.catStr" :key="index" style="padding: 0 5px;margin: 0 auto">
                {{item}}
            </span><br>
            <span  style="text-align: left;font-size: 12px" v-html="data.productInfoBr">

            </span>
        </div>
        <van-row v-for="(item,index) in data.infos" :key="index">
            <van-col span="4" offset="1">{{item[0]}}</van-col>
            <van-col span="18" >{{item[1]}}</van-col>
        </van-row>
           <div style="display: flex">
               <div  style="padding: 0 5%;background-color: #EFDECC;border-radius: 20px;height: 40px;line-height: 40px;width: 100px;cursor: pointer;margin-left: 20px;text-align: center;font-size: 14px" @click="share(data)">添加到收藏夹
               </div>
               <div  style="padding: 0 5%;background-color: #EFDECC;border-radius: 20px;height: 40px;line-height: 40px;width: 100px;cursor: pointer;margin-left: 20px;text-align: center" >
                   <van-cell style="background-color:#EFDECC;padding: 8px 16px " title="分享" @click="showShare = true" />

               </div>
           </div>
<!--            <dd-share class="social-share" :share-config="config"></dd-share>-->
        <!--<van-share-sheet
                v-model="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelect"
        />-->
    </div>
</template>

<script>
    import {getById}  from '../../api/api'
    import { Toast } from 'vant';
    export default {
        name: "shoppingId",
        data(){
            return{
                showShare:false,
                showFx:false,
                options: [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                ],
                data: {
                    id: ''
                },
                browser : '',
                download_schema : 'shopping://main', //app的协议有安卓同事提供宝
                 universal_link : 'https://apps.apple.com/us/app/id1519256883',//ios下载地址
                 getVersionUrl : 'Android下载地址',//Android移动端下载地址
                ua : navigator.userAgent.toLocaleLowerCase(),
    //console.log(u);
    //              isWeixin : u.match(/MicroMessenger/i) == 'micromessenger',//判断是不是微信浏览器
    //              isAndroid : u.indexOf('android') > -1 || u.indexOf('linux') > -1, //android终端或者uc浏览器
    //              isiOS : !! u.match(/(iphone|ipod|ipad|mac)/i),
                config: {
                    url: window.location.href, // 网址，默认使用 window.location.href
                    source: "", // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="https://github.com/dongdong-cloud/dd-share" />
                    title: "", // 标题，默认读取 document.title 或者 <meta name="title" content="vue一键分享组件" />
                    description: "", // 描述, 默认读取head标签：<meta name="description" content="基于share.js封装的vue组件，一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+、点点等社交网站。" />
                    image: "", // 图片, 默认取网页中第一个img标签
                    disabled: ["google", "facebook", "twitter"], // 禁用的站点 可用站点['weibo', 'qq', 'wechat', 'douban', 'qzone', 'linkedin', 'facebook', 'twitter', 'google']
                    wechatQrcodeTitle: "微信扫一扫：分享", // 微信二维码提示文字
                    wechatQrcodeHelper:
                        "<p>微信里点“发现”，扫一扫</p><p>二维码便可将本文分享至朋友圈。</p>"
                }
            }
        },
        mounted(){
            this.getByIdFnc();
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

        },
        methods:{
            onSelect(option) {
                Toast(option.name);
                console.log(option)
                if (option.name == '微信'){
                    this.getConfig()
                }
                this.showShare = false;
            },
            share(row) {
                // console.log('分享')
                // console.log(this.browser.versions)
                // if (this.browser.versions.mobile) { // 判断是否是移动设备打
                //     // 在微信中打开
                // }
                // if (this.ua.match(/WeiBo/i) == "Weibo") {
                //     // 在新浪微博客户端打开
                // }
                // if (this.ua.match(/QQ/i) == "QQ") {
                //     // 在QQ端打开
                // }
                // if (this.browser.versions.ios) {
                //     this.ios();
                //     console.log(this)
                //     // 在IOS浏览器打开
                // }
                // if (this.browser.versions.android) {
                //     this.android1();
                //     // 在安卓浏览器打开
                // }
                console.log(row)
            },
            android1() {
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
            },
           initwx(timestamp, signature) { // eslint-disable-next-line no-undef
                wx.config({
                    debug: false, //
                    appId: 'wx78c209a7e241fc12"', // 公众号的唯一标识
                    timestamp: timestamp, //生成签名的时间戳
                    nonceStr: 'GDOU', //生成签名的随机串
                    signature: signature,//
                    jsApiList: ['onMenuShareTimeline', //
                        'onMenuShareAppMessage'] //
                });
               console.log('999')
               // eslint-disable-next-line no-undef
                wx.checkJsApi({
                    jsApiList: [
                        'onMenuShareTimeline','onMenuShareAppMessage'
                    ]
                });
               // eslint-disable-next-line no-undef
                wx.ready(function () {
                    var shareData = {
                        "imgUrl" : '',    // 分享显示的缩略图地址 ,根据自己情况而定
                        "link" : window.location.href,    // 分享地址
                        "desc": 'title',   // 分享描述
                        "title": 'title',   // 分享标题
                        success : function () {
                            // 分享成功可以做相应的数据处理

                            //alert("分享成功"); }
                        }};
                    // eslint-disable-next-line no-undef
                    wx.onMenuShareTimeline(shareData);//分享到朋友圈
                    // eslint-disable-next-line no-undef
                    wx.onMenuShareAppMessage(shareData);//分享给朋友
                });
            },
            ios() {
                // this.initwx();
                // window.location.href="weixin://dl/chat";

                 window.location.href = this.universal_link + "?schema=" + encodeURIComponent('https://apps.apple.com/us/app/id1519256883');
            },
            getByIdFnc(){
                let data ={
                    productId:this.$route.query.id
                }
                getById(data).then(({data: res}) => {
                    this.data = res.data
                  this.data.productInfoBr = this.data.productInfo.replace(/(\r\n|\n|\r)/gm, "<br />")
                    // this.list = res.list
                });
            },
            //  分享 调用sdk
            // 微信分参数
            getConfig() {
                this.showFx = true
                // var _this=this;
                // let url = location.href.split('#')[0] //获取锚点之前的链接
                let url = encodeURIComponent(window.location.href.split('#')[0]) //获取锚点之前的链接
                console.log(url)
                this.wxInit()
                // https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
                // let data = {}
                // getById(data).then(({data: res}) => {
                //     // let res = JSON.parse(response.data.data);
                //     console.log(res)
                //     _this.wxInit(res);
                // });
            },
            // 微信分享
            wxInit(res) {
                var _this=this;
                let url = window.location.href.split('?')[0] //获取锚点之前的链接
                console.log(url)
                // let links = url+'#/Food/' + this.$route.params.id;
                let links = url+'#/product/productDetails?pid='+_this.$route.query.pid;
                console.log(links)
                let title = '晓峰科技';
                let desc = '了解更多，请关注“晓峰科技”公众号';
                let imgUrl = 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM4soO2NoID1uZPHibOVgkJoPoaelibibF3GagvW2o43wRASA/0';
                _this.wx.config({
                    debug: false,
                    appId: 'wx78c209a7e241fc12',
                    timestamp: res.timestamp,
                    nonceStr: res.nonceStr,
                    signature: res.signature,
                    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
                });
                _this.wx.ready(function() {
                    _this.wx.onMenuShareAppMessage({
                        title: title, // 分享标题
                        desc: desc, // 分享描述
                        link: links, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function() {
                            alert('分享成功')
                            _this.showFx =false;
                        },
                        cancel: function() {
                            alert('分享失败')
                            _this.showFx =false;
                        }
                    });
                    //微信分享菜单测试
                    _this.wx.onMenuShareTimeline({
                        title: title, // 分享标题
                        desc: desc, // 分享描述
                        link: links, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function() {
                            alert('分享成功')
                            _this.isShow =true;
                        },
                        cancel: function() {
                            alert('分享失败')
                            _this.isShow =true;
                        }
                    })
                });
                _this.wx.error(function(err) {
                    alert(JSON.stringify(err))
                });
            }
        }
    }
</script>

<style scoped>
    .detailImg{

    }
    .detailImg img{
        width: 100%;height: 100%
    }
</style>
