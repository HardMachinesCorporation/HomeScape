<template>
  <section class="container py-12">
    <!-- Heading -->
    <h2 class="text-3xl text-center font-bold text-gray-800 mb-6">
      Explore Categories
    </h2>
    <!-- Grid for Category Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <category-card
          v-for="category in categories"
          :key="category.id"
          :category="category"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import categories from "~/data/categories";

</script>
