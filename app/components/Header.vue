<template>
  <header class="w-full">
    <div class="px-[40px]">
      <div class="flex items-center justify-between">
        <div class="h-[72px] flex gap-8">
          <div class="flex items-center px-[15.38px] py-[11.25px] my-[4.64px]">
            <a href="/" class="flex items-center space-x-2">
              <NuxtImg
                src="/images/kore-logo.svg"
                alt="Kore Logo"
                class="w-[104.33px] h-[40.22px]"
              />
            </a>
          </div>

          <nav class="hidden md:flex items-center gap-8 h-full">
            <a href="/invest" :class="navLinkClasses(NavItems.INVEST)">
              INVEST
            </a>
            <a href="/faq" :class="navLinkClasses(NavItems.FAQ)"> FAQ </a>
            <a href="/contact" :class="navLinkClasses(NavItems.CONTACT)">
              CONTACT US
            </a>
            <a href="/education" :class="navLinkClasses(NavItems.EDUCATION)">
              EDUCATION
            </a>
          </nav>
        </div>

        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-[#252525] hover:text-primary-200 focus:outline-none focus:text-primary-200 transition-colors duration-200"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="hidden md:flex items-center gap-4">
          <button
            @click="handleLogin"
            class="w-[68px] h-[46px] p-3 border-2 border-primary-200 text-primary-200 rounded-button hover:bg-primary-200 hover:text-white transition-all duration-200 bg-white flex items-center justify-center"
          >
            <span class="font-bold leading-[120%] text-center">Login</span>
          </button>
          <button
            @click="handleSignUp"
            class="w-[90px] h-[46px] pt-3 pr-[14px] pb-3 pl-[14px] bg-primary-200 rounded-button transition-colors duration-200 flex items-center justify-center"
          >
            <span class="font-bold leading-[100%] text-center text-white"
              >Sign Up</span
            >
          </button>
        </div>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-100">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white">
          <a href="/invest" :class="mobileNavLinkClasses(NavItems.INVEST)">
            INVEST
          </a>
          <a href="/faq" :class="mobileNavLinkClasses(NavItems.FAQ)"> FAQ </a>
          <a href="/contact" :class="mobileNavLinkClasses(NavItems.CONTACT)">
            CONTACT US
          </a>
          <a
            href="/education"
            :class="mobileNavLinkClasses(NavItems.EDUCATION)"
          >
            EDUCATION
          </a>

          <div class="pt-4 space-y-2">
            <button
              @click="handleLogin"
              class="w-full h-[46px] p-3 border-2 border-primary-200 text-primary-200 rounded-button hover:bg-primary-200 hover:text-white transition-all duration-200 bg-white flex items-center justify-center"
            >
              <span class="font-bold leading-[120%] text-center">Login</span>
            </button>
            <button
              @click="handleSignUp"
              class="w-full h-[46px] pt-3 pr-[14px] pb-3 pl-[14px] bg-primary-200 rounded-button transition-colors duration-200 flex items-center justify-center"
            >
              <span class="font-bold leading-[100%] text-center text-white"
                >Sign Up</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { NavItems } from "../shared/lib/constants";

const props = defineProps({
  activeNavItem: {
    type: String,
    default: NavItems.INVEST,
  },
});

const isMobileMenuOpen = ref(false);

const navLinkClasses = (item) => [
  "font-medium transition-colors duration-200 h-full flex items-center",
  props.activeNavItem === item
    ? "text-primary-200 border-b-2 border-primary-200"
    : "text-primary-200 hover:text-[#1e3a8a]",
];

const mobileNavLinkClasses = (item) => [
  "px-3 py-2 font-medium transition-colors duration-200 h-12 flex items-center",
  props.activeNavItem === item
    ? "text-primary-200 border-l-2 border-primary-200 bg-blue-50"
    : "text-primary-200 hover:text-[#1e3a8a]",
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleLogin = () => {
  console.log("Login clicked");
};

const handleSignUp = () => {
  console.log("Sign Up clicked");
};
</script>

