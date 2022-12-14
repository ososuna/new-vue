<script setup lang="ts">
import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import type { Character } from '@/characters/interfaces/character';

const props = defineProps<{ character: Character }>();
const character = toRef(props, 'character');

const router = useRouter();

</script>

<template>
  <div class="character-card" @click="router.push(`by/${character.id}`)">
    <img :src="character.image" :alt="character.name">
    <h3>{{ character.name }}</h3>
  </div>
</template>


<style scoped>
.character-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
}

img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all .5s;
}
</style>