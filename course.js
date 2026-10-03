(() => {
  'use strict';
  const {content,section}=window.LabSite;
  const root=document.getElementById('coursePage');if(!root)return;
  const escape=value=>String(value??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
  const defaults={overview:'Overview',outcomes:'Learning outcomes',topics:'Topics and provisional sequence',assessment:'Assessment',resources:'Course resources',contents:'Contents',instructor:'Instructor',level:'Level',credits:'Credits',format:'Format',contact:'Contact',notice:'Course notice',officeHours:'Office hours',allCourses:'All courses',teaching:'Professor / Teaching',previous:'Previous course',next:'Next course',outcomesIntro:'By the end of the course, students should be able to:',component:'Component',weight:'Weight / status',notFound:'Course not found',notFoundMessage:'This course is unavailable or has been removed.'};
  const label=key=>escape(content.ui.course?.[key]??defaults[key]??key);
  const anchor=(url,title)=>`<a${url?' href="'+escape(url)+'"':''}>${escape(title)}</a>`;
  const slug=new URLSearchParams(location.search).get('slug')||document.body.dataset.courseSlug;
  const index=content.courses.findIndex(course=>course.slug===slug),course=content.courses[index];
  if(!course){root.innerHTML=`<main class="course-shell" id="mainCourse"><h1>${label('notFound')}</h1><p>${label('notFoundMessage')}</p><p><a href="index.html#teaching">${label('allCourses')}</a></p></main>`;return;}
  document.title=[course.title,content.lab.university].filter(Boolean).join(' · ');
  const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=course.description;
  const bodies={
    overview:course.overview?`<p>${escape(course.overview)}</p>`:'',
    outcomes:course.outcomes.length?`<p>${label('outcomesIntro')}</p><ol class="outcome-list">${course.outcomes.map(item=>`<li>${escape(item)}</li>`).join('')}</ol>`:'',
    topics:course.topics.length?`<ol class="topic-list">${course.topics.map((item,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${escape(item)}</p></li>`).join('')}</ol>`:'',
    assessment:course.assessment.length?`${course.assessmentNote?`<p class="section-intro">${escape(course.assessmentNote)}</p>`:''}<table class="assessment-table"><thead><tr><th scope="col">${label('component')}</th><th scope="col">${label('weight')}</th></tr></thead><tbody>${course.assessment.map(item=>`<tr><th scope="row">${escape(item.item)}</th><td>${escape(item.weight)}</td></tr>`).join('')}</tbody></table>`:'',
    resources:course.resources.length?`<ul class="resource-list">${course.resources.map(item=>`<li>${anchor(item.url,item.label)}</li>`).join('')}</ul>`:''
  };
  const sections=Object.keys(bodies).filter(key=>bodies[key]&&course.sections[key]!==false);
  const prof=content.professor;
  const metadata=[['instructor',prof.name?anchor('index.html',prof.name):''],['level',escape(course.level)],['credits',escape(course.credits)],['format',escape(course.format)]].filter(([,value])=>value);
  const contact=[prof.email?`<p>${anchor('mailto:'+prof.email,prof.email)}</p>`:'',prof.office?`<p>${escape(prof.office)}</p>`:'',prof.officeHours?`<p>${label('officeHours')}: ${escape(prof.officeHours)}</p>`:''].join('');
  const prev=content.courses[index-1],next=content.courses[index+1];
  root.innerHTML=`
    <nav class="utility-nav"><a id="courseLabLink" href="#">${escape(content.lab.fullName||'Laboratory')}</a><a href="index.html#teaching">${label('teaching')}</a></nav>
    <main class="course-shell" id="mainCourse">
      <header class="course-header"><div class="course-heading">
        ${course.code||course.term?`<p class="course-label">${[course.code,course.term].filter(Boolean).map(escape).join(' <span>·</span> ')}</p>`:''}
        <h1>${escape(course.title)}</h1>${course.description?`<p class="course-description">${escape(course.description)}</p>`:''}
      </div>${metadata.length?`<dl class="course-meta">${metadata.map(([key,value])=>`<div><dt>${label(key)}</dt><dd>${value}</dd></div>`).join('')}</dl>`:''}</header>
      ${sections.length?`<nav class="section-nav" aria-label="Course sections"><span>${label('contents')}</span>${sections.map(key=>`<a href="#${key}">${label(key)}</a>`).join('')}</nav>`:''}
      <div class="course-layout${contact||course.notice?'':' no-aside'}"><article class="course-content">${sections.map((key,i)=>`<section id="${key}"><h2><span>${i+1}.</span> ${label(key)}</h2>${bodies[key]}</section>`).join('')}</article>
        ${contact||course.notice?`<aside class="course-aside">${contact?`<section><h2>${label('contact')}</h2>${contact}</section>`:''}${course.notice?`<section><h2>${label('notice')}</h2><p>${escape(course.notice)}</p></section>`:''}</aside>`:''}
      </div>
      ${prev||next?`<nav class="adjacent-courses" aria-label="Other courses">${prev?`<a href="${escape(prev.url)}"><span>${label('previous')}</span>${escape(prev.title)}</a>`:'<span></span>'}${next?`<a class="next-course" href="${escape(next.url)}"><span>${label('next')}</span>${escape(next.title)}</a>`:''}</nav>`:''}
      <footer class="course-footer"><p>${[content.lab.department,content.lab.location,content.lab.university].filter(Boolean).map(escape).join(' · ')}</p><a href="index.html#teaching">${label('allCourses')}</a></footer>
    </main>`;
  window.LabSite.configureLink(document.getElementById('courseLabLink'),content.lab.labUrl);
  window.LabSite.finish('course');
})();
