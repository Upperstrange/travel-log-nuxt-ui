<script setup lang="ts">
defineProps({
  isHovered: {
    type: Boolean,
    default: false,
  },
});

const authStore = useAuthStore();

const imageLink = computed(
  () =>
    authStore.user?.image
    ?? "https://supremepetfoods.com/wp-content/uploads/2021/09/iStock-137523108-frenchlop-1200px.jpg.webp",
);
</script>

<template>
  <div class="w-full mt-auto">
    <div
      v-if="isHovered"
      class="p-5 bg-white/80 dark:bg-neutral-900 rounded-2xl flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300 ring-1 ring-neutral-200 dark:ring-neutral-700"
    >
      <!-- Avatar -->
      <UAvatar
        :src="imageLink"
        alt="User avatar"
        size="md"
        class="ring-2 ring-primary-400 dark:ring-primary-600 shadow-sm"
      />

      <!-- User Info -->
      <div class="flex-1 min-w-0">
        <!-- This container has min-w-0 to allow truncation -->
        <p class="text-base font-semibold text-neutral-800 dark:text-white truncate">
          {{ authStore.user?.name ?? "John Doe" }}
        </p>
        <p class="text-sm text-neutral-500 dark:text-neutral-400 truncate">
          {{ authStore.user?.email ?? "john.doe@example.com" }}
        </p>

        <!-- Log Out Button -->
        <UButton
          to="/signout"
          variant="ghost"
          size="sm"
          class="mt-3 px-3 py-1.5 text-xs font-medium text-red-500 hover:text-white hover:bg-red-500 dark:hover:bg-red-600 transition-colors"
        >
          <UIcon
            name="i-heroicons-arrow-right-start-on-rectangle"
            class="w-4 h-4 mr-1"
          />
          Log Out
        </UButton>
      </div>
    </div>

    <!-- Collapsed View -->
    <div v-else class="flex justify-center py-3">
      <UAvatar
        :src="imageLink"
        alt="User avatar"
        size="md"
        class="ring-2 ring-neutral-300 dark:ring-neutral-600 hover:ring-primary-500 hover:scale-105 transition-all duration-200 shadow-sm"
      />
    </div>
  </div>
</template>

<style scoped>
.truncate {
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
