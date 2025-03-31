<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeIndex = ref(route.name as string)

watch(() => route.name, (newName) => {
  activeIndex.value = newName as string
})

const handleSelect = (key: string) => {
  router.push({ name: key })
}
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">微径组件库V0.1</h1>
      <ul class="nav-links">
        <li 
          :class="{ active: activeIndex === 'home' }"
          @click="handleSelect('home')"
        >
          首页
        </li>
        <li 
          :class="{ active: activeIndex === 'ComponentLibrary' }"
          @click="handleSelect('ComponentLibrary')"
        >
          组件
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: rgba(66, 185, 131, 0.8);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  margin: 0;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-links li.active {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
