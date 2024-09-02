"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeLoader from "@/components/darkModeLoader";
import LightModeLoader from "@/components/lightModeLoader";

export default function Loading() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      {resolvedTheme === "dark" ? (
        <DarkModeLoader />
      ) : (
        <LightModeLoader />
      )}
    </div>
  );
}