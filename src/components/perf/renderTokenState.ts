let currentPassToken: string | undefined;
let clearHandle: ReturnType<typeof setTimeout> | undefined;
let passCounter = 0;

export const resetTokenCounter = () => {
  passCounter = 0;
  currentPassToken = undefined;
  if (clearHandle) {
    clearTimeout(clearHandle);
  }
};

export function getRenderPassToken(): string {
  if (clearHandle) {
    clearTimeout(clearHandle);
  }

  if (!currentPassToken) {
    passCounter = (passCounter % 999) + 1;
    currentPassToken = `«${passCounter.toString().padStart(3, "0")}»`;
  }

  clearHandle = setTimeout(() => {
    Promise.resolve().then(() => {
      currentPassToken = undefined;
    });
  }, 0);


  return currentPassToken;
}