import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { World } from "./types.ts";
import { getNextWorld } from "./solarSystemWorlds.ts";

let currentWorlds: World[] = [getNextWorld(), getNextWorld(), getNextWorld()];

export const useGetWorlds = () =>
  useQuery({
    queryKey: ["worlds"],
    queryFn: async () => ({ worlds: currentWorlds }),
    refetchOnWindowFocus: false,
  });

export const useGetWorld = (id: string) => {
  const { data } = useGetWorlds();
  return data?.worlds?.find((w) => w.id === id);
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
