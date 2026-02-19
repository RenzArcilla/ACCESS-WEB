# Coding Standards

To maintain a clean and consistent codebase, please adhere to the following standards.

## General

- **Language**: Use TypeScript for all JavaScript code. Avoid `any` types whenever possible.
- **Formatting**: We use Prettier. Ensure your editor is configured to format on save, or run `pnpm format` before committing.
- **Linting**: We use ESLint. Fix all warnings and errors before pushing.

## React / Next.js

- **Functional Components**: Use functional components with hooks.
- **Naming**:
  - Components: PascalCase (e.g., `AssetCard.tsx`)
  - Hooks: camelCase starting with use (e.g., `useAuth.ts`)
  - Utilities: camelCase (e.g., `formatDate.ts`)
- **Server Components**: By default, components in the `app` directory are Server Components. Use `"use client"` directive only when necessary (e.g., for interactivity, `useState`, `useEffect`).

## Styling (Tailwind CSS)

- **Utility First**: Use Tailwind utility classes for styling. Avoid custom CSS files unless absolutely necessary for complex animations.
- **Consistency**: Follow the design tokens defined in `tailwind.config.ts`.
- **Organization**: Group related classes logically or use a tool like `prettier-plugin-tailwindcss` to sort them automatically.

Example:

```tsx
// Good
<button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
  Submit
</button>

// Bad (Inline styles)
<button style={{ backgroundColor: 'blue', color: 'white' }}>
  Submit
</button>
```

## State Management

- **Local State**: Use `useState` for simple component-local state.
- **URL State**: Use query parameters for shareable state (e.g., search filters, pagination).
- **Server State**: Use libraries like `swr` or `tanstack-query` (if introduced) or Next.js data fetching for server data.
- **Global State**: Use Context API sparingly for truly global data (e.g., Theme, Auth Session).

## Project Structure

Keep related files together.

- **`components/ui`**: Atomic, reusable components (Button, Input).
- **`components/modules`**: Larger, business-logic-aware components.
- **`app/(routes)`**: Page definitions and layouts.
