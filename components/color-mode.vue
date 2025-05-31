<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});

function setColorMode(mode) {
  colorMode.preference = mode;
}
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UPopover>
      <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="neutral" variant="ghost" />

      <template #content>
        <div class="w-30 h-fit rounded-xl flex flex-col justify-center items-center bg-white dark:bg-neutral-900 ring-neutral-400/40 text-sm font-display text-neutral-900/80 dark:text-neutral-100/80 cursor-pointer">
          <span class="w-full h-fit flex items-center gap-2 rounded-md p-2 hover:bg-neutral-100 hover:dark:bg-neutral-800" @click="setColorMode('dark')">
            <UIcon name="i-lucide-moon" class="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
            Dark mode
          </span>
          <span class="w-full h-fit flex items-center gap-2 rounded-md p-2 hover:bg-neutral-100 hover:dark:bg-neutral-800" @click="setColorMode('light')">
            <UIcon name="i-lucide-sun" class="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
            Light Mode
          </span>
          <span class="w-full h-fit flex items-center gap-2 rounded-md p-2 hover:bg-neutral-100 hover:dark:bg-neutral-800" @click="setColorMode('system')">
            <UIcon name="i-lucide-laptop" class="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
            System
          </span>
        </div>
      </template>
    </UPopover>

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
