import { useState } from "react";

// Styles from data.js styles{} object
const TOAST_STYLES = {
  success: {
    background: "#ECFDF5",
    colorTitle: "#065F46",
    colorText: "#047857",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title: "Success",
    text: "Your work has been saved",
  },
  warning: {
    background: "#FFFBEB",
    colorTitle: "#92400E",
    colorText: "#B45309",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title: "Warning",
    text: "A network error was detected",
  },
  info: {
    background: "#EFF6FF",
    colorTitle: "#1E40AF",
    colorText: "#1C51B9",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M11 14H10V10H9M10 6H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title: "Information",
    text: "Please read updated information",
  },
  error: {
    background: "#FEF2F2",
    colorTitle: "#92400E",
    colorText: "#B45309",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M8 12L10 10M10 10L12 8M10 10L8 8M10 10L12 12M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#F87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title: "Error",
    text: "Please re-save your work again",
  },
};

// Exact copy snippet from provided examples (success variant as base)
function makeToastSnippet(type) {
  const s = TOAST_STYLES[type];
  const componentName = type.charAt(0).toUpperCase() + type.slice(1);
  return `import React, { useState, useEffect } from "react";

export default function Toast${componentName}({
  title = "${s.title}",
  text = "${s.text}",
  duration = 4000,
  onClose
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { handleClose(); }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <div style={{
      display: "flex",
      gap: "16px",
      alignItems: "flex-start",
      width: "384px",
      padding: "16px",
      borderRadius: "8px",
      background: "${s.background}",
      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)",
      fontFamily: "Inter, sans-serif",
      position: "relative"
    }}>
      {/* SVG icon here */}

      <div style={{ flex: 1 }}>
        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: "${s.colorTitle}" }}>
          {title}
        </h4>
        <p style={{ margin: "4px 0 0 0", fontSize: "14px", lineHeight: "20px", color: "${s.colorText}" }}>
          {text}
        </p>
      </div>

      <button
        onClick={handleClose}
        style={{
          border: "none", background: "transparent", cursor: "pointer",
          fontSize: "20px", lineHeight: "20px", padding: "0 4px",
          color: "#6B7280", position: "absolute", top: "12px", right: "12px"
        }}
        aria-label="Close"
      >×</button>
    </div>
  );
}`;
}

/*
  Toast — static design preview.
  Close button is visual only (no dismiss in showcase, matches "just design example").
  Click to copy the full auto-dismiss Toast component for that type.
*/
function ToastCard({ type }) {
  const [copied, setCopied] = useState(false);
  const s = TOAST_STYLES[type];

  function handleClick() {
    navigator.clipboard.writeText(makeToastSnippet(type)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div
      className="toast-card copy-wrap-block"
      style={{ background: s.background }}
      onClick={handleClick}
      title="Click to copy"
    >
      {copied && <span className="copied-text">Copied!</span>}

      {/* SVG icon (stroke style from styles{}) */}
      <div
        className="toast-card__icon"
        dangerouslySetInnerHTML={{ __html: s.icon }}
      />

      <div className="toast-card__body">
        <h4 className="toast-card__title" style={{ color: s.colorTitle }}>
          {s.title}
        </h4>
        <p className="toast-card__text" style={{ color: s.colorText }}>
          {s.text}
        </p>
      </div>

      {/* Visual-only close button — does not dismiss in showcase */}
      <button
        className="toast-card__close"
        onClick={(e) => e.stopPropagation()}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}

// Renders the 2×2 toast grid
export function ToastGrid() {
  return (
    <div className="toast-grid">
      {Object.keys(TOAST_STYLES).map((type) => (
        <ToastCard key={type} type={type} />
      ))}
    </div>
  );
}

export { makeToastSnippet };
