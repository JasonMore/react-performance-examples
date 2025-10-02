import type { World } from "../data/types";
import { getNextWorld } from "../data/solarSystemWorlds";

export interface WorldsApiResponse {
  worlds: World[];
}

// Initialize with some worlds
let currentWorlds: World[] = [getNextWorld(), getNextWorld(), getNextWorld()];

export const worldsApi = {
  async fetchWorlds(): Promise<WorldsApiResponse> {
    return { worlds: [...currentWorlds] };
  },

  async addWorld(): Promise<World> { 
    const newWorld = getNextWorld();
    currentWorlds = [...currentWorlds, newWorld];
    
    return newWorld;
  }
};