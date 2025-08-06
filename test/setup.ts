import { beforeEach, afterEach } from "vitest";

// Global test setup
beforeEach(() => {
  // Reset DOM between tests
  document.body.innerHTML = "";
});

afterEach(() => {
  // Cleanup after each test
  document.body.innerHTML = "";
});
