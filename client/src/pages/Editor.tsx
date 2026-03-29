import { useState } from "react";

function Editor() {
  const [text, setText] = useState("");

  const handlePaste = () => {
    alert("Pasted content detected!");
  };

  return (
    <div>
      <h2>Editor</h2>
      <textarea
        placeholder="Start writing here..."
        rows={10}
        cols={50}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onPaste={handlePaste}
      />
    </div>
  );
}

export default Editor;