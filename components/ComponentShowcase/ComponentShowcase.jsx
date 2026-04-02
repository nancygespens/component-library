import { useState } from "react";
import { HiOutlineClipboard, HiOutlineCheck, HiOutlineCode } from "react-icons/hi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function ComponentShowcase({ title, code, previewClass = "", children }) {
  const [tab, setTab] = useState("preview");
  const [barCopied, setBarCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  function copyCode(setCopied) {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="showcase">
      <div className="showcase-bar">
        <div className="showcase-tabs">
          <button
            className={`tab-btn ${tab === "preview" ? "active" : ""}`}
            onClick={() => setTab("preview")}
          >
            Preview
          </button>
          <button
            className={`tab-btn ${tab === "jsx" ? "active" : ""}`}
            onClick={() => setTab("jsx")}
          >
            <HiOutlineCode style={{ marginRight: "0.25rem" }} />
            JSX
          </button>
        </div>

        <button
          className={`copy-btn ${barCopied ? "copied" : ""}`}
          onClick={() => copyCode(setBarCopied)}
        >
          {barCopied ? <HiOutlineCheck /> : <HiOutlineClipboard />}
          {barCopied ? "Copied!" : "Copy code"}
        </button>
      </div>

      {tab === "preview" ? (
        <div className={`showcase-preview ${previewClass}`}>{children}</div>
      ) : (
        <div className="showcase-code">
          <button
            className={`code-copy-btn ${codeCopied ? "copied" : ""}`}
            onClick={() => copyCode(setCodeCopied)}
          >
            {codeCopied ? <HiOutlineCheck /> : <HiOutlineClipboard />}
            {codeCopied ? "Copied" : "Copy"}
          </button>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers>
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}

export default ComponentShowcase;
