# HeartPress - Interactive Love Experience (1000+ Romantic Messages Vanilla JS Offline-capable)

<!-- Languages & Web Standards -->

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ECMAScript Spec](https://img.shields.io/badge/ECMAScript-262-7A0BC0?logo=ecmascript\&logoColor=white)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

## Your Ultimate Romance Expression Platform

> 1000+ Romantic Messages - Interactive Experience - Multi-Platform Support

A sophisticated, interactive web platform featuring an extensive collection of 1000+ romantic messages and an immersive love experience. HeartPress combines visual aesthetics, responsive interactions, and a curated library of romantic content, making it the perfect solution for digital love expression, relationship enhancement, and emotional connection.

## Highlights:

- **Massive Collection:** 1000+ carefully curated romantic SMS messages
- **Smart Categories:** Messages organized by occasion, emotion, and relationship stage
- **Modern Tech Stack:** Clean, dependency-free front-end (vanilla HTML/CSS/JS)
- **Universal Access:** Works offline after initial load
- **Multi-Platform:** Perfect for web, mobile, and installation displays
- **Customizable:** Easy to brand and modify for specific needs

## Key Features:

1. **Extensive Message Library:**

- 1000+ pre-written romantic messages
- Multiple categories and themes
- Regular content updates
- Multi-language support (customize per region)

2. **Interactive Experience:**

- Responsive heart animations
- Dynamic message display
- Touch and click interactions
- Audio feedback and ambient sounds

3. **User Experience:**

- Intuitive navigation
- Quick message copying
- Favorite message marking
- Share functionality

4. **Technical Excellence:**

- Fast loading times
- Offline capability
- Mobile-first design
- Cross-browser compatibility

## Message Categories

**Our extensive collection of 1000+ messages is organized into intuitive categories:**

1. **Relationship Stages**
   - First Love and Crush (100+ messages)
   - Dating and Romance (200+ messages)
   - Long-term Relationship (150+ messages)
   - Marriage and Anniversary (100+ messages)
   - Long Distance Love (100+ messages)

2. **Daily Romance**
   - Good Morning Love (100+ messages)
   - Good Night Dreams (100+ messages)
   - Missing You Moments (50+ messages)
   - Sweet Nothings (50+ messages)
   - Romantic Quotes (50+ messages)

3. **Special Occasions**
   - Birthday Wishes (50+ messages)
   - Anniversary Celebrations (50+ messages)
   - Valentine's Day Special (50+ messages)
   - Festival and Holiday Love (50+ messages)
   - Proposal Messages (25+ messages)

4. **Emotional Expression**
   - Deep Love Confessions (50+ messages)
   - Appreciation and Gratitude (25+ messages)
   - Sorry and Reconciliation (25+ messages)
   - Encouragement and Support (25+ messages)
   - Future Together (25+ messages)

## Live Demo

1. **git repo clone:**

```bash
git clone https://github.com/md-abu-kayser/heartpress.git

```

2. **github live page:**

```bash
https://md-abu-kayser.github.io/heartpress/

```

### Interactive Features

- Message browsing with smooth animations
- Category-based navigation
- Copy-to-clipboard functionality
- Share to social media
- Favorites system
- Night mode support

### Why Clients Love HeartPress

1. **Massive Content Library**
   - 1000+ professionally written messages
   - Regular content updates
   - Multi-language support
   - Category-based organization

2. **Technical Excellence**
   - Clean, modern codebase
   - Fast loading (< 2s initial load)
   - Offline support
   - Cross-platform compatibility

3. **Business Ready**
   - Easy white-labeling
   - API integration ready
   - Analytics support
   - Custom deployment options

4. **User Experience**
   - Intuitive navigation
   - Mobile-first design
   - Accessibility compliant
   - Smooth animations

## Features

- Responsive heart visualization that reacts to user input.
- Spatialized or layered audio cues for immersive experience.
- Config-driven theming (colors, sizes, and assets) - change a few variables to rebrand.
- Touch and mouse support with graceful fallbacks.
- Simple export/deploy process (static site: host anywhere).

### API Integration

```javascript
// Initialize HeartPress
const heartPress = new HeartPress({
  theme: "modern",
  language: "en",
  categories: ["morning", "special"],
  customMessages: yourMessages,
});

// Handle message selection
heartPress.on("messageSelect", (message) => {
  console.log("Selected:", message);
});
```

## Contract - small

- **Input:** user pointer/touch interactions, optional external sensors (via Web MIDI/WebSocket) if integrated.
- **Output:** animated heart visual, audio playback and dynamic UI cues.
- **Error modes:** missing audio files degrade to silent visuals; feature-detects audio APIs and falls back to basic UI.
- **Success:** experience loads in under 1s on modern devices, and interactions are responsive (<50ms perceived latency).

### Customization guide

1. **Visuals**
   - Modify colors and layout in `css/style.css`.
   - Replace heart SVG or CSS animation to match branding.

2. **Audio**
   - Add or swap audio files in `audio/` and update references inside `js/script.js`.
   - Use shorter stems for looping ambient layers and longer tracks for narrative pieces.

3. **Behavior**
   - Interaction logic lives in `js/script.js`. Small, well-commented functions control responsiveness and state.
   - To integrate external input (sensors), add a bridge that emits normalized events the script can consume.

## Accessibility and UX

- Controls are keyboard-accessible where appropriate and pointer input is supported for touch screens.
- Visual contrast can be tuned in `style.css` for WCAG compliance.
- The app avoids auto playing loud audio; playback is user-initiated or gesture-initiated to respect browser policies.

## Deployment

**This is a static project - deploy anywhere that serves static files. Two recommended options:**

1. **GitHub Pages**
   - In repository settings, enable GitHub Pages from the `main` branch (or `gh-pages` branch).
   - Push and wait a few minutes for the site to become available.

2. **Static hosts** (Netlify, Vercel, Surge)
   - Connect repo or deploy a build by pointing the host to the repository root.

## Development and testing

- Edit files in your preferred editor. The project is intentionally framework-free.
- Use a local server when testing audio and fetch operations (see Quick start).
- Recommended browsers: Chrome, Edge, Safari (latest versions). Mobile: Safari iOS and Chrome Android.

### Automated tests

**This project contains no automated tests by default. For larger deployments, consider adding:**

- Small unit tests for critical state transitions (play/pause logic).
- End-to-end smoke test: load `index.html` and verify the main container renders.

## Edge cases to consider

- No-audio environments: ensure visuals remain meaningful without sound.
- Low-power or older devices: provide a low-motion CSS alternative.
- Browser auto play policies: require a gesture before unmuted playback.
- Large screen or projector mode: scale vector assets to avoid pixelation.

### Contributing

**Contributions are welcome. For quick collaboration:**

1. Fork the repo.
2. Create a branch: `feature/<your-feature>`.
3. Make small, focused commits and include rationale in commit messages.
4. Open a pull request describing the change and its impact on the experience.

If you plan to add major new features (external sensors, advanced audio routing), open an issue first to discuss design and compatibility.

### License

- This project is licensed under the terms of the **[MIT License](./LICENSE)**.
- You may replace or update the license as needed for client or proprietary projects.

---

### Contact and Maintainer

- **_Project:_** _heartpress_
- **_Name:_** Md Abu Kayser - Full-Stack Engineer
- **_Maintainer:_** [md-abu-kayser](https://github.com/md-abu-kayser)
- **_GitHub:_** [github.com/abu.kayser-official](https://github.com/md-abu-kayser)
- **_Email:_** [abu.kayser.official@gmail.com](mailto:abu.kayser.official@gmail.com)

If you’d like this README tailored for a specific purpose - such as **hiring managers**, **open-source contributors**, or **client deliverables** - feel free to request a custom tone or format.

---

**Minimal, elegant, and ready to be presented to clients and curators. Replace placeholder images and contact details with project-specific assets before publishing.**

---

**Thank you for reviewing this project!**

---
