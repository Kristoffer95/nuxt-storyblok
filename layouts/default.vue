<script setup>
  // import { useRoutem } from 'vue-router';
  import { ref } from 'vue';

  const location = ref()

  onMounted(() => {
    location.value = window.location.host
  })

</script>

<template>
  
  <pre>
    {{ location }}
  </pre>
  
  <GlobalHeader />
  <slot />

  <GlobalFooter />
</template>

<style lang="scss" scoped>

</style>