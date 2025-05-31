<script setup lang='ts'>
defineProps({
  label: String,
  icon: {
    type: String,
    default: "i-lucide-home",
  },
  link: String,
});
</script>

<template>
  <div class="my-auto mx-4">
    <NuxtLink
      :to="link"
      class="flex flex-col gap-1 items-center justify-center flex-1 transition-colors duration-200 group"
    >
      <UIcon
        :name="icon"
        class="w-6 h-6 text-neutral-500 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400"
      />
      <span class="text-xs text-neutral-700 dark:text-neutral-300">
        {{ label }}
      </span>
    </NuxtLink>
  </div>
</template>

<style></style>
