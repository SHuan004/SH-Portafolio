"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Verificar si estamos en el navegador
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    // Establecer el estado inicial
    setMatches(media.matches);

    // Definir callback para actualizar el estado
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Añadir listener
    media.addEventListener("change", listener);

    // Limpiar listener
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
