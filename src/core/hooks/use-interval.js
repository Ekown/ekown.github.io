import { useEffect, useRef } from "react";

/**
 * A custom hook for a declarative setInterval application
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/#just-show-me-the-code
 *
 * @param {Function} callback
 * @param {int} delay
 */
export function useInterval(callback, delay = 1000) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}
