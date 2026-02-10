# DevResume Assets

This directory contains static assets for the DevResume application.

## Folders

### `/fonts`

Custom web fonts can be placed here if needed. The application currently uses system fonts for maximum compatibility and performance.

To add custom fonts:

1. Add font files (.woff2, .woff, .ttf) to this directory
2. Update `css/base.css` with @font-face declarations
3. Update CSS variables to use the custom fonts

### `/icons`

Custom icons and images can be placed here.

Currently, the application uses Unicode emoji characters for icons (no external dependencies), but you can add:

- Favicon files (favicon.ico, favicon.png)
- Social media preview images
- Custom icon sets

## Note

The assets directory is optional. DevResume works perfectly without any custom assets, maintaining its zero-dependency philosophy.
