<script setup lang='ts'>
const authStore = useAuthStore();
const imageLink = computed(
  () =>
    authStore.user?.image
    ?? "https://supremepetfoods.com/wp-content/uploads/2021/09/iStock-137523108-frenchlop-1200px.jpg.webp",
);
</script>

<template>
  <div class="container mx-auto flex gap-2 rounded-full w-fit p-4 h-16 ring ring-neutral-400/20 bg-white/40 dark:bg-neutral-800/40 backdrop-blur-2xl">
    <!-- Locations -->
    <UTooltip text="Locations">
      <SidebarMobileItem aria-label="Settings" icon="i-lucide-map" link="/dashboard" />
    </UTooltip>
    <!-- Add location -->
    <UTooltip text="Add location">
      <SidebarMobileItem aria-label="Add location" icon="i-icons8:plus" link="/dashboard/add" />
    </UTooltip>
    <!-- User details -->
    <UPopover
      :content="{
        align: 'center',
        side: 'top',
        sideOffset: 28,
      }"
    >
      <UTooltip text="User">
        <SidebarMobileItem aria-label="User" icon="i-lucide-user" :is-link="false" />
      </UTooltip>

      <template #content>
        <UCard>
          <template #header>
            <div class="flex items-center gap-4 w-full h-fit p-2">
              <UAvatar :src="imageLink" />
              <div class="flex flex-col">
                <span>{{ authStore.user?.name }}</span>
                <span class="text-sm truncate">{{ authStore.user?.email }}</span>
              </div>
            </div>
          </template>
          <template #footer>
            <AuthBtn :is-mobile="true" :logout="true" />
          </template>
        </UCard>
      </template>
    </UPopover>
  </div>
</template>

<style></style>
