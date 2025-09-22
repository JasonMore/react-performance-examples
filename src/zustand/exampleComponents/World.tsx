import { memo } from "react";
import { useExampleStore } from "../UseExampleStore.tsx";
import { RenderToken } from "../RenderToken.tsx";

type Props = { id: string };

export const World = memo(({ id }: Props) => {
  const world = useExampleStore((s) => s.getWorldById(id));

  if (!world) {
    return (
      <>
        <span>🌍 (missing world: {id})</span>
        <RenderToken />
      </>
    );
  }

  return (
    <>
      <span>
        🌍 {world.id} {world.name}
      </span>
      <RenderToken />
    </>
  );
});

World.displayName = "World";
