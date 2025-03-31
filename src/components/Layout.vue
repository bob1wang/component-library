<script setup lang="ts">
import NavBar from './NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <NavBar />
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 2rem;
}
</style>
