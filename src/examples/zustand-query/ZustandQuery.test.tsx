import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ZustandQuery } from "./ZustandQuery";
import * as worldsApi from "../../api/worlds";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock the worlds API
vi.mock("../../api/worlds", async () => {
  const actual =
    await vi.importActual<typeof import("../../api/worlds")>(
      "../../api/worlds",
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
      }),
    ),
    addWorld: vi.fn(() =>
      Promise.resolve({
        id: "mar004",
        name: "mars",
        distanceFromSun: "228 million km",
        diameter: "6,792 km",
        orbitalPeriod: "687 days",
        type: "terrestrial planet",
      }),
    ),
  };
});

describe("ZustandQuery", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    // Create a new QueryClient for each test to ensure isolation
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
    vi.clearAllMocks();
  });

  const renderWithQueryClient = (component: React.ReactElement) => {
    return render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>,
    );
  };

  it("should show initial render token «001 for World Selector after data loads", async () => {
    renderWithQueryClient(<ZustandQuery />);

    await waitFor(() => {
      expect(screen.getByText(/World Selector/)).toBeInTheDocument();
    });

    const selectorTitle = screen.getByText(/World Selector/);
    expect(selectorTitle.textContent).toContain("«001");
  });

  it("should call addWorld API when Add world is clicked", async () => {
    const user = userEvent.setup();

    renderWithQueryClient(<ZustandQuery />);

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
    renderWithQueryClient(<ZustandQuery />);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /mer001/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /ven002/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /ear003/i }),
      ).toBeInTheDocument();
    });
  });

  it("should update render token when clicking world ID button", async () => {
    const user = userEvent.setup();

    renderWithQueryClient(<ZustandQuery />);

    await waitFor(() => {
      expect(screen.getByText(/World Selector/)).toBeInTheDocument();
    });

    const worldButton = screen.getByRole("button", { name: /mer001/i });
    expect(worldButton.textContent).toContain("«001");

    await user.click(worldButton);

    await waitFor(() => {
      const updatedButton = screen.getByRole("button", { name: /mer001/i });
      expect(updatedButton.textContent).toContain("«002");
    });
  });

  it("should display selected world in worlds viewer", async () => {
    const user = userEvent.setup();

    renderWithQueryClient(<ZustandQuery />);

    // Wait for initial load and check venus is shown in the world name
    await waitFor(() => {
      const worldInfos = screen.getAllByText(/venus/i);
      // At least one should be the world name in the viewer
      expect(worldInfos.length).toBeGreaterThan(0);
    });

    // Click on mercury button
    const mercuryButton = screen.getByRole("button", { name: /mer001/i });
    await user.click(mercuryButton);

    // Verify mercury is displayed as a world name
    await waitFor(() => {
      const worldInfos = screen.getAllByText(/mercury/i);
      expect(worldInfos.length).toBeGreaterThan(0);
    });
  });
});
