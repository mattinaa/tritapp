<template>
  <div class="chat-input">
    <input v-model="messageText" @keypress.enter="handleSend" placeholder="Type a message..." />
    <button @click="handleSend">Send</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const messageText = ref('');
const emit = defineEmits(['send']);

const handleSend = () => {

  if (messageText.value.trim() !== '') {
    emit('send', messageText.value);
    messageText.value = ''; 
  }
};

</script>


<style scoped>

.chat-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #eee;
}

.chat-input input {
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}

.chat-input button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #0056b3;
}
</style>
