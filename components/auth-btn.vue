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
});
const authStore = useAuthStore();
</script>

<template>
  <div>
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
</template>

<style></style>
