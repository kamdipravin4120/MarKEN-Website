"use client";

import { useSyncExternalStore } from "react";

/**
 * Hook to check if the component has mounted on the client.
 * This is a lint-safe alternative to the useEffect(() => setMounted(true), []) pattern.
 */
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function useHasMounted() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
