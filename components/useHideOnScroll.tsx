import { useCallback, useEffect, useState } from "react";

const useDebounce = (value: any, delay: any) => {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
};


export default function useHideOnScrollDown() {
    const [isVisible, setIsVisible] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const dbScrollY = useDebounce(scrollY, 50);

    const handleScroll = useCallback(() => {
        const cur = window.scrollY;
        setIsVisible(dbScrollY > cur || cur < 10);
        setScrollY(cur);
    }, [dbScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return isVisible;
};