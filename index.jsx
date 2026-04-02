import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import ComponentShowcase from "./components/ComponentShowcase/ComponentShowcase.jsx";
import Badge from "./components/Badge/Badge.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Card from "./components/Card/Card.jsx";
import {
  TestimonialWithPhoto,
  TestimonialNoPic,
  TESTIMONIAL_CODE_WITH_PHOTO,
  TESTIMONIAL_CODE_NO_PHOTO,
} from "./components/Testimonial/Testimonial.jsx";
import {
  TooltipLightGroup,
  TooltipDarkGroup,
  TOOLTIP_CODE_DARK,
  TOOLTIP_CODE_LIGHT,
} from "./components/Tooltip/Tooltip.jsx";
import { ToastGrid, makeToastSnippet } from "./components/Toast/Toast.jsx";

/* ── JSX code snippets for the code tabs ──────────────────── */

const CODE_BADGE_SQUARE = `import React from "react";

function Badge({ text = "Your text", backgroundColor = "#F3F4F6", color = "#1F2937", variant = "square" }) {
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

const CODE_BADGE_PILL = `import React from "react";

function Badge({ text = "Your text", backgroundColor = "#F3F4F6", color = "#1F2937", variant = "pill" }) {
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

const CODE_BANNER_MULTI = `import React from "react";

function SuccessBanner() {
  return (
    <div style={{
      padding: "16px",
      display: "flex",
      alignItems: "flex-start",
      width: "100%",
      maxWidth: "800px",
      backgroundColor: "#ECFDF5",
      borderRadius: "6px",
      fontFamily: "Inter, sans-serif",
      gap: "12px"
    }}>
      <div>
        {/* success SVG icon */}
      </div>
      <div>
        <h5 style={{ margin: "0 0 8px 0", color: "#065F46", fontSize: "16px", fontWeight: "600" }}>
          Congratulations!
        </h5>
        <p style={{ margin: 0, color: "#047857", fontSize: "14px", lineHeight: "1.5" }}>
          Your application has been received. We'll notify you once it's reviewed.
        </p>
      </div>
    </div>
  );
}

export default SuccessBanner;`;

const CODE_BANNER_SINGLE = `import React from "react";

function SuccessSingleBanner() {
  return (
    <div style={{
      padding: "16px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: "800px",
      backgroundColor: "#ECFDF5",
      borderRadius: "6px",
      fontFamily: "Inter, sans-serif",
      gap: "12px"
    }}>
      <div>
        {/* success SVG icon */}
      </div>
      <h5 style={{ margin: 0, color: "#065F46", fontSize: "14px", fontWeight: "500" }}>
        Congratulations!
      </h5>
    </div>
  );
}

export default SuccessSingleBanner;`;

const CODE_CARD = `import React from "react";

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
        {/* Upload SVG icon */}
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
      }}>
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
      </p>
    </div>
  );
}

export default Card;`;

// Testimonial code is imported from the component file directly
const CODE_TESTIMONIAL_PHOTO = TESTIMONIAL_CODE_WITH_PHOTO;
const CODE_TESTIMONIAL_NOPIC = TESTIMONIAL_CODE_NO_PHOTO;

const BADGE_COLORS = [
  "pink",
  "purple",
  "indigo",
  "blue",
  "green",
  "yellow",
  "red",
  "gray",
];

const CARD_DATA = {
  title: "Easy Deployment",
  text: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
};

/* ── App ──────────────────────────────────────────────────── */
function App() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light",
    );
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <span className="header-title">Component Library++</span>
        <button className="theme-toggle" onClick={toggleTheme}>
          {dark ? <HiOutlineSun /> : <HiOutlineMoon />}
          <span>{dark ? "Light mode" : "Dark mode"}</span>
        </button>
      </header>

      {/* Main */}
      <main className="page">
        <div className="page-intro">
          <h1>Component Library++</h1>
          <p>
            Reusable React components. Click <strong>JSX</strong> to see the
            code. Click any component to copy its snippet.
          </p>
        </div>

        {/* ── Badge ── */}
        <section className="section">
          <h2 className="section-title">Badge</h2>
          <p className="section-desc">
            Color labels in square or pill shape. Click any badge to copy a
            standalone Badge component.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <ComponentShowcase title="Square" code={CODE_BADGE_SQUARE}>
              <div className="badge-row">
                <span className="badge-row-label">Square</span>
                {BADGE_COLORS.map((c) => (
                  <Badge key={c} color={c} variant="square">
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </Badge>
                ))}
              </div>
            </ComponentShowcase>

            <ComponentShowcase title="Pill" code={CODE_BADGE_PILL}>
              <div className="badge-row">
                <span className="badge-row-label">Pill</span>
                {BADGE_COLORS.map((c) => (
                  <Badge key={c} color={c} variant="pill">
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </Badge>
                ))}
              </div>
            </ComponentShowcase>
          </div>
        </section>

        {/* ── Banner ── */}
        <section className="section">
          <h2 className="section-title">Banner</h2>
          <p className="section-desc">
            Status alerts in two layouts. Click any banner to copy a standalone
            component.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <ComponentShowcase
              title="Multi Line"
              code={CODE_BANNER_MULTI}
              previewClass="col"
            >
              {[
                {
                  s: "success",
                  t: "Congratulations!",
                  d: "Your application has been received. We'll notify you once it's reviewed.",
                },
                {
                  s: "warning",
                  t: "Attention",
                  d: "Your session will expire in 5 minutes. Please save your work.",
                },
                {
                  s: "error",
                  t: "There is a problem with your application",
                  d: "Please check your internet connection and try again.",
                },
                {
                  s: "neutral",
                  t: "Update available",
                  d: "A new version is available. Refresh to update.",
                },
              ].map(({ s, t, d }) => (
                <Banner key={s} status={s} variant="multi-line" title={t}>
                  {d}
                </Banner>
              ))}
            </ComponentShowcase>

            <ComponentShowcase
              title="Single Line"
              code={CODE_BANNER_SINGLE}
              previewClass="col"
            >
              {[
                { s: "success", t: "Congratulations!" },
                { s: "warning", t: "Attention — please review your settings." },
                { s: "error", t: "There was a problem with your request." },
                { s: "neutral", t: "Update available — restart to apply." },
              ].map(({ s, t }) => (
                <Banner key={s} status={s} variant="single-line" title={t} />
              ))}
            </ComponentShowcase>
          </div>
        </section>

        {/* ── Card ── */}
        <section className="section">
          <h2 className="section-title">Card</h2>
          <p className="section-desc">
            Card with floating icon from data.js. Click to copy the full
            component.
          </p>
          <ComponentShowcase
            title="Card"
            code={CODE_CARD}
            previewClass="center"
          >
            <Card title={CARD_DATA.title} text={CARD_DATA.text} />
          </ComponentShowcase>
        </section>

        {/* ── Testimonial ── */}
        <section className="section">
          <h2 className="section-title">Testimonial</h2>
          <p className="section-desc">
            Two layouts from the design files. Click either to copy its
            component code. <strong>Add photos to /public/photos/</strong> —
            avatar.jpg and logo.svg.
          </p>

          {/* With photo */}
          <div style={{ marginBottom: "0.75rem" }}>
            <ComponentShowcase
              title="With Photo"
              code={CODE_TESTIMONIAL_PHOTO}
              previewClass="full-width"
            >
              <TestimonialWithPhoto
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
                name="May Andersons"
                role="Workcation, CTO"
              />
            </ComponentShowcase>
          </div>

          {/* No photo */}
          <ComponentShowcase
            title="No Photo"
            code={CODE_TESTIMONIAL_NOPIC}
            previewClass="full-width"
          >
            <TestimonialNoPic
              quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
              name="May Andersons"
              role="Workcation, CTO"
            />
          </ComponentShowcase>
        </section>

        {/* ── Tooltip ── */}
        <section className="section">
          <h2 className="section-title">
            Tooltip
            <span className="stretch-label">Stretch Goal</span>
          </h2>
          <p className="section-desc">
            Light and dark popup cards from data.js. Click any card to copy the
            Tooltip component.
          </p>
          <ComponentShowcase
            title="Tooltip — Light &amp; Dark"
            code={TOOLTIP_CODE_DARK}
            previewClass="col"
          >
            <TooltipLightGroup />
            <TooltipDarkGroup />
          </ComponentShowcase>
        </section>

        {/* ── Toast ── */}
        <section className="section">
          <h2 className="section-title">
            Toast
            <span className="stretch-label">Stretch Goal</span>
          </h2>
          <p className="section-desc">
            Design examples from data.js styles. Static — close button is visual
            only. Click any toast to copy a full auto-dismiss component for that
            type.
          </p>
          <ComponentShowcase
            title="Toast Popups"
            code={makeToastSnippet("success")}
          >
            <ToastGrid />
          </ComponentShowcase>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        © April, 2026 — React Component Library created by Anastasia
        Telesnitskaya
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
