<script setup lang='ts'>
defineProps({
  label: String,
  icon: {
    type: String,
    default: "i-lucide-home",
  },
  link: String,
  isLink: {
    type: Boolean,
    default: true,
  },
});
const route = useRoute();
</script>

<template>
  <div class="my-auto mx-4">
    <NuxtLink
      v-if="isLink"
      :to="link"
      class="flex flex-col gap-1 items-center justify-center flex-1 transition-colors duration-200 group"
    >
      <UIcon
        :name="icon"
        :class="{ 'text-primary-600 dark:text-primary-400': route.path === link }"
        class="w-6 h-6 text-neutral-500 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400"
      />
      <span class="text-xs text-neutral-700 dark:text-neutral-300">
        {{ label }}
      </span>
    </NuxtLink>
    <UIcon
      v-else
      :name="icon"
      class="w-6 h-6 text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 cursor-pointer"
    />
  </div>
</template>

<style></style>
