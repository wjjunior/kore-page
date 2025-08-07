<template>
  <div>
    <h2
      class="font-hanken-grotesk font-bold text-[32px] leading-[100%] tracking-[1%] text-primary-200 mb-6"
    >
      Performance Marketing Plan
    </h2>

    <div v-if="loading" class="space-y-8">
      <div v-for="i in 3" :key="i" class="animate-pulse">
        <div class="h-8 bg-gray-200 rounded mb-4 w-48"></div>
        <div class="space-y-3">
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div
            class="h-4 bg-gray-200 rounded"
            :class="i === 1 ? 'w-3/4' : i === 2 ? 'w-full' : 'w-4/5'"
          ></div>
          <div
            v-if="i > 1"
            class="h-4 bg-gray-200 rounded"
            :class="i === 2 ? 'w-5/6' : 'w-3/4'"
          ></div>
        </div>
      </div>
    </div>

    <div v-else class="flex flex-col gap-6 max-w-4xl">
      <section>
        <h3 class="section-title">Lorem ipsum</h3>
        <ul class="list-disc list-outside ml-14">
          <li class="list-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li class="list-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus
            erat velit,
          </li>
        </ul>
      </section>

      <section>
        <h3 class="section-title">Lorem ipsum</h3>
        <ol class="list-[lower-alpha] list-outside ml-14">
          <li class="list-item">Lorem ipsum dolor sit amet, co</li>
          <li class="list-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus
            erat velit, non interdum lorem efficitur eu. Etiam hendrerit tortor
            at libero auctor hendrerit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc luctus erat velit, non Nunc luctus erat velit,
            non interdum lorem efficitur eu. Etiam hendrerit tortor at libero
            auctor hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </li>
          <li class="list-item">
            Nunc luctus erat velit, non interdum lorem efficitur eu. Etiam
            hendrerit tortor at libero auctor hendrerit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </li>
          <li class="list-item">
            Nunc luctus erat velit, non interdum lorem efficitur eu. Etiam
            hendrerit tortor at libero auctor hendrerit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nunc luctus erat velit, non
            interdum lorem efficitur eu. Etiam hendrerit tortor at libero auctor
            hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ol>
      </section>

      <section>
        <h3 class="section-title">Lorem ipsum</h3>
        <ul class="list-disc list-outside ml-14">
          <li class="list-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus
            erat velit, non interdum lorem efficitur eu. Etiam hendrerit tortor
            at libero auctor hendrerit.
          </li>
          <div class="ml-6">
            <li class="list-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus erat velit, non interdum lorem efficitur eu. Etiam
              hendrerit tortor at libero auctor hendrerit. on App Store/Play
              Store aligned with Adventure mode release, optimize creatives.
            </li>
            <li class="list-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus erat velit, non interdum lorem efficitur eu. Etiam
              hendrerit tortor at libero auctor hendrerit.
            </li>
          </div>
        </ul>
      </section>
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
