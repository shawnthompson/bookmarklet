# Bookmarklets Site

This project hosts a collection of **bookmarklets** JavaScript tools that can be dragged directly into your browser's bookmarks bar and executed on demand. The website is multilangual, with content available in different languages, and is built using [Eleventy (11ty)](https://www.11ty.dev/) as a static site generator.

## Project Structure

The project is organized to support multilingual content and easily maintainable bookmarklets:

``` bash
root/
├─ content/
│  ├─ bookmarklets/
│  │  ├─ bookmarklet1/
│  │  │  ├─ en.md         # English description and content
│  │  │  ├─ fr.md         # French description and content
│  │  │  ├─ i18n.json     # Translations for text in script.js
│  │  │  ├─ script.js     # JavaScript for the bookmarklet
│  │  ├─ ... more bookmarklets ...
│  ├─ pages/
│  │  ├─ home/
│  │  │  ├─ en.md         # Home page in English
│  │  │  ├─ fr.md         # Home page in French
│  │  ├─ about/
│  │  │  ├─ en.md         # About page in English
│  │  │  ├─ fr.md         # About page in French
├─ .eleventy.js            # Eleventy configuration
├─ package.json            # Node.js dependencies
└─ ... other config files ...
```

## Features

- **Multilingual Support**: Pages and bookmarklets can be available in different languages.
- **Dynamic Bookmarklet Scripts**: Bookmarklets are written in plain JavaScript (`script.js`) and localized using `i18n.json` for text translations.
- **Easy-to-Navigate Structure**: The project is structured for both developers (via GitHub) and users (via the generated site).
- **Static Site Generator**: Built with Eleventy, which compiles markdown files into clean, optimized HTML.

## Development

### Prerequisites

- Node.js (version 16 or higher recommended)
- Git

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/accessibility/bookmarklets.git
   cd bookmarklets
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```

   This will serve the site locally at `http://localhost:8080`.

4. Build the site for production:

   ```bash
   npm run build
   ```

   The compiled site will be output to the `_site` directory.

## Contributing

Contributions are welcome! If you'd like to add new bookmarklets or improve existing ones, please follow these steps:

1. Fork the repository and create a new branch.
2. Add your bookmarklet in a new directory under `content/bookmarklets/`.
3. Submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This project is part of the Accessibility initiative. Special thanks to contributors and community members who help make browsing the web easier and more inclusive.
