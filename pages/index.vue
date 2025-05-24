<script setup lang='ts'>
const loading = ref(true);
</script>

<template>
  <div>
    <ColorMode class="absolute top-2 right-2" />
    <h1>LOADING</h1>
    <div v-if="loading">
      <div class="flex items-center gap-4">
        <USkeleton class="h-12 w-12 rounded-full" />
        <div class="grid gap-2">
          <USkeleton class="h-4 w-[250px]" />
          <USkeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
