<template>
  <div>
    <div class="min-h-screen flex flex-col bg-neutral-100 dark:bg-neutral-900">
      <ColorMode class="absolute top-4 right-4" />
      <main class="flex-1 flex flex-col">
        <div class="flex-1 flex">
          <!-- Sidebar -->
          <Sidebar class="sidebar-desktop-custom-styling">
            <template #nav-group>
              <SidebarNavItem icon="i-lucide-map" label="Locations" to="/dashboard" />
              <SidebarNavItem icon="i-icons8:plus" label="Add Location" to="/dashboard/add" />
            </template>
          </Sidebar>
          <!-- Main dashboard content -->
          <div class="flex-1">
            <slot />
          </div>
        </div>
      </main>
      <SidebarMobile class="sidebar-mobile-custom-styling" />
    </div>
  </div>
</template>

<style scoped>
.sidebar-desktop-custom-styling {
  display: flex;
}

@media (max-width: 640px) {
  .sidebar-desktop-custom-styling {
    display: none;
  }
}
.sidebar-mobile-custom-styling {
  display: none; /* Hidden by default */
  position: absolute;
  bottom: 1rem;
  right: 0;
  left: 0;
}

@media (max-width: 640px) {
  .sidebar-mobile-custom-styling {
    display: flex;
  }
}
</style>
