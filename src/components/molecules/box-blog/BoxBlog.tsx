"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Calendar, Eye } from "lucide-react";
import styles from "./boxBlog.module.css";
import { Text } from "@/components/atoms/text/Text";
import { Title } from "@/components/atoms/heading/Heading";

type BoxBlogProps = {
  uuid: string;
  image: string;
  title: string;
  createdAt?: string;
  views: number;
  className?: string;
};

const formatDate = (dateString?: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

export const BoxBlog = ({ image, title, createdAt = "", views, className, uuid }: BoxBlogProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/post/${uuid}`);
  };

  return (
    <div
      className={styles.wrapper}
      role="link"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={e => e.key === "Enter" && handleClick()}
    >
      <div
        className={clsx(
          styles.content,
          "relative w-full sm:w-[300px] aspect-[5/2] sm:aspect-[3/2]",
          className,
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 220px, 300px"
          className="object-cover rounded-[18px]"
        />
        <div className={styles.overlay} />

        <div className={styles.topRight}>
          <Eye size={18} />
          <Text size={14} text={views} noAnimation />
        </div>

        <div className={styles.bottomLeft}>
          <Title label={title} size={18} noAnimation className="text-left" />
          <div className={styles.date}>
            <Calendar size={16} />
            <Text size={14} text={formatDate(createdAt)} noAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};
