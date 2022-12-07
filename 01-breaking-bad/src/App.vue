<script lang="ts" src="@/App.ts"></script>

<template>
  <div class="wrapper">
    <h1>Counter: {{ counter }}</h1>
    <button @click="counter++">+1</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
