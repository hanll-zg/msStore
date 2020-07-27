<template>
    <div style="box-sizing: content-box;padding: 20px">

        <van-row gutter="20">
            <van-col v-for="(item, index) in list" :key="index" span="12" style="word-wrap: break-word;white-space: normal;word-break: break-all;text-align: left">
                <div>
                    <van-swipe class=" imgClass zmy-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item  v-for="(src, index) in item.images" :key="index" @click="getId(item)">
                            <img :src="src" alt="">
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <div style="min-height: 50px">
                    {{item.productName}}
                </div>
                <div style="display: flex;justify-content: space-between">
                    <div style="color: #FF87C7E9;height: 50px">
                        {{item.price}}
                    </div>
                    <div style="height: 50px">
                        <del>{{item.salePrice}}</del>
                    </div>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import {uploadHeaders} from '../../api/api'
    export default {
        name: "shoppingList",
        data() {
            return {
                list: [],
                checked: false,
                id: ''
            };
        },
        methods:{
            getList(){
                let data ={
                    pageSize: 20,
                    pageNumber :1,
                    id: ''
                }
                uploadHeaders(data).then(({data: res}) => {
                    this.list = res.list
                });
            },
            getId(row){
                console.log(row)
                this.$router.push({ path: 'shoppingId', query: {id:row.id} });
            }
        },
        mounted() {
            this.$route.query.id ? this.id = this.$route.query.id  :  this.id = ''
            this.getList();
        }
    }
</script>

<style scoped>
    .imgClass img{
        width: 200px;height: 200px;
    }
</style>
