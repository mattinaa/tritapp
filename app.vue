<template>
  <ChatLayout>
    <template #sidebar>
      <ChatSidebar :chats="chats" @selectChat="setSelectedChat" />
    </template>
    <template #window>
      <ChatWindow :selectedChat="selectedChat" @sendMessage="sendMessage" />
    </template>
  </ChatLayout>
</template>

<script setup>
import ChatLayout from '@/layouts/ChatLayout.vue';
import ChatSidebar from '@/components/ChatSidebar.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import { ref, watch, onMounted } from 'vue';

const loadChatsFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedChats = localStorage.getItem('chats');
    return storedChats ? JSON.parse(storedChats) : defaultChats;
  }
  return defaultChats;
};

const defaultChats = [
  {
    name: "Code Bot",
    messages: [
      { text: "Welcome to Code Bot!", from: "bot", timestamp: "15:30" },
      { text: "How can I assist you?", from: "bot", timestamp: "15:35" },
    ],
  },
  {
    name: "Mahdi Hashemi Karbalaee",
    messages: [
      { text: "Hello!", from: "user", timestamp: "16:00" },
      { text: "I'm facing an issue.", from: "user", timestamp: "16:05" },
    ],
  },
  {
    name: "TRITA",
    messages: [
      { text: "New project update available.", from: "bot", timestamp: "16:30" },
      { text: "Please check the documentation.", from: "bot", timestamp: "16:45" },
    ],
  },
];

const chats = ref(loadChatsFromLocalStorage());
const selectedChat = ref(chats.value[0]);

const saveChatsToLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('chats', JSON.stringify(chats.value));
  }
};

const setSelectedChat = (chat) => {
  selectedChat.value = chat;
};

// const sendMessage = (text) => {
//   const newMessage = {
//     text,
//     from: "user",
//     timestamp: new Date().toLocaleTimeString(),
//   };
//   selectedChat.value.messages.push(newMessage);
//   saveChatsToLocalStorage();
// };

watch(chats, saveChatsToLocalStorage, { deep: true });

const syncMessagesAcrossTabs = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.addEventListener('storage', (event) => {
      if (event.key === 'chats') {
        chats.value = JSON.parse(event.newValue);
        selectedChat.value = chats.value.find(chat => chat.name === selectedChat.value.name) || chats.value[0];
      }
    });
  }
};

onMounted(() => {
  syncMessagesAcrossTabs();
});

</script>
