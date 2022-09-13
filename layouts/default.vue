<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute()

</script>

<template>
  
  <pre>
    {{ route }}
  </pre>
  
  <GlobalHeader />
  <slot />

  <GlobalFooter />
</template>

<style lang="scss" scoped>

</style>