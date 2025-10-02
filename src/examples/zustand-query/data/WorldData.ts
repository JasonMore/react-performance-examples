import {
  useQuery,
  useMutation,
  useQueryClient,
  type UseQueryOptions,
} from "@tanstack/react-query";
import type { World } from "./types.ts";
import { getNextWorld } from "./solarSystemWorlds.ts";

let currentWorlds: World[] = [getNextWorld(), getNextWorld(), getNextWorld()];

export const useGetWorlds = (options: UseQueryOptions) =>
  useQuery({
    ...options,
    queryKey: ["worlds"],
    queryFn: async () => ({ worlds: currentWorlds }),
    refetchOnWindowFocus: false,
  });

export const useGetWorld = (id: string) => {
  const { data } = useGetWorlds({
    select: ({ worlds }) => worlds.find((w) => w.id === id),
  });

  return data;
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
