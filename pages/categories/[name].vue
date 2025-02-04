<template>
  <!-- Hero Section -->
  <section
       class="relative h-[50vh] flex items-center justify-center rounded-lg p-6"

  >
    <base-overlay-bg />

    <div class="text-center z-10">
      <h2 class="text-primary font-bold text-5xl">
        {{ categoryName }}
      </h2>
    </div>
  </section>
  <!-- Filter section -->
  <section class="py-12">
    <div v-if="filteredProperties.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <property-card
            v-for="property in filteredProperties" :key="property.id"
            :property="property">
        </property-card>
    </div>
    <div v-else class="text-center py-12">
        <div class="text-5xl font-black mb-2">Oops</div>
        <p class="text-gray-700 text-xl mb-8">No properties found for this category</p>
        <nuxt-link to="/">
              <base-btn>return to homepage</base-btn>
        </nuxt-link>
    </div>
  </section>
</template>
<script setup lang="ts">
import  properties from '~/data/properties'
const route = useRoute()
const categoryName: string | string[] = route.params.name
const filteredProperties = computed(() =>
    properties.filter((p) => p.category === categoryName))
</script>