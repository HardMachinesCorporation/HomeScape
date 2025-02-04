<template>
  <div v-if="property" class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative h-96 overflow-hidden shadow-lg">
      <img
          :src="property.image"
          :alt="property.title"
          class="w-full h-full object-cover transform transition duration-500 hover:scale-105"
      />
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Title Overlay -->
      <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h1 class="text-4xl font-bold text-white mb-2">{{ property.title }}</h1>
        <div class="flex items-center space-x-4 text-white/90">
          <span class="bg-primary px-4 py-1 rounded-full text-sm font-semibold">
            {{ property.category }}
          </span>
        </div>
      </div>
    </div>

    <!-- Details Card -->
    <div class="max-w-5xl mx-auto px-4 -mt-16 relative z-10">
      <div class="bg-white rounded-xl shadow-lg p-6 lg:p-8">
        <!-- Price Section -->
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-3xl font-bold text-primary">
              ${{ property.price.toLocaleString() }}
            </h2>
            <p class="text-gray-600 mt-1">
              Listed {{ new Date(property.listedDate).toLocaleDateString() }}
            </p>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-gray-900">{{ property.bedrooms }}</div>
            <div class="text-gray-600 text-sm">Bedrooms</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-gray-900">{{ property.bathrooms }}</div>
            <div class="text-gray-600 text-sm">Bathrooms</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-gray-900">{{ property.squareFeet }}</div>
            <div class="text-gray-600 text-sm">Sq Ft</div>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-gray-900">{{ property.category }}</div>
            <div class="text-gray-600 text-sm">Type</div>
          </div>
        </div>

        <!-- Description -->
        <div class="border-t pt-8">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Property Description</h3>
          <p class="text-gray-700 leading-relaxed">
            {{ property.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import properties from '~/data/properties'
import { definePageMeta } from "#imports";

definePageMeta({
  validate: async route => !!properties.find(item => item.id === route.params.id)
})

const route = useRoute()
const property = properties.find(item => item.id === route.params.id)
</script>