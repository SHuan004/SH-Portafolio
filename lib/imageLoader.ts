// Optimizador de carga de imágenes

type ImageDimensions = {
  width: number;
  height: number;
};

/**
 * Función para precargar imágenes
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Función para precargar múltiples imágenes
 */
export function preloadImages(sources: string[]): Promise<HTMLImageElement[]> {
  return Promise.all(sources.map(preloadImage));
}

/**
 * Función para obtener las dimensiones de una imagen
 */
export function getImageDimensions(src: string): Promise<ImageDimensions> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Función para generar un placeholder de baja resolución
 */
export function generatePlaceholder(
  width: number,
  height: number,
  color = "#f3f4f6"
): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${color.replace(
    "#",
    "%23"
  )}'/%3E%3C/svg%3E`;
}

/**
 * Función para determinar el tamaño óptimo de imagen basado en el viewport
 */
export function getOptimalImageSize(
  originalWidth: number,
  originalHeight: number,
  containerWidth: number
): { width: number; height: number } {
  const aspectRatio = originalWidth / originalHeight;
  const width = Math.min(originalWidth, containerWidth);
  const height = width / aspectRatio;

  return { width, height };
}
