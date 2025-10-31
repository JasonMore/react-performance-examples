import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PropDrillingNaiveRenderDemo } from "./PropDrillingNaiveRenderDemo";
import * as worldsApi from "../../api/worlds";
import type { World } from "../../api/worlds";

// Test data fixtures
const TEST_WORLDS: World[] = [
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
];

const NEW_WORLD: World = {
  id: "mar004",
  name: "mars",
  distanceFromSun: "228 million km",
  diameter: "6,792 km",
  orbitalPeriod: "687 days",
  type: "terrestrial planet",
};

// Mock the worlds API with predictable test data
vi.mock("../../api/worlds", async () => {
  const actual = await vi.importActual<typeof import("../../api/worlds")>(
    "../../api/worlds"
  );
  return {
    ...actual,
    fetchWorlds: vi.fn(() =>
      Promise.resolve({
        worlds: TEST_WORLDS,
      })
    ),
    addWorld: vi.fn(() => Promise.resolve(NEW_WORLD)),
  };
});

describe("PropDrillingNaiveRenderDemo", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should show initial render token «001 for World Selector after data loads", async () => {
    render(<PropDrillingNaiveRenderDemo />);

    await waitFor(() => {
      expect(screen.getByText(/World Selector/)).toBeInTheDocument();
    });

    const selectorTitle = screen.getByText(/World Selector/);
    expect(selectorTitle.textContent).toContain("«001");
  });

  it("should call addWorld API when Add world is clicked", async () => {
    const user = userEvent.setup();

    render(<PropDrillingNaiveRenderDemo />);

    await waitFor(() => {
      expect(screen.getByText(/World Selector/)).toBeInTheDocument();
    });

    const addButton = screen.getByRole("button", { name: /Add world/i });
    await user.click(addButton);

    await waitFor(() => {
      expect(worldsApi.addWorld).toHaveBeenCalled();
    });
  });

  it("should show world IDs from fetched data", async () => {
    render(<PropDrillingNaiveRenderDemo />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /mer001/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /ven002/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /ear003/i })).toBeInTheDocument();
    });
  });

  it("should show render tokens demonstrating naive implementation behavior", async () => {
    const user = userEvent.setup();

    render(<PropDrillingNaiveRenderDemo />);

    // Wait for data to load and world buttons to appear
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /mer001/i })).toBeInTheDocument();
    });

    // Get the initial render count from the button
    const worldButton = screen.getByRole("button", { name: /mer001/i });
    const initialTokenMatch = worldButton.textContent?.match(/«(\d{3})/);
    expect(initialTokenMatch).toBeDefined();
    const initialRenderCount = parseInt(initialTokenMatch![1], 10);
    
    // The naive implementation may show «001 or «002 depending on test isolation
    // What's important is that it increments after interaction
    expect(initialRenderCount).toBeGreaterThanOrEqual(1);
    expect(initialRenderCount).toBeLessThanOrEqual(2);

    await user.click(worldButton);

    // After click, the naive implementation causes components to re-render
    // The render count should increment by at least 1
    await waitFor(() => {
      const updatedButton = screen.getByRole("button", { name: /mer001/i });
      const newTokenMatch = updatedButton.textContent?.match(/«(\d{3})/);
      expect(newTokenMatch).toBeDefined();
      const newRenderCount = parseInt(newTokenMatch![1], 10);
      
      // Verify the render count increased after the click
      expect(newRenderCount).toBeGreaterThan(initialRenderCount);
      expect(newRenderCount).toBe(initialRenderCount + 1);
    });
  });

  it("should display selected world in worlds viewer", async () => {
    const user = userEvent.setup();

    render(<PropDrillingNaiveRenderDemo />);

    // Wait for initial data to load - should show venus by default
    await waitFor(
      () => {
        const worldTexts = screen.queryAllByText(/venus/i);
        expect(worldTexts.length).toBeGreaterThan(0);
      },
      { timeout: 3000 }
    );

    // Click on mercury button
    const mercuryButton = screen.getByRole("button", { name: /mer001/i });
    await user.click(mercuryButton);

    // Verify mercury appears in the viewer
    await waitFor(
      () => {
        const worldTexts = screen.queryAllByText(/mercury/i);
        expect(worldTexts.length).toBeGreaterThan(0);
      },
      { timeout: 3000 }
    );
  });
});
