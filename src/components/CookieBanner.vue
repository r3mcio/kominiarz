<template>
  <transition name="fade">
    <div v-if="showBanner" class="fixed bottom-0 inset-x-0 bg-brand-dark text-white p-6 shadow-lg z-50">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-sm text-gray-300">
          Ta strona korzysta z plików cookie, aby zapewnić najlepszą jakość obsługi. Dalsze korzystanie ze strony oznacza zgodę na ich użycie.
          <router-link to="/polityka-prywatnosci" class="text-brand-orange hover:underline font-semibold ml-2">Dowiedz się więcej</router-link>
        </p>
        <button 
          @click="acceptCookies"
          class="bg-brand-orange text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-opacity-90 transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-orange"
        >
          Zgoda
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showBanner = ref(false);

onMounted(() => {
  if (!localStorage.getItem('cookie_consent')) {
    showBanner.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem('cookie_consent', 'true');
  showBanner.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
