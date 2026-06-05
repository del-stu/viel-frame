# VIEL FRAME

[GitHub Pages Demo](https://del-stu.github.io/viel-frame)

**Viel Frame** (pronounced "vee-oh" ) is a **drop-in CSS style set** for plain HTML. No classes, no setup — just add one line and instantly make it look modern and cool (and AI-ish……?)

> !NOTE
> Viel Frame's README, website, and some part of the script are AI-assisted.
> GenAI is used for prototyping, optimization, etc.
> Be careful when contributing.

***

## Quick Start

Add this to your `<head>`:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/viel-frame@1.1.0/dist/index.js"></script>
```

Or use the latest version (use if you know what you're doing):

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/viel-frame/dist/index.js"></script>
```

That's it. Write plain HTML and Viel Frame handles the rest.

> !WARNING
> If you're new to web development, and you don't know this: **DO NOT just click open the HTML file**, as that won't load JavaScript modules.

You need to open a local server, for example, using `python -m http.server 8000` command and then open `http://localhost:8000` in your browser.

And if you're editing the script or CSS, don't use things like Vite's server, they have aggressive caching mechanism that will prevent you from seeing the changes.

> ***

### NPM Install

For local development or bundler-based projects:

```bash
npm install viel-frame
```

Then import in your JavaScript:

```javascript
import 'viel-frame';
```

Or reference the files directly:

```html
<script type="module" src="./node_modules/viel-frame/dist/index.js"></script>
```

> ***

## What You Get

- **Dark, high-contrast UI** — deep blacks, purple accents, sharp edges
- **Zero classes required** — styles apply directly to standard HTML tags
- **Built-in code highlighting** — with Prism.js, automatically highlights `<pre><code>` blocks
- **Responsive & readable** — optimized typography, spacing, and mobile layout
- **Smooth interactions** — focus rings, hover glows, and subtle transitions

### Styled Elements

| Category   | Tags                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| Typography | `h1`–`h6`, `p`, `a`, `strong`, `em`, `small`, `blockquote`             |
| Lists      | `ul`, `ol`, `li`                                                       |
| Tables     | `table`, `thead`, `tbody`, `tr`, `th`, `td`                            |
| Forms      | `input`, `textarea`, `select`, `button`, `label`, `fieldset`, `legend` |
| Code       | `code`, `pre` (with Prism.js support)                                  |
| Media      | `img`, `hr`                                                            |

### Layout Tips

Viel Frame automatically wraps your content in a centered card when you use `<main>` or `<article>` as the direct child of `<body>`:

```html
<body>
  <main>
    <!-- Your content here -->
  </main>
</body>
```

The container has a max-width of **860px**, responsive padding, and a subtle border/shadow combo. If you prefer full-width layouts, use a `<div>` or other tags instead.

### Code Highlighting

Prism.js is loaded automatically. To enable syntax highlighting, add a `language-*` class to your `<code>` block:

```html
<pre><code class="language-javascript">
function hello() {
  console.log("Hello, Viel!");
}
</code></pre>
```

Supported languages are auto-detected and loaded on demand via Prism's autoloader plugin.

### Status Colors Variables

Viel Frame also provides semantic status colors for building custom UI elements:

| Variable    | Color  | Usage                             |
| ----------- | ------ | --------------------------------- |
| `--danger`  | Red    | Error states, destructive actions |
| `--success` | Green  | Success states, confirmations     |
| `--warning` | Yellow | Warnings, alerts                  |

These status colors remain consistent across both dark and light themes.

***

## JavaScript API

When loaded, `window.Viel` exposes a small API:

### `Viel.injectJS(src, callback?)`

Dynamically injects a script into the page. If the script is already present, the callback fires immediately.

```javascript
Viel.injectJS('https://example.com/script.js', () => {
  console.log('Script loaded');
});
```

### `Viel.highlightAll()`

Manually triggers Prism syntax highlighting. Useful if you add code blocks dynamically after page load.

```javascript
Viel.highlightAll();
```

### `Viel.theme(mode?)`

Gets or sets the color theme.

```javascript
// Get current theme
console.log(Viel.theme()); // "dark" or "light"

// Set theme explicitly
Viel.theme('dark');
Viel.theme('light');

// Toggle between dark and light
Viel.theme('toggle');

// Follow system preference (default)
Viel.theme('auto');
```

By default, Viel Frame respects the user's system color scheme preference. You can override it at any time with the API above.

***

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <script type="module" src="https://cdn.jsdelivr.net/npm/viel-frame/dist/index.js"></script>
</head>
<body><main>
  <h1>Hello Viel</h1>
  <p>This paragraph, heading, and container are styled automatically.</p>
  <button>Click me</button>
</main></body></html>
```

### Theme Toggle Button

Add a button to let users switch between dark and light modes:

```html
<button onclick="Viel.theme('toggle')">Toggle Theme</button>
```

***

## Distribution Files

| File                    | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `dist/index.js`         | Full build with Prism.js, theme detection, API |
| `dist/index_notheme.js` | Same as above but without theme logic          |
| `dist/style.css`        | Standalone stylesheet                          |

## Browser Support

Viel Frame uses modern CSS features such as `:has()`, `appearance: none`, and CSS custom properties. It works best in:

- Chrome / Edge 105+
- Firefox 121+
- Safari 15.4+

## Shoutout to

- [ExuoVer](https://github.com/MonoIAR/exuover) by MIAR — Versioning standard
- [Prism.js](https://prismjs.com/) — syntax highlighting library

## License

MIT License — see [LICENSE](LICENSE) for details.
