// module: useAnimeOnView
import { useEffect, useRef } from "react";

let animeSingleton = null;
let animeLoading = null;

async function loadAnime() {
  if (animeSingleton) return animeSingleton;
  if (animeLoading) return animeLoading;

  animeLoading = (async () => {
    try {
      const mod = await import("animejs");
      animeSingleton = mod.default ?? mod;
      return animeSingleton;
    } catch (e1) {
      try {
        const mod2 = await import("animejs/lib/anime.es.js");
        animeSingleton = mod2.default ?? mod2;
        return animeSingleton;
      } catch (e2) {
        console.error("Failed to load animejs:", e1, e2);
        return null;
      }
    }
  })();

  return animeLoading;
}

export default function useAnimeOnView(callback, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          const anime = await loadAnime();
          if (anime) {
            try {
              callback(anime, el);
            } catch (err) {
              console.error("Anime callback error:", err);
            }
          }
          if (options.once !== false) observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? "0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [callback, options.threshold, options.rootMargin, options.once]);

  return ref;
}