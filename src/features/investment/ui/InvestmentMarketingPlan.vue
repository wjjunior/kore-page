<template>
  <div>
    <h2
      class="font-hanken-grotesk font-bold text-[32px] leading-[100%] tracking-[1%] text-primary-200 mb-6"
    >
      Performance Marketing Plan
    </h2>

    <div v-if="loading" class="space-y-8">
      <div class="animate-pulse">
        <div class="h-8 bg-gray-200 rounded mb-4 w-48"></div>
        <div class="space-y-3">
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
      <div class="animate-pulse">
        <div class="h-8 bg-gray-200 rounded mb-4 w-48"></div>
        <div class="space-y-3">
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
      <div class="animate-pulse">
        <div class="h-8 bg-gray-200 rounded mb-4 w-48"></div>
        <div class="space-y-3">
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-4/5"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 max-w-4xl">
      <div>
        <h3
          class="font-normal text-[18px] leading-[20px] tracking-[0px] text-gray-6 mb-6"
        >
          Lorem ipsum
        </h3>
        <ul class="list-disc list-outside ml-14">
          <li
            class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li
            class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus
            erat velit,
          </li>
        </ul>
      </div>

      <div>
        <h3
          class="font-normal text-[18px] leading-[20px] tracking-[0px] text-gray-6 mb-6"
        >
          Lorem ipsum
        </h3>
        <ol class="list-[lower-alpha] list-outside ml-14">
          <li
            class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6"
          >
            Lorem ipsum dolor sit amet, co
          </li>
          <li
            class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus
            erat velit, non interdum lorem efficitur eu. Etiam hendrerit tortor
            at libero auctor hendrerit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc luctus erat velit, non Nunc luctus erat velit,
            non interdum lorem efficitur eu. Etiam hendrerit tortor at libero
            auctor hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </li>
          <li
            class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6"
          >
            Nunc luctus erat velit, non interdum lorem efficitur eu. Etiam
            hendrerit tortor at libero auctor hendrerit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </li>
          <li
            class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6"
          >
            Nunc luctus erat velit, non interdum lorem efficitur eu. Etiam
            hendrerit tortor at libero auctor hendrerit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nunc luctus erat velit, non
            interdum lorem efficitur eu. Etiam hendrerit tortor at libero auctor
            hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ol>
      </div>

      <div>
        <h3
          class="font-normal text-[18px] leading-[20px] tracking-[0px] text-gray-6 mb-6"
        >
          Lorem ipsum
        </h3>
        <ul class="list-disc list-outside ml-14">
          <li
            class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus
            erat velit, non interdum lorem efficitur eu. Etiam hendrerit tortor
            at libero auctor hendrerit.
          </li>
          <div class="ml-6">
            <li
              class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus erat velit, non interdum lorem efficitur eu. Etiam
              hendrerit tortor at libero auctor hendrerit. on App Store/Play
              Store aligned with Adventure mode release, optimize creatives.
            </li>
            <li
              class="font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus erat velit, non interdum lorem efficitur eu. Etiam
              hendrerit tortor at libero auctor hendrerit.
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "InvestmentMarketingPlan",
});

interface InvestmentMarketingPlanProps {
  loading?: boolean;
}

withDefaults(defineProps<InvestmentMarketingPlanProps>(), {
  loading: false,
});
</script>
