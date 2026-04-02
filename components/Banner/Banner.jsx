import { useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineExclamation,
  HiOutlineXCircle,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import classNames from "classnames";

const ICONS = {
  success: <HiOutlineCheckCircle className="banner-icon" />,
  warning: <HiOutlineExclamation className="banner-icon" />,
  error:   <HiOutlineXCircle     className="banner-icon" />,
  neutral: <HiOutlineInformationCircle className="banner-icon" />,
};

// SVGs matching materials[] data for the copy snippets
const SVG_MAP = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#34D399"/>
    </svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882Z" fill="#FBBF24"/>
    </svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z" fill="#F87171"/>
    </svg>`,
  neutral: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z" fill="#60A5FA"/>
    </svg>`,
};

const STATUS_META = {
  success: { bg: "#ECFDF5", titleColor: "#065F46", textColor: "#047857", name: "Success" },
  warning: { bg: "#FFFBEB", titleColor: "#92400E", textColor: "#B45309", name: "Warning" },
  error:   { bg: "#FEF2F2", titleColor: "#92400E", textColor: "#B45309", name: "Error"   },
  neutral: { bg: "#EFF6FF", titleColor: "#1E40AF", textColor: "#1C51B9", name: "Neutral" },
};

function makeMultiSnippet(status, title, description) {
  const m = STATUS_META[status];
  return `import React from "react";

function ${m.name}Banner() {
  return (
    <div style={{
      padding: "16px",
      display: "flex",
      alignItems: "flex-start",
      width: "100%",
      maxWidth: "800px",
      backgroundColor: "${m.bg}",
      borderRadius: "6px",
      fontFamily: "Inter, sans-serif",
      gap: "12px"
    }}>
      <div>
        ${SVG_MAP[status].trim()}
      </div>
      <div>
        <h5 style={{ margin: "0 0 8px 0", color: "${m.titleColor}", fontSize: "16px", fontWeight: "600" }}>
          ${title}
        </h5>
        <p style={{ margin: 0, color: "${m.textColor}", fontSize: "14px", lineHeight: "1.5" }}>
          ${description}
        </p>
      </div>
    </div>
  );
}

export default ${m.name}Banner;`;
}

function makeSingleSnippet(status, title) {
  const m = STATUS_META[status];
  return `import React from "react";

function ${m.name}SingleBanner() {
  return (
    <div style={{
      padding: "16px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: "800px",
      backgroundColor: "${m.bg}",
      borderRadius: "6px",
      fontFamily: "Inter, sans-serif",
      gap: "12px"
    }}>
      <div>
        ${SVG_MAP[status].trim()}
      </div>
      <h5 style={{ margin: 0, color: "${m.titleColor}", fontSize: "14px", fontWeight: "500" }}>
        ${title}
      </h5>
    </div>
  );
}

export default ${m.name}SingleBanner;`;
}

/*
  Banner — status alert, single-line or multi-line.
  Click copies a full standalone component to clipboard.

  Props:
    status  — success | warning | error | neutral
    variant — multi-line (default) | single-line
    title
    children — description (multi-line only)
*/
function Banner({ status = "neutral", variant = "multi-line", title, children }) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    const snippet =
      variant === "multi-line"
        ? makeMultiSnippet(status, title, children || "")
        : makeSingleSnippet(status, title);

    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className="copy-wrap-block" onClick={handleClick} title="Click to copy">
      {copied && <span className="copied-text">Copied!</span>}
      <div className={classNames("banner", `banner--${status}`, `banner--${variant}`)} role="alert">
        {ICONS[status]}
        <div>
          <p className="banner-title">{title}</p>
          {variant === "multi-line" && children && (
            <p className="banner-desc">{children}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
