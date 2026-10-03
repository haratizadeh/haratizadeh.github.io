(() => {
  "use strict";

  const content = window.LabSite.content;
  if (!content) return;

  const { lab, professor, personalPage, research, courses, students, links } = content;
  // Publications may be removed or commented out in content.js.
  const publications = Array.isArray(content.publications) ? content.publications : [];
  const { byId, setText } = window.LabSite;
  const isExternal = (url) => /^https?:\/\//i.test(url || "");
  const configureLink = window.LabSite.configureLink;

  document.title = [professor.name, lab.university].filter(Boolean).join(" · ") || "Professor profile";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = professor.headline || professor.bio;

  setText("labName", lab.fullName);
  window.LabSite.configureLink(byId("labHomeLink"), lab.labUrl);
  setText("documentAffiliation", [lab.department, lab.location, lab.university].filter(Boolean).join(" · "));
  const labStatement = byId("labStatement");
  const [beforeLab, afterLab] = professor.labStatement.split("{lab}");
  if (afterLab !== undefined) {
    const labAnchor = document.createElement("a");
    labAnchor.textContent = lab.fullName;
    configureLink(labAnchor, lab.labUrl);
    labStatement.append(document.createTextNode(beforeLab), labAnchor, document.createTextNode(afterLab));
  } else {
    labStatement.textContent = professor.labStatement;
  }
  labStatement.hidden = !professor.labStatement;
  setText("studentInvitation", professor.studentInvitation);
  setText("professorName", professor.name);
  setText("professorRole", professor.role);
  setText("resourcesIntro", personalPage.homepageIntro);
  setText("professorInitials", professor.initials);
  const photo = byId("professorPhoto");
  const photoInitials = byId("photoInitials");
  photoInitials.textContent = professor.initials || "";
  photo.alt = `Portrait of ${professor.name}`;
  photo.addEventListener("error", () => {
    photo.hidden = true;
    photoInitials.hidden = false;
  });
  if (professor.photo) {
    photo.src = professor.photo;
    photoInitials.hidden = true;
  } else {
    photo.hidden = true;
    photoInitials.hidden = false;
  }
  setText("professorOffice", professor.office);
  setText("professorOfficeHours", professor.officeHours ? `Office hours: ${professor.officeHours}` : "");
  setText("meetingNote", professor.meetingNote);
  setText("footerName", professor.name);
  setText("currentYear", new Date().getFullYear());

  const email = byId("professorEmail");
  email.textContent = professor.email;
  email.href = professor.email ? `mailto:${professor.email}` : "";
  email.hidden = !professor.email;

  const biography = byId("biographyText");
  const biographyParagraphs = professor.biography?.length ? professor.biography : [professor.bio];
  biographyParagraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    biography.append(p);
  });

  const professorLinks = byId("professorLinks");
  professor.links
    .filter((item) => item.url)
    .forEach((item) => {
      const anchor = document.createElement("a");
      anchor.textContent = item.label + (isExternal(item.url) ? " ↗" : "");
      configureLink(anchor, item.url);
      professorLinks.append(anchor);
    });

  const interestList = byId("interestList");
  research.forEach((item) => {
    const article = document.createElement("article");
    article.className = "interest-item";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;
    article.append(title, description);
    interestList.append(article);
  });

  const publicationList = byId("publicationList");
  publications.forEach((item) => {
    const article = document.createElement("article");
    article.className = "publication-item";
    const year = document.createElement("div");
    year.className = "publication-year";
    year.textContent = item.year;

    const body = document.createElement("div");
    const heading = document.createElement("h3");
    const anchor = document.createElement("a");
    anchor.textContent = item.title;
    configureLink(anchor, item.url);
    heading.append(anchor);
    const authors = document.createElement("p");
    authors.textContent = item.authors;
    const venue = document.createElement("p");
    venue.className = "publication-venue";
    venue.textContent = item.venue;
    const resources = document.createElement("div");
    resources.className = "publication-resources";
    item.resources.forEach((resource) => {
      const resourceLink = document.createElement("a");
      resourceLink.textContent = resource.label;
      configureLink(resourceLink, resource.url);
      resources.append(resourceLink);
    });
    body.append(heading, authors, venue, resources);
    article.append(year, body);
    publicationList.append(article);
  });

  const fullPublicationsLink = byId("fullPublicationsLink");
  configureLink(fullPublicationsLink, links.fullPublications);

  const courseList = byId("courseList");
  courses.forEach((course) => {
    const article = document.createElement("article");
    article.className = "course-item";
    const title = document.createElement("h3");
    const titleLink = document.createElement("a");
    titleLink.textContent = course.title;
    configureLink(titleLink, course.url);
    title.append(titleLink);
    const details = document.createElement("div");
    details.className = "course-summary";
    const description = document.createElement("p");
    description.textContent = course.description;
    const term = document.createElement("span");
    term.className = "course-term";
    term.textContent = course.term;
    term.hidden = !course.term;
    details.append(description, term);
    article.append(title, details);
    courseList.append(article);
  });

  const studentList = byId("studentList");
  students.forEach((student) => {
    const article = document.createElement("article");
    article.className = "student-item";
    const identity = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = student.name;
    const degree = document.createElement("span");
    degree.textContent = student.degree;
    identity.append(name, degree);
    const topic = document.createElement("p");
    topic.textContent = student.topic;
    article.append(identity, topic);
    studentList.append(article);
  });
  window.LabSite.finish("professor");
})();
