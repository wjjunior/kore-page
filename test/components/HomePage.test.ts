import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomePage from "@/components/home";

const MockNuxtImg = {
  name: "NuxtImg",
  template: '<img :src="$attrs.src" :alt="$attrs.alt" :class="$attrs.class" />',
};

const mountHomePage = () => {
  return mount(HomePage, {
    global: {
      components: {
        NuxtImg: MockNuxtImg,
      },
    },
  });
};

describe("HomePage", () => {
  it("renders the main heading correctly", () => {
    const wrapper = mountHomePage();

    expect(wrapper.find("h1").text()).toBe("Homepage");
  });

  it("renders the main container with correct styling", () => {
    const wrapper = mountHomePage();

    const mainContainer = wrapper.find(".min-h-screen");
    expect(mainContainer.exists()).toBe(true);
    expect(mainContainer.classes()).toContain("bg-gradient-to-br");
    expect(mainContainer.classes()).toContain("from-blue-50");
    expect(mainContainer.classes()).toContain("to-indigo-100");
  });

  it("renders the content card with proper styling", () => {
    const wrapper = mountHomePage();

    // Busca especificamente pelo div do card, não pelo botão
    const contentCard = wrapper.find("div.bg-white.rounded-lg");
    expect(contentCard.exists()).toBe(true);

    // Verifica as classes do card principal da página
    const cardClasses = contentCard.classes();
    expect(cardClasses).toContain("bg-white");
    expect(cardClasses).toContain("rounded-lg");
    expect(cardClasses).toContain("shadow-xl");
    expect(cardClasses).toContain("p-8");
    expect(cardClasses).toContain("max-w-md");
  });

  it("has the proper page structure", () => {
    const wrapper = mountHomePage();

    // Verifica se a estrutura básica da página está presente
    expect(wrapper.findComponent({ name: "Header" }).exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find(".min-h-screen").exists()).toBe(true);
  });
});
