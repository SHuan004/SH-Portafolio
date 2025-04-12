// components/analytics.tsx
"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function TrackPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = `${pathname}${
        searchParams?.toString() ? `?${searchParams.toString()}` : ""
      }`;
      console.log(`Página vista: ${url}`);
      // Implementa tu analytics aquí
    }
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <TrackPageViews />
    </Suspense>
  );
}
