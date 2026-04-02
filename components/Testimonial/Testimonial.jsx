import { useState } from "react";

// ── Full JSX snippets — shown in JSX tab and copied on click ────────────────

export const TESTIMONIAL_CODE_WITH_PHOTO = `import React from "react";

export default function TestimonialWithPhoto() {
  function useMediaQuery(query) {
    const [matches, setMatches] = React.useState(false);
    React.useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) setMatches(media.matches);
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);
    return matches;
  }
  const isMobile = useMediaQuery("(max-width: 850px)");
  return (
    <div style={{
      maxWidth: isMobile ? "376px" : "1358px",
      backgroundColor: isMobile ? "#fff" : "transparent",
      paddingTop: "96px",
      paddingBottom: isMobile ? "0px" : "96px",
      position: "relative",
      marginBottom: "35px",
    }}>
      <div style={{
        width: isMobile ? "344px" : "384px",
        height: isMobile ? "206px" : "464px",
        overflow: "hidden",
        borderRadius: "12px",
        position: "absolute",
        top: isMobile ? "0px" : "64px",
        left: "16px",
      }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="/photos/avatar.jpg"
          alt="Avatar"
        />
      </div>
      <div style={{
        backgroundColor: "#2545B8",
        padding: isMobile ? "151px 16px 64px 16px" : "80px 71px 80px 487px",
      }}>
        <div style={{ marginBottom: "24px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="36" viewBox="0 0 44 36" fill="none">
            <path d="M12.528 0C5.184 5.184 0 13.68 0 23.04C0 30.672 4.608 35.136 9.936 35.136C14.976 35.136 18.72 31.104 18.72 26.352C18.72 21.6 15.408 18.144 11.088 18.144C10.224 18.144 9.072 18.288 8.784 18.432C9.504 13.536 14.112 7.776 18.72 4.896L12.528 0ZM37.296 0C30.096 5.184 24.912 13.68 24.912 23.04C24.912 30.672 29.52 35.136 34.848 35.136C39.744 35.136 43.632 31.104 43.632 26.352C43.632 21.6 40.176 18.144 35.856 18.144C34.992 18.144 33.984 18.288 33.696 18.432C34.416 13.536 38.88 7.776 43.488 4.896L37.296 0Z" fill="white" fillOpacity="0.25"/>
          </svg>
        </div>
        <p style={{ fontFamily: "Inter", fontSize: "24px", fontWeight: "500", lineHeight: "32px", marginBottom: "24px", color: "#ffffff" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
        </p>
        <p style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "24px", color: "#ffffff" }}>
          May Andersons
        </p>
        <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#ffffff" }}>
          Workcation, CTO
        </p>
      </div>
    </div>
  );
}`;

export const TESTIMONIAL_CODE_NO_PHOTO = `import React from "react";

export default function TestimonialNoPic() {
  function useMediaQuery(query) {
    const [matches, setMatches] = React.useState(false);
    React.useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) setMatches(media.matches);
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);
    return matches;
  }
  const isMobile = useMediaQuery("(max-width: 850px)");
  return (
    <div style={{
      backgroundColor: "#fff",
      position: "relative",
      maxWidth: isMobile ? "376px" : "1358px",
      padding: isMobile ? "74px 16px" : "96px 22% 112px 22%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: isMobile ? "start" : "center",
      overflow: "hidden",
    }}>
      <img style={{ marginBottom: "24px" }} src="/photos/logo.svg" alt="logo" />
      <p style={{ fontFamily: "Inter", fontSize: "24px", lineHeight: "36px", fontWeight: "500", color: "#111827", marginTop: "40px", marginBottom: "32px", zIndex: 2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
      </p>
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "center", zIndex: 2 }}>
        <p style={{ fontFamily: "Inter", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#111827" }}>
          May Andersons
        </p>
        {!isMobile && (
          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="20" viewBox="0 0 8 20" fill="none">
              <path d="M5 0H8L3 20H0L5 0Z" fill="#2E59F3"/>
            </svg>
          </div>
        )}
        <p style={{ fontFamily: "Inter", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#6B7280" }}>
          Workcation, CTO
        </p>
      </div>
    </div>
  );
}`;

// ── Decorative helpers ──────────────────────────────────────────────────────

function QuoteMarks() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="36"
      viewBox="0 0 44 36"
      fill="none"
    >
      <path
        d="M12.528 0C5.184 5.184 0 13.68 0 23.04C0 30.672 4.608 35.136 9.936 35.136C14.976 35.136 18.72 31.104 18.72 26.352C18.72 21.6 15.408 18.144 11.088 18.144C10.224 18.144 9.072 18.288 8.784 18.432C9.504 13.536 14.112 7.776 18.72 4.896L12.528 0ZM37.296 0C30.096 5.184 24.912 13.68 24.912 23.04C24.912 30.672 29.52 35.136 34.848 35.136C39.744 35.136 43.632 31.104 43.632 26.352C43.632 21.6 40.176 18.144 35.856 18.144C34.992 18.144 33.984 18.288 33.696 18.432C34.416 13.536 38.88 7.776 43.488 4.896L37.296 0Z"
        fill="white"
        fillOpacity="0.25"
      />
    </svg>
  );
}

function DotsPattern() {
  const paths = [];
  for (let row = 0; row <= 14; row++) {
    for (let col = 0; col <= 12; col++) {
      const x = col * 20;
      const y = row * 20;
      paths.push(
        <path
          key={`${row}-${col}`}
          d={`M${x} ${y}H${x + 4}V${y + 4}H${x}V${y}Z`}
          fill="#E5E7EB"
        />,
      );
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="241"
      height="298"
      viewBox="0 0 241 298"
      fill="none"
    >
      {paths}
    </svg>
  );
}

// ── Exported components ─────────────────────────────────────────────────────

/*
  TestimonialWithPhoto — blue background, overlapping portrait photo.
  Click copies the full responsive component code.
  Add photo to: /public/photos/avatar.jpg
*/
export function TestimonialWithPhoto({ quote, name, role }) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(TESTIMONIAL_CODE_WITH_PHOTO).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div
      className="copy-wrap-block"
      onClick={handleClick}
      title="Click to copy"
    >
      {copied && <span className="copied-text">Copied!</span>}
      <div className="t-with-photo">
        <div className="t-with-photo__img-wrap">
          <img
            className="t-with-photo__img"
            src="/photos/avatar.jpg"
            alt={name}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            className="t-with-photo__img-placeholder"
            style={{ display: "none" }}
          >
            Add avatar.jpg to /public/photos/
          </div>
        </div>
        <div className="t-with-photo__content">
          <div className="t-with-photo__quotes">
            <QuoteMarks />
          </div>
          <p className="t-with-photo__quote">{quote}</p>
          <p className="t-with-photo__name">{name}</p>
          <p className="t-with-photo__role">{role}</p>
        </div>
      </div>
    </div>
  );
}

/*
  TestimonialNoPic — white background, centered quote, dotted pattern.
  Click copies the full responsive component code.
  Add logo to: /public/photos/logo.svg
*/
export function TestimonialNoPic({ quote, name, role }) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(TESTIMONIAL_CODE_NO_PHOTO).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div
      className="copy-wrap-block"
      onClick={handleClick}
      title="Click to copy"
    >
      {copied && <span className="copied-text">Copied!</span>}
      <div className="t-no-photo">
        <img
          className="t-no-photo__logo"
          src="/photos/logo.svg"
          alt="Company logo"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <p className="t-no-photo__quote">{quote}</p>
        <div className="t-no-photo__author">
          <p className="t-no-photo__name">{name}</p>
          <span className="t-no-photo__divider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="20"
              viewBox="0 0 8 20"
              fill="none"
            >
              <path d="M5 0H8L3 20H0L5 0Z" fill="#2E59F3" />
            </svg>
          </span>
          <p className="t-no-photo__role">{role}</p>
        </div>
        <div className="t-no-photo__dots">
          <DotsPattern />
        </div>
      </div>
    </div>
  );
}
