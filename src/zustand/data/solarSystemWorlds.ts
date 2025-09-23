import type { World } from "./types.ts";

export const SOLAR_SYSTEM_WORLDS: World[] = [
  {
    id: "abc123",
    name: "mercury",
    distanceFromSun: "58 million km",
    diameter: "4,879 km",
    orbitalPeriod: "88 days",
    type: "terrestrial planet",
  },
  {
    id: "def456",
    name: "venus",
    distanceFromSun: "108 million km",
    diameter: "12,104 km",
    orbitalPeriod: "225 days",
    type: "terrestrial planet",
  },
  {
    id: "ghi789",
    name: "earth",
    distanceFromSun: "150 million km",
    diameter: "12,756 km",
    orbitalPeriod: "365 days",
    type: "terrestrial planet",
  },
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
  {
    id: "mar004",
    name: "mars",
    distanceFromSun: "228 million km",
    diameter: "6,792 km",
    orbitalPeriod: "687 days",
    type: "terrestrial planet",
  },
  {
    id: "jup005",
    name: "jupiter",
    distanceFromSun: "778 million km",
    diameter: "142,984 km",
    orbitalPeriod: "12 years",
    type: "gas giant",
  },
  {
    id: "sat006",
    name: "saturn",
    distanceFromSun: "1.4 billion km",
    diameter: "120,536 km",
    orbitalPeriod: "29 years",
    type: "gas giant",
  },
  {
    id: "ura007",
    name: "uranus",
    distanceFromSun: "2.9 billion km",
    diameter: "51,118 km",
    orbitalPeriod: "84 years",
    type: "ice giant",
  },
  {
    id: "nep008",
    name: "neptune",
    distanceFromSun: "4.5 billion km",
    diameter: "49,528 km",
    orbitalPeriod: "165 years",
    type: "ice giant",
  },
  {
    id: "plu009",
    name: "pluto",
    distanceFromSun: "5.9 billion km",
    diameter: "2,374 km",
    orbitalPeriod: "248 years",
    type: "dwarf planet",
  },
  {
    id: "cer010",
    name: "ceres",
    distanceFromSun: "414 million km",
    diameter: "940 km",
    orbitalPeriod: "4.6 years",
    type: "dwarf planet",
  },
  {
    id: "eri011",
    name: "eris",
    distanceFromSun: "10.1 billion km",
    diameter: "2,326 km",
    orbitalPeriod: "558 years",
    type: "dwarf planet",
  },
  {
    id: "hau012",
    name: "haumea",
    distanceFromSun: "6.5 billion km",
    diameter: "1,632 km",
    orbitalPeriod: "285 years",
    type: "dwarf planet",
  },
  {
    id: "mak013",
    name: "makemake",
    distanceFromSun: "6.8 billion km",
    diameter: "1,434 km",
    orbitalPeriod: "310 years",
    type: "dwarf planet",
  },
];

export const getNextWorld = () => {
  if (!SOLAR_SYSTEM_WORLDS.length) {
    return { id: Math.random().toString(36).slice(2, 7), name: "new world" };
  }

  const idx = Math.floor(Math.random() * SOLAR_SYSTEM_WORLDS.length);
  const world = SOLAR_SYSTEM_WORLDS[idx];
  SOLAR_SYSTEM_WORLDS.splice(idx, 1);
  return world;
};
