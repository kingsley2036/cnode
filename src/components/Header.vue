<template>
<div class="header">
  <router-link :to="{name:'root'}">
    <img src="../assets/cnodejs_light.svg" alt="xxx">
  </router-link>

  <ul>
    <li><a href="#">首页</a></li>
    <li><a href="#">新手入门</a></li>
    <li><a href="#">API</a></li>
    <li><a href="#">关于</a></li>
    <li><a href="#">注册</a></li>
    <li><a href="#">登录</a></li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
.header{
  height: 50px;
  background-color: #5a5555 ;
}
  img{
    max-width: 120px;
    margin-left: 66px;
    margin-top: 10px;
  }
  ul{
    list-style: none;
    margin-right: 82px;
    float: right;
  }
  li{
    display: inline-block;
    padding-top: 16px;
    padding-bottom: 18px;
    margin-left:32px;
  }
  a{
    text-decoration: none;
    color: #cccccc;
    font-size: 14px;
  }

</style>
