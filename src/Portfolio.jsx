import { useState, useEffect, useRef } from 'react';

const skills = {
  Languages: ['Python', 'Java', 'JavaScript', 'HTML/CSS'],
  Frameworks: ['React', 'Django', 'Tailwind CSS'],
  Tools: ['MySQL', 'Git', 'Socket.io', 'Linux']
};

const educationList = [
  {
    period: '2025 — present',
    school: 'PCPS College, Lalitpur',
    detail: 'Bachelor of Honours in Software Engineering',
    mapUrl: 'https://www.google.com/maps/search/PCPS+College,+Lalitpur',
  },
  {
    period: '2023 — 2025',
    school: 'Prativa Secondary School, Pokhara',
    detail: '+2 (Higher Secondary)',
    mapUrl: 'https://www.google.com/maps/search/Prativa+Secondary+School,+Pokhara',
  },
  {
    period: '2021 - 2023',
    school: 'Shree Saraswoti Secondary School, Gorkha',
    detail: 'SEE (Secondary Education Examination)',
    mapUrl: 'https://www.google.com/maps/search/Shree+Saraswoti+Secondary+School,+Gorkha',
  },
  {
    period: '2013 - 2020',
    school: 'St. Josephs School, Gorkha',
    detail: 'Class 1 to 7',
    mapUrl: 'https://www.google.com/maps/search/St.+Josephs+School,+Gorkha',
  }
];

const developerTimelineList = [
  {
    year: '2026',
    title: 'Software Engineering',
    description: 'Building full-stack and mobile applications.',
  },
  {
    year: '2026',
    title: 'QueueLess',
    description: 'Developed queue-management application using Django.',
  },
  {
    year: '2025',
    title: 'Initial Projects',
    description: 'Built Desktop applications and started learning foundational software engineering concepts.',
  }
];

const servicesList = [
  {
    title: 'Full-Stack Development',
    icon: '💻',
    desc: 'Building responsive, dynamic web applications from frontend UI to backend databases.',
  },
  {
    title: 'System Automation',
    icon: '⚙️',
    desc: 'Creating tools and scripts to automate workflows and solve real-world inefficiencies.',
  },
  {
    title: 'Database Management',
    icon: '🗄️',
    desc: 'Designing and optimizing SQL/NoSQL databases for secure and fast data retrieval.',
  }
];

const projectsList = [
  {
    slug: 'mero-palo',
    name: 'Mero Palo',
    title: 'Doctor Appointment Booking System',
    summary: 'A real-time doctor appointment booking system, reducing wait times and improving patient experience.',
    stack: ['MERN Stack'],
    repo: 'https://github.com/arpitsthaa/mero-palo',
  },
  {
    slug: 'taxi-booking',
    name: 'Taxi Booking System',
    title: 'Taxi Booking System',
    summary: 'A desktop application to book taxis. My first project from semester 1.',
    stack: ['Python', 'Tkinter'],
    repo: '#',
  },
  {
    slug: 'SIMS',
    name: 'Student Information Management System',
    title: 'Student Information Management System',
    summary: 'A desktop application to manage student information.',
    stack: ['Java', 'MySQL'],
    repo: 'https://github.com/arpitsthaa/SIMS-Project',
  }
];

function useTypewriter(text, speed = 45, start = true) {
  const [out, setOut] = useState('');
  useEffect(() => {
    if (!start) return;
    setOut('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, start]);
  return out;
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function useClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString('en-US', { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function MagneticCard({ children, style, className }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${x}%`);
    el.style.setProperty('--my', `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`magnetic-card ${className || ''}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const typed = useTypewriter('Arpit Shrestha', 60);
  const [cursorOn, setCursorOn] = useState(true);
  const [bootDone, setBootDone] = useState(false);
  const clock = useClock();



  useEffect(() => {
    const id = setInterval(() => setCursorOn((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setBootDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{ background: '#0D0F0E', color: '#F2F0E9' }}
      className="min-h-screen w-full overflow-x-hidden font-mono selection:bg-[#7FE0A8] selection:text-[#0D0F0E]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap');

        .mono { font-family: 'JetBrains Mono', monospace; }
        .sans { font-family: 'Inter', sans-serif; }
        
        /* Glassmorphism Utilities */
        .glass-panel {
          background: rgba(20, 22, 19, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-nav {
          background: rgba(13, 15, 14, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(127, 224, 168, 0.1);
        }

        .term-card { transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
        .term-card:hover { transform: translateY(-4px); border-color: #7FE0A8; box-shadow: 0 12px 30px -12px rgba(127,224,168,0.25); }
        .skill-bar-fill { transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .glow-dot { animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(127,224,168,0.5); }
          50% { opacity: 0.6; box-shadow: 0 0 0 6px rgba(127,224,168,0); }
        }
        .fade-in { animation: fadeIn 0.8s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .link-underline { position: relative; }
        .link-underline::after {
          content: ''; position: absolute; left: 0; bottom: -2px;
          width: 0; height: 1px; background: #7FE0A8;
          transition: width 0.3s ease;
        }
        .link-underline:hover::after { width: 100%; }
        
        /* Timeline specific */
        .timeline-container { position: relative; padding-left: 24px; border-left: 2px solid rgba(127,224,168,0.2); }
        .timeline-item { position: relative; margin-bottom: 32px; transition: transform 0.3s ease; }
        .timeline-item:hover { transform: translateX(8px); }
        .timeline-dot { 
          position: absolute; left: -31px; top: 4px; width: 12px; height: 12px; 
          border-radius: 50%; background: #0D0F0E; border: 2px solid #7FE0A8;
          transition: all 0.3s ease;
        }
        .timeline-item:hover .timeline-dot { background: #7FE0A8; box-shadow: 0 0 12px rgba(127,224,168,0.5); }

        @keyframes blink { 0%, 49% { opacity: 0.85; } 50%, 100% { opacity: 0; } }
        .bg-grid {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: linear-gradient(rgba(127,224,168,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(127,224,168,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, black 20%, transparent 80%);
        }
        .magnetic-card {
          position: relative;
          transition: transform .3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color .3s ease;
        }
        .magnetic-card::before {
          content: '';
          position: absolute; inset: 0; border-radius: inherit;
          background: radial-gradient(200px circle at var(--mx, 50%) var(--my, 50%), rgba(127,224,168,0.12), transparent 60%);
          opacity: 0; transition: opacity .4s ease;
          pointer-events: none;
        }
        .magnetic-card:hover::before { opacity: 1; }
        .magnetic-card:hover { transform: translateY(-6px); border-color: rgba(127,224,168,0.6); box-shadow: 0 16px 40px -16px rgba(127,224,168,0.15); }
        .hero-glow {
          position: absolute; top: -150px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px; pointer-events: none; z-index: 0;
          background: radial-gradient(ellipse, rgba(127,224,168,0.06), transparent 70%);
        }
        
        .skill-pill {
          position: relative;
          overflow: hidden;
        }
        .skill-pill::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(127,224,168,0.1), transparent);
          transition: left 0.5s ease;
        }
        .skill-pill:hover::before { left: 100%; }

      `}</style>
      <div className="bg-grid" />

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <nav className="mono w-full max-w-4xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 justify-between items-center text-sm fade-in">
          <span className="flex items-center gap-2 w-full justify-center md:justify-start md:w-auto font-bold" style={{ color: '#7FE0A8' }}>
            <span className="w-2 h-2 rounded-full glow-dot shrink-0" style={{ background: '#7FE0A8' }} />
            ~/arpit.sh
          </span>
          <div className="flex gap-5 md:gap-8 flex-wrap justify-center items-center w-full md:w-auto" style={{ color: '#A0A29C' }}>
            <a href="#about" className="link-underline hover:text-white transition-colors">about</a>
            <a href="#work" className="link-underline hover:text-white transition-colors">work</a>
            <a href="#timeline" className="link-underline hover:text-white transition-colors">timeline</a>
            <a href="https://github.com/arpitsthaa" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-white transition-colors flex items-center gap-1">
              github <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <span className="hidden md:inline text-xs bg-[#1A1C1A] px-2 py-1 rounded border border-[#2A2C2A]" style={{ color: '#7FE0A8' }}>{clock}</span>
          </div>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-32 relative z-10 flex flex-col md:flex-row items-center gap-10">
        <div className="hero-glow" />
        <div className="flex-1 w-full">
          <div className="mono text-sm mb-6 fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(127,224,168,0.2)] bg-[rgba(127,224,168,0.05)]" style={{ color: '#7FE0A8' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7FE0A8]"></span> Hello World
          </div>
          <h1 className="sans text-5xl md:text-7xl font-bold tracking-tight mb-6 min-h-[1.2em] text-white">
            <span className="text-[#8A8B85]">I'm</span> <br/>
            {typed}
            <span style={{ opacity: cursorOn ? 1 : 0, color: '#7FE0A8' }}>_</span>
          </h1>
          <div
            style={{
              opacity: bootDone ? 1 : 0,
              transform: bootDone ? 'translateY(0)' : 'translateY(15px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <p className="sans text-lg md:text-xl max-w-xl leading-relaxed mb-4 text-[#B8B8B2]">
              Software engineering student building queue systems, automation
              tools, and crafting elegant solutions to real-world problems.
            </p>
            <p className="mono text-sm mb-12 flex items-center gap-2" style={{ color: '#8A8B85' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              PCPS College, Lalitpur · Nepal
            </p>
            <div className="flex gap-4 flex-wrap mt-4">
              <a
                href="#work"
                className="sans px-6 py-3 text-sm font-semibold rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_-10px_rgba(127,224,168,0.6)]"
                style={{ background: '#7FE0A8', color: '#0D0F0E' }}
              >
                Explore Work →
              </a>
              <a
                href="/Arpit_Shrestha_CV.pdf"
                download
                className="sans px-6 py-3 text-sm font-semibold rounded-lg border transition-all hover:border-[#7FE0A8] hover:bg-[rgba(127,224,168,0.05)] glass-panel flex items-center gap-2"
                style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#F2F0E9' }}
              >
                Download CV <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
              <a
                href="#contact"
                className="sans px-6 py-3 text-sm font-semibold rounded-lg border transition-all hover:border-[#7FE0A8] hover:bg-[rgba(127,224,168,0.05)] glass-panel"
                style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#F2F0E9' }}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me & What I Do */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Reveal>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="sans text-3xl font-bold text-white mb-6">About Me</h2>
              <div className="sans text-[#B8B8B2] leading-relaxed space-y-4">
                <p>
                  I'm Arpit, a passionate Software Engineering student based in Nepal. I love bridging the gap between complex problems and elegant, user-centric software solutions.
                </p>
                <p>
                  My journey started with simple desktop applications and has evolved into building full-stack web platforms and real-time systems. I am constantly learning new technologies and striving to write clean, maintainable code.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="sans text-3xl font-bold text-white mb-6">What I Do</h2>
              <div className="space-y-4">
                {servicesList.map((s, i) => (
                  <div key={i} className="glass-panel p-4 rounded-lg flex items-start gap-4">
                    <div className="text-2xl mt-1">{s.icon}</div>
                    <div>
                      <h4 className="sans font-bold text-white text-sm">{s.title}</h4>
                      <p className="sans text-xs text-[#8A8B85] mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id="work" className="max-w-4xl mx-auto px-6 py-16 relative z-10" style={{ borderTop: '1px solid #1E201E' }}>
        <Reveal>
          <div className="mono text-sm mb-10" style={{ color: '#7FE0A8' }}>
            $ ls ./projects
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {projectsList.length === 0 && (
            <p className="sans text-sm" style={{ color: '#8A8B85' }}>No projects added yet.</p>
          )}
          {projectsList.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <MagneticCard
                className="rounded-lg overflow-hidden border h-full"
                style={{ background: '#141613', borderColor: '#2A2C2A' }}
              >
                <div
                  className="flex items-center gap-2 px-4 py-2.5 relative z-10"
                  style={{ background: '#1A1C1A', borderBottom: '1px solid #2A2C2A' }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#E24B4A' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EF9F27' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#7FE0A8' }} />
                  <span className="mono text-xs ml-2" style={{ color: '#8A8B85' }}>
                    {p.name}
                  </span>
                </div>
                <div className="p-5 relative z-10">
                  <h3 className="sans font-semibold mb-2" style={{ color: '#F2F0E9' }}>
                    {p.title}
                  </h3>
                  <p className="sans text-sm leading-relaxed mb-4" style={{ color: '#8A8B85' }}>
                    {p.summary}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="mono text-xs px-2 py-1 rounded"
                        style={{ background: '#1E201E', color: '#7FE0A8' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mono text-xs inline-flex items-center gap-1.5"
                    style={{ color: '#7FE0A8' }}
                  >
                    view repo →
                  </a>
                </div>
              </MagneticCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Developer Timeline */}
      <section id="timeline" className="max-w-4xl mx-auto px-6 py-20 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="sans text-3xl font-bold text-white">Developer Timeline</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(127,224,168,0.2)] to-transparent"></div>
          </div>
        </Reveal>
        <div className="timeline-container ml-2">
          {developerTimelineList.map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="timeline-item glass-panel p-6 rounded-xl">
                <div className="timeline-dot"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div className="sans font-bold text-lg text-white">
                    {item.title}
                  </div>
                  <div className="mono text-xs font-bold px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[#A0A29C] mt-2 md:mt-0 inline-block w-max">
                    {item.year}
                  </div>
                </div>
                <div className="sans text-[#B8B8B2]">
                  {item.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-20 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="sans text-3xl font-bold text-white">Education</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(127,224,168,0.2)] to-transparent"></div>
          </div>
        </Reveal>
        <div className="timeline-container ml-2">
          {educationList.length === 0 && (
            <p className="sans text-sm" style={{ color: '#8A8B85' }}>No education entries added yet.</p>
          )}
          {educationList.map((e, i) => (
            <Reveal key={e.school} delay={i * 120}>
              <div className="timeline-item glass-panel p-6 rounded-xl">
                <div className="timeline-dot"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <a href={e.mapUrl} target="_blank" rel="noopener noreferrer" className="sans font-bold text-lg text-white hover:text-[#7FE0A8] transition-colors underline decoration-transparent hover:decoration-[#7FE0A8] flex items-center gap-2">
                    {e.school}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </a>
                  <div className="mono text-xs font-medium px-3 py-1 rounded-full bg-[rgba(127,224,168,0.1)] text-[#7FE0A8] mt-2 md:mt-0 inline-block w-max">
                    {e.period}
                  </div>
                </div>
                <div className="sans text-[#B8B8B2]">
                  {e.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-20 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="sans text-3xl font-bold text-white">Technical Arsenal</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(127,224,168,0.2)] to-transparent"></div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 100}>
              <div className="glass-panel p-6 rounded-xl h-full border border-[rgba(255,255,255,0.05)]">
                <h3 className="mono text-sm mb-5 font-semibold text-[#7FE0A8] flex items-center gap-2">
                  <span className="text-[#5A5C57]">{`//`}</span> {category.toLowerCase()}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill sans font-medium text-sm px-4 py-2 rounded-lg border transition-all hover:border-[#7FE0A8] hover:text-white"
                      style={{
                        borderColor: 'rgba(255,255,255,0.1)',
                        background: 'rgba(0,0,0,0.2)',
                        color: '#A0A29C'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 relative z-10" style={{ borderTop: '1px solid #1E201E' }}>
        <Reveal>
          <div className="mono text-sm mb-6" style={{ color: '#7FE0A8' }}>
            $ contact --arpit
          </div>
          <p className="sans text-lg mb-8 max-w-md" style={{ color: '#B8B8B2' }}>
            Open to opportunities, collaborations, and interesting problems.
          </p>
          <div className="flex gap-6 mono text-sm flex-wrap">
            <a href="mailto:arpitsthaa@gmail.com" className="link-underline hover:text-[#7FE0A8] transition-colors" style={{ color: '#F2F0E9' }}>
              email
            </a>
            <a href="https://github.com/arpitsthaa" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-[#7FE0A8] transition-colors" style={{ color: '#F2F0E9' }}>
              github
            </a>
            <a href="https://linkedin.com/in/arpitsthaa" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-[#7FE0A8] transition-colors" style={{ color: '#F2F0E9' }}>
              linkedin
            </a>
            <a href="https://www.instagram.com/arpitsthaa_/" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-[#7FE0A8] transition-colors" style={{ color: '#F2F0E9' }}>
              instagram
            </a>
          </div>
        </Reveal>

      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 mono text-xs relative z-10" style={{ color: '#5A5C57', borderTop: '1px solid #1E201E' }}>
        © 2026 arpit shrestha — built with react + tailwind
      </footer>
    </div>
  );
}
