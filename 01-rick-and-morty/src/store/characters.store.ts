import { reactive } from 'vue';
import type { Character, CharacterResponse } from '@/characters/interfaces/character';
import rickAndMortyApi from '@/api/rickAndMortyApi';

interface Store {
  characters: {
    list: Character[],
    count: number,
    isLoading: boolean,
    hasError: boolean,
    errorMessage: string | null
  },
  startLoadingCharacters: () => void;
  loadedCharacters: ( data: Character[] ) => void;
  loadCharactersFailed: ( error: string ) => void;
}

const characterStore = reactive<Store>({
  characters: {
    count: 0,
    errorMessage: null,
    hasError: false,
    isLoading: true,
    list: []
  },
  async startLoadingCharacters() {
    const { data } = await rickAndMortyApi.get<CharacterResponse>('/character');
    this.loadedCharacters( data.results );
  },
  loadedCharacters( data: Character[] ) {
    this.characters = {
      count: data.length,
      errorMessage: null,
      hasError: false,
      isLoading: false,
      list: data
    }
  },
  loadCharactersFailed( error: string ) {
  }
});

characterStore.startLoadingCharacters();

export default characterStore;

