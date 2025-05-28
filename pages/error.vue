<script setup lang='ts'>
definePageMeta({
  layout: "basic",
});
const route = useRoute();
const error = route.query.error || "An unknown error occurred.";
</script>

<template>
  <div>
    <UContainer class="w-full max-w-md p-8 bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-xl text-center">
      <!-- Top error icon -->
      <div class="flex justify-center mb-6">
        <UIcon name="i-heroicons-exclamation-triangle-solid" class="h-12 w-12 text-red-500 dark:text-red-400" />
      </div>
      <!-- Error page title -->
      <h1 class="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
        Oops! Something went wrong.
      </h1>
      <!-- Error message -->
      <UAlert
        icon="i-heroicons-exclamation-circle"
        variant="soft"
        :title="typeof error === 'string' ? error : 'An unexpected error occurred.'"
        class="mb-8"
      />
      <!-- Button to go back home -->
      <UButton
        label="Go back home"
        to="/"
        variant="solid"
        color="primary"
        size="xl"
      />
    </UContainer>
  </div>
</template>
