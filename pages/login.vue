<script setup lang='ts'>
definePageMeta({
  layout: "basic",
});
</script>

<template>
  <div>
    <UContainer class="w-full max-w-md p-8 bg-white dark:bg-neutral-800 rounded-xl shadow-xl text-center">
      <div class="flex justify-center mb-6">
        <UIcon name="i-heroicons-map-pin-solid" class="size-5 text-primary-600 dark:text-primary-400" />
      </div>
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
        Welcome Back to Let'sGo!
      </h1>
      <p class="text-neutral-600 dark:text-neutral-300 mb-8">
        Sign in to continue your journey and keep your travel memories alive.
      </p>
      <AuthBtn btn-size="xl" />
      <p class="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
        Don't have an account? No worries, signing in will create one for you!
      </p>
    </UContainer>
  </div>
</template>

<style>
/* You can add specific styles here if needed */
</style>
