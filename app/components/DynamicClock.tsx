'use client';

import Clock from 'react-live-clock';
import { useEffect, useState } from 'react';

export default function DynamicClock() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, [])

  if (!hydrated) {
    return null;
  }

  return <Clock format="HH:mm" interval={60 * 1000} ticking={true} />
}