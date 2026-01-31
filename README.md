# Eve Deshon — Portfolio

Lightweight portfolio site with a static HTML version and a Next.js app.

## Run the site locally

**Pick one of these.** Use the URL shown — that’s the one that will work.

### Option 1: Static site (simplest)

From the **eve-portfolio** folder in your terminal:

```bash
python3 -m http.server 5173
```

Then in your browser open: **http://localhost:5173**

- Home: http://localhost:5173/
- Work: http://localhost:5173/work.html
- Experience: http://localhost:5173/experience.html
- Contact: http://localhost:5173/contact.html
- Case studies: e.g. http://localhost:5173/case-studies/monk.html

### Option 2: Static site with Node

From the **eve-portfolio** folder:

```bash
npm run serve
```

Then open: **http://localhost:3000** (same paths as above, but use port 3000 and add `.html` for work/experience/contact).

### Option 3: Next.js app

From the **eve-portfolio** folder:

```bash
cd my-app && npm run dev
```

Then open: **http://localhost:3000** (or http://127.0.0.1:3000)

- Home: http://localhost:3000/
- Work: http://localhost:3000/work
- Experience: http://localhost:3000/experience
- Contact: http://localhost:3000/contact
- Case studies: e.g. http://localhost:3000/case-studies/monk.html

---

**If “none of the URLs work”:** Make sure you’ve started one of the commands above in a terminal first, then use the exact URL for that option (including the port: 5173 for Python, 3000 for npm/Next).

**If you don't see layout or style updates (e.g. work page cover grid):** Run the static server from the **eve-portfolio** folder (repo root), not a subfolder. Then hard-refresh (Cmd+Shift+R / Ctrl+Shift+R) or open in a private window so the browser loads the latest CSS.

## Publish on GitHub

1. **Create a new repository on GitHub**
   - On [github.com](https://github.com), click **Create repository** (green button) or **New**.
   - Choose a name (e.g. `eve-portfolio`).
   - Leave **Add a README**, **.gitignore**, and **license** unchecked (you already have code).
   - Click **Create repository**.

2. **Connect and push from your machine**

   In a terminal, from the **eve-portfolio** folder:

   ```bash
   # Add GitHub as the remote (replace with the exact URL from GitHub → Code → HTTPS)
   # If your repo is named "eve-portfolio." (with a dot), use:
   #   git remote add origin https://github.com/deshoneve-ui/eve-portfolio..git
   # Otherwise:
   git remote add origin https://github.com/deshoneve-ui/YOUR_REPO_NAME.git

   # Stage everything
   git add .

   # Commit
   git commit -m "Add portfolio site (Next.js + static HTML)"

   # Push to GitHub (main branch)
   git push -u origin main
   ```

   If GitHub asks you to sign in, use your username and a **Personal Access Token** as the password (not your normal GitHub password). Create one at: GitHub → Settings → Developer settings → Personal access tokens.

3. **Put the site live**
   - **Vercel (recommended for Next.js):** Go to [vercel.com](https://vercel.com), sign in with GitHub, then “Import” your repo. Vercel will detect the Next.js app; set the **Root Directory** to `my-app` so it builds the app correctly.
   - **GitHub Pages (static only):** In the repo, go to Settings → Pages → Source: Deploy from a branch, then choose the branch and `/ (root)` or a `docs` folder if you build the static site there.

## Edit content

- **Static site:** `index.html`, `work.html`, `experience.html`, `contact.html`, `case-studies/*.html`, `styles.css`
- **Next.js app:** `my-app/app/` for pages, `my-app/public/` for static assets and case study HTML
