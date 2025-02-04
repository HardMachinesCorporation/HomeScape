<template>
 <hero-section/>
 <featured-properties/>
  <recently-listed-properties/>
  <explore-categories/>
</template>
<script setup lang="ts">
import HeroSection from "~/components/homepage/HeroSection.vue";
import FeaturedProperties from "~/components/homepage/FeaturedProperties.vue";
import RecentlyListedProperties from "~/components/homepage/RecentlyListedProperties.vue";
import ExploreCategories from "~/components/homepage/ExploreCategories.vue";
</script>