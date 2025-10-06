# React Performance Examples ([Live Demo](https://stackblitz.com/~/github.com/JasonMore/react-performance-examples))

Hands-on demos that contrast common React state patterns with their
performance-minded counterparts. Each example surfaces rerender behavior through `RenderToken` counters.

## Core Software Engineering Patterns & Principles

- **Separation of Concerns (SoC):** Keep UI, state, and side effects separate. Example: [Zustand Render Demo](src/examples/zustand/ZustandRenderDemo.tsx) loads data via a React Router loader while delegating state management to a dedicated [Zustand store](src/examples/zustand/data/WorldStore.tsx).
- **Single Responsibility Principle (SRP):** Do one thing really well — both at the component and hook level. Example: the [WorldSelector](src/examples/propDrilling/exampleComponents/worldSelector/WorldSelector.tsx) focuses solely on rendering selector UI and leaves data orchestration to parent hooks.
- **Composition (comp):** Organize code into smaller, composable, and isolated pieces. Example: the [WorldApp shell](src/examples/zustand/exampleComponents/WorldApp.tsx) composes selector and viewer panes without sharing their internal concerns.
- **Encapsulation (encap):** Build small, idempotent, reusable pieces of code. Example: [useWorldStore](src/examples/zustand/data/WorldStore.tsx) exposes a minimal API that hides mutation details from consuming components.
- **Correct Memoization (cache):** Use memoization correctly to ensure performance and predictable rendering. Example: the optimized [Prop Drilling WorldApp](src/examples/propDrilling/exampleComponents/WorldApp.tsx) stabilizes callbacks with `useCallback`, hoists refs, and wraps the component in `memo` to avoid prop churn.

## Non-Performant Patterns to Avoid

**Prop Drilling**

- (comp) Creates tight coupling between components. Makes components less composable and harder to reuse.
- (cache) Breaks memoization when passing computed arrays or objects.
- **Example:** [Prop Drilling Naive Render Demo](src/examples/propDrillingNaive/PropDrillingNaiveRenderDemo.tsx) intentionally passes unstable props to demonstrate cascading re-renders.

**Component Architecture**

- (SRP) Many feature components are too large and complex.
- (SRP) Render methods that are long.
- (SoC) Components often mix data transformation, state, and conditional rendering into one block.
- (encap) Multiple components defined in a single file reduce clarity and reusability.
- **Example:** WIP — add a dedicated demo that contrasts a bloated component with a composed alternative.

**Data State**

- (SoC) API state and local application state are scattered across component layers instead of being managed centrally.
- Should follow:
  - **Server/API state → @tanstack/react-query**.
  - **Local/UI state → zustand**.
- Always access state through **custom hooks**.
- **Example:** WIP — add a failing demo that over-fetches data locally before showing the [Zustand + TanStack Query](src/examples/zustand-query/ZustandQuery.tsx) fix.

**useEffect**

- (SRP) Often very large, doing too many things at once.
- (SoC) Misused to handle computed data structures or business logic.
- Should only be used to **sync with external browser APIs**
- All other use cases are better served by `useMemo`, `useCallback`, or custom hooks.
- 🚨 Overuse of `eslint-disable-next-line react-hooks/exhaustive-deps` indicates broken patterns.
- **Example:** WIP — add a demo highlighting effects that manage derived data instead of syncing external systems.

**Memoization & Props**

- Misconceptions about correct usage lead to re-render performance issues.
- Props should be **primitives** whenever possible.
- ❌ **Do not pass new objects/arrays/functions inline as props**:

  ```
  // ❌ BAD
  <FooBar myValue={{ foo: "bar" }} />

  // ✅ GOOD
  const myValue = useMemo(() => ({ foo: "bar" }), []);
  <FooBar myValue={myValue} />
  ```

- If passing non-primitives (arrays, objects, functions), **memoize** them with `useMemo` / `useCallback`.
- Hooks that derive/transform data should always **memoize computed results**.
- **Example:** WIP — add a counterexample that passes inline objects/functions to prove the memoization guidance.
