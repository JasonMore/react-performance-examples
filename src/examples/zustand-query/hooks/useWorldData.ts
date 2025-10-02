import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { worldsApi } from "../api/worldsApi";
import { useSelectionStore } from "../data/SelectionStore";
import type { World } from "../data/types";

export const useWorldData = () => {
  const queryClient = useQueryClient();
  const selectedWorldId = useSelectionStore((s) => s.selectedWorldId);
  const setWorldId = useSelectionStore((s) => s.setWorldId);
  const isSelectedWorld = useSelectionStore((s) => s.isSelectedWorld);

  // Fetch worlds using React Query
  const worldsQuery = useQuery({
    queryKey: ["worlds"],
    queryFn: () => worldsApi.fetchWorlds(),
    refetchOnWindowFocus: false,
  });

  // Add world mutation with optimistic update
  const addWorldMutation = useMutation({
    mutationFn: worldsApi.addWorld,
    onMutate: async () => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["worlds"] });

      // Snapshot the previous value
      const previousWorlds = queryClient.getQueryData(["worlds"]);

      // Return a context object with the snapshotted value
      return { previousWorlds };
    },

    onError: (_err, _newWorld, context) => {
      // If the mutation fails, use the context returned from onMutate to roll back
      if (context?.previousWorlds) {
        queryClient.setQueryData(["worlds"], context.previousWorlds);
      }
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: ["worlds"] });
    },
  });

  // Derive the currently selected world
  const selectedWorld = worldsQuery.data?.worlds.find(
    (world) => world.id === selectedWorldId
  );

  // Get world by ID helper
  const getWorldById = (id: string): World | undefined => {
    return worldsQuery.data?.worlds.find((w) => w.id === id);
  };

  return {
    // Worlds data and loading states
    worlds: worldsQuery.data?.worlds || [],
    isLoading: worldsQuery.isLoading,
    isError: worldsQuery.isError,
    error: worldsQuery.error,
    
    // Selected world data
    selectedWorld,
    selectedWorldId,
    
    // Actions
    setWorldId,
    isSelectedWorld,
    getWorldById,
    
    // Add world mutation
    addWorld: addWorldMutation.mutate,
    isAddingWorld: addWorldMutation.isPending,
    addWorldError: addWorldMutation.error,
  };
};