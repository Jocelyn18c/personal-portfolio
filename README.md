# Jocelyn Heredia — Portfolio

A plain HTML/CSS/JS portfolio. No build step. Open any `.html` file in a browser, or use VS Code's Live Server.

## Editing in VS Code

1. Open this folder in VS Code (`File → Open Folder…`, or `code .` in a terminal here).
2. Install the recommended **Live Server** extension when VS Code prompts you.
3. Right-click `index.html` → **Open with Live Server**. The page reloads every time you save.

## Where things are

| File | What it is |
| --- | --- |
| `index.html` | About Me (home page) |
| `projects.html` | Projects: copy an `<article class="project">` block to add one |
| `resume.html` | Resume |
| `contact.html` | Contact form and links |
| `css/styles.css` | All styling. The coffee/summer palette is at the top in `:root` |
| `js/main.js` | Mobile menu, scroll animations, rotating titles, floating polaroids, drifting background, contact form |
| `images/vibe/` | Polaroid photos, the cartoon avatar and its floating icons |

## Things to personalize

- **Email:** `CONTACT_EMAIL` in `js/main.js` and the email card in `contact.html`
- **LinkedIn / GitHub:** links in `contact.html`
- **Projects:** the four projects in `projects.html` are samples
- **Experience:** the entries in `resume.html` are placeholders
- **Resume PDF:** replace `files/resume.pdf` with your latest resume
- **Photo:** replace `images/profile.jpg`

## Motion and vibe

- **Rotating titles** under your name: edit the `ROLES` list in `js/main.js`
- **Polaroids** on the home page: change the photos and captions in `index.html`
- **Drifting beans, stars, gears and suns:** turned on by `data-drift` on `<body>`. Add it to any other page's `<body>` to turn it on there. Colors and shapes are in `DRIFT_MIX` in `js/main.js`
- Visitors whose system is set to "reduce motion" automatically see a still version
