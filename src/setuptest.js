// add Vitest functions here globally
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import registerIcons from "./registerIcons";

// Extend Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// Register the FA icons for testing
registerIcons();

// Run cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
    cleanup();
});
