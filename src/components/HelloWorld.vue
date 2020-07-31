<template>
  <div class="hello">
    <header>
      <div style="display: flex;justify-content: space-between;max-width: 1300px;margin: 0 auto;padding: 15px">
        <div>
          <img style="width: 120px" src="../assets/img/logo.png" alt="">
        </div>
        <div style="line-height: 20px;max-width: 60%;margin-top: 5px;font-size: 13px">
          为出国旅游购物提供一条龙服务!
        </div>
      </div>
    </header>
    <div class="bannerClass">
      <div>
        <h1 class="title">公司简介</h1>
        <div class="info">
          随着互联网和经济的飞速发展，中国与世界经济的整体联系日趋紧密。在全球化发展的趋势中，北京尚朝信息科技有限公司致力于为出国旅游购物的用户提供一条龙服务，使用户有高效、便捷的购物体验。
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <div class="download">
          <div class="download-wrap">
            <div class="download-logo" align="center" style="margin-top: 20px;width: 100%;padding: 0 20px;box-sizing: border-box">
              <img style="max-width: 100%;" src="../assets/img/logo.png" alt="">
            </div>
            <div class="download-parts" style="margin: 50px 0;box-sizing: border-box;padding: 0 20px" >
              <div class="img_fd" @click="getList()">

                <img
                        src="../assets/img/ewm.png"
                        alt="">
                <div>
                  <div>安卓下载</div>
                </div>


              </div>
              <div class="img_fd" style="margin: 0 40px" @click="getHomePge()">
                <img
                        src="../assets/img/ewm.png"
                        alt="">
                <div>
                  <div>安卓下载</div>
                </div>

              </div>
              <div class="img_fd">
                <img
                        src="../assets/img/ewm.png"
                        alt="">
                <div>
                  <div>安卓下载</div>
                </div>

              </div>
            </div>

          </div>
          <div class="phone"></div>
        </div>
      </div>
      <div class="phone" align="center">
        <img src="../assets/img/phone.png" alt="">
      </div>
    </div>
    <div style="clear: both"></div>
    <div style="background-color: black;color: #fff;font-family: PingFangSC-Regular;text-align: center;font-size: 12px;line-height: 20px;height: 80px;margin: 0 auto; display: flex;
    align-items: center;/*垂直居中*/justify-content: center">

      <div style="box-sizing: border-box;padding: 0 20px;margin:0 auto">
        客服邮箱：gengming861019@126.com<br>
        ©京ICP备20015736号-1 北京尚朝信息科技有限公司官网
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{

    }
  },
  methods:{
    getHomePge(){
      this.$router.push({path: '/homePage'});
    },
    getList(){
      this.$router.push({path: '/shoppingList'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bannerClass{
    background-image:url('../assets/img/banner.png') ;height: 900px;width: 100%;background-position: center;background-size: cover;display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
  }
  .download-logo{
    margin: 0 auto;
  }
  .download-parts{
    display: flex;justify-content: center;
  }
  .img_fd img{
    width: 100px;height: 100px;
  }
  .img_fd img:hover{
    transform:scale(3,3);
  }
  .phone{
    margin: 0 auto;
  }
  .phone img{
    width:50%;
    height: 100%;
  }
  @media screen and (max-width: 1000px) {
    .phone img{
      width: 375px;
      height: 100%;
    }
    .img_fd img{
      width: 50px;height: 50px;
    }
    .img_fd img:hover{
      transform:scale(3,3);
    }
  }
  .content {
    margin: 0 auto;
    max-width: 1300px;
    background-color: #fff;
  }
  .title {
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 36px;
    color: #ffffff;
    letter-spacing: 1.31px;
  }
  .info {
    max-width: 892px;
    padding: 0 20px;
    margin: 0 auto;
    font-family: PingFangSC-Regular;
    font-size: 25px;
    color: #ffffff;
    letter-spacing: 2.06px;
    text-align: center;
    line-height: 36px;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
