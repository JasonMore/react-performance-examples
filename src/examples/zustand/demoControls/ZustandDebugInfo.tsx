import { DebugInfo } from "../../../components/DebugInfo.tsx";
import { useWorldStore } from "../data/WorldStore.tsx";

export function ZustandDebugInfo() {
  const selectedWorldId = useWorldStore((s) => s.selectedWorldId);
  const worlds = useWorldStore((s) => s.hello.worlds);

  return <DebugInfo snapshot={{ selectedWorldId, hello: { worlds } }} />;
}
