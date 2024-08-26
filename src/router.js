import { createRouter, createWebHistory } from 'vue-router';
import ChatList from './components/ChatList.vue';
import ChatWindow from './components/ChatWindow.vue';

const routes = [
  {
    path: '/chat/:id',
    name: 'ChatWindow',
    component: ChatWindow,
  },
  {
    path: '/',
    name: 'ChatList',
    component: ChatList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
