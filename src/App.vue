<template>
  <TopHeader></TopHeader>
  <!-- If I remove TopHeader, dynamic component is rendered correctly. -->
  <main>
    <component :is="view"></component>
  </main>
  <footer> thanks vue3 </footer>
</template>

<script>
import TopHeader from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import MyTest from './components/MyTest.vue'

export default {
  name: 'App',
  components: {
    TopHeader,
    HelloWorld,
    MyTest,
  },
  setup() {
    return {
      view: 'MyTest',
    }
  }
}
</script>
