<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';
const counter = useCounterSetupStore();
</script>

<template>
  <h1>The value is: {{ counter.count }}</h1>
  <h4>Last change: {{ counter.lastChange }}</h4>
</template>
