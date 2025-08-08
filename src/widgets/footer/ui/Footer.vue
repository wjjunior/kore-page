<template>
  <footer class="bg-brand-300 text-white py-8 md:py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[400px_minmax(180px,1fr)_1fr] xl:grid-cols-[477px_minmax(214px,1fr)_1fr] gap-8 md:gap-12 lg:gap-x-[150px] xl:gap-x-[200px] lg:gap-y-12"
      >
        <div class="md:col-span-2 lg:col-span-1">
          <KoreLogo
            width="129.69"
            height="50"
            textColor="white"
            symbolColor="#204496"
            backgroundColor="white"
            class="mb-4 md:mb-6"
          />

          <p class="text-sm md:text-base mb-4 md:mb-6">
            Join our newsletter to stay up to date on features and releases.
          </p>

          <form @submit.prevent="handleSubscribe" class="space-y-4">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="flex-1">
                  <label
                    for="first-name"
                    class="mb-2 block text-white/95 text-sm md:text-base"
                    >First Name</label
                  >
                  <input
                    id="first-name"
                    name="firstName"
                    v-model="firstName"
                    type="text"
                    required
                    class="h-[45px] w-full px-4 py-3 rounded bg-white text-gray-900 border border-primary shadow-sm text-sm md:text-base"
                  />
                </div>
                <div class="flex-1">
                  <label
                    for="last-name"
                    class="mb-2 block text-white/95 text-sm md:text-base"
                    >Last Name</label
                  >
                  <input
                    id="last-name"
                    name="lastName"
                    v-model="lastName"
                    type="text"
                    required
                    class="h-[45px] w-full px-4 py-3 rounded bg-white text-gray-900 border border-primary shadow-sm text-sm md:text-base"
                  />
                </div>
              </div>

              <div
                class="flex flex-col sm:flex-row overflow-hidden rounded-lg shadow-sm"
              >
                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email"
                  class="flex-1 h-[45px] px-4 rounded-l-lg sm:rounded-r-none rounded-r-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none text-sm md:text-base"
                  required
                />
                <button
                  type="submit"
                  class="h-[45px] px-4 sm:px-6 shrink-0 rounded-r-lg sm:rounded-l-none rounded-l-lg text-white font-semibold transition-colors bg-primary-400 hover:bg-primary-500 text-sm md:text-base"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>

          <p
            class="text-[10px] md:text-[10px] text-white/80 mt-4 leading-relaxed"
          >
            By subscribing you agree to with our
            <button
              @click="openPrivacyPolicy"
              class="font-medium underline hover:text-white ml-1"
            >
              Privacy Policy
            </button>
            and provide consent to receive updates from our company.
          </p>
        </div>

        <div>
          <h3
            id="platform-title"
            class="font-bold font-hanken-grotesk text-sm md:text-base lg:text-sm xl:text-base mb-3 md:mb-4"
          >
            The All-in-One Platform
          </h3>

          <nav
            class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-6 lg:gap-x-4 xl:gap-x-8 gap-y-2 sm:gap-y-0 lg:min-w-[180px] xl:min-w-[214px]"
            aria-labelledby="platform-title"
          >
            <ul class="flex flex-col gap-y-2 md:gap-y-4">
              <li v-for="link in platformLinksLeft" :key="link.path">
                <a
                  href="#"
                  @click.prevent="navigateTo(link.path)"
                  class="hover:text-white/80 transition-colors text-xs md:text-sm lg:text-xs xl:text-sm"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>

            <ul class="flex flex-col gap-y-2 md:gap-y-4">
              <li v-for="link in platformLinksRight" :key="link.path">
                <a
                  href="#"
                  @click.prevent="navigateTo(link.path)"
                  class="hover:text-white/80 transition-colors text-xs md:text-sm lg:text-xs xl:text-sm"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h3
            class="font-roboto font-semibold text-sm md:text-base lg:text-sm xl:text-base mb-3 md:mb-4"
          >
            Follow Us
          </h3>
          <ul class="space-y-2 md:space-y-4 lg:space-y-3 xl:space-y-4">
            <li v-for="social in socialLinks" :key="social.path">
              <a
                href="#"
                @click.prevent="navigateTo(social.path)"
                class="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <FontAwesomeIcon
                  :icon="social.icon"
                  class="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                />
                <span
                  class="font-lato text-xs md:text-sm lg:text-xs xl:text-sm"
                  >{{ social.label }}</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-white mt-8 md:mt-12">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-white/80 mt-6 md:mt-10"
      >
        <div
          class="font-hanken-grotesk font-medium text-xs md:text-[13px] text-center lg:text-left"
        >
          © 2016-2025 KoreConX Inc.
        </div>
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center">
          <button
            v-for="link in footerLinks"
            :key="link.label"
            @click="link.handler"
            class="font-hanken-grotesk text-xs md:text-[14px] lg:text-xs xl:text-[14px] underline underline-offset-2 hover:text-white"
          >
            {{ link.label }}
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { KoreLogo } from "@/shared/ui";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const firstName = ref("");
const lastName = ref("");
const email = ref("");

const platformLinksLeft = [
  { label: "About us", path: "/about" },
  { label: "KoreTeam", path: "/team" },
  { label: "KorePartners", path: "/partners" },
  { label: "Media", path: "/media" },
];

const platformLinksRight = [
  { label: "GPDR Compliance", path: "/gdpr" },
  { label: "Contact", path: "/contact" },
  { label: "Pricing", path: "/pricing" },
];

const socialLinks = [
  { label: "Facebook", path: "/facebook", icon: faFacebookF },
  { label: "Instagram", path: "/instagram", icon: faInstagram },
  { label: "X", path: "/twitter", icon: faXTwitter },
  { label: "LinkedIn", path: "/linkedin", icon: faLinkedinIn },
];

const footerLinks = [
  { label: "Privacy Policy", handler: openPrivacyPolicy },
  { label: "Terms of Service", handler: openTermsOfService },
  { label: "Cookies Settings", handler: openCookiesSettings },
];

function handleSubscribe() {
  if (!firstName.value || !lastName.value || !email.value) return;

  console.log("Newsletter subscription:", {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  });

  firstName.value = "";
  lastName.value = "";
  email.value = "";

  alert("Thank you for subscribing to our newsletter!");
}

function navigateTo(path: string) {
  console.log(`Navigate to: ${path}`);
}

function openPrivacyPolicy() {
  console.log("Open Privacy Policy");
}

function openTermsOfService() {
  console.log("Open Terms of Service");
}

function openCookiesSettings() {
  console.log("Open Cookies Settings");
}
</script>
