import { useGetWorldById } from "../UseExampleStore.tsx";
import { RenderToken } from "../RenderToken.tsx";

type Props = { id: string };

export function World({ id }: Props) {
  const world = useGetWorldById(id);

  return (
    <>
      <span>
        🌍 {world.id} {world.name}
      </span>
      <RenderToken />
    </>
  );
}
