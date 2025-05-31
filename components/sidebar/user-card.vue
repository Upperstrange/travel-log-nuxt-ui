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
  <div>
    <!-- Expanded view -->

    <UCard v-if="isHovered" class="w-90%">
      <template #header>
        <div class="flex items-center gap-4 w-full h-fit p-2">
          <UAvatar :src="imageLink" alt="User avatar" size="md" class="ring-2 ring-primary-400 dark:ring-primary-600 shadow-sm" />
          <div class="flex flex-col gap-1">
            <span>{{ authStore.user?.name }}</span>
            <UTooltip :text="authStore.user?.email" class="cursor-default select-none">
              <span class="text-xs w-3/4 text-shadow-2xs truncate">{{ authStore.user?.email }}</span>
            </UTooltip>
          </div>
        </div>
      </template>
      <template #footer>
        <AuthBtn :is-mobile="true" :logout="true" />
      </template>
    </UCard>

    <!-- Collapsed View -->
    <div v-else class="flex justify-center py-3">
      <UAvatar :src="imageLink" alt="User avatar" size="md" class="ring-2 ring-primary-400 dark:ring-primary-600 shadow-sm" />
    </div>
  </div>
</template>
