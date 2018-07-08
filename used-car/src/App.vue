<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  export default {
    name: 'App',
    components: {
      Navbar,
    }
  }
</script>

<style >
@import './assets/all_style';

@font-face {
  font-family: 'iconfont';  /* project id 629034 */
  src: url('//at.alicdn.com/t/font_629034_svdfhop19xf4unmi.eot');
  src: url('//at.alicdn.com/t/font_629034_svdfhop19xf4unmi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_629034_svdfhop19xf4unmi.woff') format('woff'),
  url('//at.alicdn.com/t/font_629034_svdfhop19xf4unmi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_629034_svdfhop19xf4unmi.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;}

/*#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}*/
</style>

