import { onMounted } from "vue";

export const useSidebarStore = defineStore("sidebarStore", () => {
  const isOpen = ref(true);

  onMounted(() => {
    if (import.meta.client) {
      const saved = localStorage.getItem("isOpen");
      if (saved !== null)
        isOpen.value = saved === "true";
    }
  });

  function toggle() {
    isOpen.value = !isOpen.value;
    if (import.meta.client) {
      localStorage.setItem("isOpen", isOpen.value.toString());
    }
  }

  return { isOpen, toggle };
});
