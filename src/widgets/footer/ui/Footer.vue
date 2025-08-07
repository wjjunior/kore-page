<template>
  <footer class="bg-brand-300 text-white py-[40px]">
    <div class="max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 lg:grid-cols-[477px_minmax(214px,1fr)_1fr] gap-12 lg:gap-x-[200px] lg:gap-y-12"
      >
        <div>
          <KoreLogo
            width="129.69"
            height="50"
            textColor="white"
            symbolColor="#204496"
            backgroundColor="white"
            className="mb-6"
          />

          <p class="font-normal text-base leading-[150%] tracking-[0%] mb-6">
            Join our newsletter to stay up to date on features and releases.
          </p>

          <form @submit.prevent="handleSubscribe" class="space-y-4">
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1">
                <label
                  for="first-name"
                  class="mb-2 block text-white/95 font-normal text-base leading-6 tracking-[0px] align-middle"
                  >First Name</label
                >
                <input
                  id="first-name"
                  name="firstName"
                  v-model="firstName"
                  type="text"
                  required
                  class="h-[45px] w-full px-4 py-3 rounded bg-white text-gray-900 border border-primary shadow-sm"
                />
              </div>
              <div class="flex-1">
                <label
                  for="last-name"
                  class="mb-2 block text-white/95 font-normal text-base leading-6 tracking-[0px] align-middle"
                  >Last Name</label
                >
                <input
                  id="last-name"
                  name="lastName"
                  v-model="lastName"
                  type="text"
                  required
                  class="h-[45px] w-full px-4 py-3 rounded bg-white text-gray-900 border border-primary shadow-sm"
                />
              </div>
            </div>

            <div
              class="inline-flex w-full max-w-3xl overflow-hidden rounded-lg shadow-sm"
            >
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="flex-1 h-[45px] px-4 rounded-l bg-white text-gray-900 placeholder-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                class="h-[45px] px-6 shrink-0 rounded-r text-white font-semibold transition-colors bg-primary-400 hover:bg-primary-500"
              >
                Subscribe
              </button>
            </div>
          </form>

          <p
            class="text-[10px] font-normal leading-[150%] tracking-[0%] text-white/80 mt-4"
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
            class="font-bold font-hanken-grotesk text-base leading-[150%] tracking-[0%] mb-4"
          >
            The All-in-One Platform
          </h3>

          <nav
            class="grid grid-cols-2 gap-x-[32px] min-w-[214px] whitespace-nowrap"
            aria-labelledby="platform-title"
          >
            <ul class="flex flex-col gap-y-4">
              <li>
                <a
                  href="#"
                  @click.prevent="navigateTo('/about')"
                  class="hover:text-white/80 transition-colors font-normal text-sm leading-none tracking-[0%]"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="navigateTo('/team')"
                  class="hover:text-white/80 transition-colors font-normal text-sm leading-none tracking-[0%]"
                >
                  KoreTeam
                </a>
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="navigateTo('/partners')"
                  class="hover:text-white/80 transition-colors font-normal text-sm leading-none tracking-[0%]"
                >
                  KorePartners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="navigateTo('/media')"
                  class="hover:text-white/80 transition-colors font-normal text-sm leading-none tracking-[0%]"
                >
                  Media
                </a>
              </li>
            </ul>

            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  @click.prevent="navigateTo('/gdpr')"
                  class="hover:text-white/80 transition-colors font-normal text-sm leading-none tracking-[0%]"
                >
                  GPDR Compliance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="navigateTo('/contact')"
                  class="hover:text-white/80 transition-colors font-normal text-sm leading-none tracking-[0%]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="navigateTo('/pricing')"
                  class="hover:text-white/80 transition-colors font-normal text-sm leading-none tracking-[0%]"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h3
            class="font-roboto font-semibold text-base leading-[150%] tracking-[0%] mb-4"
          >
            Follow Us
          </h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-2">
              <a
                href="#"
                @click.prevent="navigateTo('/facebook')"
                class="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <FontAwesomeIcon :icon="faFacebookF" class="w-6 h-6" />
                <span
                  class="font-lato font-normal text-sm leading-[150%] tracking-[0%]"
                  >Facebook</span
                >
              </a>
            </li>
            <li class="flex items-center gap-2">
              <a
                href="#"
                @click.prevent="navigateTo('/instagram')"
                class="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <FontAwesomeIcon :icon="faInstagram" class="w-6 h-6" />
                <span
                  class="font-lato font-normal text-sm leading-[150%] tracking-[0%]"
                  >Instagram</span
                >
              </a>
            </li>
            <li class="flex items-center gap-2">
              <a
                href="#"
                @click.prevent="navigateTo('/twitter')"
                class="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <FontAwesomeIcon :icon="faXTwitter" class="w-6 h-6" />
                <span
                  class="font-lato font-normal text-sm leading-[150%] tracking-[0%]"
                  >X</span
                >
              </a>
            </li>
            <li class="flex items-center gap-2">
              <a
                href="#"
                @click.prevent="navigateTo('/linkedin')"
                class="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <FontAwesomeIcon :icon="faLinkedinIn" class="w-6 h-6" />
                <span
                  class="font-lato font-normal text-sm leading-[150%] tracking-[0%]"
                  >LinkedIn</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-white mt-12">
      <div
        class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-white/80 mt-10"
      >
        <div
          class="font-hanken-grotesk font-medium text-[13px] leading-[20px] tracking-[0px]"
        >
          © 2016-2025 KoreConX Inc.
        </div>
        <div class="flex gap-6">
          <button
            @click="openPrivacyPolicy"
            class="font-hanken-grotesk font-normal text-[14px] leading-[150%] tracking-[0%] underline decoration-solid decoration-0 underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </button>
          <button
            @click="openTermsOfService"
            class="font-hanken-grotesk font-normal text-[14px] leading-[150%] tracking-[0%] underline decoration-solid decoration-0 underline-offset-2 hover:text-white"
          >
            Terms of Service
          </button>
          <button
            @click="openCookiesSettings"
            class="font-hanken-grotesk font-normal text-[14px] leading-[150%] tracking-[0%] underline decoration-solid decoration-0 underline-offset-2 hover:text-white"
          >
            Cookies Settings
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

defineOptions({ name: "Footer" });

const firstName = ref("");
const lastName = ref("");
const email = ref("");

const handleSubscribe = () => {
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
};

const navigateTo = (path: string) => {
  console.log(`Navigate to: ${path}`);
};

const openPrivacyPolicy = () => console.log("Open Privacy Policy");
const openTermsOfService = () => console.log("Open Terms of Service");
const openCookiesSettings = () => console.log("Open Cookies Settings");
</script>
