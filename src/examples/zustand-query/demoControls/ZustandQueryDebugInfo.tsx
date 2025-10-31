import { DebugInfo } from "../../../components/DebugInfo.tsx";
import { useGetWorlds } from "../data/WorldData.ts";
import { useWorldStore } from "../../zustand/data/WorldStore.tsx";

export function ZustandQueryDebugInfo() {
  const selectedWorldId = useWorldStore((s) => s.selectedWorldId);
  const { data } = useGetWorlds();

  return (
    <DebugInfo
      snapshot={{ selectedWorldId, hello: { worlds: data?.worlds } }}
    />
  );
}
