<script setup lang="ts">
defineProps<{
  hovered: boolean;
  icon: string;
  label: string;
  link: string;
}>();
</script>

<template>
  <NuxtLink
    :to="link" class="group flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 ring-primary-500" :class="{ 'justify-center': !hovered }"
  >
    <UIcon :name="icon" class="w-6 h-6 text-neutral-600 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
    <span v-if="hovered" class="ml-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 truncate">
      {{ label }}
    </span>
  </NuxtLink>
</template>
