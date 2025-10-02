let currentPassToken: string | undefined;
let clearHandle: ReturnType<typeof setTimeout> | undefined;
let passCounter = 0;

export const resetTokenCounter = () => {
  passCounter = 0;
};

// Generate (or reuse) a token that is stable for the current JS macrotask.
// All calls within the same render flush will reuse the token; a new token
// is created on the next tick after React commits more updates.
export function getRenderPassToken(): string {
  if (currentPassToken) return currentPassToken;

  passCounter = (passCounter % 999) + 1;
  currentPassToken = `«${passCounter.toString().padStart(3, "0")}`;

  if (clearHandle) {
    clearTimeout(clearHandle);
  }
  clearHandle = setTimeout(() => {
    currentPassToken = undefined;
    clearHandle = undefined;
  }, 0);
  return currentPassToken;
}
