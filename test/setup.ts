import { beforeEach, afterEach } from "vitest";
import { config } from "@vue/test-utils";

beforeEach(() => {
  document.body.innerHTML = "";
});

afterEach(() => {
  document.body.innerHTML = "";
});

const NuxtLinkStub = {
  name: "NuxtLink",
  props: ["to"],
  template: '<a :href="to"><slot /></a>',
};

config.global.components = {
  ...(config.global?.components || {}),
  NuxtLink: NuxtLinkStub,
};
