import React from "react";
import { useRealizations } from "@/services/useRealizations";
import Image from "next/image";

const CategoryPreviewRealization = () => {
  const { data, isLoading, isError } = useRealizations();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data?.data) return <p>Failed to load realizations.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px]">
      {data.data.map(realization => (
        <div key={realization.id} className="relative w-full aspect-[4/3] rounded overflow-hidden">
          <Image
            src={`https://aluwik-backend-production.up.railway.app${realization.image.formats.medium?.url || realization.image.url}`}
            alt={realization.image.name}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryPreviewRealization;
