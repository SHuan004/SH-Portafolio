/**
 * Debounce function - Limita la frecuencia con la que se ejecuta una función
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function - Asegura que una función no se ejecute más de una vez en un período específico
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Memoize function - Cachea los resultados de una función para entradas específicas
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>();

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}

/**
 * Función para optimizar el renderizado de listas largas
 */
export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked: T[][] = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

/**
 * Función para detectar si estamos en un dispositivo de bajo rendimiento
 */
export function isLowPerformanceDevice(): boolean {
  if (typeof window === "undefined") return false;

  // Detectar dispositivos móviles
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // Detectar navegadores antiguos (sin soporte para IntersectionObserver)
  const isOldBrowser = !("IntersectionObserver" in window);

  // Detectar conexiones lentas utilizando navigator.connection
  const connection = (navigator as any).connection;
  const isSlowConnection = connection
    ? connection.effectiveType === "2g" || connection.saveData === true
    : false;

  return isMobile || isOldBrowser || isSlowConnection;
}
