<template>
  <div>
    <van-field
        style="font-size: 16px;font-family: '微软雅黑'"
        v-model="message.message"
        rows="1"
        autosize
        label=""
        type="textarea"
        placeholder="请输入留言"
    />

  </div>
</template>

<script>
import messageData from './message.json'
export default {
name: "PrivacyAreement",
  data(){
  return{
    message: messageData

  }
  }
}
</script>

<style scoped>

</style>
