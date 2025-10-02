import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchWorlds, addWorld } from "../../../api/worlds.ts";

// TODO: This is used for typescript, look up a better way?
const getWorldsQueryOptions = () => ({
  queryKey: ["worlds"] as const,
  queryFn: fetchWorlds,
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
    mutationFn: addWorld,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["worlds"] });
    },
  });
};
