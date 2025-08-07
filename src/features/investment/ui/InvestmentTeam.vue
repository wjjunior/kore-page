<template>
  <div>
    <h2
      class="font-hanken-grotesk font-bold text-[32px] leading-[100%] tracking-[1%] text-primary-200 mb-4"
    >
      Team
    </h2>

    <div class="mb-8">
      <p
        class="text-[20px] font-normal text-black leading-[28px] tracking-[0px] mb-4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus
        erat velit, non interdum lorem efficitur eu. Etiam hendrerit tortor at
        libero auctor hendrerit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nunc luctus erat velit, non interdum lorem efficitur
        eu. Etiam hendrerit tortor at libero auctor hendrerit.
      </p>
    </div>

    <div class="flex flex-wrap gap-6">
      <div
        v-for="member in teamMembers"
        :key="member.id"
        class="bg-white rounded-lg border border-primary-200 p-6 w-[430px] text-center"
      >
        <img
          :src="member.image"
          :alt="member.name"
          class="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
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
        <div class="flex justify-center space-x-6 text-sm">
          <a
            v-if="member.socialLinks.linkedin"
            :href="member.socialLinks.linkedin"
            class="flex items-center space-x-1 text-gray-700"
          >
            <FontAwesomeIcon :icon="faLinkedinIn" class="text-gray-700" />
            <span class="text-gray-700">LinkedIn</span>
          </a>
          <a
            v-if="member.socialLinks.facebook"
            :href="member.socialLinks.facebook"
            class="flex items-center space-x-1 text-gray-700"
          >
            <FontAwesomeIcon :icon="faFacebookF" class="text-gray-700" />
            <span class="text-gray-700">Facebook</span>
          </a>
          <a
            v-if="member.socialLinks.twitter"
            :href="member.socialLinks.twitter"
            class="flex items-center space-x-1"
          >
            <FontAwesomeIcon :icon="faXTwitter" class="text-gray-500" />
            <span class="text-gray-500">x</span>
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

defineOptions({
  name: "InvestmentTeam",
});

interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
  socialLinks: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jane Smith",
    position: "Director of Product Marketing",
    image:
      "https://i.postimg.cc/KvMRHGh4/73350dca466c03ce4e13b8398184ca610f015d69.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Dr. Carlos Nguyen",
    position: "Lead Game Designer",
    image:
      "https://i.postimg.cc/t4GY0K9k/9f0f3cb05cfe27298de8750b0852c4baea79a752.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "David Lee",
    position: "Data Scientist",
    image:
      "https://i.postimg.cc/t4GY0K9k/9f0f3cb05cfe27298de8750b0852c4baea79a752.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Alicia Brown",
    position: "Esports & Community Manager",
    image:
      "https://i.postimg.cc/KvMRHGh4/73350dca466c03ce4e13b8398184ca610f015d69.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];
</script>
