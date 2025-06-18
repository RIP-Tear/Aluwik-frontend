import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import React, { useState } from "react";
import { Text } from "@/components/atoms/text/Text";
import { FontSize } from "./FontSize";
import Line from "@/components/atoms/line/Line";

const TextEditor = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
  const [showHTML, setShowHTML] = useState(false);
  const [colorValue, setColorValue] = useState("");
  const [fontSize, setFontSize] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            style: "font-size: 1.5rem",
          },
        },
      }),

      Underline,
      TextStyle,

      Color.configure({ types: ["textStyle"] }),
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class: "underline text-[#3FE9C5]",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),
      FontSize,
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      handleKeyDown(view, event) {
        if (event.key === "Enter" && event.shiftKey) {
          editor?.commands.setHardBreak();
          return true;
        }
        return false;
      },
    },
  });

  if (!editor) return null;

  const handleSetLink = () => {
    const url = prompt("Podaj adres URL");
    if (url) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  };

  return (
    <div className="mt-5">
      <Text text="Treść" className="block mb-1 sm:text-base text-sm text-softSync" noAnimation />
      <div className="border border-neroMint rounded-[10px] p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className="px-2 py-1 border rounded font-bold hover:bg-softSync hover:text-shadowMind cursor-active"
          >
            B
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className="px-2 py-1 border rounded italic hover:bg-softSync hover:text-shadowMind cursor-active"
          >
            I
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className="px-2 py-1 border rounded underline hover:bg-softSync hover:text-shadowMind cursor-active"
          >
            U
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className="px-2 py-1 border rounded hover:bg-softSync hover:text-shadowMind cursor-active"
          >
            •
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className="px-2 py-1 border rounded hover:bg-softSync hover:text-shadowMind cursor-active"
          >
            1.
          </button>

          <select
            value={fontSize}
            onChange={e => {
              const value = e.target.value;
              editor.chain().focus().setFontSize(value).run();
              setFontSize("");
            }}
            className="px-2 py-1 border rounded hover:bg-softSync hover:text-shadowMind cursor-active"
          >
            <option value="" disabled>
              Rozmiar
            </option>
            <option value="4rem">64</option>
            <option value="2rem">32</option>
            <option value="1.5rem">24</option>
            <option value="1.125rem">18</option>
            <option value="1rem">16</option>
            <option value="0.875rem">14</option>
          </select>

          <select
            value={colorValue}
            onChange={e => {
              const value = e.target.value;
              editor.chain().focus().setColor(value).run();
              setColorValue("");
            }}
            className="px-2 py-1 border rounded hover:bg-softSync hover:text-shadowMind cursor-active"
          >
            <option value="" disabled>
              Kolor
            </option>
            <option value="#DAE8E9">Soft Sync</option>
            <option value="#EF2EB4">Core Glow</option>
            <option value="#3FE9C5">Nero Mint</option>
          </select>

          <button
            type="button"
            onClick={handleSetLink}
            className="px-2 py-1 border rounded hover:bg-softSync hover:text-shadowMind cursor-active"
          >
            Link
          </button>
          <button
            type="button"
            onClick={() => setShowHTML(prev => !prev)}
            className={`px-2 py-1 border rounded cursor-active ${
              showHTML ? "bg-softSync text-shadowMind" : "hover:bg-softSync hover:text-shadowMind"
            }`}
          >
            HTML
          </button>
        </div>
        <Line />

        {showHTML ? (
          <textarea
            value={editor.getHTML()}
            readOnly
            className="w-full min-h-[200px] bg-shadowMind p-2 rounded-[10px] outline-none border-none focus:outline-none focus:border-none resize-none"
          />
        ) : (
          <EditorContent
            editor={editor}
            className="mt-5 min-h-[200px] rounded-[10px] text-softSync
    [&>div]:min-h-[200px]
    [&_p]:text-[1.5rem]
    [&_.ProseMirror]:focus:outline-none [&_.ProseMirror]:focus:border-none
    [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6"
          />
        )}
      </div>
    </div>
  );
};

export default TextEditor;
