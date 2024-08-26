<template>
    <div class="chat-layout">
      <div class="sidebar">
        <slot name="sidebar"></slot>
      </div>
      <div class="chat-window">
        <slot name="window"></slot>
      </div>
    </div>
  </template>
  
  <style scoped>
  .chat-layout {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    width: 25%;
    border-right: 1px solid #ccc;
  }
  
  .chat-window {
    width: 75%;
    position: relative;
  }
  </style>
  