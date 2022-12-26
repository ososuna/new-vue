<script setup lang="ts">
import ClientListComponent from '@/clients/components/ClientListComponent.vue';
import LoadingModalComponent from '@/shared/components/LoadingModalComponent.vue';
import PaginationNumbersComponent from '@/clients/components/PaginationNumbersComponent.vue';
import useClients from '@/clients/composables/useClients';

const { clients, currentPage, getPage, isLoading, totalPages } = useClients();

</script>

<template>
<h2>Clients List</h2>
<ClientListComponent :clients="clients" />
<PaginationNumbersComponent
  :current-page="currentPage"
  :total-pages="totalPages"
  @page-changed="getPage"
/>
<LoadingModalComponent v-if="isLoading" />
</template>
