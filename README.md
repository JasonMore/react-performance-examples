# React Performance Examples ([Live Demo](https://stackblitz.com/~/github.com/JasonMore/react-performance-examples))

Hands-on demos that contrast common React state patterns with their
performance-minded counterparts. Each example surfaces rerender behavior through `RenderToken` counters.

## Haiku

```
Renders cascade down
Memoize with careful thought
Components now still
```

## Core Software Engineering Patterns & Principles

- **Separation of Concerns (SoC):** Keep UI, state, and side effects separate.
- **Single Responsibility Principle (SRP):** Do one thing really well — both at the component and hook level.
- **Composition (comp):** Organize code into smaller, composable, and isolated pieces.
- **Encapsulation (encap):** Build small, idempotent, reusable pieces of code.
- **Correct Memoization (cache):** Use memoization correctly to ensure performance and predictable rendering.

## Non-Performant Patterns to Avoid

**Prop Drilling**

- (comp) Creates tight coupling between components. Makes components less composable and harder to reuse.
- (cache) Breaks memoization when passing computed arrays or objects.

**Component Architecture**

- (SRP) Many feature components are too large and complex.
- (SRP) Render methods that are long.
- (SoC) Components often mix data transformation, state, and conditional rendering into one block.
- (encap) Multiple components defined in a single file reduce clarity and reusability.

**Data State**

- (SoC) API state and local application state are scattered across component layers instead of being managed centrally.
- Should follow:
  - **Server/API state → @tanstack/react-query**.
  - **Local/UI state → zustand**.
- Always access state through **custom hooks**.

**useEffect**

- (SRP) Often very large, doing too many things at once.
- (SoC) Misused to handle computed data structures or business logic.
- Should only be used to **sync with external browser APIs**
- All other use cases are better served by `useMemo`, `useCallback`, or custom hooks.
- 🚨 Overuse of `eslint-disable-next-line react-hooks/exhaustive-deps` indicates broken patterns.

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
