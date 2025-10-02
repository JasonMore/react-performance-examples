import type { World } from "../examples/zustand/data/types";

export type WorldsResponse = {
  worlds: World[];
};

/**
 * Fetches all worlds from the API.
 * This endpoint is mocked by MSW in development.
 */
export async function fetchWorlds(): Promise<WorldsResponse> {
  const response = await fetch("/api/worlds");
  if (!response.ok) {
    throw new Error(`Failed to fetch worlds: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Adds a new world via the API.
 * This endpoint is mocked by MSW in development.
 */
export async function addWorld(): Promise<World> {
  const response = await fetch("/api/worlds", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to add world: ${response.statusText}`);
  }
  return response.json();
}
