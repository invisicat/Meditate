import { useCallback, useEffect, useState } from "react";

/**
 * Hook to get the current media query state
 * optimized for tailwindcss
 */

const mediaKeys = {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    xxl: "(min-width: 1440px)",
}


type MediaQueryTypes = keyof typeof mediaKeys;


const fallbackMatchMedia = (query: string) => {
    if(typeof matchMedia !== "function") return null;

    return matchMedia(query);
}

const omitMatchMediaResult = (res: MediaQueryList | null) => {
    if(res == null) return null;
    return {
        matches: res.matches,
        media: res.media,
    }
} 


export function useMediaQuery(query: MediaQueryTypes) {
    const [result, setResult] = useState(() => omitMatchMediaResult(fallbackMatchMedia(mediaKeys[query])));
    
    const callback = useCallback((matched) => setResult(omitMatchMediaResult(matched)), [setResult]);

    useEffect(() => {
        const matchMediaResult = fallbackMatchMedia(mediaKeys[query]);
        callback(matchMediaResult);
        matchMediaResult?.addEventListener('change', callback);

        return () => matchMediaResult?.removeEventListener('change', callback);
    }, [callback, query]);

    return result;
}


export function useMediaPredicate(query: MediaQueryTypes) {
    const media = useMediaQuery(query);

    return (media && media.matches) || false;
}