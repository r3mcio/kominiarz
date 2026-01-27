<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import { ArrowRight } from 'lucide-vue-next';

const slides = [
  {
    title: "Bezpieczeństwo <br/>Twojego Domu",
    description: "Profesjonalny kominiarz w Szczecinku. Zapewniamy kompleksowe przeglądy i czyszczenie kominów dla Twojego bezpieczeństwa. Skontaktuj się z nami już dziś!"
  },
  {
    title: "Ciepło i <br/>Spokój Ducha",
    description: "Regularne czyszczenie kominów to gwarancja efektywnego ogrzewania. Dbamy o każdy detal, byś mógł spać spokojnie."
  },
  {
    title: "Eksperci od <br/>Wentylacji",
    description: "Masz problem z wentylacją? Wykonujemy pełną diagnostykę i skutecznie przywracamy prawidłowy obieg powietrza w Twoim domu.."
  },
  {
    title: "Tradycyjne <br/>Kominiarstwo",
    description: "Niezawodne usługi kominiarskie w Szczecinku i okolicach."
  }
];

const currentSlideIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 10000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20 md:pt-0">
    <!-- SEO H1 -->
    <h1 class="sr-only">Kominiarz Szczecinek – przeglądy i czyszczenie kominów</h1>

    <!-- Background Image with Overlay -->
    <!-- OPTIMIZATION: Use picture tag or srcset for responsive images -->
    <div class="absolute inset-0 z-0">
      <picture>
        <source srcset="/Chimneymaster-mobile.webp" media="(max-width: 768px)" type="image/webp">
        <source srcset="/Chimneymaster-tablet.webp" media="(max-width: 1200px)" type="image/webp">
        <source srcset="/Chimneymaster-desktop.webp" media="(min-width: 1201px)" type="image/webp">
        <img 
          src="/Chimneymaster-desktop.webp" 
          alt="Kominiarz Szczecinek - praca na dachu" 
          class="w-full h-full object-cover"
          width="1920"
          height="1080"
          fetchpriority="high"
        />
      </picture>
      <div class="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-6 relative z-10 text-center md:text-left">
      <div class="max-w-3xl">
        <!-- OPTIMIZATION: Removed AOS from LCP elements to prevent delay -->
        <span class="inline-block py-1 px-3 rounded bg-brand-orange/20 text-brand-orange font-bold text-sm mb-6 border border-brand-orange/30 animate-fade-in-up">
          PROFESJONALNE USŁUGI KOMINIARSKIE
        </span>
        
        <div class="relative min-h-[300px]"> <!-- Fixed height to prevent layout shift -->
          <Transition name="fade" mode="out-in">
            <!-- OPTIMIZATION: Eager render the first slide title -->
            <div :key="currentSlideIndex" class="absolute inset-0 animate-fade-in-up-delay">
              <div class="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" v-html="slides[currentSlideIndex].title">
              </div>
              <p class="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                {{ slides[currentSlideIndex].description }}
              </p>
            </div>
          </Transition>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <a 
            href="#contact" 
            aria-label="Zamów przegląd kominiarski"
            class="bg-brand-orange hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2 group"
          >
            Zamów przegląd
            <ArrowRight class="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#services" 
            aria-label="Zobacz nasze usługi"
            class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition text-center"
          >
            Nasze usługi
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* CSS Animations instead of JS for LCP elements */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-up-delay {
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
  opacity: 0; /* Start hidden until animation starts */
}

/* Existing Vue transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
