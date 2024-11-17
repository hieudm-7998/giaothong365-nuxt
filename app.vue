<template>
  <div>
    <Header v-if="isDesktop && isHome" />
    <MobileHeader v-else-if="!isDesktop && isHome" />
    <NoBGHeader v-else-if="!isHome && isDesktop" />
    <MobileNoBGHeader v-else-if="!isHome && !isDesktop" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
const route = useRoute()
const isHome = computed(() => route.path === '/');
const isDesktop = useMediaQuery('(min-width: 960px)');
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-optical-sizing: auto;
  position: relative;
}

.router-link-active {
  font-weight: 600;
}
</style>