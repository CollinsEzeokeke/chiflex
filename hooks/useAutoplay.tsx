"use client"

import { useEffect } from 'react';
import { useCarousel } from '@/components/ui/carousel';

export function useAutoplay(interval: number) {
  const { api } = useCarousel();

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, interval);

    return () => clearInterval(autoplay);
  }, [api, interval]);
}