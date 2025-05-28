<script setup lang='ts'>
const authStore = useAuthStore();
</script>

<template>
  <section class="relative bg-gradient-to-br from-primary-50 via-primary-100 to-teal-50 dark:from-primary-900 dark:via-primary-800 dark:to-teal-900 overflow-hidden">
    <UContainer class="py-20 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
        <!-- Left side main section  -->
        <UCard class="bg-white/75 dark:bg-neutral-900/75 backdrop-blur-md">
          <!-- Hero title -->
          <template #header>
            <h1 class="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
              Your Journey,
              <span class="text-primary-600 dark:text-primary-400">Beautifully</span>
              Documented
            </h1>
          </template>
          <!-- Hero description -->
          <p class="mt-4 text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Capture every moment, map every adventure, and create lasting memories with Let'sGo.
            The ultimate travel companion for modern explorers.
          </p>
          <!-- Hero buttons -->
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <UButton
              v-if="!authStore.user"
              size="xl"
              variant="solid"
              label="Get Started Today"
              icon="i-heroicons-arrow-right"
              to="/login"
              class="flex-1 sm:flex-none justify-center"
            />
            <UButton
              v-if="authStore.user"
              size="xl"
              variant="solid"
              label="Go to dashboard"
              icon="i-heroicons-arrow-right"
              to="/dashboard"
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
          <!-- Hero footer -->
          <template #footer>
            <div class="mt-6 flex items-center space-x-6 text-sm text-neutral-500 dark:text-neutral-400">
              <!-- Community reviews -->
              <NuxtLink to="#" class="hover:text-primary-600 dark:hover:text-primary-400 flex items-center">
                <UIcon name="i-heroicons-star-solid" class="h-5 w-5 mr-1" />
                <span>Community Reviews</span>
              </NuxtLink>
              <!-- Explore Features -->
              <NuxtLink to="#" class="hover:text-primary-600 dark:hover:text-primary-400 flex items-center">
                <UIcon name="i-heroicons-sparkles-solid" class="h-5 w-5 mr-1" />
                <span>Explore Features</span>
              </NuxtLink>
            </div>
          </template>
        </UCard>
        <!-- Right side image section -->
        <div class="relative hidden lg:flex items-center justify-center p-8 aspect-square">
          <!-- Placeholder as of now -->
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
