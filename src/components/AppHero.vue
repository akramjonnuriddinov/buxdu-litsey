<script setup lang="ts">
defineProps(['bgUrl'])
</script>

<template>
  <section class="hero py-[80px]">
    <div class="container mx-auto px-5">
      <div class="flex text-white flex-col text-center">
        <h1 class="font-semibold text-[2em] leading-[1.2em]">
          <slot name="title" />
        </h1>
        <span class="text-[22px] font-medium">
          <slot name="text" />
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), v-bind(bgUrl);
}
</style>
