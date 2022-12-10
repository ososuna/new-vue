<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';

breakingBadApi.get('/characters')
  .then( resp => {
    console.log({ data: resp.data[0].name });
  });

</script>

<template>
  <ul>
    <li>hello</li>
    <li>hello</li>
    <li>hello</li>
  </ul>
</template>

<style scoped>

</style>