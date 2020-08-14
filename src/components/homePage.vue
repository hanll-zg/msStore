<template>
    <div>
        <div v-for="(item, index) in data" :key="index">
            <van-swipe :autoplay="500000" indicator-color="white">
                <van-swipe-item v-for="(val, v) in item.images" :key="v" style="text-align: center"  @click="getOneTop(item)">
                    <img style="width: 80%;height: auto" :src="val" alt="">
                </van-swipe-item>
            </van-swipe>
            <div>
                <div class="miniStreamView" v-for="(val, i) in item.product" :key="i">
                    <img :src="val.images[0]" alt=""  @click="getOneTop(item)">
                    <span>
                        {{item.productName}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import {topicPro} from '../api/api'
    // import {getById} from "../api/api";
    // import Cookies from 'js-cookie';
    export default {
        name: "homePage",
       data (){
            return {
                data:[]
            }
       },
        methods : {
            ...mapMutations(['rowListId']),
            getOneTop(row){
                this.rowListId(row.id)
                console.log(row)
                this.$router.push({path:'/someOmeTop'})
            },
            gettopicPro(){
                let data ={
                    currentPage: 0
                }
                topicPro(data).then(({data: res}) => {
                    this.data = res.data.topic
                    // this.list = res.list
                });
            }
        },
        mounted() {
            this.gettopicPro()
        }
    }
</script>

<style scoped type="text/less">
    .minVideoViewBox{
        width:100%;
        overflow-x: auto;
        overflow-y: hidden;
        white-space:nowrap;
    }
    .miniStreamView{
        width:33%;
        display: inline-block;
    }
    .demo1 {
        height: 92px;
        width: 10000px;
        display: flex;
        overflow: hidden;
        white-space: nowrap;
        overflow-x: auto;
        border: 1px solid rosybrown;
    }
    .miniStreamView img {
        width: 100%;

    }
</style>
