<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <img src="@/assets/logo.svg" alt="Vue logo" height="25" width="25">
    <span>Something</span>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>


<style scoped>
nav {
  align-items: flex-start;
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}

img {
  margin-right: 5px;
}

span {
  margin-right: 10px;
}

a {
  margin-right: 5px;
}
</style>