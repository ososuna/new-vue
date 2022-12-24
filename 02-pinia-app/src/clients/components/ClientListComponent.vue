<script setup lang="ts">
import useClients from '@/clients/composables/useClients';
const { clients, isLoading } = useClients();
</script>

<template>
  <ul>
    <li
      v-for="client of clients"
      :key="client.id"
    >
      <RouterLink :to="{
        name: 'client-id',
        params: { id: 1 }
      }">
        {{ client.name }}
      </RouterLink>
    </li>
  </ul>
</template>


<style scoped>

</style>
