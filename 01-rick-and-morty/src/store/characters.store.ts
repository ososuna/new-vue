import { reactive } from "vue";
import type { Character } from "@/characters/interfaces/character";

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
  startLoadingCharacters() {
    console.log('startLoadingCharacters');
  },
  loadedCharacters( data: Character[] ) {

  },
  loadCharactersFailed( error: string ) {
  }
});

characterStore.startLoadingCharacters();

export default characterStore;

