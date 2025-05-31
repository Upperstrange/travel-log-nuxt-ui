<script setup lang="ts">
const sidebarStore = useSidebarStore();
</script>

<template>
  <div :class="{ 'w-68': sidebarStore.isOpen, 'w-20': !sidebarStore.isOpen }" class="flex gap-1 transition-all duration-300">
    <!-- Sidebar content -->
    <div class="bg-white dark:bg-neutral-950 flex flex-col justify-between border-r-1 border-r-neutral-300/30 drop-shadow-xs w-full">
      <!-- Top area -->
      <div class="flex flex-col">
        <!-- Logo -->
        <div :class="{ 'justify-start gap-2 ml-4': sidebarStore.isOpen, 'justify-center mx-auto': !sidebarStore.isOpen }" class="flex items-center my-4">
          <Logo />
          <span v-if="sidebarStore.isOpen" class="font-logo text-2xl font-bold">Let'sGo</span>
        </div>
        <USeparator />
        <!-- Navigation area -->
        <div class="flex flex-col justify-start px-4 mt-4">
          <slot name="nav-group" />
        </div>
      </div>
      <SidebarUserCard :is-hovered="sidebarStore.isOpen" class="px-4 mb-4" />
    </div>
    <!-- Sidebar Toggle -->
    <div :class="{ 'justify-end': sidebarStore.isOpen, 'justify-center': !sidebarStore.isOpen }" class="flex mt-12">
      <UTooltip text="Toggle sidebar">
        <UButton
          icon="i-lucide-sidebar" variant="ghost" color="neutral" class="w-fit h-fit mr-2"
          @click="sidebarStore.toggle"
        />
      </UTooltip>
    </div>
  </div>
</template>
