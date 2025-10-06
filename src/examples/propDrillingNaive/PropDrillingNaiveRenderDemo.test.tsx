import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PropDrillingNaiveRenderDemo } from "./PropDrillingNaiveRenderDemo";
import * as worldsApi from "../../api/worlds";

// Mock the worlds API
vi.mock("../../api/worlds", async () => {
  const actual = await vi.importActual<typeof import("../../api/worlds")>(
    "../../api/worlds"
  );
  return {
    ...actual,
    fetchWorlds: vi.fn(() =>
      Promise.resolve({
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
      })
    ),
    addWorld: vi.fn(() =>
      Promise.resolve({
        id: "mar004",
        name: "mars",
        distanceFromSun: "228 million km",
        diameter: "6,792 km",
        orbitalPeriod: "687 days",
        type: "terrestrial planet",
      })
    ),
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

  it("should show render tokens reflecting the naive implementation's extra renders", async () => {
    const user = userEvent.setup();

    render(<PropDrillingNaiveRenderDemo />);

    await waitFor(() => {
      expect(screen.getByText(/World Selector/)).toBeInTheDocument();
    });

    // In the naive implementation, initial data load triggers multiple renders
    // The button may already be at «002 or higher due to prop churn
    const worldButton = screen.getByRole("button", { name: /mer001/i });
    const initialToken = worldButton.textContent?.match(/«\d{3}/)?.[0];
    expect(initialToken).toMatch(/«\d{3}/);

    await user.click(worldButton);

    // After click, the token should increment further due to all components re-rendering
    await waitFor(() => {
      const updatedButton = screen.getByRole("button", { name: /mer001/i });
      const newToken = updatedButton.textContent?.match(/«\d{3}/)?.[0];
      expect(newToken).toBeDefined();
      // Token should be different (higher) than initial
      expect(newToken).not.toBe(initialToken);
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
