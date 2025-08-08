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
            <a
              :href="ROUTES.INVEST"
              :class="
                getNavLinkClasses(activeNavItem === NavItems.INVEST, false)
              "
            >
              INVEST
            </a>
            <a
              :href="ROUTES.FAQ"
              :class="getNavLinkClasses(activeNavItem === NavItems.FAQ, false)"
            >
              FAQ
            </a>
            <a
              :href="ROUTES.CONTACT"
              :class="
                getNavLinkClasses(activeNavItem === NavItems.CONTACT, false)
              "
            >
              CONTACT US
            </a>
            <a
              :href="ROUTES.EDUCATION"
              :class="
                getNavLinkClasses(activeNavItem === NavItems.EDUCATION, false)
              "
            >
              EDUCATION
            </a>
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
          <button
            @click="handleLogin"
            :class="getAuthButtonClasses('login', false)"
          >
            Login
          </button>
          <button
            @click="handleSignUp"
            :class="getAuthButtonClasses('signup', false)"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-100">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white">
          <a
            :href="ROUTES.INVEST"
            :class="getNavLinkClasses(activeNavItem === NavItems.INVEST, true)"
          >
            INVEST
          </a>
          <a
            :href="ROUTES.FAQ"
            :class="getNavLinkClasses(activeNavItem === NavItems.FAQ, true)"
          >
            FAQ
          </a>
          <a
            :href="ROUTES.CONTACT"
            :class="getNavLinkClasses(activeNavItem === NavItems.CONTACT, true)"
          >
            CONTACT US
          </a>
          <a
            :href="ROUTES.EDUCATION"
            :class="
              getNavLinkClasses(activeNavItem === NavItems.EDUCATION, true)
            "
          >
            EDUCATION
          </a>

          <div class="pt-4 space-y-2">
            <button
              @click="handleLogin"
              :class="getAuthButtonClasses('login', true)"
            >
              Login
            </button>
            <button
              @click="handleSignUp"
              :class="getAuthButtonClasses('signup', true)"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NavItems, MobileMenuIcon, ROUTES, KoreLogo } from "@/shared";

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

const getNavLinkClasses = (isActive: boolean, isMobile: boolean) => {
  if (isMobile) {
    const baseClasses =
      "px-3 py-2 font-medium transition-colors duration-200 h-12 flex items-center";
    const activeClasses =
      "text-primary-200 border-l-2 border-primary-200 bg-blue-50";
    const inactiveClasses = "text-primary-200 hover:text-blue-800";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  } else {
    const baseClasses =
      "font-medium transition-colors duration-200 h-full flex items-center";
    const activeClasses = "text-primary-200 border-b-2 border-primary-200";
    const inactiveClasses = "text-primary-200 hover:text-blue-800";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  }
};

const getAuthButtonClasses = (
  variant: "login" | "signup",
  isMobile: boolean
) => {
  const baseClasses =
    "font-bold leading-[120%] text-center transition-all duration-200 flex items-center justify-center";

  if (isMobile) {
    return variant === "login"
      ? `${baseClasses} w-full h-[46px] p-3 border-2 border-primary-200 text-primary-200 rounded-button hover:bg-primary-200 hover:text-white bg-white`
      : `${baseClasses} w-full h-[46px] pt-3 pr-[14px] pb-3 pl-[14px] bg-primary-200 rounded-button text-white`;
  } else {
    return variant === "login"
      ? `${baseClasses} w-[68px] h-[46px] p-3 border-2 border-primary-200 text-primary-200 rounded-button hover:bg-primary-200 hover:text-white bg-white`
      : `${baseClasses} w-[90px] h-[46px] pt-3 pr-[14px] pb-3 pl-[14px] bg-primary-200 rounded-button text-white`;
  }
};
</script>
