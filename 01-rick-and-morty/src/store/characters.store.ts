import { reactive } from 'vue';
import axios from 'axios';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character, CharacterResponse } from '@/characters/interfaces/character';

interface Store {
  characters: {
    list: Character[],
    count: number,
    isLoading: boolean,
    hasError: boolean,
    errorMessage: string | null
  },
  ids: {
    list: {
      [id: string]: Character;
    },
    isLoading: boolean,
    hasError: boolean,
    errorMessage: string | null
  },
  // Characters methods
  startLoadingCharacters: () => void;
  loadedCharacters: ( data: Character[] ) => void;
  loadCharactersFailed: ( error: string ) => void;
  // Characters by IDs methods
  startLoadingCharactersByIds: ( ids: string[] ) => void;
  checkIdInStore: ( id: string ) => boolean;
  loadedCharacterById: ( character: Character ) => void;
}

const characterStore = reactive<Store>({
  characters: {
    count: 0,
    errorMessage: null,
    hasError: false,
    isLoading: true,
    list: []
  },
  ids: {
    list: {},
    isLoading: false,
    hasError: false,
    errorMessage: null
  },
  async startLoadingCharacters() {
    try {
      const { data } = await rickAndMortyApi.get<CharacterResponse>('/character');
      this.loadedCharacters( data.results );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.loadCharactersFailed( error.message );
      }
    }
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
    this.characters = {
      count: 0,
      errorMessage: error,
      hasError: true,
      isLoading: false,
      list: []
    }
  },
  async startLoadingCharactersByIds( ids: string[] ) {
    this.ids = {
      ...this.ids,
      isLoading: true,
      hasError: false,
      errorMessage: null
    }
  },
  checkIdInStore( id: string ) {
    return !!this.ids.list[id];
  },
  loadedCharacterById( character: Character ) {
    this.ids.isLoading = false;
    this.ids.list[character.id] = character;
  }
});

characterStore.startLoadingCharacters();

export default characterStore;

