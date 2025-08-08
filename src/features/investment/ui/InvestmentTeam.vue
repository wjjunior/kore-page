<template>
  <div>
    <h2
      class="font-hanken-grotesk font-bold text-2xl md:text-3xl lg:text-[30px] xl:text-[32px] leading-[100%] tracking-[1%] text-primary-200 mb-4"
    >
      Team
    </h2>

    <div class="mb-8">
      <p
        class="text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-normal text-black leading-[28px] tracking-[0px] mb-4"
      >
        {{ teamDescription }}
      </p>
    </div>

    <div
      v-if="loading"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-5 xl:gap-6"
    >
      <div
        v-for="i in 4"
        :key="i"
        class="bg-white rounded-lg border border-primary-200 p-4 lg:p-5 xl:p-6 w-full max-w-[380px] lg:max-w-[400px] xl:max-w-[430px] text-center animate-pulse mx-auto"
      >
        <div class="w-24 h-24 mx-auto rounded-full mb-4 bg-gray-200"></div>
        <div class="h-6 bg-gray-200 rounded mb-1 w-32 mx-auto"></div>
        <div class="h-4 bg-gray-200 rounded mb-4 w-40 mx-auto"></div>
        <div class="h-4 bg-gray-200 rounded mb-4 w-full"></div>
        <div class="h-4 bg-gray-200 rounded mb-4 w-full"></div>
        <div class="flex justify-center space-x-6">
          <div class="w-16 h-4 bg-gray-200 rounded"></div>
          <div class="w-16 h-4 bg-gray-200 rounded"></div>
          <div class="w-8 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-5 xl:gap-6"
    >
      <div
        v-for="member in teamMembers"
        :key="member.id"
        class="bg-white rounded-lg border border-primary-200 p-4 lg:p-5 xl:p-6 w-full max-w-[380px] lg:max-w-[400px] xl:max-w-[430px] text-center mx-auto"
      >
        <NuxtImg
          :src="member.image"
          :alt="member.name"
          class="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
          loading="lazy"
          format="webp"
        />

        <h3
          class="font-bold text-[24px] leading-[100%] tracking-[1%] text-primary-200 mb-1"
        >
          {{ member.name }}
        </h3>

        <p
          class="font-medium text-[13px] leading-[20px] tracking-[0px] text-center text-gray-6 mb-4"
        >
          {{ member.position }}
        </p>

        <p
          class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6 mb-4 text-left"
        >
          {{ member.description }}
        </p>

        <div class="flex justify-center flex-wrap gap-4 text-sm">
          <a
            v-if="member.socialLinks.linkedin"
            :href="member.socialLinks.linkedin"
            class="flex items-center space-x-1 text-gray-700"
          >
            <FontAwesomeIcon :icon="faLinkedinIn" class="text-gray-700" />
            <span class="text-gray-700 hidden sm:inline">LinkedIn</span>
          </a>
          <a
            v-if="member.socialLinks.facebook"
            :href="member.socialLinks.facebook"
            class="flex items-center space-x-1 text-gray-700"
          >
            <FontAwesomeIcon :icon="faFacebookF" class="text-gray-700" />
            <span class="text-gray-700 hidden sm:inline">Facebook</span>
          </a>
          <a
            v-if="member.socialLinks.twitter"
            :href="member.socialLinks.twitter"
            class="flex items-center space-x-1"
          >
            <FontAwesomeIcon :icon="faXTwitter" class="text-gray-500" />
            <span class="text-gray-500 hidden sm:inline">x</span>
          </a>
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
import type { TeamMember } from "@/shared/lib/types";

defineOptions({
  name: "InvestmentTeam",
});

interface InvestmentTeamProps {
  teamMembers: TeamMember[];
  teamDescription: string;
  loading?: boolean;
}

withDefaults(defineProps<InvestmentTeamProps>(), {
  loading: false,
});
</script>
