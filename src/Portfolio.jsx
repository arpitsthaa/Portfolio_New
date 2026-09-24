import { useState } from 'react';

const email = 'arpitsthaa@gmail.com';

const projects = [
  {
    title: 'Mero Palo',
    category: 'MERN Stack',
    description: 'Doctor appointment and real-time queue booking system designed to make waiting rooms more predictable.',
    highlights: ['WebSockets', 'Conflict handling', 'Queue optimization'],
    repo: 'https://github.com/arpitsthaa/mero-palo',
    featured: true,
  },
  {
    title: 'Taxi Booking System',
    category: 'Python',
    description: 'A focused desktop booking experience built as an early exploration of practical software systems.',
    highlights: ['Python', 'Tkinter', 'Booking flows'],
    repo: '#',
  },
  {
    title: 'Hotel Booking System',
    category: 'Django + React',
    description: 'A full-stack reservation platform with structured inventory, user flows, and an admin-ready foundation.',
    highlights: ['REST APIs', 'React UI', 'Database design'],
    repo: '#',
  },
  {
    title: 'Student Information System',
    category: 'Java + MySQL',
    description: 'A dependable desktop system for organizing student records and simplifying everyday administration.',
    highlights: ['CRUD workflows', 'MySQL', 'Data validation'],
    repo: 'https://github.com/arpitsthaa/SIMS-Project',
  },
];

const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C#', 'HTML/CSS', 'SQL'] },
  { label: 'Frameworks / Frontend', items: ['React', 'Django', 'Tailwind CSS', 'Node.js', 'Flutter'] },
  { label: 'Tools & Infrastructure', items: ['MySQL', 'PostgreSQL', 'Git', 'Linux', 'Cloudflare'] },
];

const education = [
  {
    date: '2025 — present',
    title: 'Bachelor of Honours in Software Engineering',
    place: 'PCPS College · University of Bedfordshire',
  },
  {
    date: '2023 — 2025',
    title: 'Higher Secondary Education (+2)',
    place: 'Prativa Secondary School, Pokhara',
  },
  {
    date: '2021 — 2023',
    title: 'Secondary Education Examination (SEE)',
    place: 'Shree Saraswoti Secondary School, Gorkha',
  },
];

const experience = [
  {
    date: 'Approx. 5 months',
    role: 'Event Team Member & Web Systems Coordinator',
    place: 'PCPS College, Lalitpur',
    details: 'Supported college events from planning through execution while managing the PCPS College website and digital certification system alongside the event team.',
    skills: ['Event coordination', 'Website management', 'Digital certificates'],
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-lime-300">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'md:col-span-2' : ''}`}>
      <div className="flex flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs text-lime-300/80">{project.category}</p>
            <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-white/40">
            0{project.featured ? 1 : 2}
          </span>
        </div>
        <p className="mb-6 text-sm leading-7 text-slate-400">{project.description}</p>
        <div className="mb-7 flex flex-wrap gap-2">
          {project.highlights.map((highlight) => <span className="tag" key={highlight}>{highlight}</span>)}
        </div>
        <div className="mt-auto flex items-center gap-5 font-mono text-xs">
          <a className="text-lime-300 transition hover:text-lime-200" href={project.repo} target="_blank" rel="noreferrer">
            view repo <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080a0b] text-slate-300">
      <div className="site-grid" />
      <nav className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#080a0b]/80 backdrop-blur-xl">
        <div className="content-shell flex min-h-16 flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3">
          <a href="#" className="font-mono text-sm text-lime-300"><span className="mr-2 text-white/30">$</span>~/arpit.sh</a>
          <div className="order-3 flex w-full items-center justify-center gap-5 overflow-x-auto font-mono text-[10px] text-slate-500 sm:order-none sm:w-auto sm:gap-7 sm:text-xs">
            <a className="nav-link" href="#about">about</a>
            <a className="nav-link" href="#experience">experience</a>
            <a className="nav-link" href="#work">work</a>
            <a className="nav-link" href="#stack">stack</a>
            <a className="nav-link" href="#contact">contact</a>
          </div>
          <span className="flex items-center gap-2 font-mono text-[10px] text-lime-300/70"><i className="status-dot" /> available</span>
        </div>
      </nav>

      <section className="content-shell relative flex min-h-[670px] flex-col items-center py-20 sm:py-24 md:flex-row">
        <div className="hero-orb" />
        <div className="hero-intro relative z-10 max-w-4xl">
          <p className="mb-7 font-mono text-sm text-lime-300"><span className="text-white/30">01</span> / hello, world_</p>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,10vw,5.25rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-white">
            I build systems<br /><span className="text-lime-300">that move people</span><span className="text-white/20">.</span>
          </h1>
          <div className="mt-8 max-w-2xl border-l border-lime-300/40 pl-5">
            <p className="text-base leading-7 text-slate-400 sm:text-xl sm:leading-8">Software Engineering student & full-stack developer crafting queue systems, automation tools, and web applications for real-world problems.</p>
            <p className="mt-3 font-mono text-xs text-white/35">PCPS College, Lalitpur · Nepal</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="button button-primary" href="#work">Explore work <ArrowIcon /></a>
            <a className="button button-ghost" href="/Arpit_Shrestha_CV.pdf" target="_blank" rel="noreferrer">Download CV <ArrowIcon /></a>
            <a className="button button-ghost" href="#contact">Let&apos;s talk <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-photo-wrap relative z-10" aria-label="Portrait of Arpit Shrestha">
          <div className="hero-photo-frame">
            <img src="/thisisme.jpeg" alt="Arpit Shrestha" className="hero-photo" />
            <span className="hero-photo-label">arpit.jpg</span>
          </div>
        </div>
        <div className="absolute bottom-10 right-0 hidden w-56 font-mono text-[10px] leading-6 text-white/20 lg:block">
          <p className="text-lime-300/50">const focus = [</p>
          <p className="pl-4">&quot;useful software&quot;,</p>
          <p className="pl-4">&quot;clean interfaces&quot;,</p>
          <p className="pl-4">&quot;continuous learning&quot;</p>
          <p>];</p>
        </div>
      </section>

      <section id="about" className="content-shell section-rule py-16 sm:py-24">
        <SectionHeading eyebrow="02 / context" title="A little about me" />
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>I&apos;m Arpit, a Software Engineering student who enjoys turning messy problems into clear, dependable products. My work sits between thoughtful user experiences and the systems that make them possible.</p>
            <p>From my first desktop applications to real-time full-stack platforms, I&apos;m always learning, experimenting, and looking for the next useful thing to build.</p>
          </div>
          <div className="border-l border-white/10 pl-6">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-white/40">education.log</p>
            <div className="space-y-7">
              {education.map((item) => (
                <div className="relative" key={item.title}>
                  <span className="timeline-dot" />
                  <p className="mb-1 font-mono text-[10px] text-lime-300">{item.date}</p>
                  <h3 className="text-sm font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.place}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="content-shell section-rule py-16 sm:py-24">
        <SectionHeading eyebrow="03 / experience" title="Where I&apos;ve contributed" />
        <article className="experience-card">
          <div className="experience-marker"><span /></div>
          <div className="grid gap-7 md:grid-cols-[.8fr_1.2fr] md:gap-12">
            <div>
              <p className="mb-2 font-mono text-xs text-lime-300">{experience[0].date}</p>
              <h3 className="font-display text-2xl font-semibold text-white">{experience[0].role}</h3>
              <p className="mt-2 font-mono text-xs text-slate-500">{experience[0].place}</p>
            </div>
            <div>
              <p className="leading-7 text-slate-400">{experience[0].details}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience[0].skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="work" className="content-shell section-rule py-16 sm:py-24">
        <SectionHeading eyebrow="04 / selected work" title="Things I&apos;ve built">
          <span className="font-mono text-xs text-white/30">4 projects / 2022—now</span>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>

      <section id="stack" className="content-shell section-rule py-16 sm:py-24">
        <SectionHeading eyebrow="05 / toolkit" title="Technical arsenal" />
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <p className="mb-5 font-mono text-xs text-lime-300"><span className="text-white/20">//</span> {group.label}</p>
              <div className="flex flex-wrap gap-2">{group.items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="content-shell section-rule py-16 sm:py-24">
        <div className="rounded-2xl border border-lime-300/20 bg-lime-300/[0.04] p-6 sm:p-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-lime-300">06 / open channel</p>
          <h2 className="max-w-2xl font-display text-[clamp(2.25rem,8vw,3.75rem)] font-semibold leading-tight tracking-tight text-white">Have a problem worth solving?</h2>
          <p className="mt-5 max-w-xl leading-7 text-slate-400">I&apos;m open to collaborations, internships, and conversations about building useful software.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="button button-primary" href={`mailto:${email}`}>Say hello <ArrowIcon /></a>
            <button className="copy-button" onClick={copyEmail} type="button">{copied ? 'Copied!' : 'Copy email'} <span aria-hidden="true">⧉</span></button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 font-mono text-xs text-slate-500">
            <a className="nav-link" href="https://github.com/arpitsthaa" target="_blank" rel="noreferrer">github ↗</a>
            <a className="nav-link" href="https://linkedin.com/in/arpitsthaa" target="_blank" rel="noreferrer">linkedin ↗</a>
            <a className="nav-link" href="https://www.instagram.com/arpitsthaa_/" target="_blank" rel="noreferrer">instagram ↗</a>
            <span className="text-white/30">{email}</span>
          </div>
        </div>
      </section>

      <footer className="content-shell flex flex-col gap-3 border-t border-white/[0.06] py-7 font-mono text-[10px] text-white/25 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Arpit Shrestha</span>
        <span>built with React + Tailwind CSS <span className="text-lime-300/60">●</span></span>
      </footer>
    </main>
  );
}
