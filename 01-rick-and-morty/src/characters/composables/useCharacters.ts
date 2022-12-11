import { onMounted, ref } from 'vue';
import axios from 'axios';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { CharacterResponse, Character } from '@/characters/interfaces/character';

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharacters = () => {

  onMounted( async() => {
    await loadCharacters();
  });

  const loadCharacters = async() => {
    if ( characters.value.length > 0 ) return;
    isLoading.value = true;
    try {
      const { data } = await rickAndMortyApi.get<CharacterResponse>('/character');
      characters.value = data.results;
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      isLoading.value = false;
      if ( axios.isAxiosError(error) ) {
        errorMessage.value = error.message;
        return;
      }
      errorMessage.value = JSON.stringify(error);
    }
  }

  return {
    characters,
    isLoading,
    hasError,
    errorMessage
  }
}
