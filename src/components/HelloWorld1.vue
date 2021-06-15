<!--
 * @Author: your name
 * @Date: 2021-06-15 13:46:04
 * @LastEditTime: 2021-06-15 13:52:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dict-learning-community/Users/mac/Documents/work/test/vant-demo/src/components/HelloWorld.vue
-->
<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  name: 'HelloWorld',
  components:{
    'van-swipe':Swipe,
    'van-swipe-item':SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
