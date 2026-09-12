import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

/**
 * Owns all data-fetching and stack-selection state for the app.
 * Everything below is lifted here so App.jsx can hand it down to children
 * as props, and children hand actions back up as callback props.
 */
export function useTechStack() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the JSON data file on mount rather than hardcoding it in the component.
  useEffect(() => {
    let cancelled = false;

    async function loadTechnologies() {
      try {
        setIsLoading(true);
        const response = await fetch("/data/technologies.json");
        if (!response.ok) throw new Error("Failed to load technology data");
        const data = await response.json();
        if (!cancelled) setTechnologies(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadTechnologies();
    return () => {
      cancelled = true;
    };
  }, []);

  const isInStack = useCallback(
    (id) => stack.some((item) => item.id === id),
    [stack]
  );

  const addToStack = useCallback(
    (tech) => {
      setStack((prev) => {
        if (prev.some((item) => item.id === tech.id)) {
          toast.warn(`${tech.name} is already in your stack.`);
          return prev;
        }
        toast.success(`${tech.name} added to your stack.`);
        return [...prev, tech];
      });
    },
    []
  );

  const removeFromStack = useCallback((tech) => {
    setStack((prev) => prev.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  }, []);

  const removeAll = useCallback(() => {
    setStack((prev) => {
      if (prev.length === 0) return prev;
      toast.info("Stack cleared.");
      return [];
    });
  }, []);

  return {
    technologies,
    isLoading,
    error,
    stack,
    isInStack,
    addToStack,
    removeFromStack,
    removeAll,
  };
}
