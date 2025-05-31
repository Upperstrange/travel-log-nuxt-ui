import { authClient } from "~/lib/auth-client";

export const useAuthStore = defineStore("authStore", () => {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null);

  // for SSR, we are using the useFetch composable to fetch the session. init function will run when we first load the app and the session would be available throughout
  async function init() {
    const data = await authClient.useSession(useFetch);
    session.value = data;
  }
  const user = computed(() => session.value?.data?.user);
  const loading = computed(() => session.value?.isPending);

  async function signIn() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return {
    loading,
    signIn,
    signOut,
    user,
    init,
  };
});
