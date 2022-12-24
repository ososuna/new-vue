<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '@/store/counter-options';
import CounterOptionsValue from '@/counter/components/CounterOptionsValue.vue';

const store = useCounterOptionsStore();
const { count, squareCount } = storeToRefs(store);
const { increment, incrementBy } = store;

</script>

<template>
  <h1>Pinia Options</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>
  <br>
  <button @click="increment()" >+1</button>
  <button @click="incrementBy(2)" >+2</button>
  <button @click="incrementBy(5)" >+5</button>
  <button @click="store.$reset()">Reset</button>
  <br>
  <CounterOptionsValue />
</template>

<style scoped>
button {
  margin-right: 5px;
}
</style>
