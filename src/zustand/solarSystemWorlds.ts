type PlanetData = {
  name: string;
  distanceFromSun: string;
  diameter: string;
  orbitalPeriod: string;
  type: string;
};

export const SOLAR_SYSTEM_WORLDS: PlanetData[] = [
  {
    name: "mercury",
    distanceFromSun: "58 million km",
    diameter: "4,879 km",
    orbitalPeriod: "88 days",
    type: "terrestrial planet"
  },
  {
    name: "venus",
    distanceFromSun: "108 million km",
    diameter: "12,104 km",
    orbitalPeriod: "225 days",
    type: "terrestrial planet"
  },
  {
    name: "earth",
    distanceFromSun: "150 million km",
    diameter: "12,756 km",
    orbitalPeriod: "365 days",
    type: "terrestrial planet"
  },
  {
    name: "mars",
    distanceFromSun: "228 million km",
    diameter: "6,792 km",
    orbitalPeriod: "687 days",
    type: "terrestrial planet"
  },
  {
    name: "jupiter",
    distanceFromSun: "778 million km",
    diameter: "142,984 km",
    orbitalPeriod: "12 years",
    type: "gas giant"
  },
  {
    name: "saturn",
    distanceFromSun: "1.4 billion km",
    diameter: "120,536 km",
    orbitalPeriod: "29 years",
    type: "gas giant"
  },
  {
    name: "uranus",
    distanceFromSun: "2.9 billion km",
    diameter: "51,118 km",
    orbitalPeriod: "84 years",
    type: "ice giant"
  },
  {
    name: "neptune",
    distanceFromSun: "4.5 billion km",
    diameter: "49,528 km",
    orbitalPeriod: "165 years",
    type: "ice giant"
  },
  {
    name: "pluto",
    distanceFromSun: "5.9 billion km",
    diameter: "2,374 km",
    orbitalPeriod: "248 years",
    type: "dwarf planet"
  },
  {
    name: "ceres",
    distanceFromSun: "414 million km",
    diameter: "940 km",
    orbitalPeriod: "4.6 years",
    type: "dwarf planet"
  },
  {
    name: "eris",
    distanceFromSun: "10.1 billion km",
    diameter: "2,326 km",
    orbitalPeriod: "558 years",
    type: "dwarf planet"
  },
  {
    name: "haumea",
    distanceFromSun: "6.5 billion km",
    diameter: "1,632 km",
    orbitalPeriod: "285 years",
    type: "dwarf planet"
  },
  {
    name: "makemake",
    distanceFromSun: "6.8 billion km",
    diameter: "1,434 km",
    orbitalPeriod: "310 years",
    type: "dwarf planet"
  }
];

const availableWorlds = [...SOLAR_SYSTEM_WORLDS.filter(w => !["mercury", "venus", "earth"].includes(w.name))];

export function getRandomWorldData(): PlanetData | null {
  if (!availableWorlds.length) return null;

  const idx = Math.floor(Math.random() * availableWorlds.length);
  const world = availableWorlds[idx];
  availableWorlds.splice(idx, 1);
  return world;
}

export function getPlanetDataByName(name: string): PlanetData | undefined {
  return SOLAR_SYSTEM_WORLDS.find(world => world.name === name);
}
