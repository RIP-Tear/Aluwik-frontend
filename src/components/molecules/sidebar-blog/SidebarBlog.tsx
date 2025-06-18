import React, { JSX, useState } from "react";
import styles from "./sidebarBlog.module.css";
import clsx from "clsx";
import Input from "@/components/atoms/input/Input";
import { Archive, Clock4, Flame, Search, Tag } from "lucide-react";
import Line from "@/components/atoms/line/Line";
import { Text } from "@/components/atoms/text/Text";

export type SortType = "latest" | "popular" | "tags" | "archive";

type SidebarBlogProps = {
  sortType: SortType;
  onSortChange: (value: SortType) => void;
  onSectionChange: (view: "tags" | "archive") => void;
  onSearchChange: (text: string) => void;
};

type SidebarItem = {
  icon: JSX.Element;
  text: string;
  type?: SortType;
};

const SidebarBlog = ({
  sortType,
  onSortChange,
  onSectionChange,
  onSearchChange,
}: SidebarBlogProps) => {
  const [text, setText] = useState("");

  const handleSearchChange = (value: string) => {
    setText(value);
    onSearchChange(value);
  };

  const sidebarItems: { section: SidebarItem[] }[] = [
    {
      section: [
        { icon: <Clock4 size={24} />, text: "Ostatnie wpisy", type: "latest" },
        { icon: <Flame size={24} />, text: "Najczęściej czytane", type: "popular" },
      ],
    },
    {
      section: [
        { icon: <Tag size={24} />, text: "Tagi", type: "tags" },
        { icon: <Archive size={24} />, text: "Archiwum", type: "archive" },
      ],
    },
  ];

  return (
    <aside
      className={clsx(
        styles.sidebar,
        "bg-shadowMind text-softSync px-5 py-2 rounded-[20px] sm:w-[300px] shrink-0 mx-5 mt-5 sm:my-10",
      )}
    >
      <Input
        value={text}
        onChange={e => handleSearchChange(e.target.value)}
        icon={<Search size={24} />}
        label="Wyszukaj"
      />

      {sidebarItems.map((group, groupIdx) => (
        <React.Fragment key={groupIdx}>
          <Line className="my-5" />
          {group.section.map((item, idx) => {
            const isActive = item.type === sortType;
            return (
              <div
                key={idx}
                className={clsx(
                  "flex gap-2 items-center cursor-active transition-colors duration-200 hover:bg-gradient-to-r hover:from-neroMint/50 hover:to-transparent px-3 py-1 rounded-[20px] mt-3 first:mt-0",
                )}
                onClick={() => {
                  if (!item.type) return;

                  onSortChange(item.type);

                  if (item.type === "tags" || item.type === "archive") {
                    onSectionChange(item.type);
                  }
                }}
              >
                <span className={clsx(isActive && "text-neroMint")}>{item.icon}</span>
                <Text text={item.text} noAnimation size={18} />
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </aside>
  );
};

export default SidebarBlog;
