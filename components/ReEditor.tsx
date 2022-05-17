import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { EditorRef, ReactEditor, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { useEffect, useRef } from "react";

const ReEditor = () => {
  const ref = useRef({} as EditorRef);
  useEffect(() => {
    console.log(ref)
  }, [])
  const editor = useEditor((root) => 
    Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
      ctx.set(defaultValueCtx, "# Milkdown React");
    })
    .use(nord)
    .use(commonmark)
  )
  return (
    <ReactEditor editor={editor} ref={ref} />
  )
}

export default ReEditor;