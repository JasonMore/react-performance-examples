import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";
import { fetchWorlds, addWorld, type World, type WorldsResponse } from "../../../api/worlds.ts";
import { useCallback } from "react";
export const queryClient = new QueryClient();

const queryKey = ["worlds"] as const;

// TODO: This is used for typescript, look up a better way?
const getWorldsQueryOptions = () => ({
  queryKey,
  queryFn: fetchWorlds,
  refetchOnWindowFocus: false,
});

export const worldsLoader = async () => {
  await queryClient.prefetchQuery({ queryKey, queryFn: fetchWorlds });
};

export const useGetWorlds = () => useQuery(getWorldsQueryOptions());

export const useGetWorld = (id: string) => useQuery({
  ...getWorldsQueryOptions(),
  select: useCallback(({ worlds }: WorldsResponse) => {
    console.count(`>>> useGetWorld ${id}`)
    return worlds.find((w: World) => w.id === id)
  }, []),
})


export const useAddWorld = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addWorld,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};
