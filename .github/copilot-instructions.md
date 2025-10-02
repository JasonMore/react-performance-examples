# React Performance Examples - Copilot Instructions

## Repository Overview

This repository contains interactive React performance examples and demos to help developers understand various optimization techniques and patterns. It demonstrates both performant and deliberately inefficient implementations to highlight the impact of different approaches.

## Purpose

The project serves as an educational resource to:
- Demonstrate common React performance anti-patterns and their optimized counterparts
- Show how different state management approaches affect rendering behavior
- Illustrate the impact of memoization, stable references, and proper component architecture
- Provide visual feedback through render counters to make performance issues observable

## Project Structure

```
src/
├── App.tsx                    # Main app with routing
├── Home.tsx                   # Landing page with demo links
├── examples/
│   ├── zustand/              # State management with Zustand (performant)
│   ├── propDrilling/         # Optimized prop drilling implementation
│   └── propDrillingNaive/    # Deliberately inefficient prop drilling (anti-patterns)
└── shared/
    └── components/           # Shared components like RenderToken
```

## Technology Stack

- **React 19**: UI library with latest features
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and dev server
- **Zustand**: Lightweight state management library
- **React Router**: Client-side routing
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting

## Code Style and Conventions

### React Patterns
- Use functional components with hooks
- Prefer `memo()` for components that receive callback props
- Use `useCallback` for event handlers passed as props
- Use `useMemo` for expensive computations or derived data
- Use `useRef` to stabilize callback references when needed

### TypeScript
- Define explicit types for component props
- Use `type` for object shapes, interfaces for extensible contracts
- Prefer type inference where clear, explicit types for public APIs

### Naming Conventions
- Components: PascalCase (e.g., `WorldApp`, `RenderToken`)
- Files: Match component names with `.tsx` extension
- CSS Modules: `ComponentName.module.css`
- Types: PascalCase for exported types

### File Organization
- Keep related components together in feature folders
- Separate concerns: `exampleComponents/`, `demoControls/`, `data/`
- Co-locate CSS modules with their components

## Performance Patterns

### ✅ Good Patterns (seen in `propDrilling` and `zustand` examples)

1. **Stable References**
   - Memoize objects and arrays with `useMemo`
   - Memoize callbacks with `useCallback`
   - Use refs to stabilize callback props

2. **Selective Re-rendering**
   - Wrap components with `memo()` when they receive props
   - Use Zustand's selector pattern to subscribe to specific state slices
   - Avoid prop transformations that create new object references

3. **Efficient State Management**
   - Keep state close to where it's used
   - Use Zustand for shared state across unrelated components
   - Avoid unnecessary state derivations in render

### ❌ Anti-patterns (deliberately shown in `propDrillingNaive` example)

1. **Object Recreation**
   - Creating new objects/arrays on every render
   - Spreading objects unnecessarily: `{ ...obj }`
   - Transforming props at each level

2. **Inline Functions**
   - Creating arrow functions in JSX: `onClick={() => ...}`
   - Creating functions in component body without `useCallback`

3. **Excessive Prop Drilling**
   - Passing data through many component levels
   - Transforming data at each level instead of passing stable references

## Example Purposes

### Zustand Example
**Purpose**: Demonstrate efficient state management without prop drilling
- Shows how Zustand prevents unnecessary re-renders
- Components only re-render when their selected state slice changes
- No prop drilling needed for shared state

### Prop Drilling Example (Optimized)
**Purpose**: Show that prop drilling CAN be performant with proper techniques
- Demonstrates correct use of memoization
- Stable references prevent unnecessary re-renders
- Components properly wrapped with `memo()`

### Prop Drilling Naive Example
**Purpose**: Educational anti-pattern example
- Deliberately inefficient to show what NOT to do
- All components re-render on any state change
- Demonstrates the cost of unstable references and object recreation

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript check first)
- `npm run lint` - Run ESLint
- `npm run style` - Format the codebase with Prettier (use before committing any file)
- `npm run preview` - Preview production build locally

## Testing Guidelines

- No formal test suite currently exists
- Manual testing via the interactive demos
- Use the `RenderToken` component to observe render behavior
- Verify optimizations by watching render counts when interacting with the app

## Key Components

### RenderToken
A diagnostic component that displays a counter incremented on each render. Used throughout demos to make performance characteristics visible to users.

### WorldApp
The main component in each example that manages world state. Different implementations demonstrate various performance patterns.

### WorldSelector / WorldsViewer
Sibling components that demonstrate different data access patterns:
- In Zustand example: Both access store directly
- In prop drilling examples: Data passed via props

## When Working on This Repository

1. **Preserve Educational Value**: This repo demonstrates both good and bad patterns intentionally
2. **Don't "Fix" Anti-patterns**: The `propDrillingNaive` example is intentionally inefficient
3. **Maintain Visual Feedback**: Keep `RenderToken` components to show performance impact
4. **Keep Examples Similar**: Changes to one example should consider parallel changes to others for comparison
5. **Document Performance Impact**: When adding features, note their performance characteristics

## Common Tasks

### Adding a New Example
1. Create new folder under `src/examples/`
2. Follow existing structure: `exampleComponents/`, `demoControls/`, `data/`
3. Add route in `App.tsx`
4. Add demo card in `Home.tsx`
5. Include `RenderToken` components for render visualization

### Optimizing Performance
1. Identify unnecessary re-renders using `RenderToken`
2. Check for unstable references (objects, arrays, functions created in render)
3. Apply memoization: `useMemo`, `useCallback`, `memo()`
4. Verify optimization by confirming reduced render counts

### Styling
- Stick with CSS Modules for component-specific styles and keep class names aligned with the component hierarchy.
- Global design tokens (colors, typography, radii, spacing, transitions) live in `src/index.css`. Update or extend these variables instead of hard-coding values in component styles.
- `src/components/css/DemoLayout.module.css` wraps every demo page, providing consistent spacing, max-width, and background treatment.
- Shared card surface styles live in `src/components/css/shared.module.css`; use these classes to keep panels visually consistent across demos.

#### World app layout
- `src/components/css/WorldApp.module.css` drives the two-column grid used by all demos. It applies the atmosphere gradient background, card border, and sticky selector pane above `768px` via CSS variables (`--selector-top-offset`, `--selector-bottom-gap`).
- Keep new layouts compatible with this module so selectors remain sticky and responsive.

#### World selector styles
- Selector shells import from `src/components/css/worldSelector/WorldSelector.module.css`, which sets the column stack and scroll bounds.
- Action buttons use `worldSelector/AddWorld.module.css` (`.primaryButton` accent button) and `worldSelector/WorldIdButton.module.css` (selected state styling with accent background and hover transitions).
- Combine these with `shared.module.css.card` to retain the consistent card chrome in every demo.

#### Worlds viewer styles
- List containers come from `src/components/css/worldsViewer/WorldList.module.css`, which handles the muted surface background and label typography.
- Individual world rows use `worldsViewer/World.module.css`, providing the glassy gradient, elevation shadows, and `selected` highlight state shared by all demos.
- Detail grids live in `worldsViewer/WorldInfo.module.css`, giving the two-column fact layout with uppercase labels.

#### Debug panels & performance instruments
- Debug snapshots across demos rely on `src/components/css/DebugInfo.module.css` layered on top of the shared card styles.
- `src/components/perf/RenderToken.module.css` animates the render count badge; respect its reduced-motion fallback when introducing new indicators.

#### Demo styling quick reference
| Demo | Layout wrapper | Selector styles | Worlds viewer styles | Debug panel |
| --- | --- | --- | --- | --- |
| Zustand | `components/css/DemoLayout.module.css` + `components/css/WorldApp.module.css` | `components/css/worldSelector/WorldSelector.module.css`, `components/css/worldSelector/AddWorld.module.css`, `components/css/worldSelector/WorldIdButton.module.css` | `components/css/worldsViewer/WorldList.module.css`, `components/css/worldsViewer/World.module.css`, `components/css/worldsViewer/WorldInfo.module.css` | `components/css/DebugInfo.module.css` |
| Optimized Prop Drilling | Same as Zustand | Same as Zustand | Same as Zustand | `components/css/DebugInfo.module.css` |
| Prop Drilling Naive | Same as Zustand | Same as Zustand | Same as Zustand | `components/css/DebugInfo.module.css` |

- Navigation and home views pull styling from `components/Navigation.module.css`, `components/DemoCard.module.css`, `Home.module.css`, and `App.module.css`. Reuse these when adding new surface-level UI so the demos feel cohesive.

## Architecture Decisions

### Why Multiple Similar Examples?
To show that performance depends on implementation, not just architecture. The same UI can be built with different approaches (Zustand, prop drilling), and each can be either performant or inefficient based on optimization techniques.

### Why Visual Render Counters?
Performance problems are often invisible. The `RenderToken` makes re-renders observable, helping developers understand the impact of their code choices in real-time.

### Why Vite?
Fast development experience with instant HMR, native ESM support, and optimized production builds without complex configuration.
