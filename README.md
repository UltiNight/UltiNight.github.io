# Ultinight Portfolio

Plain HTML/CSS/JS portfolio for GitHub Pages. No build step. Korean and English.

## Structure

```
index.html          page shell
css/style.css       styles (screen, motion, print/PDF)
js/content.js       all copy (KO/EN), projects and work screenshots  <- edit here
js/main.js          rendering, language toggle, lightbox, scroll effects
js/hero-gl.js       WebGL shader hero background (CSS gradient fallback)
js/lab.js           in-browser converters (base, IEEE754, text/hex/base64)
assets/skins/       Krita work screenshot
assets/poses/       Blender work screenshot
assets/projects/    project screenshots
assets/icons/       technology icons (Simple Icons, CC0), colored
assets/logo.webp    header logo
resume-ko.pdf, resume-en.pdf   downloadable résumés (generated)
tools/make_previews.py   regenerates the Hyperphantasia screenshots
tools/make_resume.py     regenerates the résumé PDFs from the site
tools/unity/             Unity editor scripts used to build TechmoUP for WebGL
play/techmoup/           TechmoUP WebGL build (about 60 MB) and its player page
```

## Edit content

- **Add or change a project:** edit `PROJECTS` in `js/content.js` (`group` is `ta`, `re`, `auto` or `school`). Set `repo` to a public GitHub URL to show a link; while it is `null` the card shows "Private repository".
- **Change a work screenshot:** replace `assets/skins/krita-full.webp` or `assets/poses/blender-full.webp`. Crop out anything private (paths, project names) first.
- **Change the résumé:** it is the site's own content in print layout. Edit `js/content.js`, then run `python tools/make_resume.py`.
- **Add a screenshot to a project:** save a WebP in `assets/projects/` and set `image`.

```bash
python tools/make_previews.py
```

Original skin textures are never copied into this folder; only workspace screenshots are published.

`?lang=ko` or `?lang=en` in the URL forces a language.

## Preview locally

```bash
python -m http.server 8090
```

Open http://localhost:8090.

## Deploy

Create a public repository named `<username>.github.io`, push this folder to `main`, then enable Pages under Settings → Pages (Deploy from a branch → `main` / root).

## TechmoUP in the browser

`play/techmoup/` holds a Unity WebGL build. To rebuild it, copy `tools/unity/PortfolioWebGLBuild.cs` into the
project's `Assets/Editor/` and `tools/unity/WebGLQuitHider.cs` into `Assets/Scripts/`, then run Unity in batch mode:

```bash
Unity.exe -batchmode -projectPath <TechmoUP> -buildTarget WebGL -executeMethod PortfolioWebGLBuild.Build -logFile build.log
```

Set `WEBGL_OUT` to the output folder, copy `Build/*` into `play/techmoup/Build/` and rename the files to `techmoup.*`.
Every rebuild adds another ~60 MB to the repository history, so rebuild rarely.
