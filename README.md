# HeartPress — Interactive Love Experience

![Project Banner](docs/assets/banner-placeholder.png)

A refined, interactive web experience that visualizes human connection through responsive audio, visuals and tactile-like interactions. "HeartPress" is a lightweight HTML/CSS/JavaScript single-page experience designed for galleries, installations, or intimate web moments.

Key points:

- Small, dependency-free front-end (vanilla HTML/CSS/JS).
- Works offline once assets are loaded — ideal for kiosks and installations.
- Easy to customize visuals, audio, and behavior.

## Repository contents

- `index.html` — Single-page entry for the interactive experience.
- `css/style.css` — Styles and responsive layout.
- `js/script.js` — Interaction and audio logic.
- `audio/` — Included audio assets (music, pulses, cues).
- `LICENSE` — Project license.
- `README.md` — This document.

## Demo

Include a short GIF or hosted demo here. You can host the live demo via GitHub Pages for prospective clients and galleries.

Example (replace with real GIF or screenshot):

![Demo GIF](docs/assets/demo-placeholder.gif)

## Why this project impresses clients

- Clean, modern interaction model focused on emotional storytelling.
- Lightweight and reliable: no frameworks required, fast startup.
- Built with accessibility and deployability in mind so it suits both web and physical installations.
- Easy to skin and brand for client needs: colors, heart visuals, audio tracks, and copy are all configurable.

## Features

- Responsive heart visualization that reacts to user input.
- Spatialized or layered audio cues for immersive experience.
- Config-driven theming (colors, sizes, and assets) — change a few variables to rebrand.
- Touch and mouse support with graceful fallbacks.
- Simple export/deploy process (static site: host anywhere).

## Quick start — run locally

Open the project in the browser (fast, no server required):

```powershell
# From the project root in PowerShell
Start-Process .\index.html
```

If you prefer to run a lightweight local server (recommended for audio and fetch reliability):

```powershell
# With Python 3 installed
python -m http.server 8000
# Then open http://localhost:8000 in a browser
```

Or use Node's serve (npm must be installed):

```powershell
npx serve . -l 5000
# Then open http://localhost:5000
```

## Contract (small)

- Input: user pointer/touch interactions, optional external sensors (via Web MIDI/WebSocket) if integrated.
- Output: animated heart visual, audio playback and dynamic UI cues.
- Error modes: missing audio files degrade to silent visuals; feature-detects audio APIs and falls back to basic UI.
- Success: experience loads in under 1s on modern devices, and interactions are responsive (<50ms perceived latency).

## Customization guide

1. Visuals

   - Modify colors and layout in `css/style.css`.
   - Replace heart SVG or CSS animation to match branding.

2. Audio

   - Add or swap audio files in `audio/` and update references inside `js/script.js`.
   - Use shorter stems for looping ambient layers and longer tracks for narrative pieces.

3. Behavior
   - Interaction logic lives in `js/script.js`. Small, well-commented functions control responsiveness and state.
   - To integrate external input (sensors), add a bridge that emits normalized events the script can consume.

## Accessibility & UX

- Controls are keyboard-accessible where appropriate and pointer input is supported for touch screens.
- Visual contrast can be tuned in `style.css` for WCAG compliance.
- The app avoids autoplaying loud audio; playback is user-initiated or gesture-initiated to respect browser policies.

## Deployment

This is a static project — deploy anywhere that serves static files. Two recommended options:

1. GitHub Pages

   - In repository settings, enable GitHub Pages from the `main` branch (or `gh-pages` branch).
   - Push and wait a few minutes for the site to become available.

2. Static hosts (Netlify, Vercel, Surge)
   - Connect repo or deploy a build by pointing the host to the repository root.

## Development & testing

- Edit files in your preferred editor. The project is intentionally framework-free.
- Use a local server when testing audio and fetch operations (see Quick start).
- Recommended browsers: Chrome, Edge, Safari (latest versions). Mobile: Safari iOS and Chrome Android.

## Automated tests

This project contains no automated tests by default. For larger deployments, consider adding:

- Small unit tests for critical state transitions (e.g., play/pause logic).
- End-to-end smoke test: load `index.html` and verify the main container renders.

## Edge cases to consider

- No-audio environments: ensure visuals remain meaningful without sound.
- Low-power or older devices: provide a low-motion CSS alternative.
- Browser autoplay policies: require a gesture before unmuted playback.
- Large screen or projector mode: scale vector assets to avoid pixelation.

## Contributing

Contributions are welcome. For quick collaboration:

1. Fork the repo.
2. Create a branch: `feature/<your-feature>`.
3. Make small, focused commits and include rationale in commit messages.
4. Open a pull request describing the change and its impact on the experience.

If you plan to add major new features (external sensors, advanced audio routing), open an issue first to discuss design and compatibility.

#### License

This project is licensed under the terms in the `LICENSE` file in this repository. Replace or update the license as needed for client projects.

## Credits & acknowledgements

- Built by the HeartPress team.
- Thanks to web audio and browser vendors for the modern APIs that power immersive experiences.

## Contact

For custom commissions, commercial licensing, or installation support, please contact:

- Name: (Your Name / Studio)
- Email: yourname@example.com
- Website: https://your-website.example.com

--

Minimal, elegant, and ready to be presented to clients and curators. Replace placeholder images and contact details with project-specific assets before publishing.
