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
            <NavigationLink
              href="/invest"
              :is-active="activeNavItem === NavItems.INVEST"
            >
              INVEST
            </NavigationLink>
            <NavigationLink
              href="/faq"
              :is-active="activeNavItem === NavItems.FAQ"
            >
              FAQ
            </NavigationLink>
            <NavigationLink
              href="/contact"
              :is-active="activeNavItem === NavItems.CONTACT"
            >
              CONTACT US
            </NavigationLink>
            <NavigationLink
              href="/education"
              :is-active="activeNavItem === NavItems.EDUCATION"
            >
              EDUCATION
            </NavigationLink>
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
          <AuthButton variant="login" @click="handleLogin"> Login </AuthButton>
          <AuthButton variant="signup" @click="handleSignUp">
            Sign Up
          </AuthButton>
        </div>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-100">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white">
          <NavigationLink
            href="/invest"
            :is-active="activeNavItem === NavItems.INVEST"
            :is-mobile="true"
          >
            INVEST
          </NavigationLink>
          <NavigationLink
            href="/faq"
            :is-active="activeNavItem === NavItems.FAQ"
            :is-mobile="true"
          >
            FAQ
          </NavigationLink>
          <NavigationLink
            href="/contact"
            :is-active="activeNavItem === NavItems.CONTACT"
            :is-mobile="true"
          >
            CONTACT US
          </NavigationLink>
          <NavigationLink
            href="/education"
            :is-active="activeNavItem === NavItems.EDUCATION"
            :is-mobile="true"
          >
            EDUCATION
          </NavigationLink>

          <div class="pt-4 space-y-2">
            <AuthButton variant="login" :is-mobile="true" @click="handleLogin">
              Login
            </AuthButton>
            <AuthButton
              variant="signup"
              :is-mobile="true"
              @click="handleSignUp"
            >
              Sign Up
            </AuthButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NavItems } from "@/shared/lib";
import { NavigationLink } from "@/features/navigation/ui";
import { AuthButton } from "@/features/auth/ui";

interface Props {
  activeNavItem?: string;
}

withDefaults(defineProps<Props>(), {
  activeNavItem: NavItems.INVEST,
});

const isMobileMenuOpen = ref(false);

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

