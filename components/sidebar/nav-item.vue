<script setup lang='ts'>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: String,
  to: String,
});
const route = useRoute();
const sidebarStore = useSidebarStore();
</script>

<template>
  <div>
    <UTooltip
      :content="{
        align: 'center', side: 'right', sideOffset: 8 }"
      :disabled="sidebarStore.isOpen"
      :text="label"
    >
      <NuxtLink
        :to="to"
        :class="{ 'dark:bg-neutral-800/40 bg-neutral-100/60': route.path === to, 'gap-2': sidebarStore.isOpen, 'items-center justify-center': !sidebarStore.isOpen }"
        class="group flex items-center w-full p-2 mt-2 hover:bg-neutral-100 hover:dark:bg-neutral-800 rounded-lg hover:cursor-pointer"
      >
        <UIcon
          :name="icon" size="24"
          class="group-hover:text-primary-400"
        />
        <span v-if="sidebarStore.isOpen" class="text-neutral-800/80 dark:text-neutral-200/80 text-sm text-shadow-2xs">{{
          label }}</span>
      </NuxtLink>
    </UTooltip>
  </div>
</template>

<style></style>
