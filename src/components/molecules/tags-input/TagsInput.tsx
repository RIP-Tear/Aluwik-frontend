import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/atoms/button/Button";
import { Text } from "@/components/atoms/text/Text";
import Input from "@/components/atoms/input/Input";
import clsx from "clsx";

interface TagsInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
  className?: string;
}

const TagsInput: React.FC<TagsInputProps> = ({ value, onChange, className }) => {
  const [tag, setTag] = useState("");

  const handleAddTag = () => {
    const trimmed = tag.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
      setTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    onChange(value.filter(t => t !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className={clsx("flex flex-col gap-3", className)}>
      <div className="flex gap-2 items-end">
        <Input
          label="Tagi"
          value={tag}
          onChange={e => setTag(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button label="Dodaj" type="button" onClick={handleAddTag} icon={<Plus />} size={16} />
      </div>

      <div className="flex flex-wrap gap-2">
        {value.map((t, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 rounded-[10px] bg-softSync cursor-active"
            onClick={() => handleRemoveTag(t)}
          >
            <Text text={t} size={14} noAnimation className="text-shadowMind" />
            <Trash2 className="w-4 h-4 text-coreGlow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsInput;
