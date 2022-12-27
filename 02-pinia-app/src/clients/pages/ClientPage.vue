<script setup lang="ts">
import { useRoute } from 'vue-router';
import LoadingModalComponent from '@/shared/components/LoadingModalComponent.vue';
import useClient from '@/clients/composables/useClient';

const route = useRoute();

const { client, isLoading } = useClient( +route.params.id );

</script>

<template>
<h3>Saving...</h3>
<h3>Saved</h3>
<LoadingModalComponent v-if="isLoading" />
<div>
  <h2>{{ client?.name }}</h2>
  <form>
    <input
      type="text"
      placeholder="Name"
    >
    <br>
    <input
      type="text"
      placeholder="Address"
    >
    <br>
    <button type="submit">Save</button>
  </form>
</div>
<code>
  {{ client }}
</code>
</template>


<style scoped>
input {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
}
button {
  margin-bottom: 10px;
}
</style>
