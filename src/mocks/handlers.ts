import { http, HttpResponse, delay } from "msw";
import type { World } from "../examples/zustand/data/types";
import { getNextWorld } from "../examples/zustand/data/solarSystemWorlds";

// In-memory store for worlds data
let worldsStore: World[] = [getNextWorld(), getNextWorld(), getNextWorld()];

export const handlers = [
  // GET /api/worlds - Fetch all worlds
  http.get("/api/worlds", async () => {
    await delay(300); // Simulate network delay
    return HttpResponse.json({
      worlds: worldsStore,
    });
  }),

  // POST /api/worlds - Add a new world
  http.post("/api/worlds", async () => {
    await delay(200); // Simulate network delay
    const newWorld = getNextWorld();
    worldsStore = [...worldsStore, newWorld];
    return HttpResponse.json(newWorld, { status: 201 });
  }),
];
