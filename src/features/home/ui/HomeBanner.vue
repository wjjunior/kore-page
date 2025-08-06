<template>
  <div
    class="min-h-screen bg-gradient-to-br from-[#138dee] to-[#0084f8] text-white px-[120px] pt-10"
  >
    <!-- Back Button - Above Banner -->
    <div>
      <button
        class="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        <ArrowLeft class="w-4 h-4" />
        Back
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
            <h1 class="text-5xl font-bold mb-2">Kore</h1>
            <p class="text-xl text-white/90">Lorem ipsum dolor sit</p>
          </div>
        </div>

        <!-- Right Side - Share Buttons -->
        <div class="flex items-center gap-3">
          <span class="text-sm">Share This Deal:</span>
          <div class="flex gap-2">
            <button
              class="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <Facebook class="w-4 h-4" />
            </button>
            <button
              class="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <Linkedin class="w-4 h-4" />
            </button>
            <button
              class="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <Twitter class="w-4 h-4" />
            </button>
            <button
              class="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <Mail class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="pb-8">
      <div class="grid lg:grid-cols-[1fr_420px] gap-10 max-w-7xl mx-auto">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- Tags and Metrics Row -->
          <div class="flex items-center justify-between">
            <!-- Category Tags -->
            <div class="flex gap-3">
              <span
                class="px-4 py-2 bg-transparent rounded-full text-sm border border-white text-white"
              >
                Fintech
              </span>
              <span
                class="px-4 py-2 bg-transparent rounded-full text-sm border border-white text-white"
              >
                Investments
              </span>
            </div>

            <!-- Key Metrics -->
            <div class="flex gap-3">
              <div
                class="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200"
              >
                <Calendar class="w-4 h-4 text-gray-600" />
                <span class="text-sm font-medium text-gray-800"
                  >213 Days Left</span
                >
              </div>
              <div
                class="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200"
              >
                <Users class="w-4 h-4 text-gray-600" />
                <span class="text-sm font-medium text-gray-800"
                  >157 Total Investors</span
                >
              </div>
            </div>
          </div>

          <!-- Video Player -->
          <div class="relative overflow-hidden bg-white rounded-xl shadow-lg">
            <div class="aspect-video relative">
              <div
                class="w-full h-full bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center"
              >
                <!-- Placeholder for professional woman image -->
                <div
                  class="w-full h-full bg-gradient-to-br from-slate-200 via-slate-100 to-blue-50 flex items-center justify-center"
                >
                  <div class="text-center text-slate-500">
                    <div
                      class="w-24 h-24 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center"
                    >
                      <svg
                        class="w-12 h-12 text-slate-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-sm font-medium">Business Professional</p>
                    <p class="text-xs text-slate-400">Video Content</p>
                  </div>
                </div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <button
                  class="w-20 h-20 rounded-full bg-white/95 hover:bg-white text-[#138dee] flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105"
                >
                  <Play class="w-10 h-10 ml-1" />
                </button>
              </div>
            </div>
          </div>

          <!-- Website -->
          <div class="flex items-center gap-2 text-white/90">
            <div
              class="w-4 h-4 rounded-full border border-white/50 flex items-center justify-center"
            >
              <div class="w-2 h-2 bg-white/70 rounded-full"></div>
            </div>
            <span>https://site.com</span>
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
import {
  ArrowLeft,
  Calendar,
  Users,
  Play,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-vue-next";

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
