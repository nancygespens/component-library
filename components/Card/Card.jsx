import { useState } from "react";

// SVG icon from records[] in data.js (blue box with upload arrow + drop shadow)
const UPLOAD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="52" viewBox="0 0 72 52" fill="none">
  <g filter="url(#filter0_dd_1_114)">
    <rect x="12" y="2" width="48" height="48" rx="6" fill="#3F75FE"/>
    <path d="M31 30C28.7909 30 27 28.2091 27 26C27 24.0929 28.3346 22.4976 30.1207 22.097C30.0417 21.7439 30 21.3768 30 21C30 18.2386 32.2386 16 35 16C37.4193 16 39.4373 17.7183 39.9002 20.001C39.9334 20.0003 39.9666 20 40 20C42.7614 20 45 22.2386 45 25C45 27.419 43.2822 29.4367 41 29.9M39 27L36 24M36 24L33 27M36 24L36 36"
      stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <filter id="filter0_dd_1_114" x="0" y="-8" width="72" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/><feGaussianBlur stdDeviation="6"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1" result="shape"/>
    </filter>
  </defs>
</svg>`;

// Exact copy snippet from the provided examples
const CARD_SNIPPET = `import React from "react";

function Card() {
  return (
    <div style={{
        position: "relative",
        width: "336px",
        padding: "0px 24px 32px 24px",
        backgroundColor: "#F9FAFB",
        borderRadius: "8px",
        textAlign: "center",
        border: "1px solid #e5e7eb",
        boxShadow: "none",
      }}>
      <div style={{
            position: "absolute",
            left: "138px",
            width: "48px",
            height: "48px",
            top: "-24px",
          }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="52" viewBox="0 0 72 52" fill="none">
          <g filter="url(#filter0_dd_1_114)">
            <rect x="12" y="2" width="48" height="48" rx="6" fill="#3F75FE"/>
            <path d="M31 30C28.7909 30 27 28.2091 27 26C27 24.0929 28.3346 22.4976 30.1207 22.097C30.0417 21.7439 30 21.3768 30 21C30 18.2386 32.2386 16 35 16C37.4193 16 39.4373 17.7183 39.9002 20.001C39.9334 20.0003 39.9666 20 40 20C42.7614 20 45 22.2386 45 25C45 27.419 43.2822 29.4367 41 29.9M39 27L36 24M36 24L33 27M36 24L36 36"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </div>
      <h3 style={{
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "28px",
          color: "#111827",
          marginTop: "56px",
          marginBottom: "20px",
        }}>Easy Deployment</h3>
      <p style={{
          fontFamily: "Inter",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "400",
          color: "#6B7280",
        }}>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
    </div>
  );
}

export default Card;`;

/*
  Card — design from records[] data.
  Icon overlaps the top edge. Click to copy full component code.

  Props:
    title
    text
*/
function Card({ title, text }) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(CARD_SNIPPET).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className="card-outer copy-wrap" onClick={handleClick} title="Click to copy">
      {copied && <span className="copied-text">Copied!</span>}
      <div className="card">
        <div className="card-icon" dangerouslySetInnerHTML={{ __html: UPLOAD_SVG }} />
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
