"use client";

import { useEffect, useState } from "react";

type RealizationItem = {
  id: number;
  category: string;
  image: { url: string; name: string; publicId: string };
};

export const useCloudinaryRealizations = () => {
  const [data, setData] = useState<RealizationItem[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/images.json")
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, isError: !!error, error };
};
