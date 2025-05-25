<script setup lang='ts'>
// Ensure nuxt-icon is installed and configured in nuxt.config.ts to use icons
// import { ArrowDownTrayIcon, InformationCircleIcon } from '@heroicons/vue/24/solid' // Example if using Heroicons directly
</script>

<template>
  <section class="relative bg-gradient-to-br from-primary-50 via-primary-100 to-teal-50 dark:from-primary-900 dark:via-primary-800 dark:to-teal-900 overflow-hidden">
    <UContainer class="py-20 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
        <UCard class="bg-white/75 dark:bg-neutral-900/75 backdrop-blur-md">
          <template #header>
            <h1 class="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
              Your Journey,
              <span class="text-primary-600 dark:text-primary-400">Beautifully</span>
              Documented
            </h1>
          </template>

          <p class="mt-4 text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Capture every moment, map every adventure, and create lasting memories with Let'sGo.
            The ultimate travel companion for modern explorers.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <UButton
              size="xl"
              label="Get Started Today"
              icon="i-heroicons-arrow-down-tray-solid"
              class="flex-1 sm:flex-none justify-center"
            />
            <UButton
              size="xl"
              variant="outline"
              label="Learn More"
              icon="i-heroicons-information-circle-solid"
              class="flex-1 sm:flex-none justify-center"
            />
          </div>

          <template #footer>
            <div class="mt-6 flex items-center space-x-6 text-sm text-neutral-500 dark:text-neutral-400">
              <NuxtLink to="#" class="hover:text-primary-600 dark:hover:text-primary-400 flex items-center">
                <UIcon name="i-heroicons-star-solid" class="h-5 w-5 mr-1" />
                <span>Community Reviews</span>
              </NuxtLink>
              <NuxtLink to="#" class="hover:text-primary-600 dark:hover:text-primary-400 flex items-center">
                <UIcon name="i-heroicons-sparkles-solid" class="h-5 w-5 mr-1" />
                <span>Explore Features</span>
              </NuxtLink>
            </div>
          </template>
        </UCard>

        <div class="relative hidden lg:flex items-center justify-center p-8 aspect-square">
          <!-- Placeholder for a more engaging visual -->
          <div class="w-full h-full bg-gradient-to-br from-primary-200 to-teal-200 dark:from-primary-700 dark:to-teal-700 rounded-xl shadow-2xl flex items-center justify-center">
            <UIcon name="i-heroicons-map-pin-solid" class="w-24 h-24 text-white/50" />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* Scoped styles for this component */
.from-primary-50 {
  --tw-gradient-from: var(--color-primary-50) var(--tw-gradient-from-position);
  --tw-gradient-to: var(--color-primary-100) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.dark .dark\:from-primary-900 {
  --tw-gradient-from: var(--color-primary-900) var(--tw-gradient-from-position);
  --tw-gradient-to: var(--color-primary-800) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
</style>
