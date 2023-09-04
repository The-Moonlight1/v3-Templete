<template>
    <svg
      class="icon"
      aria-hidden="true"
      :style="{
        color: color,
        width: size,
        height: size,
        cursor: pointer ? 'pointer' : 'default',
      }"
    >
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  defineProps<{
    name: string;
    color?: string;
    pointer?: boolean;
    size?: string;
  }>()
  //两种方法都可以
  {/* <use :xlink:href="iconName"></use> */}
  // const iconName = computed(name => `#icon-${props.name}`)
  </script>
  
  <style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  </style>