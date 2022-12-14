import type { RouteRecordRaw } from 'vue-router';
import CharacterLayoutVue from '@/characters/layout/CharacterLayout.vue';
import CharacterIdPage from '@/characters/pages/CharacterIdPage.vue';
import CharacterListPageVue from '@/characters/pages/CharacterListPage.vue';
import CharacterSearchPage from '@/characters/pages/CharacterSearchPage.vue';

const ROUTE_NAME = 'characters';

const characterRoute: RouteRecordRaw = {
  path: `/${ ROUTE_NAME }`,
  redirect: `/${ ROUTE_NAME }/list`,
  component: CharacterLayoutVue,
  children: [
    {
      path: 'by/:id',
      name: 'character-id',
      props: { title: 'Character By ID', visible: false },
      component: CharacterIdPage
    },
    {
      path: `/${ ROUTE_NAME }/list`,
      name: 'character-list',
      props: { title: 'List', visible: true },
      component: CharacterListPageVue
    },
    {
      path: `/${ ROUTE_NAME }/search`,
      name: 'character-search',
      props: { title: 'Search', visible: true },
      component: CharacterSearchPage
    }
  ]
}
export default characterRoute;
