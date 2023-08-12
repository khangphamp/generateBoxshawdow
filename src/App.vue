<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <header>
      <nav>
          <router-link to="/">Box shadow</router-link>
          <router-link to="/about">Text shadow</router-link>
          <router-link to="/about">Border</router-link>
          <router-link to="/about">Transform</router-link>
          <router-link to="/about">Gradient</router-link>
      </nav>

    </header>

    <router-view />
  </div>
</template>

<style scoped>
header {
   
}

nav {
  background-color: #fff;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

nav a {
    display: block;
    padding: 3px 10px;
    color: #000;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all .3s;
}
</style>
