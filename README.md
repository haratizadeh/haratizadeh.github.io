# Professor homepage

Upload the **contents of this folder** to the root of the professor's GitHub repository. GitHub Pages serves `index.html` as the homepage. The site is static HTML, CSS, and JavaScript; there is no build step.

## Edit the information

Open `content.js` in VS Code. Edit the values after each colon while keeping JavaScript quotes, commas, and brackets intact.

- `professor.name`, `initials`, `role`, `headline`, `biography`, `labStatement`, `studentInvitation`, `email`, `office`, and `meetingNote`: faculty profile and contact information. `headline` supplies the page description; the biography and invitation appear in About me. Keep `{lab}` in `labStatement` to link the lab name to its site. Check the graduation year and office number before publication.
- `professor.links`: University profile, Google Scholar, and LinkedIn are already linked. Add CV or GitHub URLs when available; blank URLs do not appear.
- `professor.photo`: near the top of `content.js`, immediately below the `PHOTO` comment. To use your own picture: create `assets` beside `index.html`, put `professor.jpg` inside it, and replace the current URL with `"assets/professor.jpg"`. Commit the new image along with `content.js`. Initials appear if the image cannot load.
- `research`: the professor's academic interests.
- `courses`: three editable course records (Machine Learning, Reinforcement Learning, and Big Data Analysis). Each links to `course.html?slug=...`. Add the actual term, credit value, assessment, and materials for each course when confirmed. `resources` accepts syllabus PDFs, lecture slides, assignments, readings, or an LMS link. Data Mining has been removed.
- `personalPage.homepageIntro`: the introduction to the final “Off the syllabus” section. `personalPage.title` and `introduction` appear on its separate page. `personalPage.items` can contain a book, film, report, website, or anything else using `kind`, `title`, `detail`, and optionally `url`. Leave `url` blank to show an item without a link. The current entries are three websites. Set `settings.sections.professor.personal` to `false` to hide the section.
- `lab.labUrl`: set to `https://ut-kdd.github.io/` in the current version. The professor page uses it in the top navigation and on the lab name in About.

For example, add materials to a course's `resources` array:

```js
resources: [
  { label: "Syllabus (PDF)", url: "materials/machine-learning-syllabus.pdf" },
  { label: "Week 1 slides", url: "materials/machine-learning-week-01.pdf" }
]
```

Place those files in a `materials` folder beside `index.html`. Use a complete `https://...` URL for external course resources. The professor's Google Scholar link is active; the publications section stays hidden until publication records are added. Group information and publications can also be found through the lab link.

For example, add a book to `personalPage.items`:

```js
{ kind: "Book", title: "Book title", detail: "Why I return to it.", url: "" }
```

## Publish on GitHub Pages

1. Create a repository named `PROFESSOR-USERNAME.github.io` in the professor's GitHub account, replacing `PROFESSOR-USERNAME` with the exact GitHub username. A normal repository name also works and gives a `/repository-name/` path.
2. Upload all files from this folder **at the repository root** and commit them. Keep `index.html`, `course.html`, `personal.html`, `content.js`, the JavaScript files, and the stylesheets together. The “Off the syllabus” link needs `personal.html`, `personal.js`, `personal.css`, `content.js`, and `content-utils.js` in the same directory.
3. In **Settings → Pages**, select **Deploy from a branch**, then `main` and `/ (root)`.
4. Check the lab link, email, Scholar link, and LinkedIn link on the published page.

Preview locally by running `python3 -m http.server 8001` from this folder and opening `http://localhost:8001/`. Stop the server with Ctrl+C.

Before publishing, confirm the degree year and office number, check that the University of Tehran portrait loads, and review each course's topics and resources. The Fingap link uses `https://fingap.ir/#/home`, as supplied.
