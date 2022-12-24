import { createRouter, createWebHistory } from 'vue-router';
import CounterOptionsPageVue from '@/counter/pages/CounterOptionsPage.vue';
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter1',
      component: CounterOptionsPageVue
    },
    {
      path: '/counter2',
      name: 'counter2',
      component: CounterSetupPage
    }
  ]
});

export default router;
