<template>
  <div id="app">
    
    <Navbar class="sticky-top"></Navbar>
    <router-view id="rv"></router-view>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: { Navbar, Footer },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: Noto Sans, Helvetica, Trebuchet MS, Gill Sans, sans-serif;
}
 
/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
    display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */  
}
#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;    
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.gif-container {
  min-height: 70vh;
  max-height: 80vh;
}
#rv {
  min-height: 100vh;
}
</style>
