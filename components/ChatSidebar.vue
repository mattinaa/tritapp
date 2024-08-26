<template>
  <div class="sidebar-content">
    <div
      v-for="(chat, index) in chats"
      :key="index"
      class="chat-item"
      @click="selectChat(chat)"
    >
      <div class="chat-name">{{ chat.name }}</div>
      <div class="chat-preview">{{ getLastMessagePreview(chat) }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  chats: Array,
});

const emit = defineEmits(['selectChat']);

const getLastMessagePreview = (chat) => {
  const lastMessage = chat.messages[chat.messages.length - 1];
  return lastMessage ? lastMessage.text : '';
};

const selectChat = (chat) => {
  emit('selectChat', chat);
};
</script>

<style scoped>
.sidebar-content {
  padding: 10px;
}

.chat-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.chat-item:hover {
  background-color: #f9f9f9;
}

.chat-name {
  font-weight: bold;
}

.chat-preview {
  color: #888;
}
</style>
