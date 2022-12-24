<script setup lang="ts">
import useClients from '@/clients/composables/useClients';
const { clients, isLoading } = useClients();
</script>

<template>
  <ul>
    <li>
      <RouterLink :to="{name: 'client-id', params: { id: 1 }}">
        Client 1
      </RouterLink>
    </li>
  </ul>
</template>


<style scoped>

</style>
