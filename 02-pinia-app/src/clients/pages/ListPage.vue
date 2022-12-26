<script setup lang="ts">
import ClientListComponent from '@/clients/components/ClientListComponent.vue';
import LoadingModalComponent from '@/shared/components/LoadingModalComponent.vue';
import PaginationNumbersComponent from '@/clients/components/PaginationNumbersComponent.vue';
import useClients from '@/clients/composables/useClients';

const { isLoading } = useClients();

</script>

<template>
<h2>Clients List</h2>
<!-- Client List -->
<ClientListComponent />
<!-- Pagination numbers -->
<PaginationNumbersComponent />
<!-- Loading modal -->
<LoadingModalComponent v-if="isLoading" />
</template>
