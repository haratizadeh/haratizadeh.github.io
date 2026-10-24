(() => {
  "use strict";

  const content = window.LabSite.content;
  if (!content) return;

  const { lab, professor, personalPage } = content;
  const { byId, setText, configureLink } = window.LabSite;

  document.title = [personalPage.title, professor.name].filter(Boolean).join(" · ") || "Personal page";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = personalPage.introduction;

  setText("professorNameNav", professor.name);
  setText("labNameNav", lab.fullName);
  window.LabSite.configureLink(byId("labNameNav"), lab.labUrl);
  setText("personalTitle", personalPage.title);
  setText("personalIntroduction", personalPage.introduction);

  const items = byId("personalItems");
  personalPage.items.forEach((item) => {
    const row = document.createElement("li");
    if (item.kind) {
      const kind = document.createElement("span");
      kind.className = "item-kind";
      kind.textContent = item.kind;
      row.append(kind);
    }
    const title = document.createElement(item.url ? "a" : "strong");
    title.textContent = item.title;
    if (item.url) configureLink(title, item.url);
    const detail = document.createElement("p");
    detail.textContent = item.detail;
    row.append(title, detail);
    items.append(row);
  });
  window.LabSite.finish("personal");
})();
