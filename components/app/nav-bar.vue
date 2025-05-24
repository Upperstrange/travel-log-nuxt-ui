<script setup lang='ts'>

</script>

<template>
  <!-- Navbar -->
  <div class="flex justify-between items-center backdrop-blur-2xl w-full h-fit p-4 bg-neutral-100/40 dark:bg-neutral-950/40">
    <!-- Logo -->
    <div class="flex gap-2 items-center">
      <NuxtImg src="https://www.iconpacks.net/icons/2/free-location-map-icon-2956-thumb.png" alt="Logo" class="w-12 h-12" />
      <h1 class="text-3xl font-bold">
        <a href="/">
          <span class="text-primary">Let's</span>
          <span class="text-secondary">Go</span>
        </a>
      </h1>
    </div>
    <!-- Right side group -->
    <div class="flex gap-2">
      <!-- Sign-in button -->
      <UButton leading-icon="i-lets-icons:user-alt" color="primary" variant="subtle" size="xl" label="Sign-in" />
      <!-- Theme switcher button -->
      <ColorMode />
    </div>
  </div>
</template>

<style>
</style>
