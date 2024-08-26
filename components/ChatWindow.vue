<template>
  <div class="chat-window">
    <div class="messages">
      <ChatMessage
        v-for="(message, index) in selectedChat?.messages || []"
        :key="index"
        :message="message"
      />
    </div>
    <ChatInput @send="sendMessage" />  <!-- فقط یکبار -->
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import ChatMessage from './ChatMessage.vue';
import ChatInput from './ChatInput.vue';

const props = defineProps({
  selectedChat: Object
});

const messages = ref([]);

watch(
  () => props.selectedChat,
  (newChat) => {
    if (newChat) {
      messages.value = newChat.messages;
    }
  },
  { immediate: true }
);

const sendMessage = (text) => {
  if (!text) return;
  const newMessage = { text, from: "user", timestamp: new Date().toLocaleTimeString() };
  messages.value.push(newMessage);
  if (props.selectedChat) {
    props.selectedChat.messages.push(newMessage);
  }
};
</script>




<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.messages {
  flex-grow: 1;
  overflow-y: scroll;
  padding: 20px;
}
</style>
