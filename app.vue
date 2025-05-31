<script setup lang="ts">
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
