<script setup>
defineProps({
  size: {
    type: Number,
    default: 48,
  },
  primaryColor: {
    type: String,
    default: "#c95166",
  },
  secondaryColor: {
    type: String,
    default: "#059669",
  },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Globe/Circle Background -->
    <circle cx="24" cy="24" r="20" :fill="primaryColor" fill-opacity="0.1" :stroke="primaryColor" stroke-width="2" />

    <!-- Globe Grid Lines -->
    <path
      d="M24 4C24 4 16 12 16 24C16 36 24 44 24 44"
      :stroke="primaryColor"
      stroke-width="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M24 4C24 4 32 12 32 24C32 36 24 44 24 44"
      :stroke="primaryColor"
      stroke-width="1.5"
      fill="none"
      opacity="0.6"
    />
    <path d="M6 24H42" :stroke="primaryColor" stroke-width="1.5" opacity="0.6" />
    <path d="M9 16H39" :stroke="primaryColor" stroke-width="1.5" opacity="0.4" />
    <path d="M9 32H39" :stroke="primaryColor" stroke-width="1.5" opacity="0.4" />

    <!-- Location Pin -->
    <path
      d="M24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14Z"
      :fill="secondaryColor"
    />
    <circle cx="24" cy="19" r="2" fill="white" />
    <path d="M24 24L24 28" :stroke="secondaryColor" stroke-width="2" stroke-linecap="round" />

    <!-- Small Airplane -->
    <g transform="translate(32, 8) scale(0.8)">
      <path d="M2 6L8 4L12 8L10 10L6 8L4 10L2 8L2 6Z" :fill="secondaryColor" opacity="0.8" />
      <path d="M8 4L10 2" :stroke="secondaryColor" stroke-width="1" stroke-linecap="round" opacity="0.8" />
    </g>

    <!-- Travel Path/Route -->
    <path
      d="M8 36C12 32 16 28 20 32C24 36 28 32 32 36C36 40 40 36 42 38"
      :stroke="primaryColor"
      stroke-width="1.5"
      fill="none"
      opacity="0.4"
      stroke-dasharray="2 2"
    />
  </svg>
</template>
