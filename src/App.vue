<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';
import CookieBanner from './components/CookieBanner.vue';
import { RouterView } from 'vue-router';
import { useSeo } from './composables/useSeo';

useSeo(); // Basic Global SEO Setup

onMounted(() => {
  // OPTIMIZATION: Defer AOS initialization to avoid blocking Main Thread during initial load.
  // This fixes "Total Blocking Time" and "Forced Reflow" issues.
  const initAOS = () => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 50,
      anchorPlacement: 'top-bottom',
      disable: 'mobile', // OPTIMIZATION: Disable on mobile to prevent layout thrashing on weak devices
    });
  };

  // Use requestIdleCallback if available, otherwise fallback to setTimeout
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      initAOS();
    });
  } else {
    setTimeout(() => {
      initAOS();
    }, 1000); // Wait 1s until page is likely stable
  }
});
</script>

<template>
  <div class="min-h-screen font-sans antialiased text-brand-dark bg-white selection:bg-brand-orange selection:text-white">
    <NavBar />
    <RouterView />
    <FooterSection />
    <CookieBanner />
  </div>
</template>
