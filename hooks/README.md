# `/hooks` - Custom React Hooks

This directory contains custom React hooks that provide reusable stateful logic across components. These hooks encapsulate common patterns and behaviors used throughout the application.

## Files

### `useAlignedContentLeft.ts`
Hook for handling left-aligned content layout with scroll-based animations or positioning.

**Purpose**: Manages the layout state and positioning for left-aligned content sections, likely used in page layouts where content needs to align or animate based on scroll position.

**Usage**:
```typescript
import { useAlignedContentLeft } from '@/hooks/useAlignedContentLeft';

const MyComponent = () => {
  const { ref, isAligned } = useAlignedContentLeft();

  return <div ref={ref}>...</div>;
};
```

### `useGetQueryWithRefetchOnChange.ts`
Hook for managing API queries that automatically refetch when dependencies change.

**Purpose**: Wraps query logic (likely React Query or similar) to handle automatic refetching when specific values change. Useful for data that needs to stay synchronized with changing parameters.

**Usage**:
```typescript
import { useGetQueryWithRefetchOnChange } from '@/hooks/useGetQueryWithRefetchOnChange';

const MyComponent = () => {
  const { data, isLoading } = useGetQueryWithRefetchOnChange({
    queryKey: ['posts', filter],
    queryFn: () => fetchPosts(filter),
    dependencies: [filter]
  });

  return <div>...</div>;
};
```

### `useResponsiveDevice.tsx`
Hook for detecting and responding to different device sizes and breakpoints.

**Purpose**: Provides responsive device detection using media queries. Returns boolean flags for different device types (mobile, tablet, desktop) and screen sizes.

**Implementation**:
- Uses `window.matchMedia()` API
- Listens for viewport size changes
- Returns device type flags

**Usage**:
```typescript
import { useResponsiveDevice } from '@/hooks/useResponsiveDevice';

const MyComponent = () => {
  const { isMobile, isTablet, isDesktop } = useResponsiveDevice();

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
};
```

**Typical Breakpoints**:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## Hook Development Guidelines

### Creating New Hooks

1. **Naming Convention**:
   - Always prefix with `use`
   - Use camelCase
   - Be descriptive about the hook's purpose
   - Examples: `useAuth`, `useLocalStorage`, `useDebounce`

2. **File Organization**:
   - One hook per file
   - File name matches hook name
   - Include `.ts` or `.tsx` extension

3. **Type Safety**:
```typescript
// Define parameter types
interface UseCustomHookParams {
  initialValue: string;
  delay?: number;
}

// Define return type
interface UseCustomHookReturn {
  value: string;
  setValue: (val: string) => void;
  reset: () => void;
}

// Type the hook
export function useCustomHook(
  params: UseCustomHookParams
): UseCustomHookReturn {
  // Implementation
}
```

4. **Documentation**:
```typescript
/**
 * Custom hook for managing debounced values
 *
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 300)
 * @returns Debounced value
 *
 * @example
 * const debouncedSearch = useDebounce(searchTerm, 500);
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  // Implementation
}
```

## Best Practices

### 1. Single Responsibility
Each hook should have one clear purpose:
```typescript
// Good - focused on one thing
function useAuth() { ... }
function useUserProfile() { ... }

// Bad - too much responsibility
function useAuthAndProfileAndSettings() { ... }
```

### 2. Custom Hook Composition
Build complex hooks from simpler ones:
```typescript
function useDebounce(value, delay) { ... }
function useLocalStorage(key, initialValue) { ... }

// Compose into more complex hook
function useDebouncedLocalStorage(key, initialValue, delay) {
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);
  const debouncedValue = useDebounce(storedValue, delay);
  return [debouncedValue, setStoredValue];
}
```

### 3. Handle Cleanup
Always cleanup side effects:
```typescript
function useInterval(callback, delay) {
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id); // Cleanup
  }, [callback, delay]);
}
```

### 4. Memoization
Use `useMemo` and `useCallback` to prevent unnecessary re-renders:
```typescript
function useExpensiveCalculation(data) {
  return useMemo(() => {
    return data.reduce((acc, item) => acc + item.value, 0);
  }, [data]);
}
```

### 5. Error Handling
Handle errors gracefully:
```typescript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
}
```

## Common Hook Patterns

### Data Fetching
```typescript
function useData(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(endpoint).then(setData).finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading };
}
```

### Local State Management
```typescript
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}
```

### Event Listeners
```typescript
function useEventListener(eventName, handler, element = window) {
  useEffect(() => {
    element.addEventListener(eventName, handler);
    return () => element.removeEventListener(eventName, handler);
  }, [eventName, handler, element]);
}
```

## Testing Hooks

Use `@testing-library/react-hooks` for testing:
```typescript
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

## Related Documentation

- [React Hooks Documentation](https://react.dev/reference/react)
- `/lib/litebox-lib/hooks`: Third-party hooks from Litebox
- Component-specific hooks (defined inline in components)
