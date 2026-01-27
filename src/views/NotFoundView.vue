<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-brand-light px-6 text-center">
    <div class="max-w-md">
      <h1 class="text-9xl font-bold text-brand-orange mb-4">404</h1>
      <h2 class="text-3xl font-bold text-brand-dark mb-6">Strona nie znaleziona</h2>
      <p class="text-gray-600 mb-8">
        Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
      </p>
      <RouterLink 
        to="/" 
        class="bg-brand-orange hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition inline-flex items-center gap-2"
      >
        Wróć na stronę główną
      </RouterLink>
    </div>
  </main>
</template>
