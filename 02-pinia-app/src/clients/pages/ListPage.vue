<script setup lang="ts">
import ClientListComponent from '@/clients/components/ClientListComponent.vue';
import PaginationNumbersComponent from '@/clients/components/PaginationNumbersComponent.vue';

</script>

<template>
<h2>Clients List</h2>
<!-- Client List -->
<ClientListComponent />
<!-- Pagination numbers -->
<PaginationNumbersComponent />
<!-- Loading modal -->
</template>
