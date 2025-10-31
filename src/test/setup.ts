import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";
import { resetTokenCounter } from "../components/perf/renderTokenState";

// Mock scrollIntoView which is not available in jsdom
Element.prototype.scrollIntoView = () => {};

// Reset render token counter before each test to ensure consistent token values
beforeEach(() => {
  resetTokenCounter();
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
