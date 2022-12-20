<script setup lang="ts">

import CardListComponent from '@/characters/components/CardListComponent.vue';
import useCharacters from '@/characters/composables/useCharacters';
 
const props = defineProps<{ title: string, visible: boolean }>();

const {
  isLoading,
  hasError,
  errorMessage,
  characters,
  count
} = useCharacters();

</script>

<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <div v-else-if="hasError">
      <h2>Error at loading</h2>
      <p>{{ errorMessage }}</p>
    </div>
    <template v-else>
      <h2>{{ props.title }} - ({{ count }})</h2>
      <CardListComponent :characters="characters" />
    </template>
  </div>
</template>
