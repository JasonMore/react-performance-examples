# Testing Guide

This project uses Vitest for testing React components. Tests focus on verifying render behavior and performance characteristics through render token tracking.

## Running Tests

```bash
# Run tests once
npm run test:run

# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui
```

## Test Structure

Tests are co-located with their demo implementations:

- `src/examples/zustand/ZustandRenderDemo.test.tsx` - Tests for Zustand demo
- `src/examples/zustand-query/ZustandQuery.test.tsx` - Tests for Zustand + TanStack Query demo
- `src/examples/propDrilling/PropDrillingRenderDemo.test.tsx` - Tests for optimized prop drilling demo
- `src/examples/propDrillingNaive/PropDrillingNaiveRenderDemo.test.tsx` - Tests for naive prop drilling demo

## What Tests Verify

Each demo's tests verify:

1. **Initial Render Tokens** - Confirms components render with `«001` token on first render
2. **User Interactions** - Tests button clicks and state changes
3. **Render Behavior** - Verifies render token increments match expected performance characteristics
4. **Data Flow** - Ensures proper data loading and display

### Performance-Specific Tests

- **Zustand & PropDrilling Optimized**: Tests verify components don't re-render unnecessarily (memoization works)
- **PropDrillingNaive**: Tests account for extra renders due to prop churn (intentional anti-pattern demonstration)

## Test Setup

The test setup (`src/test/setup.ts`) handles:

- Importing Jest-DOM matchers for better assertions
- Mocking browser APIs not available in jsdom (e.g., `scrollIntoView`)
- Resetting render token counter before each test for consistent values

## Key Testing Patterns

### Render Token Assertions

```typescript
// Check initial render
const selectorTitle = screen.getByText(/World Selector/);
expect(selectorTitle.textContent).toContain("«001");

// Check after interaction
await user.click(button);
await waitFor(() => {
  const updatedButton = screen.getByRole("button", { name: /mer001/i });
  expect(updatedButton.textContent).toContain("«002");
});
```

### Mocking Router Hooks

```typescript
vi.mock("react-router-dom", () => ({
  useLoaderData: () => mockUseLoaderData(),
  useRevalidator: () => mockUseRevalidator(),
}));
```

### Async Data Loading

```typescript
await waitFor(() => {
  expect(screen.getByText(/World Selector/)).toBeInTheDocument();
});
```

## Coverage

Current test coverage: **18 tests across 4 demos**

- Zustand: 4 tests
- Zustand-Query: 5 tests
- PropDrilling (Optimized): 4 tests
- PropDrillingNaive: 5 tests

All tests pass consistently with the current implementation.
