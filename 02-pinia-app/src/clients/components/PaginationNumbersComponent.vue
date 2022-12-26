<script setup lang="ts">
import { ref, toRef, watch } from 'vue';
import useClients from '@/clients/composables/useClients';

const emits = defineEmits<{
  (event: 'pageChanged', page: number): void;
}>();

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const currentPage = toRef(props, 'currentPage');
const totalPages = toRef(props, 'totalPages');

const totalPageNumbers = ref<number[]>([]);

watch(totalPages, (totalPages) => {
  totalPageNumbers.value = [...new Array(totalPages)].map((_, i) => i + 1)
}, { immediate: true });

const { getPage } = useClients();

</script>

<template>
  <div>
    <button
      :disabled="currentPage === 1"
      @click="getPage(currentPage - 1)"
    >Previous</button>
    <button
      v-for="number of totalPageNumbers"
      :key="number"
      :class="{ active: currentPage === number }"
      @click="emits('pageChanged', number)"
    >
      {{ number }}
    </button>
    <button
      :disabled="currentPage === totalPages"
      @click="getPage(currentPage + 1)"
    >Next</button>
  </div>
</template>

<style scoped>
div {
  margin-top: 10px;
}

button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  margin-right: 5px;
  padding: 10px;
  transition: all .5s;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  transition: all .5s;
}

button:disabled {
  cursor: not-allowed;
}

.active {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
