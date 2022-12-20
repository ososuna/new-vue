import { ref } from 'vue';
import type { Character } from '@/characters/interfaces/character';

const characters   = ref<Character[]>([]);
const isLoading    = ref<boolean>(false);
const hasError     = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const useCharacters = () => {

  return {
    // Properties
    characters,
    errorMessage,
    hasError,
    isLoading
    // Getters

    // Methods
  }
}

export default useCharacters;
