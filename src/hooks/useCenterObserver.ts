import { useRef, useEffect, useState, RefObject } from "react";

/**
 * Custom hook to observe if a DOM element is within the vertical center
 * of the viewport, using the Intersection Observer API.
 * * @param rootMargin Defines the center observation window (default: -40% from top/bottom).
 * * @returns An array containing the ref object (which can hold HTMLDivElement or null)
 * and the boolean state (isCentered).
 */
export function useCenterObserver(
    rootMargin: string = "-80% 0px -20% 0px"
): [RefObject<HTMLDivElement | null>, boolean] {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isCentered, setIsCentered] = useState<boolean>(false);

    useEffect(() => {
        const currentElement = elementRef.current;

        if (!currentElement) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                if (entry.isIntersecting && !isCentered) {
                    setIsCentered(true);
                }
            },
            {
                root: null,
                threshold: 0,
                rootMargin: rootMargin,
            }
        );

        observer.observe(currentElement);

        return () => {
            observer.unobserve(currentElement);
        };
    }, [rootMargin, isCentered]);

    return [elementRef, isCentered];
}
