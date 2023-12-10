<template> 
  <nav> 
    <router-link to="/">제품</router-link> | 
    <router-link to="/counter">카운터</router-link> 
  </nav> 
  <router-view/> 
</template> 

<style> 
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
  text-align: center; 
  color: #2c3e50;
  width: 700px;
  border: 1px solid #ccc; 
  box-shadow: 3px 3px 3px #aaa; 
} 

nav { 
  padding: 30px; 
  text-align: left;
  margin-left: 30px;
  margin-bottom: -80px;
} 

nav a { 
  font-weight: bold; 
  color: #2c3e50; 
} 

nav a.router-link-exact-active { 
  color: #42b983; 
} 
</style>