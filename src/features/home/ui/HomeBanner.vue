<template>
  <div
    class="min-h-screen bg-gradient-to-br from-[#138dee] to-[#0084f8] text-white px-[120px] pt-10"
  >
    <!-- Back Button - Above Banner -->
    <div>
      <button class="flex items-center gap-2 p-0 text-white rounded-lg">
        <FontAwesomeIcon
          :icon="faChevronLeft"
          class="w-[7.12px] h-[11.41px] text-secondary-50"
        />
        <span
          class="font-medium text-[18px] leading-[24px] tracking-[0px] align-middle"
          >Back</span
        >
      </button>
    </div>

    <!-- Banner Component -->
    <div class="pt-[10px] pb-4">
      <div class="flex items-start justify-between">
        <!-- Left Side - Company Info -->
        <div class="flex items-start gap-4">
          <!-- Logo and Name Box -->
          <div
            class="pt-5 pb-[18.78px] pl-3 pr-[10.67px] bg-white rounded-xl shadow-sm"
          >
            <div class="flex items-center">
              <NuxtImg
                src="/images/kore-logo.svg"
                alt="Kore Logo"
                class="w-[104.33px] h-[40.22px]"
              />
            </div>
          </div>

          <!-- Main Title and Description -->
          <div class="flex-1">
            <h1
              class="font-hanken-grotesk font-bold text-[32px] leading-[100%] tracking-[1%] mb-4"
            >
              Kore
            </h1>
            <h5
              class="font-futura-hv font-normal text-[24px] leading-[100%] tracking-[1%] text-secondary-50"
            >
              Lorem ipsum dolor sit
            </h5>
          </div>
        </div>

        <!-- Right Side - Share Buttons -->
        <div class="flex items-center gap-3">
          <span class="font-normal text-[14px] leading-[40px] tracking-[0px]"
            >Share This Deal:</span
          >
          <div class="flex gap-2">
            <button
              class="w-6 h-6 bg-white hover:bg-white/90 rounded-full flex items-center justify-center transition-colors"
            >
              <FontAwesomeIcon
                :icon="faFacebookF"
                class="w-[6px] h-[12px] text-gray-6"
              />
            </button>
            <button
              class="w-6 h-6 bg-white hover:bg-white/90 rounded-full flex items-center justify-center transition-colors"
            >
              <FontAwesomeIcon
                :icon="faLinkedinIn"
                class="w-[10px] h-[10px] text-gray-6"
              />
            </button>
            <button
              class="w-6 h-6 bg-white hover:bg-white/90 rounded-full flex items-center justify-center transition-colors"
            >
              <FontAwesomeIcon
                :icon="faXTwitter"
                class="w-[12.94px] h-[13.7px] text-gray-6"
              />
            </button>
            <button
              class="w-6 h-6 bg-white hover:bg-white/90 rounded-full flex items-center justify-center transition-colors"
            >
              <FontAwesomeIcon
                :icon="faEnvelope"
                class="w-[11px] h-[9px] text-gray-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="pb-8">
      <div class="grid lg:grid-cols-[1fr_405px] mx-auto">
        <!-- Left Column -->
        <div class="pr-[29px]">
          <!-- Tags and Metrics Row -->
          <div class="flex items-center justify-between mb-[15px]">
            <!-- Category Tags -->
            <div class="flex gap-2">
              <span
                class="h-6 pt-[2px] pr-4 pb-[2px] pl-4 bg-transparent rounded-[37px] text-[13px] font-semibold leading-[100%] tracking-[0px] text-center border border-white text-white flex items-center"
              >
                Fintech
              </span>
              <span
                class="h-6 pt-[2px] pr-4 pb-[2px] pl-4 bg-transparent rounded-[37px] text-[13px] font-semibold leading-[100%] tracking-[0px] text-center border border-white text-white flex items-center"
              >
                Investments
              </span>
            </div>

            <!-- Key Metrics -->
            <div class="flex gap-[3px] justify-end">
              <div
                class="h-7 pt-1 pr-2 pb-1 pl-2 bg-white rounded-2xl border border-black flex items-center gap-2"
              >
                <CalendarIcon />
                <span
                  class="text-base font-normal leading-5 tracking-[0px] text-secondary-800"
                  >213 Days Left</span
                >
              </div>
              <div
                class="h-7 pt-1 pr-2 pb-1 pl-2 bg-white rounded-2xl border border-black flex items-center gap-2"
              >
                <span
                  class="text-base font-normal leading-5 tracking-[0px] text-secondary-800"
                  >157 Total Investors</span
                >
              </div>
            </div>
          </div>

          <!-- Video Player -->
          <div class="h-[375px] border border-[#C9D6DF] shadow-lg mb-[17px]">
            <!-- Background image -->
            <NuxtImg
              src="/images/thumbnail.svg"
              alt="Video thumbnail"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Website -->
          <div class="flex items-center gap-2 text-secondary-50">
            <GlobeIcon />
            <span class="text-base font-normal leading-5 tracking-[0px]"
              >https://site.com</span
            >
          </div>
        </div>

        <!-- Right Column - Investment Details -->
        <div
          class="bg-white text-black rounded-xl shadow-xl h-fit border border-gray-100"
        >
          <div class="p-8 space-y-6">
            <!-- Funding Info -->
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Funding Goal</span>
                <span
                  class="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700"
                  >RegCF</span
                >
              </div>
              <div class="text-2xl font-bold text-gray-900">
                ${{ fundingGoal.toLocaleString() }}
              </div>

              <div>
                <div class="text-sm text-[#138dee] mb-1">Funds Raised</div>
                <div class="text-3xl font-bold text-[#138dee]">
                  ${{ fundsRaised.toLocaleString() }}
                </div>
              </div>
            </div>

            <hr class="border-gray-200" />

            <!-- Investment Details -->
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-lg font-semibold text-gray-900"
                  >${{ minimumInvestment.toLocaleString() }}</span
                >
                <span class="text-gray-600">Minimum Investment</span>
              </div>

              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Deadline:</span>
                  <span class="font-semibold text-gray-900">{{
                    deadline
                  }}</span>
                </div>

                <div class="flex justify-between">
                  <span class="text-gray-600">Type of Security:</span>
                  <span class="font-semibold text-gray-900">{{
                    securityType
                  }}</span>
                </div>

                <div class="flex justify-between">
                  <span class="text-gray-600">Revenue Share Duration:</span>
                  <span class="font-semibold text-gray-900"
                    >{{ duration }} months</span
                  >
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-3 pt-6">
              <button
                @click="investNow"
                class="w-full bg-[#138dee] hover:bg-[#0084f8] text-white py-4 text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Invest Now
              </button>
              <button
                @click="viewOffering"
                class="w-full text-gray-600 hover:text-gray-900 underline bg-transparent border-none cursor-pointer text-center py-2"
              >
                View Offering Circular
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="mt-12 text-sm text-white/80 max-w-lg ml-auto">
        Purchased securities are not currently tradeable. Expect to hold your
        investment until the company lists on a national exchange or is
        acquired.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { GlobeIcon, CalendarIcon } from "@/shared/ui";

// Investment data
const fundingGoal = ref(250000);
const fundsRaised = ref(300000);
const minimumInvestment = ref(100);
const deadline = ref("Feb, 2025");
const securityType = ref("Revenue Share Agreement");
const duration = ref(36);

// Methods
const investNow = () => {
  console.log("Invest Now clicked");
  // Implementar lógica de investimento
};

const viewOffering = () => {
  console.log("View Offering Circular clicked");
  // Implementar visualização do documento
};
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
