# Component Library++ ⚡

[![Demo](https://github.com/user-attachments/assets/42b12d3e-af32-4915-8f35-f644ae485646)](https://celadon-speculoos-d1f956.netlify.app/)

> Click the image to view the demo. The link will open in the current tab (press `Ctrl + Click` or `Cmd + Click` to open in a new tab).

## Description

**Component Library++** is a collection of reusable React components built with Vite. Each component is displayed with a live preview and a JSX code tab — click any component to copy its ready-to-use code snippet directly to your clipboard.

This project was created as a Solo Project to practice building a real-world component library with consistent design, dark mode support, responsive layout, and clean component architecture.

## Components

- **Badge** — color labels in pill and square shapes across 8 color variants
- **Banner** — status alerts in single-line and multi-line layouts (success, warning, error, neutral)
- **Card** — floating icon card with title and description
- **Testimonial** — two layouts: with photo (blue background) and without photo (white background with decorative pattern)
- **Tooltip** _(Stretch Goal)_ — popup cards in light and dark styles, taken from design data
- **Toast** _(Stretch Goal)_ — dismissible notification popups in 4 status types

## Features

- **Click to Copy** — click any component to copy a full standalone JSX snippet to your clipboard
- **JSX Code Tab** — every showcase has a Preview and JSX tab with syntax highlighting
- **Dark Mode** — full dark mode toggle in the header, CSS variable-based theming
- **Responsive** — breakpoints at 480px, 768px, 1024px, and 1280px

## Technologies Used

- **React 18** — component-based UI with hooks (`useState`)
- **Vite** — build tool and dev server
- **react-syntax-highlighter** — JSX code display with VS Code Dark+ theme
- **react-icons** — outline icon set (HiOutline, TbInbox, RiCloseFill)
- **classnames** — conditional class name utility
- **CSS3** — custom properties, flexbox, grid, responsive breakpoints
- **Google Fonts** — Syne (display) + Inter (body)

## What I Practiced

- Building compound components (Card with sub-components)
- Exporting named components and constants from the same file
- Using `dangerouslySetInnerHTML` to render SVG icons from data files
- Implementing a copy-to-clipboard pattern with visual feedback and no layout shift
- CSS variable-based dark mode with `data-theme` attribute on `<html>`
- Responsive typography using CSS custom properties and media queries
- `position: absolute` for non-intrusive "Copied!" feedback above elements
- Structuring a component library with each component in its own folder

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/component-library.git
cd component-library
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`
