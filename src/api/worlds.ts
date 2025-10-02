import type { World } from "../types/World";
import { getNextWorld } from "../examples/zustand/data/solarSystemWorlds";

export type WorldsResponse = {
  worlds: World[];
};

// In-memory store for worlds data
let worldsStore: World[] = [getNextWorld(), getNextWorld(), getNextWorld()];

/**
 * Fetches all worlds from the mock API.
 * Simulates network delay with setTimeout.
 */
export async function fetchWorlds(): Promise<WorldsResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ worlds: worldsStore });
    }, 300); // Simulate network delay
  });
}

/**
 * Adds a new world via the mock API.
 * Simulates network delay with setTimeout.
 */
export async function addWorld(): Promise<World> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newWorld = getNextWorld();
      worldsStore = [...worldsStore, newWorld];
      resolve(newWorld);
    }, 200); // Simulate network delay
  });
}
