<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const showColorMode = breakpoints.greaterOrEqual("sm");
</script>

<template>
  <div class="min-h-screen w-full flex">
    <ColorMode v-if="showColorMode" class="absolute top-4 right-4" />
    <Sidebar class="sidebar-desktop-custom-styling" />
    <main class="flex flex-col p-4 w-full">
      <slot />
    </main>
    <SidebarMobile class="sidebar-mobile-custom-styling" />
  </div>
</template>

<style scoped>
.sidebar-desktop-custom-styling {
  display: flex;
}

@media (max-width: 640px) {
  .sidebar-desktop-custom-styling {
    display: none;
  }
}
.sidebar-mobile-custom-styling {
  display: none; /* Hidden by default */
  position: absolute;
  bottom: 1rem;
  right: 0;
  left: 0;
}

@media (max-width: 640px) {
  .sidebar-mobile-custom-styling {
    display: flex;
  }
}
</style>
