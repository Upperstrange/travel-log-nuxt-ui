<script setup lang='ts'>
definePageMeta({
  layout: "basic",
});
const authStore = useAuthStore();

onMounted(() => {
  authStore.signOut();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800">
      <!-- You can replace this with a Nuxt UI spinner component if available -->
      <svg class="animate-spin h-10 w-10 text-primary-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      <p class="text-center text-lg font-medium text-gray-700 dark:text-gray-200">
        Logging you out...
      </p>
    </div>
  </div>
</template>

<style>
</style>
