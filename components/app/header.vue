<script setup lang='ts'>
const mobileMenuOpen = ref(false);
const authStore = useAuthStore();
const navLinks = [
  { label: "Features", to: "#features" },
  { label: "How it Works", to: "#how-it-works" },
  { label: "Reviews", to: "#testimonials" },
];
</script>

<template>
  <header class="backdrop-blur-2xl bg-white/40 dark:bg-neutral-900/40 shadow-sm sticky top-0 z-50">
    <UContainer>
      <!-- Header content -->
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <NuxtImg src="/icon.png" class="w-48 h-48"/>
          <span class="ml-2 text-2xl font-bold font-logo text-neutral-900 dark:text-white">Let'sGo</span>
        </NuxtLink>
        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-2">
          <!-- Navigation Links -->
          <UButton
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            variant="ghost"
            color="neutral"
            class="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {{ link.label }}
          </UButton>
          <!-- Login button -->
          <AuthBtn v-if="!authStore.user" />
          <!-- Logout button -->
          <AuthBtn v-if="authStore.user" :logout="true" />
          <!-- Theme switcher -->
          <ColorMode />
        </nav>
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-2">
          <!-- Theme switcher -->
          <ColorMode />
          <!-- Mobile Menu Button -->
          <UButton
            icon="i-heroicons-bars-3-solid"
            variant="ghost"
            color="neutral"
            aria-label="Open menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>
      </div>
    </UContainer>
    <!-- Mobile Menu Panel -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700">
        <UContainer class="py-3">
          <nav class="flex flex-col space-y-1">
            <!-- Navigation Links -->
            <UButton
              v-for="(link, key) in navLinks"
              :key="key"
              :to="link.to"
              variant="ghost"
              color="neutral"
              block
              class="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 justify-start"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </UButton>
            <!-- Login button -->
            <AuthBtn v-if="!authStore.user" :is-mobile="true" />
            <!-- Logout button -->
            <AuthBtn v-if="authStore.user" :is-mobile="true" :logout="true" />
          </nav>
        </UContainer>
      </div>
    </Transition>
  </header>
</template>

<style scoped>

</style>
