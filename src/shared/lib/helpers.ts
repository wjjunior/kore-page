import type { Ref } from "vue";

export const scrollToSection = (
  href: string,
  sectionMap: Record<string, Ref<HTMLElement | null>>,
  headerOffset: number = 120
) => {
  const sectionRef = sectionMap[href];

  if (sectionRef?.value) {
    const offsetTop = sectionRef.value.offsetTop - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
