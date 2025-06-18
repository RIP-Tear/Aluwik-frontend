import React, { useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/atoms/button/Button";
import { HashLoader } from "react-spinners";
import { Text } from "@/components/atoms/text/Text";
import Image from "next/image";
import { ImageUp } from "lucide-react";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

type UploadImageProps = {
  onChange: (url: string) => void;
  value?: string;
  className?: string;
};

const UploadImage: React.FC<UploadImageProps> = ({ onChange, value, className }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const fileName = `${uuidv4()}-${file.name}`;
    const filePath = `${fileName}`;

    const { error } = await supabase.storage.from("sztucznacoimages").upload(filePath, file);

    if (error) {
      console.error("Upload error:", error.message);
      setLoading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("sztucznacoimages")
      .getPublicUrl(filePath);

    onChange(publicUrlData.publicUrl);
    setLoading(false);
  };

  const triggerInput = () => {
    inputRef.current?.click();
  };

  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <Text text="Dodaj zdjęcie" noAnimation size={16} className="text-softSync" />
      <div className="w-full h-[266px] border-neroMint border rounded-[10px] flex items-center justify-center bg-shadowMind overflow-hidden mb-2">
        {loading ? (
          <HashLoader color="#3FE9C5" />
        ) : value ? (
          <Image src={value} alt="Preview" width={400} height={266} className="object-contain" />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <ImageUp size={64} />
            <Text text="Brak zdjęcia" noAnimation className="text-softSync mt-2" />
          </div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <Button
        label={value ? "Zmień zdjęcie" : "Załaduj zdjęcie"}
        onClick={triggerInput}
        type="button"
        size={18}
      />
    </div>
  );
};

export default UploadImage;
