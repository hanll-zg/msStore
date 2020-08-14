<template>
  <div>
    <div style="display: flex;flex-wrap: wrap;justify-content: space-between;margin: 3%">
      <div v-for="(item, index) in topList" :key="index" style="width: 30%;flex-shrink:0;align-content: flex-start;cursor: pointer" @click="getSomeOenShop(item.id)">
        <div class="imgClas" style="text-align: center">
          <img :src="item.images[0]" alt="">
        </div>
        <div style="font-size: 12px; overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
          {{item.productName}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {topicId} from '../api/api'
export default {
  name: "someOmeTop",
  data(){
    return{
      listId: this.$store.state.listId,
      topList: []
    }
  },
  mounted() {
      this.getList()
  },
  methods:{
    getSomeOenShop(id){
      this.$router.push({ path: 'shoppingId', query: {id:id} });
    },
    getList(){
      let data ={
        currentPage: 2,
        topicId: this.$store.state.listId
      }
      topicId(data).then(({data: res}) => {
        console.log(res)
        // this.data = res.data.topic
        // this.list = res.list
      });
    }
  }
}
</script>

<style scoped>
  .imgClas img{
    width: 100%;height: 100%;border-radius: 5%;text-align: center;
  }
</style>
