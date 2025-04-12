"use client";

import { useState, useEffect } from "react";
import { useScrollPosition } from "./useScrollPosition";

export function useActiveSection(sectionIds: string[], offset = 100): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const { scrollY } = useScrollPosition();

  useEffect(() => {
    // Encontrar la sección activa basada en la posición de scroll
    const currentSection = sectionIds.find((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= offset && rect.bottom >= offset;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, [scrollY, sectionIds, offset]);

  return activeSection;
}
