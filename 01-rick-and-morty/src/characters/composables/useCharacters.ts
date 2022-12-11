import { ref } from 'vue';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { CharacterResponse, Character } from '@/characters/interfaces/character';

export const useCharacters = () => {

  const characters = ref<Character[]>([]);
  const isLoading = ref<boolean>(true);

  rickAndMortyApi.get<CharacterResponse>('/character')
    .then(({ data }) => {
      characters.value = data.results;
      isLoading.value = false;
    });

  return {
    characters,
    isLoading
  }
}
