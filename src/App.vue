<script>
import { showToast } from '@nutui/nutui';
import Player, { MobilePreset } from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import HlsPlugin from 'xgplayer-hls'
import {READY, TIME_UPDATE } from 'xgplayer/es/events';

export default { 
  data() {
    return {
      link:'https://ikcdn01.ikzybf.com/20240108/RYieJrXH/index.m3u8'
    }
  },
  mounted() {
    let location=(new URL(document.location).searchParams).get('url')
   
if (location!=null) {
  let name=location
  this.link=name
  console.log(`url的值为 ${name}`);
}
this.config={
  id: 'dplayer',
  url: this.link,
  mobile:{
    disablePress:false
  },
  plugins:[HlsPlugin]
}
this.player = new Player(this.config)

 this.player.on(READY,()=>{
  if (localStorage.getItem(this.link)!=null) {
  this.player.currentTime=localStorage.getItem(this.link)
}
 })
 this.player.on(TIME_UPDATE,()=>{
  localStorage.setItem(this.link, this.player.currentTime)
 })
  },
  methods: {
    update(){
      this.config={
        id: 'dplayer',
        url: this.link,
        mobile:{
          disablePress:false
        },
        plugins:[HlsPlugin]
      }
this.player = new Player(this.config)

 this.player.on(READY,()=>{
  if (localStorage.getItem(this.link)!=null) {
  this.player.currentTime=localStorage.getItem(this.link)
}
 })
 this.player.on(TIME_UPDATE,()=>{
  localStorage.setItem(this.link, this.player.currentTime)
 })
console.log(`当前播放地址为${this.config.url}`);
},  

 share(){
      if (navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}?url=${this.link}`)) {
      showToast.success('链接复制成功')
      }
     else{
    showToast.fail('链接复制失败')
     }
    }
  },
}
</script>
<template>
  <nut-cell style="position:relative;top:20px;justify-content: center;">
    <nut-input :border="false" style="width:80%;border:solid 2px;" type='text' clear-size='18px' @keyup.enter="update"	placeholder="请输入m3u8链接" clearable v-model="this.link"/>
      <nut-button shape="square" type="primary" style="height:45px" @click="update">点击播放</nut-button>
  </nut-cell>
  
  <main style="position:relative;top:20px;" class="flex_center">
  <div id="dplayer"></div>
  </main>
  <div style="margin-top: 30px;
    position: relative;
    text-align: right;
    max-width: 98%;">
    <span class="share" id="share" @click="share"><IconFont size="18" name="share" style="right: 3px;top:2.5px"/>分享</span>
  </div>
  </template>
<style>
.share{
  display: inline-block; background-color: #fa2c19; padding: 0.8rem;
    border-radius: 1000px;
    color: #fef2ff;
    border: 1px solid transparent;
    transition: .3s;
}
.share:hover{
  background-color: #d12c1d;
}
.flex_center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.nut-input-clear.nut-icon{
  border:none!important
}

</style>