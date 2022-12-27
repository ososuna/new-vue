<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import LoadingModalComponent from '@/shared/components/LoadingModalComponent.vue';
import useClient from '@/clients/composables/useClient';

const route = useRoute();
const router = useRouter();

const {
  clientMutation,
  client,
  isError,
  isLoading,
  isUpdating,
  isUpdatingSuccess,
  updateClient
} = useClient( +route.params.id );

watch(clientMutation.isSuccess, () => {
  setTimeout(() => {
    clientMutation.reset();
  }, 2000);
});

watch(isError, () => {
  if ( isError.value ) router.replace('/clients');  
});

</script>

<template>
<h3 v-if="isUpdating">Saving...</h3>
<h3 v-if="isUpdatingSuccess">Saved</h3>
<LoadingModalComponent v-if="isLoading" />
<div v-if="client">
  <h2>{{ client.name }}</h2>
  <form @submit.prevent="updateClient(client!)">
    <input
      type="text"
      placeholder="Name"
      v-model="client.name"
    >
    <br>
    <input
      type="text"
      placeholder="Address"
      v-model="client.address"
    >
    <br>
    <button
      type="submit"
      :disabled="isUpdating"
    >
      Save
    </button>
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
