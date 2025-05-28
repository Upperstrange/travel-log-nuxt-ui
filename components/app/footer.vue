<script setup lang='ts'>
// No script changes needed for this, assuming nuxt-icon is globally available
</script>

<template>
  <footer class="bg-neutral-900 text-white py-12">
    <UContainer>
      <!-- Footer content -->
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Logo and description -->
        <div>
          <div class="flex items-center mb-4">
            <UIcon name="i-heroicons-map-pin-solid" class="h-8 w-8 text-primary-400" />
            <span class="ml-2 text-2xl font-bold font-logo">Let'sGo</span>
          </div>
          <p class="text-neutral-400">
            Your journey, beautifully documented. Create lasting memories with every adventure.
          </p>
        </div>
        <!-- Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">
            Product
          </h3>
          <ul class="space-y-2 text-neutral-400">
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Features
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Pricing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Download
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Updates
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Support -->
        <div>
          <h3 class="text-lg font-semibold mb-4">
            Support
          </h3>
          <ul class="space-y-2 text-neutral-400">
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Help Center
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Contact Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Terms of Service
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Connect -->
        <div>
          <h3 class="text-lg font-semibold mb-4">
            Connect
          </h3>
          <ul class="space-y-2 text-neutral-400">
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Twitter
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Instagram
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Facebook
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-white transition-colors">
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <div class="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
        <p>&copy; {{ new Date().getFullYear() }} Let'sGo. All rights reserved.</p>
      </div>
    </UContainer>
  </footer>
</template>

<style scoped></style>
