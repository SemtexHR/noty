import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import FontFamily from "@tiptap/extension-font-family";
import CharacterCount from "@tiptap/extension-character-count";
import { useCallback, useEffect, useState } from "react";
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  CodeBracketIcon,
  ListBulletIcon,
  ArrowUturnRightIcon,
  ArrowUturnLeftIcon,
  CodeBracketSquareIcon
} from "@heroicons/react/16/solid";

import { usePocket } from "../../context/PocketContext";

/*async function getJWT() {
  const { user } = usePocket();
  try {
    const userID = user.id;
    return await invoke('generate_jwt',{userID});
  } catch (error) {
    console.error(error);
    throw error;
  }
}*/

const Tiptap = () => {
  const [isLoading, setIsLoading] = useState(false);

  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      FontFamily,
      CharacterCount,
    ],

    content: JSON.parse(window.localStorage.getItem("editor-content") || "{}"),
    onUpdate: ({ editor }) => {
      const jsonContent = JSON.stringify(editor.getJSON());
      window.localStorage.setItem("editor-content", jsonContent);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
    <div className="h-5" />
      <div className="bg-main flex w-[645px] h-[53px] rad items-center justify-evenly drop">
        <div className=" flex justify-evenly gap-2.5">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={` icnStyle rad ${
              editor.isActive("bold") ? "bg-hover text-hover" : ""
            }`}
          >
            <BoldIcon className="icnsize" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={` icnStyle rad ${editor.isActive("italic") ? "is-active" : ""}`}
          >
            <ItalicIcon className="icnsize" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={` icnStyle rad  ${editor.isActive("strike") ? "is-active" : ""}`}
          >
            <StrikethroughIcon className="icnsize" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={`icnStyle rad ${editor.isActive("code") ? "is-active" : ""}`}
          >
            <CodeBracketIcon className="icnsize" />
          </button>
          <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className="icnStyle rad ">
            
          </button>
          <button onClick={() => editor.chain().focus().clearNodes().run()} className="icnStyle rad ">
            Clear nodes
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`icnStyle rad  editor.isActive("paragraph") ? "is-active" : ""`}
          >
            P
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`icnStyle rad  ${editor.isActive("bulletList") ? "is-active" : ""}`}
          >
            <ListBulletIcon className="icnsize" />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setFontFamily("JetBrainsMono").run()
            }
            className={
              ` icnStyle rad  ${editor.isActive("textStyle", { fontFamily: "JetBrainsMono" })
                ? "is-active"
                : ""}`
            }
            data-test-id="jetbrainsmono"
          >
            Mono
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            ol
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={` icnStyle rad ${editor.isActive("codeBlock") ? "is-active" : ""}`}
          >
            <CodeBracketSquareIcon className="icnsize" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            ""
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            Horizontal rule
          </button>
          <button onClick={() => editor.chain().focus().setHardBreak().run()}>
            Hard break
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className="icnStyle rad"
          >
            <ArrowUturnLeftIcon className="icnsize" />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            className="icnStyle rad"
          >
            <ArrowUturnRightIcon className="icnsize" />
          </button>
          <input
            type="color"
            onInput={(event) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            value={editor.getAttributes("textStyle").color}
            data-testid="setColor"
          />
          <button className="icnStyle rad" >Full Page</button>
        </div>
      </div>

      {editor && (
        <>
          <BubbleMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
            className="bg-main w-56 h-9 rad flex justify-center items-center gap-1.5"
          >
            <div>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                  editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                }
              >
                H1
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                  editor.isActive("heading", { level: 2 }) ? "is-active" : ""
                }
              >
                H2
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                  editor.isActive("heading", { level: 3 }) ? "is-active" : ""
                }
              >
                H3
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                className={
                  editor.isActive("heading", { level: 4 }) ? "is-active" : ""
                }
              >
                H4
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                className={
                  editor.isActive("heading", { level: 5 }) ? "is-active" : ""
                }
              >
                H5
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 6 }).run()
                }
                className={
                  editor.isActive("heading", { level: 6 }) ? "is-active" : ""
                }
              >
                H6
              </button>
            </div>
          </BubbleMenu>
          <div className="h-5"/>
          <EditorContent
            editor={editor}
            className="block bg-note rad h-175 w- p-2.5 gap-1.5 overflow-y-scroll drop"
          />
        </>
      )}
    </>
  );
};

export default Tiptap;
