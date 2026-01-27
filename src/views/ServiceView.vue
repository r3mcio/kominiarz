<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, Phone } from 'lucide-vue-next';
import ContactSection from '../components/ContactSection.vue';

const route = useRoute();
const router = useRouter();

const services = {
  'czyszczenie-komina-szczecinek': {
    title: 'Czyszczenie Komina Szczecinek',
    description: 'Profesjonalne czyszczenie kominów w Szczecinku. Usuwamy sadzę, smołę i zanieczyszczenia, zapewniając bezpieczeństwo Twojego domu.',
    sections: [
      {
        title: 'Dlaczego warto czyścić komin regularnie?',
        content: 'Regularne czyszczenie komina to podstawa bezpieczeństwa przeciwpożarowego. Nagromadzona sadza, a w szczególności smoła, jest łatwopalna i może prowadzić do pożaru sadzy w kominie. Zalecamy przegląd i czyszczenie co najmniej 2 w roku, a w przypadku paliw stałych - 4 razy w roku.'
      },
      {
        title: 'Metody czyszczenia',
        content: 'Stosujemy zarówno tradycyjne metody mechaniczne (szczotki, wyciory), jak i nowoczesne techniki usuwania twardych osadów (frezowanie). Dobieramy metodę do rodzaju przewodu kominowego i stopnia zanieczyszczenia.'
      },
      {
        title: 'Bezpieczeństwo i czystość',
        content: 'Dbamy o to, aby proces czyszczenia był jak najmniej uciążliwy dla domowników. Zabezpieczamy miejsce pracy, używamy odkurzaczy przemysłowych i gwarantujemy pozostawienie porządku po wykonanej usłudze.'
      }
    ],
    faq: [
      { q: 'Jak często należy czyścić komin?', a: 'Zgodnie z przepisami, kominy dymowe (węgiel, drewno) należy czyścić 4 razy w roku, spalinowe (gaz, olej) 2 razy w roku, a wentylacyjne raz w roku.' },
      { q: 'Ile trwa czyszczenie komina?', a: 'Standardowe czyszczenie trwa zazwyczaj od 30 do 60 minut, w zależności od stopnia zabrudzenia i dostępu do komina.' },
      { q: 'Czy wystawiacie protokół z czyszczenia?', a: 'Tak, po każdym wykonanym czyszczeniu wystawiamy odpowiednie zaświadczenie kominiarskie.' }
    ]
  },
  'przeglad-kominowy-szczecinek': {
    title: 'Przegląd Kominowy Szczecinek',
    description: 'Kompleksowe przeglądy kominiarskie w Szczecinku. Sprawdzamy szczelność i drożność przewodów kominowych.',
    sections: [
      {
        title: 'Na czym polega przegląd kominiarski?',
        content: 'Przegląd kominiarski to szczegółowa inspekcja stanu technicznego przewodów dymowych, spalinowych i wentylacyjnych. Sprawdzamy drożność, szczelność, siłę ciągu oraz stan techniczny komina ponad dachem.'
      },
      {
        title: 'Wymogi prawne',
        content: 'Prawo Budowlane nakłada na właścicieli i zarządców nieruchomości obowiązek przeprowadzania okresowej kontroli stanu technicznego przewodów kominowych co najmniej raz w roku. Dotyczy to wszystkich budynków.'
      },
      {
        title: ' Precyzyjne pomiary przepływu ',
        content: 'Naszą diagnostykę opieramy na twardych danych. Wykorzystujemy profesjonalne anemometry, aby dokładnie zmierzyć przepływ powietrza i jednoznacznie ocenić skuteczność Twojej wentylacji.'
      }
    ],
    faq: [
      { q: 'Czy przegląd jest obowiązkowy?', a: 'Tak, art. 62 Prawa Budowlanego nakłada obowiązek corocznego przeglądu kominiarskiego.' },
      { q: 'Co jeśli przegląd wykaże nieprawidłowości?', a: 'W przypadku wykrycia usterek, wskazujemy sposoby ich usunięcia i możemy podjąć się naprawy lub wskazać odpowiednich fachowców.' },
      { q: 'Jaki jest koszt przeglądu w Szczecinku?', a: 'Cena zależy od rodzaju budynku i liczby przewodów. Prosimy o kontakt telefoniczny w celu uzyskania wyceny.' }
    ]
  },
   'opinia-kominiarska-szczecinek': {
    title: 'Opinia Kominiarska Szczecinek',
    description: 'Wydajemy opinie kominiarskie do gazowni i urzędów w Szczecinku. Odbiory budynków.',
    sections: [
      {
        title: 'Kiedy potrzebna jest opinia kominiarska?',
        content: 'Opinia kominiarska jest niezbędna przy oddawaniu budynku do użytkowania, podłączaniu nowych urządzeń grzewczych (zwłaszcza gazowych), modernizacji kotłowni oraz w procesie legalizacji samowoli budowlanej.'
      },
      {
        title: 'Odbiór kominiarski nowego domu',
        content: 'Przeprowadzamy odbiory kominiarskie w nowo wybudowanych domach w Szczecinku. Sprawdzamy zgodność wykonania z projektem i przepisami, co jest warunkiem koniecznym do zamieszkania.'
      },
      {
        title: 'Opinia do gazowni',
        content: 'Planujesz ogrzewanie gazowe? Wymagana jest pozytywna opinia kominiarska potwierdzająca sprawność wentylacji i możliwość odprowadzenia spalin. Przygotowujemy kompletną dokumentację.'
      }
    ],
    faq: [
      { q: 'Ile czeka się na opinię kominiarską?', a: 'Staramy się wydawać opinie niezwłocznie po przeprowadzeniu oględzin.' },
      { q: 'Czy opinia jest potrzebna do ubezpieczenia domu?', a: 'Tak, ubezpieczyciele często wymagają aktualnego protokołu przeglądu lub opinii kominiarskiej w przypadku szkody.' },
      { q: 'Jakie dokumenty są potrzebne?', a: 'Zazwyczaj potrzebny jest projekt budowlany (rzut kominów) przy odbiorach nowych budynków.' }
    ]
  },
  'montaz-wkladow-szczecinek': {
    title: 'Montaż Wkładów Kominowych Szczecinek',
    description: 'Profesjonalny montaż wkładów kominowych kwasoodpornych i żaroodpornych w Szczecinku.',
    sections: [
      {
        title: 'Dlaczego warto zamontować wkład kominowy?',
        content: 'Wkłady kominowe chronią mur komina przed niszczącym działaniem kwasów powstających w procesie spalania (szczególnie przy nowoczesnych piecach gazowych i olejowych) oraz uszczelniają przewód kominowy.'
      },
      {
        title: 'Rodzaje wkładów',
        content: 'Oferujemy wkłady ze stali kwasoodpornej do kotłów gazowych i olejowych oraz wkłady kwaso-żaroodporne do kominków i kotłów na paliwa stałe. Doradzamy najlepsze rozwiązanie dla Twojego systemu grzewczego.'
      },
      {
        title: 'Przedłużanie żywotności komina',
        content: 'Montaż wkładu to często alternatywa dla budowy nowego komina. Pozwala na renowację starego przewodu i dostosowanie go do nowoczesnych standardów bezpieczeństwa.'
      }
    ],
    faq: [
      { q: 'Jak dobrać odpowiedni wkład?', a: 'Wkład dobieramy na podstawie rodzaju urządzenia grzewczego, paliwa oraz wymiarów istniejącego komina.' },
      { q: 'Czy montaż wkładu wymaga kucia ścian?', a: 'Zazwyczaj montaż odbywa się z dachu, bez konieczności dużej ingerencji wewnątrz budynku, chyba że konieczne jest wykucie otworu przyłączeniowego.' },
      { q: 'Jaką gwarancję mają wkłady?', a: 'Stosujemy certyfikowane produkty renomowanych producentów, które posiadają wieloletnią gwarancję.' }
    ]
  },
  'ekspertyzy-kominowe-szczecinek': {
    title: 'Ekspertyzy Kominowe Szczecinek',
    description: 'Szczegółowe ekspertyzy przewodów kominowych i inwentaryzacje w Szczecinku.',
    sections: [
      {
        title: 'Weryfikacja podłączeń kominowychh',
        content: 'Planujesz remont lub modernizację domu? Sprawdzamy i porządkujemy układ przewodów. Upewniamy się, że kanały wentylacyjne i spalinowe są podłączone prawidłowo i nie kolidują ze sobą.'
      },
      {
        title: 'Rozwiązywanie problemów z ciągiem',
        content: 'Jeśli masz problem z cofaniem się dymu, słabą wentylacją lub wilgocią, przeprowadzamy ekspertyzę, aby znaleźć przyczynę. Często są to błędy konstrukcyjne lub zatkania.'
      }
      
    ],
    faq: [
      { q: 'Kiedy warto zamówić ekspertyzę?', a: 'Gdy planujesz remont, wymianę ogrzewania lub zauważasz niepokojące objawy jak zapach spalin czy wilgoć.' },
      { q: 'Ile kosztuje inwentaryzacja kominów?', a: 'Cena zależy od wielkości budynku i liczby lokali. Przygotowujemy indywidualne wyceny dla zarządców nieruchomości.' },
      { q: 'Czy ekspertyza jest na piśmie?', a: 'Tak, każda usługa kończy się wydaniem szczegółowego zaświadczenia z opisem stanu faktycznego i zaleceniami.' }
    ]
  },
  'udraznianie-kominow-szczecinek': {
    title: 'Udrażnianie Kominów Szczecinek',
    description: 'Usuwanie gniazd ptasich i gruzu z kominów w Szczecinku. Zabezpieczanie kominów.',
    sections: [
      {
        title: 'Gniazda ptaków w kominie',
        content: 'Częstym problemem w Szczecinku są kawki budujące gniazda w przewodach kominowych. Takie gniazdo całkowicie blokuje przepływ spalin i stwarza śmiertelne zagrożenie czadem. Usuwamy je bezpiecznie i skutecznie.'
      },
      {
        title: 'Zabezpieczanie przed ptakami',
        content: 'Po udrożnieniu komina zalecamy montaż kratek lub nasad kominowych, które uniemożliwią ptakom ponowne założenie gniazda, nie ograniczając przy tym ciągu kominowego.'
      },
      {
        title: 'Usuwanie gruzu i zatorów',
        content: 'Stare kominy często kruszą się od środka, powodując zatory z gruzu. Za pomocą specjalistycznego sprzętu usuwamy przeszkody, przywracając pełną drożność przewodu.'
      }
    ],
    faq: [
      { q: 'Czy można usuwać gniazda w okresie lęgowym?', a: 'Usuwanie gniazd w okresie lęgowym jest regulowane prawnie. W sytuacjach zagrożenia życia lub zdrowia (niedrożny komin spalinowy) interwencja jest jednak konieczna.' },
      { q: 'Jak zabezpieczyć komin przed ptakami?', a: 'Montujemy specjalne kratki ze stali nierdzewnej lub nasady typu "strażak", które skutecznie odstraszają ptaki.' },
      { q: 'Co zrobić gdy czuję dym w mieszkaniu?', a: 'Natychmiast przewietrz pomieszczenie, wygaś piec i wezwij kominiarza. Może to być objaw niedrożności komina.' }
    ]
  }
};

const serviceData = computed(() => services[route.params.slug]);

// Handle 404/redirect if slug not found
onMounted(() => {
  if (!serviceData.value) {
    router.push('/');
  }
});
</script>

<template>
  <div v-if="serviceData" class="pt-24 min-h-screen bg-brand-light">
    <!-- Service Header -->
    <header class="bg-brand-dark py-16 text-white">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ serviceData.title }}</h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">{{ serviceData.description }}</p>
      </div>
    </header>

    <main class="container mx-auto px-6 py-12">
      <!-- Breadcrumb equivalent / Back link -->
      <RouterLink to="/" class="inline-flex items-center text-brand-orange font-bold mb-8 hover:underline">
        &larr; Powrót do strony głównej
      </RouterLink>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Main Content -->
        <article class="lg:w-2/3 space-y-12">
          
          <!-- Sections -->
          <div v-for="(section, idx) in serviceData.sections" :key="idx" class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 class="text-2xl font-bold text-brand-dark mb-4">{{ section.title }}</h2>
            <p class="text-gray-600 leading-relaxed">{{ section.content }}</p>
          </div>

          <!-- FAQ -->
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 class="text-2xl font-bold text-brand-dark mb-6">Częste pytania (FAQ)</h2>
            <div class="space-y-4">
              <details v-for="(item, idx) in serviceData.faq" :key="idx" class="group bg-brand-light rounded-lg">
                <summary class="flex justify-between items-center cursor-pointer p-4 font-bold text-brand-dark list-none">
                  <span>{{ item.q }}</span>
                  <span class="transition group-open:rotate-180">
                    <ChevronDown size="20" />
                  </span>
                </summary>
                <div class="text-gray-600 p-4 pt-0 leading-relaxed border-t border-gray-200/50 mt-2">
                  {{ item.a }}
                </div>
              </details>
            </div>
          </div>
        </article>

        <!-- Sidebar / CTA -->
        <aside class="lg:w-1/3">
          <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-orange sticky top-28">
            <h3 class="text-2xl font-bold text-brand-dark mb-2">Potrzebujesz pomocy?</h3>
            <p class="text-gray-600 mb-6">Skontaktuj się z nami, aby zamówić usługę w Szczecinku.</p>
            
            <a href="tel:+48503808711" class="flex items-center justify-center gap-2 w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition mb-4 shadow-lg shadow-orange-200">
              <Phone size="20" />
              Zadzwoń teraz
            </a>
            
            <div class="text-center text-sm text-gray-400 mb-6">
              Dostępni Pn-Pt 09:00 - 17:00
            </div>

            <ul class="space-y-3">
               <li class="flex items-center gap-3 text-gray-600">
                 <CheckCircle size="18" class="text-green-500" /> Szybkie terminy
               </li>
               <li class="flex items-center gap-3 text-gray-600">
                 <CheckCircle size="18" class="text-green-500" /> Uprawnienia mistrzowskie
               </li>
               <li class="flex items-center gap-3 text-gray-600">
                 <CheckCircle size="18" class="text-green-500" /> Protokół z usługi
               </li>
               <li class="flex items-center gap-3 text-gray-600">
                 <CheckCircle size="18" class="text-green-500" /> Dojazd na terenie miasta
               </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
    
    <!-- Contact Section at bottom -->
    <ContactSection />
  </div>
</template>
