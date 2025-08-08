import { beforeEach, afterEach, vi } from "vitest";
import { config } from "@vue/test-utils";
import { globalComponentStubs } from "./mocks";

beforeEach(() => {
  document.body.innerHTML = "";

  Object.defineProperty(window, "scrollTo", {
    value: vi.fn(),
    writable: true,
  });
});

afterEach(() => {
  document.body.innerHTML = "";
});

config.global.components = {
  ...(config.global?.components || {}),
  ...globalComponentStubs,
};
