# Folio static landing page

Open index.html to preview. No build, npm, framework, remote fonts, analytics, cookies, or server needed. Upload this folder's contents to any static host. Keep index.html at its root.

## Enable the actual download
Edit config.js:

    window.FOLIO_CONFIG = {
      downloadUrl: "https://YOUR-ACTUAL-INSTALLER-URL",
      version: "0.1.1"
    };

Alternatively create a downloads folder, place your real Windows installer there, and set downloadUrl to "downloads/Folio-setup.exe" (use its exact filename). Do not use a source-code ZIP. The installer is not included in this website package. Until configured, the page says it is not yet available; it does not pretend to download a file.

Use a durable installer URL rather than an expiring private Actions artifact URL. A public download must be accessible to visitors without your GitHub login. Check the link in a signed-out/private window after deployment. No site was deployed by this delivery.

## Customize
- Product name/content: index.html. The site uses "Folio" as requested; the app's existing build name remains Folio Code.
- Version and installer: config.js.
- Palette, fonts, spacing, responsive layout: style.css.
- Icon: icon.svg.
- Download availability: script.js.

The product illustration is a static illustrative composition, not a screenshot or interactive app demo. It uses HTML/CSS and is readable without image downloads. Copy reflects the existing desktop product without inventing testimonials, usage statistics, pricing, or synchronization.

Unsigned-installer and WebView2 information appears under Before you install. Update this copy if you later sign the installer or change runtime packaging.

## Validation
Check at mobile and desktop widths, keyboard navigation, in-page links, the empty download state, and a configured real installer URL. No live installer URL was supplied, so an actual download cannot be verified yet.
# Folio-Lnading-page
