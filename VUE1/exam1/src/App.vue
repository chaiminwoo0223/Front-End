<template>
  <nav>
    <router-link to="/exam1">Exam1</router-link> |
    <router-link to="/exam2">Exam2</router-link> |
    <router-link to="/exam3">Exam3</router-link> |
    <router-link to="/exam4">Exam4</router-link> |
    <router-link to="/exam5">Exam5</router-link> |
    <router-link to="/exam6">Exam6</router-link>
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>