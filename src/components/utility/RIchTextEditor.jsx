import { Editor, EditorState } from "draft-js";

export default function RichTextEditor({ editorState, onChange }) {
  return (
    <div className="border rounded p-2 min-h-[150px] bg-white">
      <Editor editorState={editorState} onChange={onChange} />
    </div>
  );
}
