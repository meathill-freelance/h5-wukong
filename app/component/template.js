/**
 * Created by meathill on 2017/6/25.
 */
export let navTemplate = `
<a href="#/about" class="about"></a>
<a href="#/chupin" class="chupin"></a>
<a href="#/intro" class="intro"></a>
<a href="#/zhuchuang" class="zhuchuang"></a>
<a href="#/price" class="price"></a>
<a href="#/video" class="video"></a>
`;

let page = `
  <a href="#/home" class="back-button"></a>
`;
export let about = page;
export let chupin = page;
export let intro = page;
export let price = page;

export let zhuchuang = `
  <div class="haibao-link">
    <a href="#/zhuchuang/pengyuyan" class="col3"></a>
    <a href="#/zhuchuang/nini" class="col3"></a>
    <a href="#/zhuchuang/ouhao" class="col2"></a>
    <a href="#/zhuchuang/yuwenle" class="col3"></a>
    <a href="#/zhuchuang/zhengshuang" class="col2"></a>
    <a href="#/zhuchuang/qiaoshan" class="col2"></a>
    <a href="#/zhuchuang/yangdi" class="col2"></a>
    <a href="#/zhuchuang/yufeihong" class="bottom"></a>
  </div>
  <a href="#/haibao" class="haibao-button"></a>
  <a href="#/home" class="back-button"></a>
`;

export let video = `
  <video src="http://qiniu.meathill.com/video/wukong/trailer.m4v" width="300" height="200"></video>
  <a href="#/home" class="back-button"></a>
`;

export let haibao = `
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="./img/haibao/pengyuyan.jpg">
    </div>
    <div class="swiper-slide">
      <img src="./img/haibao/nini.jpg">
    </div>
    <div class="swiper-slide">
      <img src="./img/haibao/ouhao.jpg">
    </div>    
    <div class="swiper-slide">
      <img src="./img/haibao/yuwenle.jpg">
    </div>    
    <div class="swiper-slide">
      <img src="./img/haibao/zhengshuang.jpg">
    </div>    
    <div class="swiper-slide">
      <img src="./img/haibao/qiaoshan.jpg">
    </div>    
    <div class="swiper-slide">
      <img src="./img/haibao/yangdi.jpg">
    </div>    
    <div class="swiper-slide">
      <img src="./img/haibao/yufeihong.jpg">
    </div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>
</div>
<a href="#/zhuchuang" class="back-button"></a>
`;