<script setup lang="ts">
const isHovered = shallowRef(false);
const hovered = () => isHovered.value = true;
const notHovered = () => isHovered.value = false;
</script>

<template>
  <div class="">
    <aside class="h-screen w-16 hover:w-64 bg-white dark:bg-neutral-900 p-4 flex flex-col justify-between shadow-xl transition-all duration-300 ease-in-out border-r border-neutral-200 dark:border-neutral-700 overflow-hidden" role="navigation" aria-label="Main sidebar navigation" @mouseenter="hovered" @mouseleave="notHovered">
      <!-- Top Section -->
      <div>
        <!-- Logo -->
        <div class="mb-8 flex items-center justify-between">
          <!-- Logo when hovered -->
          <div v-if="isHovered" class="flex items-center gap-3">
            <Logo :size="64" primary-color="#2563EB" secondary-color="#059669" />
            <span class="text-xl font-semibold font-logo text-neutral-900 dark:text-white">Let'sGo</span>
          </div>
          <!-- Logo when not hovered -->
          <Logo v-else :size="64" primary-color="#2563EB" secondary-color="#059669" />
        </div>
        <!-- Navigation -->
        <nav class="space-y-2">
          <SidebarItem :hovered="isHovered" icon="i-heroicons-home" label="Home" link="#" aria-label="Home" />
          <SidebarItem :hovered="isHovered" icon="i-heroicons-cog-6-tooth" label="Settings" link="#" aria-label="Settings" />
        </nav>
      </div>
      <!-- Bottom Section -->
      <SidebarUserCard :is-hovered="isHovered" />
    </aside>
  </div>
</template>

<style scoped>
aside {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

aside::-webkit-scrollbar {
  width: 6px;
}

aside::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

aside::-webkit-scrollbar-track {
  background: transparent;
}
</style>
