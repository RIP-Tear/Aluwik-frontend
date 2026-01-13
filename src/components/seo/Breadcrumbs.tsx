import React from "react";
import Link from "next/link";
import { JsonLd, createBreadcrumbSchema } from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const schema = createBreadcrumbSchema(items);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontSize: "14px",
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              style={{ display: "flex", alignItems: "center" }}
            >
              {index < items.length - 1 ? (
                <>
                  <Link href={item.url} itemProp="item" style={{ color: "#666" }}>
                    <span itemProp="name">{item.name}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  <span style={{ margin: "0 8px", color: "#999" }}>/</span>
                </>
              ) : (
                <>
                  <span itemProp="name" style={{ color: "#333", fontWeight: 500 }}>
                    {item.name}
                  </span>
                  <meta itemProp="position" content={String(index + 1)} />
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
