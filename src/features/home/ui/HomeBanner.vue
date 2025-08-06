<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary-500 to-primary-600 text-white px-[120px] pt-10"
  >
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

    <div class="pt-[10px] pb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-start gap-4">
          <div
            class="pt-5 pb-[18.78px] pl-3 pr-[10.67px] bg-white rounded-xl shadow-sm"
          >
            <NuxtImg
              src="/images/kore-logo.svg"
              alt="Kore Logo"
              class="w-[104.33px] h-[40.22px]"
            />
          </div>
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

        <div class="flex items-center gap-3">
          <span class="font-normal text-[14px] leading-[40px] tracking-[0px]"
            >Share This Deal:</span
          >
          <div class="flex gap-2">
            <button
              v-for="button in shareButtons"
              :key="button.icon.iconName"
              class="w-6 h-6 bg-white hover:bg-white/90 rounded-full flex items-center justify-center transition-colors"
            >
              <FontAwesomeIcon
                :icon="button.icon"
                :class="button.size + ' text-gray-6'"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-8">
      <div class="grid lg:grid-cols-[1fr_405px] mx-auto">
        <div class="pr-[29px]">
          <div class="flex items-center justify-between mb-[15px]">
            <div class="flex gap-2">
              <span
                v-for="category in categories"
                :key="category"
                class="h-6 pt-[2px] pr-4 pb-[2px] pl-4 bg-transparent rounded-[37px] text-[13px] font-semibold leading-[100%] tracking-[0px] text-center border border-white text-white flex items-center"
              >
                {{ category }}
              </span>
            </div>
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
          <div
            class="h-[375px] border border-border-c9d6df shadow-lg mb-[17px]"
          >
            <NuxtImg
              src="/images/thumbnail.svg"
              alt="Video thumbnail"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex items-center gap-2 text-secondary-50">
            <GlobeIcon />
            <span class="text-base font-normal leading-5 tracking-[0px]"
              >https://site.com</span
            >
          </div>
        </div>

        <div>
          <div
            class="p-4 bg-white rounded-xl shadow-xl h-fit border border-gray-100"
          >
            <div class="flex flex-col gap-2">
              <div class="flex justify-between items-center">
                <span
                  class="text-[13px] font-normal leading-5 tracking-[0px] text-neutral-212121"
                  >Funding Goal</span
                >
                <span
                  class="w-[70px] h-6 pt-[2px] pr-4 pb-[2px] pl-4 text-gray-600 rounded-[37px] border border-gray-600 text-[13px] font-normal leading-[100%] tracking-[0px] text-center flex items-center justify-center"
                  >RegCF</span
                >
              </div>
              <span
                class="block text-[20px] font-normal leading-[100%] tracking-[1%] align-middle text-neutral-212121"
              >
                ${{ formatCurrency(fundingGoal) }}
              </span>
              <span
                class="block text-[20px] font-normal leading-6 tracking-[0px] text-primary-600"
                >Funds Raised</span
              >
              <span
                class="mb-4 block font-hanken-grotesk text-[32px] font-bold leading-[100%] tracking-[1%] align-middle text-primary-600"
              >
                ${{ formatCurrency(fundsRaised) }}
              </span>
            </div>

            <hr class="border-gray-2" />

            <div>
              <div class="flex items-center my-2 gap-2">
                <span
                  class="text-2xl font-normal leading-[100%] tracking-[0%] text-neutral-212121"
                >
                  ${{ formatCurrency(minimumInvestment) }}
                </span>
                <span
                  class="text-base font-normal leading-5 tracking-[0px] text-neutral-212121"
                  >Minimum Investment</span
                >
              </div>

              <hr class="border-gray-2" />

              <div class="flex flex-col gap-2 mt-2">
                <div>
                  <span
                    class="text-base font-normal leading-5 tracking-[0px] text-gray-600"
                    >Deadline:</span
                  >
                  <span
                    class="ml-2 text-xl font-bold leading-6 tracking-[0px] text-gray-900"
                    >{{ deadline }}</span
                  >
                </div>
                <div>
                  <span
                    class="text-base font-normal leading-5 tracking-[0px] text-gray-600"
                    >Type of Security:</span
                  >
                  <span
                    class="ml-2 text-xl font-bold leading-6 tracking-[0px] text-gray-900"
                    >Revenue Share Agreement</span
                  >
                </div>
                <div>
                  <span
                    class="text-base font-normal leading-5 tracking-[0px] text-gray-600"
                    >Revenue Share Duration:</span
                  >
                  <span
                    class="ml-2 text-xl font-bold leading-6 tracking-[0px] text-gray-900"
                    >{{ duration }} months</span
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 pt-6 mt-4">
              <button
                @click="investNow"
                class="font-lato w-[357px] h-[46px] pt-3 pr-[14px] pb-3 pl-[14px] rounded-button bg-primary-600 hover:bg-primary-500 text-white text-lg font-bold leading-[100%] tracking-[0%] text-center align-middle transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Invest Now
              </button>
              <button
                @click="viewOffering"
                class="font-lato text-neutral-212121 w-full bg-transparent border-none cursor-pointer py-2 font-normal text-base leading-6 tracking-[0px] text-center underline"
              >
                View Offering Circular
              </button>
            </div>
          </div>
          <div
            class="mt-4 font-normal text-xs leading-4 tracking-[0px] text-center text-white/80 max-w-lg ml-auto"
          >
            Purchased securities are not currently tradeable. Expect to hold
            your investment until the company lists on a national exchange or is
            acquired.
          </div>
        </div>
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

const fundingGoal = ref(250000);
const fundsRaised = ref(300000);
const minimumInvestment = ref(100);
const deadline = ref("Feb, 2025");
const duration = ref(36);

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const investNow = () => {
  console.log("Invest Now clicked");
};

const viewOffering = () => {
  console.log("View Offering Circular clicked");
};

const shareButtons = [
  { icon: faFacebookF, size: "w-[6px] h-[12px]" },
  { icon: faLinkedinIn, size: "w-[10px] h-[10px]" },
  { icon: faXTwitter, size: "w-[12.94px] h-[13.7px]" },
  { icon: faEnvelope, size: "w-[11px] h-[9px]" },
];

const categories = ["Fintech", "Investments"];
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
