import { INGREDIENT_TAG_COLORS } from '../domain/ingredients';

export default function AboutPage() {
  return (
    <div className="page-view active" id="view-about">
      <div className="about-page">
        <div className="about-hero">
          <div className="hero-emoji">CB</div>
          <h2>Cookbook</h2>
          <p>
            This app is now on React + TypeScript while preserving recipe browsing, filters,
            saved recipes, kitchen matching, and PWA support.
          </p>
        </div>

        <div className="about-card">
          <h3>Highlights</h3>
          <p>
            Recipe detail pages are shareable via URL and support deep-link refresh on GitHub Pages project paths.
            Saved recipes keep using the same localStorage key.
          </p>
        </div>

        <div className="about-card" style={{ marginTop: 16 }}>
          <h3>Ingredient Tag Colors</h3>
          <div className="ing-tag-legend" id="ing-tag-legend">
            {Object.entries(INGREDIENT_TAG_COLORS).map(([name, color]) => (
              <span
                key={name}
                className="ing-tag"
                style={{ background: color.bg, borderColor: color.border, color: color.text }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="about-card" style={{ marginTop: 16, marginBottom: 40 }}>
          <h3>Tech Stack</h3>
          <p>
            Vite + React + TypeScript + React Router + PWA injectManifest + Vitest.
            CI runs typecheck, tests, and build before deploying dist to GitHub Pages.
          </p>
        </div>
      </div>
    </div>
  );
}
