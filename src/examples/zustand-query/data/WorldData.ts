import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { World } from "./types.ts";
import { getNextWorld } from "./solarSystemWorlds.ts";

let currentWorlds: World[] = [getNextWorld(), getNextWorld(), getNextWorld()];

// TODO: This is used for typescript, look up a better way?
const getWorldsQueryOptions = () => ({
  queryKey: ["worlds"] as const,
  queryFn: async () => ({ worlds: currentWorlds }),
  refetchOnWindowFocus: false,
});

export const useGetWorlds = () => useQuery(getWorldsQueryOptions());

export const useGetWorld = (id: string) => {
  return useQuery({
    ...getWorldsQueryOptions(),
    select: ({ worlds }) => worlds.find((w) => w.id === id),
  }).data;
};

export const useAddWorld = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const newWorld = getNextWorld();
      currentWorlds = [...currentWorlds, newWorld];
      return newWorld;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["worlds"] });
    },
  });
};
