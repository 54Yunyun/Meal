<script setup>
const props = defineProps({
  href: String,
});
</script>
<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 mt-3 rounded text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
  >
    YouTube
  </a>
</template>
