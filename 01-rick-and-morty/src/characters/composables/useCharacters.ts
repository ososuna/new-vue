import { computed, ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character, CharacterResponse } from '@/characters/interfaces/character';

const characters   = ref<Character[]>([]);
const hasError     = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getCharacters = async() => {
  if ( characters.value.length > 0 ) {
    return characters.value;
  }
  const { data } = await rickAndMortyApi.get<CharacterResponse>('/character');
  return data.results;
};

const loadedCharacters = ( data: Character[] ) => {
  hasError.value     = false;
  errorMessage.value = null;
  characters.value   = data;
}

const useCharacters = () => {

  const { isLoading } = useQuery(
    ['characters'],
    getCharacters,
    {
      onSuccess: loadedCharacters
    },
  );

  return {
    // Properties
    characters,
    errorMessage,
    hasError,
    isLoading,
    // Getters
    count: computed( () => characters.value.length ),
    // Methods
  }
}

export default useCharacters;
