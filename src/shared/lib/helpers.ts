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

interface ErrorWithMessage {
  message: unknown;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return typeof error === "object" && error !== null && "message" in error;
}

export const extractErrorMessage = (err: unknown): string | null => {
  if (typeof err === "string") return err;
  if (isErrorWithMessage(err)) {
    return typeof err.message === "string" ? err.message : "An error occurred";
  }
  return null;
};
