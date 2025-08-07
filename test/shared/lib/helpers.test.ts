import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ref } from "vue";
import { scrollToSection } from "@/shared/lib/helpers";

describe("scrollToSection", () => {
  const mockScrollTo = vi.fn();

  beforeEach(() => {
    Object.defineProperty(window, "scrollTo", {
      value: mockScrollTo,
      writable: true,
    });

    mockScrollTo.mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should scroll to the correct section with default header offset", () => {
    const mockElement = {
      offsetTop: 500,
    } as HTMLElement;

    const sectionRef = ref(mockElement);

    const sectionMap = {
      "#test-section": sectionRef,
    };

    scrollToSection("#test-section", sectionMap);

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 380,
      behavior: "smooth",
    });
  });

  it("should scroll to the correct section with custom header offset", () => {
    const mockElement = {
      offsetTop: 600,
    } as HTMLElement;

    const sectionRef = ref(mockElement);
    const sectionMap = {
      "#custom-section": sectionRef,
    };

    scrollToSection("#custom-section", sectionMap, 100);

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 500,
      behavior: "smooth",
    });
  });

  it("should not scroll when section ref is null", () => {
    const sectionRef = ref(null);
    const sectionMap = {
      "#null-section": sectionRef,
    };

    scrollToSection("#null-section", sectionMap);

    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it("should not scroll when section ref value is null", () => {
    const sectionRef = ref<HTMLElement | null>(null);
    const sectionMap = {
      "#empty-section": sectionRef,
    };

    scrollToSection("#empty-section", sectionMap);

    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it("should not scroll when href is not found in section map", () => {
    const mockElement = {
      offsetTop: 300,
    } as HTMLElement;

    const sectionRef = ref(mockElement);
    const sectionMap = {
      "#existing-section": sectionRef,
    };

    scrollToSection("#non-existing-section", sectionMap);

    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it("should handle multiple sections in section map", () => {
    const mockElement1 = { offsetTop: 200 } as HTMLElement;
    const mockElement2 = { offsetTop: 800 } as HTMLElement;

    const sectionRef1 = ref(mockElement1);
    const sectionRef2 = ref(mockElement2);

    const sectionMap = {
      "#section-1": sectionRef1,
      "#section-2": sectionRef2,
    };

    scrollToSection("#section-1", sectionMap);
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 80,
      behavior: "smooth",
    });

    mockScrollTo.mockClear();

    scrollToSection("#section-2", sectionMap);
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 680,
      behavior: "smooth",
    });
  });

  it("should handle zero offsetTop correctly", () => {
    const mockElement = {
      offsetTop: 0,
    } as HTMLElement;

    const sectionRef = ref(mockElement);
    const sectionMap = {
      "#top-section": sectionRef,
    };

    scrollToSection("#top-section", sectionMap);

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: -120,
      behavior: "smooth",
    });
  });

  it("should handle negative calculated scroll position", () => {
    const mockElement = {
      offsetTop: 50,
    } as HTMLElement;

    const sectionRef = ref(mockElement);
    const sectionMap = {
      "#near-top": sectionRef,
    };

    scrollToSection("#near-top", sectionMap, 100);

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: -50,
      behavior: "smooth",
    });
  });
});
