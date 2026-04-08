<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { Menu, X, Phone } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Optimization: Use requestAnimationFrame for scroll throttling
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 50;
      ticking = false;
    });
    ticking = true;
  }
};

// Check route to force scrolled state if not home
watch(route, (newRoute) => {
  if (newRoute.path !== '/') {
    // maybe always show background on subpages?
    // Actually ServiceView has a dark header, so transparent is fine initially.
    // But let's keep the logic consistent.
  }
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true }); // Optimization: passive: true
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300 will-change-transform', /* Optimization: will-change */
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
    ]"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3" aria-label="Strona główna">
        <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-orange bg-white shadow-md">
          <img src="/Logo-mobile.webp" alt="Logo Kominiarz" class="w-full h-full object-cover" width="64" height="64" />
        </div>
        <div class="flex flex-col">
          <span :class="['text-xl font-bold tracking-tighter leading-none', isScrolled ? 'text-brand-dark' : 'text-white']">
            KOMINIARZ
          </span>
          <span class="text-brand-orange font-bold text-sm leading-none tracking-widest">SZCZECINEK</span>
        </div>
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <router-link :to="{ path: '/', hash: '#about' }" :class="['font-medium hover:text-brand-orange transition', isScrolled ? 'text-gray-700' : 'text-gray-200']">O Nas</router-link>
        <router-link :to="{ path: '/', hash: '#services' }" :class="['font-medium hover:text-brand-orange transition', isScrolled ? 'text-gray-700' : 'text-gray-200']">Usługi</router-link>
        <router-link :to="{ path: '/', hash: '#contact' }" :class="['font-medium hover:text-brand-orange transition', isScrolled ? 'text-gray-700' : 'text-gray-200']">Kontakt</router-link>
        <a 
          href="tel:+48502619993" 
          aria-label="Zadzwoń do nas"
          class="bg-brand-orange hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold transition flex items-center gap-2"
        >
          <Phone size="18" />
          <span>Zamów wizytę</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" aria-label="Menu" class="md:hidden focus:outline-none">
        <Menu v-if="!isMenuOpen" :class="isScrolled ? 'text-brand-dark' : 'text-white'" size="28" />
        <X v-else :class="isScrolled ? 'text-brand-dark' : 'text-white'" size="28" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMenuOpen" 
      class="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-8 gap-6 md:hidden transition-all"
    >
      <router-link :to="{ path: '/', hash: '#about' }" @click="isMenuOpen = false" class="text-lg font-medium text-gray-800 hover:text-brand-orange">O Nas</router-link>
      <router-link :to="{ path: '/', hash: '#services' }" @click="isMenuOpen = false" class="text-lg font-medium text-gray-800 hover:text-brand-orange">Usługi</router-link>
      <router-link :to="{ path: '/', hash: '#contact' }" @click="isMenuOpen = false" class="text-lg font-medium text-gray-800 hover:text-brand-orange">Kontakt</router-link>
      <a 
        href="tel:+48502619993" 
        class="bg-brand-orange text-white px-8 py-3 rounded-full font-semibold"
      >
        Zadzwoń teraz
      </a>
    </div>
  </nav>
</template>
