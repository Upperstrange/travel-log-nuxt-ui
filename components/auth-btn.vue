<script setup lang='ts'>
import { createAuthClient } from "better-auth/client";

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
const authClient = createAuthClient();
// const authStore = useAuthStore();
async function signIn() {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
    errorCallbackURL: "/error",
  });
}
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
      @click="signIn"
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
      @click="signIn"
    />
  </div>
</template>

<style></style>
