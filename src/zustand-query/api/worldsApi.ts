import type { World } from "../data/types";
import { getNextWorld } from "../data/solarSystemWorlds";

// Simulate network delay and potential failures
const simulateNetworkDelay = () => new Promise(resolve => setTimeout(resolve, 600));
const simulateNetworkFailure = () => Math.random() < 0.05; // 5% failure rate

export interface WorldsApiResponse {
  worlds: World[];
}

// Initialize with some worlds
let currentWorlds: World[] = [getNextWorld(), getNextWorld(), getNextWorld()];

export const worldsApi = {
  async fetchWorlds(): Promise<WorldsApiResponse> {
    await simulateNetworkDelay();
    
    if (simulateNetworkFailure()) {
      throw new Error("Failed to fetch worlds from API");
    }
    
    return { worlds: [...currentWorlds] };
  },

  async addWorld(): Promise<World> {
    await simulateNetworkDelay();
    
    if (simulateNetworkFailure()) {
      throw new Error("Failed to add world to API");
    }
    
    const newWorld = getNextWorld();
    currentWorlds = [...currentWorlds, newWorld];
    
    return newWorld;
  }
};