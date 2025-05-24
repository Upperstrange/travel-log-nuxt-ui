<script setup lang='ts'>

</script>

<template>
  <div
    class="container mx-auto bg-primary-500/8 border border-primary-400/70 rounded-xl h-auto p-8 md:p-16 flex items-center justify-center min-h-[calc(100vh-200px)]"
  >
    <!-- Centered content -->
    <div class="text-center">
      <!-- Hero title -->
      <h1 class="font-bold text-5xl md:text-7xl text-shadow-sm mb-6">
        Share Your Journey, <br> Inspire Others
      </h1>
      <!-- Subtitle -->
      <p class="text-xl md:text-2xl mb-10 text-neutral-400 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6">
        Document your adventures, discover new places, and connect with a community of travelers.
      </p>
      <!-- CTA Button -->
      <UButton
        size="xl" label="Get Started" trailing-icon="i-heroicons-arrow-right-circle-20-solid" trailing
        color="primary" variant="solid"
      >
        Start Your Adventure
      </UButton>
    </div>
  </div>
</template>

<style></style>
