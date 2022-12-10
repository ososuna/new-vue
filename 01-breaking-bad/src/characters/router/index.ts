import type { RouteRecordRaw } from 'vue-router';
import CharacterLayoutVue from '@/characters/layout/CharacterLayout.vue';
import CharacterIdPage from '@/characters/pages/CharacterIdPage.vue';
import CharacterListPageVue from '@/characters/pages/CharacterListPage.vue';
import CharacterSearchPage from '@/characters/pages/CharacterSearchPage.vue';

const characterRoute: RouteRecordRaw = {
  path: '/characters',
  redirect: '/characters/list',
  component: CharacterLayoutVue,
  children: [
    {
      path: 'by/id',
      name: 'character-id',
      props: { title: 'Character By ID', visible: false },
      component: CharacterIdPage
    },
    {
      path: 'list',
      name: 'character-list',
      props: { title: 'List', visible: true },
      component: CharacterListPageVue
    },
    {
      path: 'search',
      name: 'character-search',
      props: { title: 'Search', visible: true },
      component: CharacterSearchPage
    }
  ]
}
export default characterRoute;
