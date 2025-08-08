import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ref } from "vue";
import { scrollToSection, extractErrorMessage } from "@/shared/lib/helpers";

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
    const mockElement = { offsetTop: 500 } as HTMLElement;
    const sectionMap = { "#test-section": ref(mockElement) };

    scrollToSection("#test-section", sectionMap);
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 380, behavior: "smooth" });
  });

  it("should scroll to the correct section with custom header offset", () => {
    const mockElement = { offsetTop: 600 } as HTMLElement;
    const sectionMap = { "#custom-section": ref(mockElement) };

    scrollToSection("#custom-section", sectionMap, 100);
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 500, behavior: "smooth" });
  });

  it("should not scroll when section ref is null", () => {
    const sectionMap = { "#null-section": ref(null) };
    scrollToSection("#null-section", sectionMap);
    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it("should not scroll when section ref value is null", () => {
    const sectionMap = { "#empty-section": ref<HTMLElement | null>(null) };
    scrollToSection("#empty-section", sectionMap);
    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it("should not scroll when href is not found in section map", () => {
    const sectionMap = {
      "#existing-section": ref({ offsetTop: 300 } as HTMLElement),
    };
    scrollToSection("#non-existing-section", sectionMap);
    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it("should handle multiple sections in section map", () => {
    const sectionMap = {
      "#section-1": ref({ offsetTop: 200 } as HTMLElement),
      "#section-2": ref({ offsetTop: 800 } as HTMLElement),
    };

    scrollToSection("#section-1", sectionMap);
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 80, behavior: "smooth" });

    mockScrollTo.mockClear();

    scrollToSection("#section-2", sectionMap);
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 680, behavior: "smooth" });
  });

  it("should handle zero offsetTop correctly", () => {
    const sectionMap = { "#top-section": ref({ offsetTop: 0 } as HTMLElement) };
    scrollToSection("#top-section", sectionMap);
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: -120,
      behavior: "smooth",
    });
  });

  it("should handle negative calculated scroll position", () => {
    const sectionMap = { "#near-top": ref({ offsetTop: 50 } as HTMLElement) };
    scrollToSection("#near-top", sectionMap, 100);
    expect(mockScrollTo).toHaveBeenCalledWith({ top: -50, behavior: "smooth" });
  });
});

describe("extractErrorMessage", () => {
  it("returns the same string when input is a string", () => {
    expect(extractErrorMessage("Simple error")).toBe("Simple error");
  });

  it("returns the message when input is an Error instance", () => {
    expect(extractErrorMessage(new Error("Boom"))).toBe("Boom");
  });

  it("falls back when message is undefined on an object", () => {
    expect(extractErrorMessage({ message: undefined } as any)).toBe(
      "An error occurred"
    );
  });

  it("stringifies non-string messages", () => {
    expect(extractErrorMessage({ message: 404 } as any)).toBe("404");
  });

  it("returns null when input is a number", () => {
    expect(extractErrorMessage(123)).toBeNull();
  });

  it("returns null when input is null", () => {
    expect(extractErrorMessage(null)).toBeNull();
  });

  it("returns null when object has no message property", () => {
    expect(extractErrorMessage({})).toBeNull();
  });
});
