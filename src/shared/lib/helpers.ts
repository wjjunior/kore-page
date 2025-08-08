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

export const extractErrorMessage = (err: unknown): string | null => {
  if (typeof err === "string") return err;
  if (err && typeof err === "object" && "message" in err) {
    return String((err as any).message ?? "An error occurred");
  }
  return null;
};
