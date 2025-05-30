<script setup lang='ts'>
defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
  btnSize: {
    type: String as () => "md" | "xs" | "sm" | "lg" | "xl",
    default: "md",
  },
  logout: {
    type: Boolean,
    default: false,
  },
});

const authStore = useAuthStore();
</script>

<template>
  <div>
    <!-- SignIn buttons -->
    <div v-if="!logout">
      <!-- For desktop -->
      <UButton
        v-if="!isMobile"
        loading-auto
        loading-icon="i-lucide-loader"
        variant="solid"
        :size="btnSize"
        icon="i-picon:google"
        class="ml-2"
        label="Login with Google"
        @click="authStore.signIn"
      />
      <!-- For mobile -->
      <UButton
        v-if="isMobile"
        loading-auto
        loading-icon="i-lucide-loader"
        variant="solid"
        :size="btnSize"
        icon="i-picon:google"
        block
        class="mt-2 justify-center"
        label="Login with Google"
        @click="authStore.signIn"
      />
    </div>
    <!-- Logout buttons -->
    <div v-if="logout">
      <!-- For desktop -->
      <UButton
        v-if="!isMobile"
        to="/signout"
        loading-auto
        loading-icon="i-lucide-loader"
        variant="solid"
        :size="btnSize"
        icon="i-heroicons-arrow-right-start-on-rectangle"
        class="ml-2"
        label="Logout"
        @click="authStore.signOut"
      />
      <!-- For mobile -->
      <UButton
        v-if="isMobile"
        to="/signout"
        loading-auto
        loading-icon="i-lucide-loader"
        variant="solid"
        :size="btnSize"
        icon="i-heroicons-arrow-right-start-on-rectangle"
        block
        class="mt-2 justify-center"
        label="Logout"
        @click="authStore.signOut"
      />
    </div>
  </div>
</template>
