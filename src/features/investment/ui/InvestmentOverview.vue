<template>
  <LoadingSpinner v-if="loading" message="Loading investment data..." />

  <ErrorMessage v-else-if="error" :message="error" @retry="$emit('retry')" />

  <div
    v-else-if="investmentData"
    class="bg-gradient-to-br from-primary-500 to-primary-200 text-white px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[120px] pt-4 lg:pt-10 min-w-0 overflow-hidden"
  >
    <button class="flex items-center gap-2 p-0 text-white rounded-lg">
      <FontAwesomeIcon
        :icon="faChevronLeft"
        class="w-[7.12px] h-[11.41px] text-secondary-50"
      />
      <span
        class="font-medium text-sm lg:text-[18px] leading-[24px] tracking-[0px] align-middle"
        >Back</span
      >
    </button>

    <div class="pt-3 lg:pt-[10px] pb-4">
      <div
        class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-0 min-w-0"
      >
        <div
          class="flex flex-col sm:flex-row items-start gap-3 lg:gap-4 min-w-0 flex-1"
        >
          <div
            class="pt-2 lg:pt-5 pb-2 lg:pb-[18.78px] pl-2 lg:pl-3 pr-2 lg:pr-[10.67px] bg-white rounded-xl shadow-sm flex-shrink-0"
          >
            <NuxtImg
              :src="investmentData.logoSrc"
              alt="Kore Logo"
              class="w-[70px] h-[25px] sm:w-[90px] sm:h-[35px] lg:w-[104.33px] lg:h-[40.22px]"
            />
          </div>
          <div class="flex-1 min-w-0">
            <h1
              class="font-hanken-grotesk font-bold text-lg sm:text-xl lg:text-[32px] leading-[100%] tracking-[1%] mb-2 lg:mb-4 break-words"
            >
              {{ investmentData.companyName }}
            </h1>
            <h5
              class="font-futura-hv font-normal text-sm sm:text-base lg:text-[24px] leading-[100%] tracking-[1%] text-secondary-50 break-words"
            >
              {{ investmentData.companyDescription }}
            </h5>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-3 flex-shrink-0"
        >
          <span
            class="font-normal text-xs lg:text-[14px] leading-[40px] tracking-[0px] whitespace-nowrap"
            >Share This Deal:</span
          >
          <div class="flex gap-1 lg:gap-2">
            <button
              v-for="button in shareButtons"
              :key="button.icon.iconName"
              class="w-7 h-7 sm:w-8 sm:h-8 lg:w-6 lg:h-6 bg-white hover:bg-white/90 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
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

    <div class="pb-4 lg:pb-8 min-w-0">
      <div
        class="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_405px] gap-4 lg:gap-6 xl:gap-0 mx-auto max-w-7xl min-w-0"
      >
        <div class="lg:pr-6 xl:pr-[29px] min-w-0">
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-0 mb-3 lg:mb-[15px] min-w-0"
          >
            <div class="flex flex-wrap gap-1 lg:gap-2 min-w-0">
              <span
                v-for="category in investmentData.categories"
                :key="category"
                class="h-7 lg:h-6 pt-[2px] pr-2 lg:pr-4 pb-[2px] pl-2 lg:pl-4 bg-transparent rounded-[37px] text-xs lg:text-[13px] font-semibold leading-[100%] tracking-[0px] text-center border border-white text-white flex items-center flex-shrink-0"
              >
                {{ category }}
              </span>
            </div>
            <div
              class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[3px] lg:justify-end"
            >
              <div
                class="h-7 lg:h-7 pt-1 pr-2 pb-1 pl-2 bg-white rounded-2xl border border-black flex items-center gap-1 lg:gap-2 justify-center flex-shrink-0 min-w-0"
              >
                <CalendarIcon class="flex-shrink-0" />
                <span
                  class="text-xs lg:text-base font-normal leading-5 tracking-[0px] text-secondary-800 whitespace-nowrap"
                  >{{ investmentData.daysLeft }} Days Left</span
                >
              </div>
              <div
                class="h-7 lg:h-7 pt-1 pr-2 pb-1 pl-2 bg-white rounded-2xl border border-black flex items-center gap-1 lg:gap-2 justify-center flex-shrink-0 min-w-0"
              >
                <span
                  class="text-xs lg:text-base font-normal leading-5 tracking-[0px] text-secondary-800 whitespace-nowrap"
                  >{{ investmentData.totalInvestors }} Total Investors</span
                >
              </div>
            </div>
          </div>
          <div
            class="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[375px] border border-border-c9d6df shadow-lg mb-3 lg:mb-[17px] rounded-lg overflow-hidden"
          >
            <NuxtImg
              :src="investmentData.thumbnailSrc"
              alt="Video thumbnail"
              class="w-full h-full object-cover hover:cursor-pointer"
            />
          </div>
          <div
            class="flex items-center gap-2 text-secondary-50 justify-center lg:justify-start min-w-0"
          >
            <GlobeIcon class="flex-shrink-0" />
            <span
              class="text-xs lg:text-base font-normal leading-5 tracking-[0px] truncate min-w-0"
              >{{ investmentData.website }}</span
            >
          </div>
        </div>

        <div class="w-full lg:max-w-none min-w-0">
          <div
            class="p-3 lg:p-4 bg-white rounded-xl shadow-xl h-fit border border-gray-100 min-w-0"
          >
            <div class="flex flex-col gap-2 min-w-0">
              <div class="flex justify-between items-center gap-2 min-w-0">
                <span
                  class="text-xs lg:text-[13px] font-normal leading-5 tracking-[0px] text-neutral-212121 flex-shrink-0"
                  >Funding Goal</span
                >
                <span
                  class="h-6 pt-[2px] pr-2 lg:pr-4 pb-[2px] pl-2 lg:pl-4 text-gray-600 rounded-[37px] border border-gray-600 text-xs lg:text-[13px] font-normal leading-[100%] tracking-[0px] text-center flex items-center justify-center flex-shrink-0"
                  >RegCF</span
                >
              </div>
              <span
                class="block text-base lg:text-[20px] text-neutral-212121 break-words"
              >
                ${{ formatCurrency(investmentData.fundingGoal) }}
              </span>
              <span class="block text-base lg:text-[20px] text-primary-200">
                Funds Raised
              </span>
              <span
                class="mb-3 lg:mb-4 block font-hanken-grotesk text-xl lg:text-[32px] font-bold leading-[100%] tracking-[1%] align-middle text-primary-200 break-words"
              >
                ${{ formatCurrency(investmentData.fundsRaised) }}
              </span>
            </div>

            <hr class="border-gray-2" />

            <div class="min-w-0">
              <div
                class="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 my-2 min-w-0"
              >
                <span
                  class="text-lg lg:text-2xl text-neutral-212121 break-words"
                >
                  ${{ formatCurrency(investmentData.minimumInvestment) }}
                </span>
                <span class="text-sm lg:text-base text-neutral-212121">
                  Minimum Investment
                </span>
              </div>

              <hr class="border-gray-2" />

              <div class="flex flex-col gap-2 mt-2 min-w-0">
                <div
                  class="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 min-w-0"
                >
                  <span class="text-xs lg:text-base text-gray-600">
                    Deadline:
                  </span>
                  <span
                    class="text-base lg:text-xl font-bold text-gray-900 break-words"
                  >
                    {{ investmentData.deadline }}
                  </span>
                </div>
                <div
                  class="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 min-w-0"
                >
                  <span class="text-xs lg:text-base text-gray-600">
                    Type of Security:
                  </span>
                  <span
                    class="text-base lg:text-xl font-bold text-gray-900 break-words"
                  >
                    {{ investmentData.typeOfSecurity }}
                  </span>
                </div>
                <div
                  class="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 min-w-0"
                >
                  <span class="text-xs lg:text-base text-gray-600">
                    Revenue Share Duration:
                  </span>
                  <span
                    class="text-base lg:text-xl font-bold text-gray-900 break-words"
                  >
                    {{ investmentData.revenueShareDuration }} months
                  </span>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-3 pt-4 mt-3 min-w-0">
              <button
                @click="investNow"
                class="font-lato w-full h-11 lg:h-[46px] px-3 lg:px-[14px] rounded-button bg-primary-200 hover:bg-primary-500 text-white text-sm lg:text-lg font-bold flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl min-w-0"
              >
                Invest Now
              </button>
              <button
                @click="viewOffering"
                class="font-lato text-neutral-212121 w-full bg-transparent border-none cursor-pointer py-2 font-normal text-xs lg:text-base text-center underline underline-offset-4 min-w-0 break-words"
              >
                View Offering Circular
              </button>
            </div>
          </div>

          <div
            class="mt-3 text-xs text-center text-white/80 max-w-lg mx-auto px-2 break-words"
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

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  GlobeIcon,
  CalendarIcon,
  LoadingSpinner,
  ErrorMessage,
} from "@/shared/ui";
import type { InvestmentBannerData } from "@/shared/lib/types";

interface Props {
  investmentData: InvestmentBannerData;
  loading: boolean;
  error: string | null;
}

defineProps<Props>();

const formatCurrency = (value: number) => {
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
</script>
