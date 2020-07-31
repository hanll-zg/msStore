<template>
  <div>
    <div style="display: flex;flex-wrap: wrap;justify-content: space-between;margin: 3%">
      <div v-for="(item, index) in topList" :key="index" style="width: 30%;flex-shrink:0;align-content: flex-start;cursor: pointer" @click="getSomeOenShop(item.id)">
        <div class="imgClas">
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
export default {
  name: "someOmeTop",
  data(){
    return{
      topList: this.$store.state.list
    }
  },
  methods:{
    getSomeOenShop(id){
      this.$router.push({ path: 'shoppingId', query: {id:id} });
    }
  }
}
</script>

<style scoped>
  .imgClas img{
    width: 30%;height: 30%;border-radius: 5%;
  }
</style>
