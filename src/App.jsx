import { useEffect, useState } from 'react'

const projects = [
  { number: '01', type: 'Product quality / Catalect', title: 'SHIP\nSMARTER', tag: 'QA systems that keep product moving', color: 'lime', role: 'QA Engineer & Product Manager', context: 'At Catalect, I own quality for web and mobile releases while translating stakeholder needs into clear product decisions.', outcome: 'End-to-end release ownership', tools: 'Requirements · User stories · Regression · Defect triage', problem: 'Product requirements, quality risks and release decisions needed to move together.', approach: 'I connect discovery, acceptance criteria, automated regression, defect triage and go-live readiness.', evidence: 'A dual QA and product role across web and mobile delivery.' },
  { number: '02', type: 'Fintech / Xcelliti', title: 'TRUST\nTHE FLOW', tag: 'Reliable banking across web and mobile', color: 'coral', role: 'SQA Automation Consultant', context: 'I tested fintech platforms for BankIslami, HugoBank and Bank Alfalah across functionality, security, performance and mobile flows.', outcome: 'Coverage across critical banking journeys', tools: 'Cypress · Appium · JMeter · Power BI', problem: 'Banking journeys had to stay reliable across web, mobile, data and performance layers.', approach: 'I combined functional, regression, mobile automation, performance and dashboard validation.', evidence: 'Fintech coverage across BankIslami, HugoBank and Bank Alfalah.' },
  { number: '03', type: 'Mobile automation / QBS', title: 'TEST\nEVERYWHERE', tag: 'Scalable coverage for every release', color: 'blue', role: 'Executive SQA Engineer', context: 'I led QA across multiple products, mentored engineers and built scalable automation for web, mobile and performance testing.', outcome: 'A stronger, more repeatable release rhythm', tools: 'Cypress · Appium · JMeter · Team leadership', problem: 'Multiple web and mobile products needed consistent quality standards and release confidence.', approach: 'I built automation coverage, introduced quality metrics, mentored engineers and led go-live readiness.', evidence: 'A structured QA function across multiple product lines.' },
]

const experience = [
  { dates: 'MAR 2026 — PRESENT', company: 'Catalect', role: 'QA Engineer & Product Manager', detail: 'Joined as QA Engineer and was entrusted with Product Manager responsibilities within three months.', bullets: ['Own end-to-end QA for web and mobile releases, including automated regression suites and go-live readiness.', 'Lead product discovery and requirements gathering, translating business needs into user stories and acceptance criteria.', 'Prioritize the product backlog while balancing feature delivery, quality and technical debt.', 'Connect engineering, QA and business stakeholders around functional and product goals.', 'Drive defect triage and resolution planning using QA insight to inform roadmap priorities.'] },
  { dates: 'AUG 2025 — JAN 2026', company: 'Qbs Co', role: 'Executive SQA Engineer', detail: 'Led the end-to-end QA function across multiple web and mobile projects.', bullets: ['Supervised and mentored junior QA engineers and aligned the team on automation best practices.', 'Built and maintained scalable Cypress, Appium and JMeter frameworks for regression and performance testing.', 'Drove defect triage with development and product teams to improve resolution turnaround.', 'Introduced quality metrics and tracked KPIs across multiple product lines.', 'Led release planning, go-live readiness and internal QA workshops.'] },
  { dates: 'OCT 2024 — JUL 2025', company: 'Xcelliti', role: 'SQA Automation Consultant', detail: 'Delivered QA across fintech platforms including BankIslami, HugoBank and Bank Alfalah.', bullets: ['Performed performance and regression testing with Cypress, Appium and JMeter.', 'Executed mobile automation across multiple devices and operating system versions.', 'Validated Power BI dashboard analytics and report data accuracy.', 'Tested a Warehouse Management System for inventory accuracy and data integrity.', 'Diagnosed critical defects through log analysis and coordinated fixes with client teams.', 'Created test plans, test cases and detailed defect documentation.'] },
  { dates: 'OCT 2022 — SEP 2024', company: 'Enterprise64', role: 'SQA Engineer', detail: 'Worked across e-commerce and banking products with a focus on reliable customer journeys.', bullets: ['Tested checkout, payment gateway and inventory management functionality.', 'Developed test plans across functional, integration and system testing levels.', 'Tested the Temenos T24 banking system for stability, security and compliance.', 'Performed regression testing after updates and validated dashboards and reports.', 'Contributed to automation efforts and collaborated with cross-functional teams to resolve defects.'] },
  { dates: 'SEP 2021 — DEC 2021', company: 'Engro Fertiliser', role: 'QA Manual Tester Intern', detail: 'Built foundational experience in software testing and quality documentation.', bullets: ['Conducted regression testing and assisted in test automation efforts.', 'Tracked defects and created structured test documentation.', 'Suggested and documented UI/UX improvements based on testing observations.'] },
]

const skillGroups = [
  ['Manual QA', 'Test planning', 'UAT', 'Regression', 'Integration', 'System testing'],
  ['Automation', 'Cypress', 'Appium', 'Playwright', 'Katalon Studio'],
  ['API & performance', 'Postman', 'REST API', 'SOAP API', 'JMeter', 'Load & stress testing'],
  ['Quality operations', 'JIRA', 'ClickUp', 'Confluence', 'SonarQube', 'Defect triage'],
  ['Data & product', 'MySQL', 'Power BI', 'Roadmaps', 'User stories', 'Backlog prioritization'],
]

const education = [
  ['2018 — 2022', 'Bachelor of Science — Computer Science', 'Sir Syed University of Engineering & Technology'],
  ['2016 — 2018', 'HSC — Pre-Engineering', 'NCR-CET Intermediate College'],
  ['2014 — 2016', 'SSC', 'Practical Schooling System'],
]

const certifications = ['Automation Using Cypress — Udemy', 'Mastering JMeter for Performance Testing', 'Appium Mobile Automation — Test Automation University', 'API Testing with Postman', 'Cypress Automation with JavaScript', 'Big Data Analytics — Coursera', 'Business Intelligence Professional', 'Prompt Engineering & Generative AI']

const recognitions = [
  ['01', 'LEAP Hackathon', 'Winner'],
  ['02', 'GITEX Saudi Arabia Hackathon', 'Winner'],
  ['03', 'AI Hackathon', 'Runner-up'],
  ['04', 'Inter-office Hackathon', 'Runner-up'],
]

const impactPoints = [
  ['85–90%', 'Reported project outcome', 'Improved software quality through structured QA ownership and process implementation at JSI.'],
  ['01', 'QA system built', 'Designed and implemented repeatable QA processes around delivery and release quality.'],
  ['4+', 'Years in QA & product', 'Progressed from manual testing to automation leadership and product ownership.'],
]

const technicalModules = [
  ['01', 'Test strategy', 'Smoke · Sanity · Regression · Integration · System · UAT', 'Start with risk, then choose the right depth of testing for the release.'],
  ['02', 'Automation architecture', 'Cypress · Playwright · Appium · Katalon Studio', 'Build reusable coverage for web and mobile flows instead of repeating manual checks.'],
  ['03', 'API & performance', 'Postman · REST · SOAP · JMeter', 'Validate contracts, negative paths, load behaviour and the signals behind a stable release.'],
  ['04', 'Quality intelligence', 'JIRA · ClickUp · Confluence · SonarQube · Power BI · MySQL', 'Turn defects, logs and data into decisions the whole team can act on.'],
  ['05', 'CRM & ERP systems', 'Customer workflows · Business processes · Roles · Integrations', 'Test end-to-end workflows, permissions, data movement and reporting across enterprise systems.'],
  ['06', 'Management systems', 'WMS · HRMS · LMS · CMS · DMS · PMS', 'Validate operational workflows, inventory, approvals, dashboards and data integrity.'],
  ['07', 'Core banking', 'Temenos T24 · Transactions · Accounts · Security · Compliance', 'Test critical banking journeys where accuracy, stability and regulatory expectations matter.'],
  ['08', 'AI & LLM testing', 'Prompt regression · Factuality · Hallucination · Safety · RAG', 'Evaluate AI behaviour, edge cases, response quality and reliability as models evolve.'],
  ['09', 'CI/CD & source control', 'Git · GitHub · Jenkins · GitHub Actions · GitLab CI · Docker', 'Connect quality checks to repeatable builds, version control and release pipelines.'],
  ['10', 'Test management', 'TestRail · Zephyr · Xray · qTest · Cucumber / BDD', 'Organise traceability from requirements to test cases, execution and release evidence.'],
  ['11', 'Reporting & visual QA', 'Allure · Extent Reports · HTML Reports · Percy · Applitools', 'Make automation results, visual regressions and release signals easy to understand.'],
  ['12', 'Mobile cloud & security', 'BrowserStack · Sauce Labs · LambdaTest · OWASP ZAP · Burp Suite', 'Extend device coverage and identify security risks across real-world environments.'],
  ['13', 'Data & observability', 'MongoDB · PostgreSQL · Redis · Elasticsearch · Grafana · Kibana', 'Validate backend data and monitor the signals that reveal quality issues in production.'],
]

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [activeProject, setActiveProject] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const move = (event) => {
      setPointer({ x: (event.clientX / window.innerWidth - 0.5) * 2, y: (event.clientY / window.innerHeight - 0.5) * 2 })
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main style={{ '--pointer-x': pointer.x, '--pointer-y': pointer.y }}>
      <div className="grain" />
      <header className="nav">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top"><span className="brand-mark">M</span><span>DANIYAL<br /><i>ASIF</i></span></button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <button onClick={() => scrollTo('work')}>Selected work <sup>03</sup></button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('resume')}>Resume</button>
          <button onClick={() => scrollTo('technical')}>Technical</button>
          <a href="/Muhammad_Daniyal_Asif_Resume.docx" download>Download CV <Arrow /></a>
          <a href="mailto:mailtodaniyal11@gmail.com">Let's talk <Arrow /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span /><span /></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Senior QA Engineer & Product Manager <span className="eyebrow-location">— based in Karachi, Pakistan</span></p>
          <h1>Quality that<br /><em>moves</em> <span className="outline">product.</span></h1>
          <p className="hero-note">Test automation specialist turning complex requirements into reliable releases, stronger teams, and products people can trust.</p>
          <button className="circle-link" onClick={() => scrollTo('work')}><span>See the<br />impact</span><Arrow /></button>
        </div>
        <div className="orbital-stage" aria-label="Interactive 3D abstract sculpture">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="core" style={{ transform: `rotateX(${pointer.y * -10}deg) rotateY(${pointer.x * 13}deg)` }}>
            <div className="core-glow" /><div className="core-face face-front">D</div><div className="core-face face-back">A</div><div className="core-face face-right" /><div className="core-face face-left" />
          </div>
          <div className="stage-label label-top">QUALITY<br /><span>THAT SHIPS</span></div>
          <div className="stage-label label-bottom">SCROLL TO<br /><span>DISCOVER ↓</span></div>
        </div>
        <div className="hero-index">01 <span>/</span> 03</div>
      </section>

      <section className="manifesto" id="about">
        <h2>Good products get<br /><i>shipped.</i> Great products<br />get <span>trusted.</span></h2>
        <div className="manifesto-detail"><p>I'm Muhammad Daniyal Asif, a QA Engineer and Product Manager with 4+ years across fintech, e-commerce, and mobile platforms.</p><a href="mailto:mailtodaniyal11@gmail.com">Let's connect <Arrow /></a></div>
      </section>

      <section className="work" id="work">
        <div className="work-heading"><div><h2>Systems I've<br /><i>improved.</i></h2></div><span className="work-count">{String(activeProject + 1).padStart(2, '0')} <b>/</b> 03</span></div>
        <div className="project-viewer">
          <div className={`project-art art-${projects[activeProject].color}`}><div className="art-grid" /><div className="art-word">{projects[activeProject].number}</div><div className="art-orbit" /></div>
          <div className="project-info"><p className="project-type">{projects[activeProject].type}</p><h3>{projects[activeProject].title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3><p className="project-tag">{projects[activeProject].tag}</p><button className="text-link" onClick={() => scrollTo('case-study')}>View case study <Arrow /></button></div>
        </div>
        <div className="project-tabs">{projects.map((project, index) => <button className={index === activeProject ? 'active' : ''} key={project.number} onClick={() => setActiveProject(index)}><span>{project.number}</span>{project.title.replace('\n', ' ')}</button>)}</div>
      </section>

      <section className="case-study" id="case-study">
        <div className="case-study-heading"><p className="case-study-role">{projects[activeProject].role}</p></div>
        <div className="case-study-grid"><h2>{projects[activeProject].title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2><div className="case-study-copy"><p>{projects[activeProject].context}</p><div className="case-study-stats"><div><span>Outcome</span><strong>{projects[activeProject].outcome}</strong></div><div><span>Toolkit</span><strong>{projects[activeProject].tools}</strong></div></div></div></div>
        <div className="case-study-details"><article><span>01 / Problem</span><p>{projects[activeProject].problem}</p></article><article><span>02 / Approach</span><p>{projects[activeProject].approach}</p></article><article><span>03 / Evidence</span><p>{projects[activeProject].evidence}</p></article></div>
      </section>

      <section className="recognition" id="recognition">
        <div className="recognition-heading"><h2>Ideas that<br /><i>compete.</i></h2><p>Beyond shipping reliable products, I enjoy solving hard problems under pressure and turning fast ideas into something that works.</p></div>
        <div className="recognition-list">{recognitions.map(([number, event, result]) => <div className="recognition-row" key={event}><span>{number}</span><strong>{event}</strong><em>{result}</em></div>)}</div>
      </section>

      <section className="impact" id="impact">
        <div className="impact-heading"><p className="section-kicker">( Measurable impact )</p><h2>Quality is<br /><i>a system.</i></h2><p>At JSI, I helped turn quality from a final checkpoint into a process built into the way software was planned, tested and released.</p></div>
        <div className="impact-grid">{impactPoints.map(([metric, label, detail]) => <article key={label}><strong>{metric}</strong><h3>{label}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="technical" id="technical">
        <div className="technical-heading"><h2>From risk<br /><i>to release.</i></h2><p>I use a layered QA process that keeps quality visible from the first requirement to the final go-live decision.</p></div>
        <div className="technical-loop"><span>REQUIREMENTS</span><b>→</b><span>RISK MAP</span><b>→</b><span>TEST DESIGN</span><b>→</b><span>AUTOMATION</span><b>→</b><span>DEFECT TRIAGE</span><b>→</b><span>RELEASE SIGN-OFF</span></div>
        <div className="technical-grid">{technicalModules.map(([number, title, tools, detail]) => <article key={number}><span>{number}</span><h3>{title}</h3><strong>{tools}</strong><p>{detail}</p></article>)}</div>
      </section>

      <section className="resume" id="resume">
        <div className="resume-header"><p className="section-kicker">( The full picture )</p><h2>Experience<br /><i>that compounds.</i></h2><p className="resume-intro">From manual testing to automation leadership and product ownership, each role has added another lens to how I build better software.</p></div>
        <div className="experience-list">{experience.map((item) => <article className="experience-row" key={`${item.company}-${item.dates}`}><p className="experience-dates">{item.dates}</p><div><h3>{item.role}</h3><p className="experience-company">{item.company} <span>· Karachi, Pakistan</span></p><p className="experience-detail">{item.detail}</p><ul className="experience-bullets">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
        <div className="resume-columns"><div><p className="section-kicker">( QA toolkit )</p><div className="skill-groups">{skillGroups.map(([heading, ...skills]) => <div className="skill-group" key={heading}><h3>{heading}</h3><p>{skills.join(' · ')}</p></div>)}</div></div><div><p className="section-kicker">( Education )</p><div className="education-list">{education.map(([date, title, school]) => <div className="education-item" key={title}><span>{date}</span><strong>{title}</strong><p>{school}</p></div>)}</div></div></div>
        <div className="certifications"><p className="section-kicker">( Certifications & training )</p><div>{certifications.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, '0')}</b>{item}</span>)}</div></div>
      </section>

      <footer className="footer"><p className="section-kicker">( Build with confidence )</p><h2>Let's make<br /><i>quality</i><br />visible.</h2><a className="footer-mail" href="mailto:mailtodaniyal11@gmail.com">mailtodaniyal11@gmail.com <Arrow /></a><a className="footer-phone" href="tel:+923422909366">0342-2909366 <Arrow /></a><div className="footer-base"><span>© 2026 DANIYAL ASIF</span><span>QA · PRODUCT · AUTOMATION</span><a className="linkedin-link" href="https://linkedin.com/in/muhammad-daniyal-asif6b99b1204" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  )
}

export default App
