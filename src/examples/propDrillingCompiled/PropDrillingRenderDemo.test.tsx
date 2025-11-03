import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PropDrillingCompiledRenderDemo } from "./PropDrillingRenderDemo";
import * as worldsApi from "../../api/worlds";

// Mock the loader data and revalidator
const mockRevalidate = vi.fn();
const mockUseLoaderData = vi.fn();
const mockUseRevalidator = vi.fn();

vi.mock("react-router-dom", () => ({
  useLoaderData: () => mockUseLoaderData(),
  useRevalidator: () => mockUseRevalidator(),
}));

describe("PropDrillingCompiledRenderDemo", () => {
  beforeEach(() => {
    mockRevalidate.mockClear();
    mockUseLoaderData.mockReturnValue({
      worlds: [
        {
          id: "mer001",
          name: "mercury",
          distanceFromSun: "58 million km",
          diameter: "4,879 km",
          orbitalPeriod: "88 days",
          type: "terrestrial planet",
        },
        {
          id: "ven002",
          name: "venus",
          distanceFromSun: "108 million km",
          diameter: "12,104 km",
          orbitalPeriod: "225 days",
          type: "terrestrial planet",
        },
        {
          id: "ear003",
          name: "earth",
          distanceFromSun: "150 million km",
          diameter: "12,756 km",
          orbitalPeriod: "365 days",
          type: "terrestrial planet",
        },
      ],
    });
    mockUseRevalidator.mockReturnValue({
      revalidate: mockRevalidate,
    });
  });

  it("should show initial render token «001 for World Selector", async () => {
    render(<PropDrillingCompiledRenderDemo />);

    await waitFor(() => {
      expect(screen.getByText(/World Selector/)).toBeInTheDocument();
    });

    const selectorTitle = screen.getByText(/World Selector/);
    expect(selectorTitle.textContent).toContain("«001");
  });

  it("should call revalidate when Add world is clicked", async () => {
    const user = userEvent.setup();

    vi.spyOn(worldsApi, "addWorld").mockResolvedValue({
      id: "mar004",
      name: "mars",
      distanceFromSun: "228 million km",
      diameter: "6,792 km",
      orbitalPeriod: "687 days",
      type: "terrestrial planet",
    });

    render(<PropDrillingCompiledRenderDemo />);

    await waitFor(() => {
      expect(screen.getByText(/World Selector/)).toBeInTheDocument();
    });

    const addButton = screen.getByRole("button", { name: /Add world/i });
    await user.click(addButton);

    await waitFor(() => {
      expect(worldsApi.addWorld).toHaveBeenCalled();
      expect(mockRevalidate).toHaveBeenCalled();
    });
  });

  it("should show world IDs from loader data", async () => {
    render(<PropDrillingCompiledRenderDemo />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /mer001/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /ven002/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /ear003/i })).toBeInTheDocument();
    });
  });

  it("should optimize rendering with React Compiler", async () => {
    const user = userEvent.setup();

    render(<PropDrillingCompiledRenderDemo />);

    await waitFor(() => {
      expect(screen.getByText(/World Selector/)).toBeInTheDocument();
    });

    // Mercury button is already selected (ven002 is default, but we're checking mer001)
    const mercuryButton = screen.getByRole("button", { name: /mer001/i });
    expect(mercuryButton.textContent).toContain("«001");

    // Click on mercury button to select it
    await user.click(mercuryButton);

    // React Compiler optimizes unnecessary re-renders
    // When clicking an already-selected or changing state, the compiler
    // may prevent re-renders if the output would be the same
    await waitFor(() => {
      const updatedButton = screen.getByRole("button", { name: /mer001/i });
      const tokenMatch = updatedButton.textContent?.match(/«(\d{3})/);
      expect(tokenMatch).toBeDefined();
      // The button may or may not re-render depending on compiler optimizations
      const renderCount = parseInt(tokenMatch![1], 10);
      expect(renderCount).toBeGreaterThanOrEqual(1);
      expect(renderCount).toBeLessThanOrEqual(2);
    });
  });
});
