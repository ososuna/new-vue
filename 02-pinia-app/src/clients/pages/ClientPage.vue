<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import clientsApi from '@/api/clientsApi';
import LoadingModalComponent from '@/shared/components/LoadingModalComponent.vue';
import useClient from '@/clients/composables/useClient';
import type { Client } from '@/clients/interfaces/client';

const route = useRoute();
const queryClient = useQueryClient();

const { client, isLoading } = useClient( +route.params.id );

const updateClient = async( client: Client ):Promise<Client> => {
  // await new Promise( resolve => {
  //   setTimeout( () => resolve( true ), 1500 )
  // });
  const { data } = await clientsApi.patch<Client>(`/${client.id}`, client);
  const queries = queryClient.getQueryCache().findAll(['clients?page='], { exact: false });
  queries.forEach( query => query.fetch() );
  return data;
}

const clientMutation = useMutation( updateClient );

watch(clientMutation.isSuccess, () => {
  setTimeout(() => {
    clientMutation.reset();
  }, 2000);
});

</script>

<template>
<h3 v-if="clientMutation.isLoading.value">Saving...</h3>
<h3 v-if="clientMutation.isSuccess.value">Saved</h3>
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
    <button
      type="submit"
      :disabled="clientMutation.isLoading.value"
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
