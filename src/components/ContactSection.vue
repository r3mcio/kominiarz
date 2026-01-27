<script setup>
import { Phone, Mail, MapPin, Clock } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row gap-16">
        <!-- Contact Info -->
        <div class="w-full lg:w-1/2" data-aos="fade-up">
          <h2 class="text-brand-orange font-bold text-sm tracking-widest mb-2 uppercase">Kontakt</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Zadzwoń – kominiarz Szczecinek</h3>
          <p class="text-gray-600 mb-8 text-lg">
            Działamy na terenie Szczecinka i okolic. Potrzebujesz przeglądu lub porady? Skontaktuj się z nami telefonicznie.
          </p>

          <div class="space-y-8">
            <div class="flex items-start gap-6 group">
              <div class="bg-brand-light p-4 rounded-full text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <Phone size="24" />
              </div>
              <div>
                <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Telefon</h4>
                <a href="tel:+48503808711" class="text-2xl font-bold text-brand-dark hover:text-brand-orange transition">
                  +48 502 619 993
                </a>
              </div>
            </div>

            <div class="flex items-start gap-6 group">
              <div class="bg-brand-light p-4 rounded-full text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <Mail size="24" />
              </div>
              <div>
                <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Email</h4>
                <a href="mailto:kominiapw@gmail.com" class="text-xl font-medium text-brand-dark hover:text-brand-orange transition">
                  kominiapw@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-start gap-6 group">
              <div class="bg-brand-light p-4 rounded-full text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <MapPin size="24" />
              </div>
              <div>
                <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Adres</h4>
                <p class="text-lg text-brand-dark">ul. Koszalińska 66a/6, 78-400 Szczecinek</p>
              </div>
            </div>

            <div class="flex items-start gap-6 group">
              <div class="bg-brand-light p-4 rounded-full text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <Clock size="24" />
              </div>
              <div>
                <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Godziny pracy</h4>
                <div class="text-lg text-brand-dark">
                  <p>Pon - Pt: 09:00 - 17:00</p>
                  <p class="text-gray-500 text-base">Sob - Nd: Zamknięte</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="w-full lg:w-1/2 rounded-3xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
           <div class="overflow-hidden rounded-xl h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.410237732959!2d16.68536091584484!3d53.7107705494194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47018e3a47bce57b%3A0x83f5e73e35425715!2sKoszali%C5%84ska%2066a%2F6%2C%2078-400%20Szczecinek%2C%20Poland!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style="border:0; min-height: 480px;"
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Lokalizacja Kominiarza w Szczecinku"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styles removed as they are no longer needed */
</style>
