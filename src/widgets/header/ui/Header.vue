<template>
  <header class="w-full">
    <div class="px-[40px]">
      <div class="flex items-center justify-between">
        <div class="h-[72px] flex gap-8">
          <div class="flex items-center px-[15.38px] py-[11.25px] my-[4.64px]">
            <a :href="ROUTES.HOME" class="flex items-center space-x-2">
              <KoreLogo width="104.33" height="40.22" />
            </a>
          </div>

          <nav class="hidden md:flex items-center gap-8 h-full">
            <NavigationLink
              :href="ROUTES.INVEST"
              :is-active="activeNavItem === NavItems.INVEST"
            >
              INVEST
            </NavigationLink>
            <NavigationLink
              :href="ROUTES.FAQ"
              :is-active="activeNavItem === NavItems.FAQ"
            >
              FAQ
            </NavigationLink>
            <NavigationLink
              :href="ROUTES.CONTACT"
              :is-active="activeNavItem === NavItems.CONTACT"
            >
              CONTACT US
            </NavigationLink>
            <NavigationLink
              :href="ROUTES.EDUCATION"
              :is-active="activeNavItem === NavItems.EDUCATION"
            >
              EDUCATION
            </NavigationLink>
          </nav>
        </div>

        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-900 hover:text-primary-200 focus:outline-none focus:text-primary-200 transition-colors duration-200"
          >
            <MobileMenuIcon :is-open="isMobileMenuOpen" />
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
            :href="ROUTES.INVEST"
            :is-active="activeNavItem === NavItems.INVEST"
            :is-mobile="true"
          >
            INVEST
          </NavigationLink>
          <NavigationLink
            :href="ROUTES.FAQ"
            :is-active="activeNavItem === NavItems.FAQ"
            :is-mobile="true"
          >
            FAQ
          </NavigationLink>
          <NavigationLink
            :href="ROUTES.CONTACT"
            :is-active="activeNavItem === NavItems.CONTACT"
            :is-mobile="true"
          >
            CONTACT US
          </NavigationLink>
          <NavigationLink
            :href="ROUTES.EDUCATION"
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
import { NavItems, MobileMenuIcon, ROUTES, KoreLogo } from "@/shared";
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
