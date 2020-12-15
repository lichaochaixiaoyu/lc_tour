<template>

  <div class="index">
    <!-- <img src="../assets/images/index/carousel/banner1.jpg" alt=""> -->
    <!-- 顶部导航开始 -->
    <mt-header title="首页" class="header">
         <router-link to="/" slot="left">
          <img class="header-icon" src="../assets/images/index/icon/phone.jpg" alt="" width="20px" height="20px">
         </router-link>
         <router-link to="/" slot="right">
          <img class="header-icon" src="../assets/images/index/icon/search.jpg" alt="" width="25px" height="25px">
         </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active" class="my-navbar">
      <mt-tab-item :id="item.id.toString()" v-for="(item,i) of navCategory" :key=i>
        {{item.category_name}}
      </mt-tab-item>
    </mt-navbar>
      
    <!-- 顶部选项卡结束 -->
    <div class="index-margin">
    <!-- 面板区域开始 -->
    <mt-tab-container v-model="active" class="container">
       <!-- 第一个面板：首页开始 -->
       <mt-tab-container-item id="1">
          <!-- 轮播图开始 -->
     <mt-swipe :auto="4000">
        <mt-swipe-item  @click.native.capture="carousel1"><img src="../assets/images/index/carousel/banner1.jpg" width="100%" height="100%" alt=""></mt-swipe-item>
        <mt-swipe-item  @click.native.capture="carousel1"><img src="../assets/images/index/carousel/banner2.jpg" width="100%" height="100%" alt=""></mt-swipe-item>
        <mt-swipe-item  @click.native.capture="carousel1"><img src="../assets/images/index/carousel/banner3.jpg" width="100%" height="100%" alt=""></mt-swipe-item>
        <mt-swipe-item  @click.native.capture="carousel1"><img src="../assets/images/index/carousel/banner4.jpg" width="100%" height="100%" alt=""></mt-swipe-item>
     </mt-swipe>
        <!-- 轮播图结束 -->
        <!-- 轮播图下的指示标开始 -->
        <div class="main_indicator_icon">
          <ul style="display:flex;justify-content: space-around;">
            <li>
              <div class="indicator_img">
                <img src="../assets/images/index/icon/indicator1.jpg">
                </div>
                <p>国内游</p>
              </li>
            <li>
              <div class="indicator_img">
               <img src="../assets/images/index/icon/indicator2.jpg">
                </div>
                <p>定制游</p>
            </li>
            <li>
              <div class="indicator_img">
               <img src="../assets/images/index/icon/indicator4.jpg">
                </div>
                <p>周末游</p>
            </li>
            <li>
              <div class="indicator_img">
               <img src="../assets/images/index/icon/indicator3.jpg">
                </div>
                <p>旅行团</p>
            </li>
          </ul>

            <ul style="display:flex;justify-content: space-around;" class="qinzi_ul">
            <li>
              <div class="indicator_img2">
                <img src="../assets/images/index/icon/qinzi.jpg">
                </div>
                <p>欢淘亲子</p>
              </li>
            <li>
              <div class="indicator_img2">
               <img src="../assets/images/index/icon/xiaotuan.jpg">
                </div>
                <p>逸游小团</p>
            </li>
            <li>
              <div class="indicator_img2">
               <img src="../assets/images/index/icon/haidao.jpg">
                </div>
                <p>海岛海滨</p>
            </li>
            <li>
              <div class="indicator_img2">
               <img src="../assets/images/index/icon/jingdian.jpg">
                </div>
                <p>经典观光</p>
            </li>
             <li>
              <div class="indicator_img2">
               <img src="../assets/images/index/icon/langman.jpg">
                </div>
                <p>浪漫蜜月</p>
            </li>
          </ul>
        </div>
        <!-- 轮播图下的指示标结束 -->
        <!-- 首页斑马星选开始 -->
        <div class="laptop_start">
         <div class="banma_start" v-for="(laptop,i) of laptops" :key=i>
           <div class="banma_header">
             <span class="banma_title">{{laptop[0].title}}</span>
             <span class="banma_subtitle">{{laptop[0].subtitle}}</span>
           </div>
           <ul class="banma_ul">
             <li class="banma_li1" v-for="(item,n) of laptops[i]" :key=n>
               <div class="banma_li_img">
               <img  :src="item.img" alt="" width="150">
               </div>
               <p style="font-size:13px">{{item.ltitle}}</p>
               <p style="font-size:12px">{{item.lsubtitle}}</p>
               <p style="font-size:12px">{{item.ldetail}}</p>
               <p style="font-size:13px">￥{{item.price}}起</p>
             </li>
             
           </ul>
         </div>
        </div>
        <!-- 首页斑马星璇结束 -->
         </mt-tab-container-item> 
         <!-- 第一个面板：首页区域结束 -->
         <!-- 第二个面板：同类型面板开始 -->
         <mt-tab-container-item id="2">
           22
         </mt-tab-container-item>
         <!-- 第二个面板：同类型面板结束 -->

 
        
      

</mt-tab-container>
    <!-- 面板区域结束  -->
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="tabSelected" class="tab_bar" fixed>
      <mt-tab-item id="index_icon">
        <img v-if="tabSelected=='index_icon'" src="../assets/images/index/icon/tab_fangzi2.jpg" alt="" slot="icon">
        <img v-else src="../assets/images/index/icon/tab_fangzi1.jpg" alt="" slot="icon"/>
        首页
      </mt-tab-item>
      <mt-tab-item id="mudi_icon">
        <img v-if="tabSelected=='mudi_icon'" src="../assets/images/index/icon/mudidi2.jpg" alt="" slot="icon">
        <img v-else src="../assets/images/index/icon/mudidi1.jpg" alt="" slot="icon"/>
        目的地</mt-tab-item>
      <mt-tab-item id="banma_icon" class="banma_icon">
        <div class="banma_icon_circle">
         <img class="banma_img" src="../assets/images/index/icon/tab_banma.jpg.png" alt="" slot="icon">
        </div>
        <p>定制游</p></mt-tab-item>
      <mt-tab-item id="search_icon">
         <img v-if="tabSelected=='search_icon'" src="../assets/images/index/icon/tab_search2.jpg" alt="" slot="icon">
        <img v-else src="../assets/images/index/icon/tab_search1.jpg" alt="" slot="icon"/>
        发现</mt-tab-item>
      <mt-tab-item id="me_icon">
          <img v-if="tabSelected=='me_icon'" src="../assets/images/index/icon/me2.jpg" alt="" slot="icon">
        <img v-else src="../assets/images/index/icon/me1.jpg" alt="" slot="icon"/>
        个人中心</mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
    </div>
  </div>
</template>
<style>
.index>.header{
  margin:10px 0;
  color: #000;
  background: white;
  font-family: "Microsoft YaHei";
  font-size: 17px;
}
.index .header-icon{
   width: 20px;
   height: 20px;
}
/* 修改组件中选项卡的样式颜色 */
.mint-navbar .mint-tab-item.is-selected{
  border-bottom:3px solid #C27392 !important;

  color:#C27392 !important;
  margin-bottom: 0 !important;
}
.mint-tab-item-label {
    font-size: 12px ;
}
.my-navbar{
  padding: 0 8px;
  border-bottom: 1px solid #ddd;
}
/* 轮播图 */
.index .container{
  margin-bottom:50px;
}
.mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 180px !important;
    border-radius: 5px;
    margin: 5px 0;
}
.index-margin{
  margin: 0 10px;
}
.mint-swipe-indicator {
    width: 6px !important;
    height: 3px !important;
    border-radius: -8% !important;
}
/* 底部选项卡开始 */
/* 选中字体颜色 */
.mint-tabbar>.mint-tab-item.is-selected{
    color: #C27392 !important;
}
/* 选项卡背景 */
.tab_bar{
  background-color: white !important;
  background-image: none !important;  
}
.banma_icon_circle{
      display: inline-block;
    width: 40px;
    height: 40px;
    margin-bottom: 0px;
    margin-top: -21px;
    border-radius: 100%;
    background-color: #E6CC95;
    border: 5px solid #fff;
    text-align: center;
}
.banma_icon_circle>.banma_img{
 width: 30px;
 height: 30px;
 padding-top:7px ;

}
/* 底部选项卡结束 */
/* 中间部分导航指示图开始 */
.main_indicator_icon{
  text-align: center;
  margin:20px 0;
  font-size: 12px;
  margin-bottom: 35px;
}
.indicator_img{
  text-align: center;
  margin-bottom: 5px;
}
.indicator_img2{
    width: 48px;
    height: 24px;
    margin-bottom: 5px;
}
.qinzi_ul{
  transform: scale(0.95);
 
  margin-top: 25px;
  margin-bottom: 30px;
}
.qinzi_ul>li{
  padding: 0 8px;
  border-right:1px solid #F3F3F3;
}
.qinzi_ul>li:last-child{
  border-right:1px solid #fff;
}


/* 中间部分导航指示图结束 */

/* 循环部分开始 */
.banma_start{
  margin-bottom:50px;
}
.banma_header{
 border-left:1px solid #C27392;
 margin-bottom: 10px;
}
.banma_title{
  font-size:20px;
  margin-left: 15px;
  letter-spacing: 2px;
}
.banma_subtitle{
  font-size:14px;
  margin-left: 20px;
  letter-spacing: 1px;
}
.banma_ul{
  width: 100%;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
}
.banma_li1{
  height: 50%;
  width: 48%;
  margin-top: 5px;

}
.banma_li_img{
  height: 100px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
}
.banma_li_img>img{
width: 100%;
height: 100%;
border-radius: 3px;
}
.banma_li1 p{
  /* 设置单行超出字数省略号隐藏 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 8px;
}
.banma_li1 p:nth-child(3){
  color: #b2b2b2;
}
.banma_li1 p:nth-child(4){
  width: 60px;
  text-align: center;
  color: #C27392;
  border: 1px solid #C27392;
  transform: scale(0.88);
  box-sizing: border-box;
  padding: 2px;
}
.banma_li1 p:nth-child(5){
  color:#da3778;
  font-weight: bold;
}
</style>
<script>
// import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data() {
    return {
     active:"1",
     tabSelected:"index",
     navCategory:[],
     laptops:[],
   }
  },
  mounted(){
     //请求顶部选项卡数据
     this.axios.get('/category').then(res=>{
        this.navCategory=res.data.results;
        // console.log(this.navCategory);
     });
     //请求商品数据
     this.axios.get('/laptop').then(res=>{
        var arr=res.data.results;
            console.log(arr);
        var arr1=[];
        arr.forEach(elem=>{
              if(elem.img != null){
                elem.img = require('../assets/images/index/laptop/'+elem.img);
              }
             arr1.push(elem);
          });
        // 因为有六组，循环6次
        for(var n=1;n<=6;n++){
          var arr2=[];
         arr1.forEach((elem) => {
          if(elem.family_id==n){
             arr2.push(elem);
          }
         });
        this.laptops.push(arr2);
       }
       console.log(this.laptops);
       
     })
  },
  methods:{
    carousel1(){
      this.active="2"
    }
  }
}

</script>
