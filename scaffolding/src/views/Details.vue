<template>
    <div class="details">
        <!-- 顶部取数据部分 -->
         <mt-header class="header" fixed>
         <router-link to="/" slot="left">
          <img class="header-icon" src="../assets/images/index/icon/phone.jpg" alt="" width="20px" height="20px">
         </router-link>
         <router-link to="/" slot="right">
          <img class="header-icon" src="../assets/images/index/icon/search.jpg" alt="" width="25px" height="25px">
         </router-link>
    </mt-header>
        <div class="details_top"  v-if="details[0]">
            <div class="div_img">
                <img  class="top_img"  :src="details[0].img" alt="">
                </div>
                    <p class="top_p1">{{details[0].title}}</p>
                    <p class="top_p2">{{details[0].subtitle}}</p>
                    <p class="top_p3">{{details[0].detail}}</p>
                    <p class="top_p4">￥{{details[0].price}}/人</p>
        </div>
    </div>
</template>
<style>
.details .header{
    background-color: transparent;
}
.details .top_img{
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin-bottom:10px ;
}
.details .top_p1,.top_p2,.top_p3,.top_p4{
    margin-bottom: 10px;
    margin:0 15px 10px 15px;
}
.details .top_p1{
  font-size: 15px;
  font-weight: 600;
}

.details .top_p2{
  font-size: 12px;
  color: #b2b2b2;
}
.details .top_p3{
  width: 120px;
  font-size:13px;
  text-align: center;
  color: #C27392;
  border: 1px solid #C27392;
  transform: scale(0.87);
  box-sizing: border-box;
  padding: 4px;
  letter-spacing: 1px;
  margin-left: 8px;
}   
.details .top_p4{
  color:#da3778;
  font-weight: bold;
  font-size:18px;
}

</style>
<script>
export default {
    data(){
        return{
            loding:false,
           details:[]
        }
    },
    mounted(){
        let id=this.$route.params.lid;
        this.axios.get('/details',{
            params:{
               id:id
            }
        }).then(res=>{
          let arr=res.data.results;
          arr.forEach(elem => {
              elem.img=require('../assets/images/index/laptop/'+elem.img);
              this.details.push(elem);
          });
        //   console.log(this.details);
        })
    }
}
</script>