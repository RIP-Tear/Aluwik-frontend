import { Mark, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (size: string) => ReturnType;
    };
  }
}

type FontSizeOptions = {
  defaultSize: string | null;
};

export const FontSize = Mark.create<FontSizeOptions>({
  name: "fontSize",

  addOptions() {
    return {
      defaultSize: "1.5rem",
    };
  },

  addAttributes() {
    return {
      size: {
        default: this.options.defaultSize,
        parseHTML: element => element.style.fontSize || null,
        renderHTML: attributes => {
          if (!attributes.size) return {};
          return { style: `font-size: ${attributes.size}` };
        },
      },
    };
  },

  parseHTML() {
    return [{ style: "font-size" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes({ class: "textStyle" }, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setFontSize:
        size =>
        ({ commands }) =>
          commands.setMark(this.name, { size }),
    };
  },
});
