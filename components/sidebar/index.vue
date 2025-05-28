<script setup lang="ts">
import { useElementHover } from "@vueuse/core";

const myHoverableElement = useTemplateRef<HTMLElement>("myHoverableElement");
const isHovered = useElementHover(myHoverableElement);
</script>

<template>
  <div class="relative z-10">
    <aside
      ref="myHoverableElement"
      class="fixed top-0 left-0 h-screen w-16 hover:w-64 bg-white dark:bg-neutral-900 p-4 flex flex-col justify-between shadow-xl transition-all duration-300 ease-in-out border-r border-neutral-200 dark:border-neutral-700 overflow-hidden"
      role="navigation"
      aria-label="Main sidebar navigation"
    >
      <!-- Top Section -->
      <div>
        <!-- Logo / Brand -->
        <div class="mb-8 flex items-center justify-between">
          <div v-if="isHovered" class="flex items-center gap-3">
            <UIcon name="i-heroicons-map-pin-solid" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <span class="text-xl font-semibold font-logo text-neutral-900 dark:text-white">Let'sGo</span>
            <ColorMode />
          </div>
          <div v-else class="flex justify-center w-full">
            <UIcon name="i-heroicons-cube-transparent" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
        </div>

        <!-- Navigation -->
        <nav class="space-y-2">
          <SidebarItem
            :hovered="isHovered"
            icon="i-heroicons-home"
            label="Home"
            link="#"
            aria-label="Home"
          />
          <SidebarItem
            :hovered="isHovered"
            icon="i-heroicons-cog-6-tooth"
            label="Settings"
            link="#"
            aria-label="Settings"
          />
        </nav>
      </div>

      <!-- Bottom Section -->
      <UserCard :is-hovered="isHovered" />
    </aside>
  </div>
</template>

<style scoped>
/* Scoped styles for fine-tuned control */
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
