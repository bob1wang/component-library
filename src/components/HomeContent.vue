<script setup lang="ts">
// 这里可以添加组件逻辑
</script>

<template>
  <div class="home-content">
    <section class="intro">
      <h2>欢迎使用微径组件库</h2>
      <p>这是一个基于Vue 3的高质量UI组件库，专为现代Web应用设计。</p>
    </section>

    <section class="features">
      <h3>主要特性</h3>
      <ul>
        <li>完全使用Composition API开发</li>
        <!-- <li>响应式设计，适配各种设备</li> -->
        <li>主题定制简单方便</li>
        <li>完善的文档和示例</li>
      </ul>
    </section>

  <section class="tech-stack">
    <h3>技术栈</h3>
    <div class="tech-grid">
      <div class="tech-item">
        <h4>Vue 3</h4>
        <p>使用Composition API和TypeScript开发</p>
      </div>
      <div class="tech-item">
        <h4>Vite</h4>
        <p>极速的开发构建工具</p>
      </div>
      <div class="tech-item">
        <h4>Pinia</h4>
        <p>状态管理解决方案</p>
      </div>
      <div class="tech-item">
        <h4>Sass</h4>
        <p>样式预处理</p>
      </div>
    </div>
  </section>

  <!-- <section class="getting-started">
    <h3>快速开始</h3>
    <p>安装组件库：</p>
    <pre><code>npm install micro-diameter-component-library</code></pre>
  </section> -->
  </div>
</template>

<style scoped>
.home-content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.intro {
  margin-bottom: 2rem;
}

.intro h2 {
  color: #42b983;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.intro p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.features {
  margin: 2rem 0;
}

.features h3 {
  font-size: 1.5rem;
  color: #42b983;
  margin-bottom: 1rem;
}

.features ul {
  list-style: disc;
  padding-left: 2rem;
}

.features li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.tech-stack {
  margin: 2rem 0;
}

.tech-stack h3 {
  font-size: 1.5rem;
  color: #42b983;
  margin-bottom: 1.5rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.tech-item {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
}

.tech-item h4 {
  color: #42b983;
  margin-bottom: 0.5rem;
}

.getting-started h3 {
  font-size: 1.5rem;
  color: #42b983;
  margin-bottom: 1rem;
}

pre {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
