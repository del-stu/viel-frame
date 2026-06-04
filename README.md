# VIEL FRAME

[GitHub Pages Demo](https://del-stu.github.io/viel-frame)

**Viel Frame** ("Viel" is a German word meaning "a lot," pronounced "vee-oh" ) is a **classless, drop-in CSS style set** for plain HTML. No classes, no setup — just add one line and your markup instantly looks modern.

***

## Quick Start

Add this single script to your `<head>`:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/viel-frame@1.0.0/dist/index.js"></script>
```

Or use the latest version (not recommended for production):

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/viel-frame/dist/index.js"></script>
```

That's it. Write plain HTML and Viel Frame handles the rest.

***

## What You Get

- **Dark, high-contrast UI** — deep blacks, purple accents, sharp edges
- **Zero classes required** — styles apply directly to standard HTML tags
- **Built-in code highlighting** — Prism.js with autoloader, automatically enabled for `<pre><code>` blocks
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

***

## JavaScript API

When loaded, `window.Viel` exposes a small API:

```javascript
// Manually inject a script
Viel.injectJS('https://example.com/script.js', () => {
  console.log('loaded');
});

// Re-run syntax highlighting after dynamic content changes
Viel.highlightAll();
```

***

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <script type="module" src="https://cdn.jsdelivr.net/npm/viel-frame@1.0.0/dist/index.js"></script>
</head>
<body>
  <main>
    <h1>Hello Viel</h1>
    <p>This paragraph, heading, and container are styled automatically.</p>
    <button>Click me</button>
  </main>
</body>
</html>
```

***

## Tech Stack

- [ExuoVer](https://github.com/MonoIAR/exuover) by MIAR — Versioning standard
- [Prism.js](https://prismjs.com/) — syntax highlighting

## License

MIT License — see [LICENSE](LICENSE) for details.
