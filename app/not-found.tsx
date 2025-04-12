// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
    </div>
  );
}

// Configuración crítica para Next.js 15+
export const dynamic = "force-dynamic";
