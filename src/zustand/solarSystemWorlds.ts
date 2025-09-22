export const SOLAR_SYSTEM_WORLD_NAMES: string[] = [
  // "mercury",
  // "venus",
  // "earth", already set in demo
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
  "ceres",
  "eris",
  "haumea",
  "makemake",
];

export function getRandomWorldName() {
  if (!SOLAR_SYSTEM_WORLD_NAMES.length) return "new world";

  const idx = Math.floor(Math.random() * SOLAR_SYSTEM_WORLD_NAMES.length);
  const name = SOLAR_SYSTEM_WORLD_NAMES[idx];
  SOLAR_SYSTEM_WORLD_NAMES.splice(idx, 1);
  return name;
}
