import { memo } from "react";
import { useGetWorldById } from "../UseExampleStore.tsx";
import { RenderToken } from "../RenderToken.tsx";

type Props = { id: string };

export const World = memo(({ id }: Props) => {
  const world = useGetWorldById(id);

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
