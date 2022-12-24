<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
const counter = useCounterOptionsStore();
</script>

<template>
  <h1>The value is: {{ counter.count }}</h1>
  <h4>Last change: {{ counter.lastChange }}</h4>
</template>
