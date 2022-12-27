<script setup lang="ts">
interface Props {
  color?: string;
  size?: string;
  thickness?: number;
}
withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: '3rem',
  thickness: 5,
});
</script>

<template>
  <div class="column items-center">
    <q-spinner :size="size" :color="color" :thickness="thickness" />
    <span class="q-mt-sm">Loading</span>
  </div>
</template>

<style scoped></style>
