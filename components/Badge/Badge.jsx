import { useState } from "react";
import classNames from "classnames";

// Hex values for each color (light mode)
const COLOR_MAP = {
  pink:   { bg: "#FCE7F3", text: "#9D174D" },
  purple: { bg: "#EDE9FE", text: "#5B21B6" },
  indigo: { bg: "#E0E7FF", text: "#3730A3" },
  blue:   { bg: "#DBEAFE", text: "#1E40AF" },
  green:  { bg: "#D1FAE5", text: "#065F46" },
  yellow: { bg: "#FEF3C7", text: "#92400E" },
  red:    { bg: "#FEE2E2", text: "#991B1B" },
  gray:   { bg: "#F3F4F6", text: "#1F2937" },
};

function makeBadgeSnippet(bg, text, variant) {
  return `import React from "react";

function Badge({ text = "Your text", backgroundColor = "${bg}", color = "${text}", variant = "${variant}" }) {
  const style = {
    backgroundColor,
    color,
    padding: "2px 12px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "500",
    borderRadius: variant === "pill" ? "12px" : "4px",
  };

  return <span style={style}>{text}</span>;
}

export default Badge;`;
}

/*
  Badge — color label in pill or square shape.
  Click copies a full standalone Badge component to clipboard.

  Props:
    color   — pink | purple | indigo | blue | green | yellow | red | gray
    variant — pill (default) | square
*/
function Badge({ children, color = "gray", variant = "pill" }) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    const { bg, text } = COLOR_MAP[color] || COLOR_MAP.gray;
    const snippet = makeBadgeSnippet(bg, text, variant);
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className="copy-wrap" onClick={handleClick} title="Click to copy">
      {copied && <span className="copied-text">Copied!</span>}
      <span className={classNames("badge", `badge--${color}`, `badge--${variant}`)}>
        {children}
      </span>
    </div>
  );
}

export default Badge;
