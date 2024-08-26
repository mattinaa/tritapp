<template>
    <div :class="['message', message.from]">
      <div class="text">{{ message.text }}</div>
      <div class="timestamp">{{ message.timestamp }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: Object,
  });
  </script>
  
  <style scoped>
  .message {
    margin-bottom: 10px;
    max-width: 60%;
    padding: 10px;
    border-radius: 10px;
  }
  
  .message.bot {
    background-color: #f1f1f1;
    align-self: flex-start;
  }
  
  .message.user {
    background-color: #007bff;
    color: white;
    align-self: flex-end;
  }
  
  .timestamp {
    font-size: 0.75em;
    text-align: right;
    margin-top: 5px;
  }
  </style>
  