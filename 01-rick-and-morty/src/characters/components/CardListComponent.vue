<script setup lang="ts">
import rickAndMortyApi from '@/api/rickAndMortyApi';

rickAndMortyApi.get('/character')
  .then( resp => {
    console.log( resp.data.results[0] );
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