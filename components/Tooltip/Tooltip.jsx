import { useState } from "react";
import { TbInbox } from "react-icons/tb";
import { RiCloseFill } from "react-icons/ri";

// Colors from data.js light[] and dark[]
const LIGHT_CARDS = [
  { id: 1, shadow: "0 10px 15px -3px rgba(0,0,0,0.1)", bg: "#FFFFFF",  colorTitle: "#111827", colorText: "#6B7280", colorBox: "#6B7280", colorClose: "#6B7280" },
  { id: 2, shadow: "0 10px 15px -3px rgba(0,0,0,0.1)", bg: "#E0E7FF",  colorTitle: "#1E40AF", colorText: "#1C51B9", colorBox: "#1C51B9", colorClose: "#1C51B9" },
  { id: 3, shadow: "0 10px 15px -3px rgba(0,0,0,0.1)", bg: "#FFF3FC",  colorTitle: "#A9229B", colorText: "#C7369E", colorBox: "#C7369E", colorClose: "#C7369E" },
  { id: 4, shadow: "0 10px 15px -3px rgba(0,0,0,0.1)", bg: "#E7FFF3",  colorTitle: "#137A2A", colorText: "#3C8C4E", colorBox: "#41A557", colorClose: "#3C8C4E" },
];

const DARK_CARDS = [
  { id: 1, shadow: "0 4px 6px -2px rgba(0,0,0,0.05)", bg: "#262626",  colorTitle: "#FFFFFF", colorText: "#C7C7C7", colorBox: "#C7C7C7", colorClose: "#C7C7C7" },
  { id: 2, shadow: "0 4px 6px -2px rgba(0,0,0,0.05)", bg: "#1E40AF",  colorTitle: "#FFFFFF", colorText: "#E8EDFF", colorBox: "#7EA6F2", colorClose: "#D8D8D8" },
  { id: 3, shadow: "0 4px 6px -2px rgba(0,0,0,0.05)", bg: "#A9229B",  colorTitle: "#FFFFFF", colorText: "#FFE9FD", colorBox: "#F462E6", colorClose: "#D8D8D8" },
  { id: 4, shadow: "0 4px 6px -2px rgba(0,0,0,0.05)", bg: "#47AA5D",  colorTitle: "#FFFFFF", colorText: "#E3FFE9", colorBox: "#C1FFCF", colorClose: "#D8D8D8" },
];

// Exact copy snippets from provided examples
const SNIPPET_DARK = `import React, { useState } from "react";
import { TbInbox } from "react-icons/tb";
import { RiCloseFill } from "react-icons/ri";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div style={{
          maxWidth: "384px",
          backgroundColor: "#262626",
          position: "relative",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0 4px 6px -2px rgba(0,0,0,0.05)"
        }}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "16px" }}>
              <TbInbox style={{ width: "24px", height: "24px", color: "#C7C7C7" }} />
            </div>
            <div>
              <h4 style={{ fontFamily: "Inter", fontSize: "14px", fontWeight: "500", lineHeight: "20px", color: "#FFFFFF" }}>
                Archive notes
              </h4>
              <p style={{ fontFamily: "Inter", fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "#C7C7C7" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <RiCloseFill style={{ color: "#C7C7C7", width: "24px", height: "24px" }} />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "-20px", left: "48px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 30 15" fill="none">
              <path d="M14.7224 14.25L1.26899e-05 8.77599e-08L29.4449 2.66191e-06L14.7224 14.25Z" fill="#262626" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}`;

const SNIPPET_LIGHT = `import React, { useState } from "react";
import { TbInbox } from "react-icons/tb";
import { RiCloseFill } from "react-icons/ri";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div style={{
          maxWidth: "384px",
          backgroundColor: "#FFFFFF",
          position: "relative",
          borderRadius: "8px",
          padding: "16px",
        }}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "16px" }}>
              <TbInbox style={{ width: "24px", height: "24px", color: "#6B7280" }} />
            </div>
            <div>
              <h4 style={{ fontFamily: "Inter", fontSize: "14px", fontWeight: "500", lineHeight: "20px", color: "#111827" }}>
                Archive notes
              </h4>
              <p style={{ fontFamily: "Inter", fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "#6B7280" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <RiCloseFill style={{ color: "#6B7280", width: "24px", height: "24px" }} />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "-20px", left: "48px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 30 15" fill="none">
              <path d="M14.7224 14.25L1.26899e-05 8.77599e-08L29.4449 2.66191e-06L14.7224 14.25Z" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}`;

// Single tooltip popup card (design preview — always visible)
function TooltipCard({ item, isDark }) {
  const [copied, setCopied] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    const snippet = isDark ? SNIPPET_DARK : SNIPPET_LIGHT;
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  const arrowFill = isDark ? item.bg : item.bg;

  return (
    <div
      className="tooltip-card"
      style={{ background: item.bg, boxShadow: item.shadow }}
      onClick={handleClick}
      title="Click to copy"
    >
      {copied && <span className="copied-text">Copied!</span>}

      <div className="tooltip-card__inner">
        {/* Colored icon box with inbox icon */}
        <div className="tooltip-card__icon-box" style={{ background: item.colorBox }}>
          <TbInbox size={16} />
        </div>

        <div className="tooltip-card__body">
          <h4 className="tooltip-card__title" style={{ color: item.colorTitle }}>
            Archive notes
          </h4>
          <p className="tooltip-card__text" style={{ color: item.colorText }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <button
          className="tooltip-card__close"
          style={{ color: item.colorClose }}
          onClick={(e) => e.stopPropagation()}
          aria-label="Close"
        >
          <RiCloseFill size={20} />
        </button>
      </div>

      {/* Triangle arrow pointing down */}
      <div className="tooltip-card__arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 30 15" fill="none">
          <path d="M14.7224 14.25L1.26899e-05 8.77599e-08L29.4449 2.66191e-06L14.7224 14.25Z" fill={arrowFill} />
        </svg>
      </div>
    </div>
  );
}

// Renders both light and dark groups for use in index.jsx
export function TooltipLightGroup() {
  return (
    <div className="tooltip-group" style={{ marginBottom: "2.5rem" }}>
      <span className="tooltip-group-label">Light</span>
      {LIGHT_CARDS.map((item) => (
        <TooltipCard key={item.id} item={item} isDark={false} />
      ))}
    </div>
  );
}

export function TooltipDarkGroup() {
  return (
    <div className="tooltip-group">
      <span className="tooltip-group-label">Dark</span>
      {DARK_CARDS.map((item) => (
        <TooltipCard key={item.id} item={item} isDark={true} />
      ))}
    </div>
  );
}

export { SNIPPET_DARK as TOOLTIP_CODE_DARK, SNIPPET_LIGHT as TOOLTIP_CODE_LIGHT };
