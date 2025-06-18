import React, { useState } from "react";
import { Text } from "@/components/atoms/text/Text";
import Line from "@/components/atoms/line/Line";

export interface TableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    label: string;
    render?: (item: T) => React.ReactNode;
  }[];
  initialSortKey: keyof T;
  searchValue?: string;
  filterFn?: (item: T, searchValue: string) => boolean;
  onRowClick?: (item: T) => void;
}

export function Table<T extends Record<string, any>>({
  data,
  columns,
  initialSortKey,
  searchValue = "",
  filterFn,
  onRowClick,
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T>(initialSortKey);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredData = filterFn ? data.filter(item => filterFn(item, searchValue)) : data;

  const sortedData = [...filteredData].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (typeof aVal === "string" && typeof bVal === "string") {
      return sortOrder === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }
    if (typeof aVal === "boolean" && typeof bVal === "boolean") {
      return sortOrder === "asc" ? Number(aVal) - Number(bVal) : Number(bVal) - Number(aVal);
    }
    return 0;
  });

  const renderArrow = (key: keyof T) =>
    sortKey === key ? (sortOrder === "asc" ? "▲" : "▼") : null;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={String(col.key)}
                className="p-2 cursor-active"
                onClick={() => handleSort(col.key)}
              >
                <div className="flex items-center gap-1">
                  <Text text={col.label} noAnimation className="text-softSync" size={24} />
                  <span className="inline-block w-[16px] text-softSync">
                    {renderArrow(col.key)}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={columns.length}>
              <Line />
            </td>
          </tr>

          {sortedData.map((item, idx) => (
            <tr
              key={idx}
              onClick={() => onRowClick?.(item)}
              className={`cursor-active transition-colors duration-200 hover:bg-gradient-to-r hover:from-neroMint/50 hover:to-transparent px-3 py-1 rounded-[20px] mt-3 first:mt-0 ${
                onRowClick ? "hover:cursor-active" : ""
              }`}
            >
              {columns.map(col => (
                <td className="p-2" key={String(col.key)}>
                  {col.render ? (
                    col.render(item)
                  ) : (
                    <Text text={String(item[col.key] ?? "")} noAnimation size={18} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
