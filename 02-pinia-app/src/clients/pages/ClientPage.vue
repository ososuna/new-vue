<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMutation } from '@tanstack/vue-query';
import clientsApi from '@/api/clientsApi';
import LoadingModalComponent from '@/shared/components/LoadingModalComponent.vue';
import useClient from '@/clients/composables/useClient';
import type { Client } from '@/clients/interfaces/client';

const route = useRoute();

const { client, isLoading } = useClient( +route.params.id );

const updateClient = async( client: Client ):Promise<Client> => {
  const { data } = await clientsApi.patch<Client>(`/${client.id}`, client);
  return data;
}

const clientMutation = useMutation( updateClient );

</script>

<template>
<h3>Saving...</h3>
<h3>Saved</h3>
<LoadingModalComponent v-if="isLoading" />
<div v-if="client">
  <h2>{{ client.name }}</h2>
  <form @submit.prevent="clientMutation.mutate(client!)">
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
