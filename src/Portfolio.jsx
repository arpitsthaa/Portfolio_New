import { useState, useEffect, useRef } from 'react';

const skills = {
  Languages: ['Python', 'Java', 'JavaScript', 'HTML/CSS'],
  Frameworks: ['React', 'Django', 'Tailwind CSS', 'Node.js'],
  Tools: ['MySQL', 'Git', 'Socket.io', 'Linux']
};

const educationList = [
  {
    period: '2025 — present',
    school: 'PCPS College, Lalitpur',
    detail: 'Bachelor of Honours in Software Engineering',
  },
  {
    period: '2023 — 2025',
    school: 'Prativa Secondary School, Pokhara',
    detail: '+2 (Higher Secondary)',
  },
  {
    period: '2021 - 2023',
    school: 'Shree Saraswoti Secondary School, Gorkha',
    detail: 'SEE (Secondary Education Examination)'
  },
  {
    period: '2013 - 2020',
    school: 'St. Josephs School, Gorkha',
    detail: 'Class 1 to 7'
  }
];

const projectsList = [
  {
    slug: 'mero-palo',
    name: 'Mero Palo',
    title: 'Hospital Queue Manager',
    summary: 'A real-time queue management system for hospital services, reducing wait times and improving patient experience.',
    stack: ['MERN Stack'],
    repo: 'https://github.com/arpitsthaa/mero-palo',
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

function CursorBlock() {
  const ref = useRef(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e) => {
      if (hidden) setHidden(false);
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    const leave = () => setHidden(true);
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, [hidden]);

  return (
    <div
      ref={ref}
      className="hidden md:block"
      style={{
        position: 'fixed',
        width: 10,
        height: 18,
        background: '#7FE0A8',
        pointerEvents: 'none',
        zIndex: 50,
        transform: 'translate(-2px, -2px)',
        opacity: hidden ? 0 : 0.85,
        mixBlendMode: 'difference',
        transition: 'opacity 0.2s ease',
        animation: 'blink 1s steps(1) infinite',
      }}
    />
  );
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
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');
        .mono { font-family: 'JetBrains Mono', monospace; }
        .sans { font-family: 'Inter', sans-serif; }
        .term-card { transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
        .term-card:hover { transform: translateY(-4px); border-color: #7FE0A8; box-shadow: 0 12px 30px -12px rgba(127,224,168,0.25); }
        .skill-bar-fill { transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .glow-dot { animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(127,224,168,0.5); }
          50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(127,224,168,0); }
        }
        .fade-in { animation: fadeIn 0.6s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .link-underline { position: relative; }
        .link-underline::after {
          content: ''; position: absolute; left: 0; bottom: -2px;
          width: 0; height: 1px; background: #7FE0A8;
          transition: width 0.3s ease;
        }
        .link-underline:hover::after { width: 100%; }
        .edu-row { transition: border-color .25s ease, padding-left .25s ease; }
        .edu-row:hover { border-left-color: #7FE0A8 !important; padding-left: 20px; }
        @keyframes blink { 0%, 49% { opacity: 0.85; } 50%, 100% { opacity: 0; } }
        .bg-grid {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: linear-gradient(rgba(127,224,168,0.04) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(127,224,168,0.04) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%);
        }
        .magnetic-card {
          position: relative;
          transition: transform .25s ease, border-color .25s ease;
        }
        .magnetic-card::before {
          content: '';
          position: absolute; inset: 0; border-radius: inherit;
          background: radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(127,224,168,0.15), transparent 70%);
          opacity: 0; transition: opacity .3s ease;
          pointer-events: none;
        }
        .magnetic-card:hover::before { opacity: 1; }
        .magnetic-card:hover { transform: translateY(-4px); border-color: #7FE0A8; }
        .hero-glow {
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          width: 500px; height: 300px; pointer-events: none; z-index: 0;
          background: radial-gradient(ellipse, rgba(127,224,168,0.08), transparent 70%);
        }

      `}</style>
      <div className="bg-grid" />
      <CursorBlock />

      {/* Nav */}
      <nav className="mono w-full max-w-4xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-sm fade-in relative z-10">
        <span className="flex items-center gap-2 w-full justify-center md:justify-start md:w-auto" style={{ color: '#7FE0A8' }}>
          <span className="w-1.5 h-1.5 rounded-full glow-dot shrink-0" style={{ background: '#7FE0A8' }} />
          ~/arpit
        </span>
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center items-center w-full md:w-auto" style={{ color: '#8A8B85' }}>
          <a href="#work" className="link-underline hover:text-[#F2F0E9] transition-colors">work</a>
          <a href="#education" className="link-underline hover:text-[#F2F0E9] transition-colors">education</a>
          <a href="#skills" className="link-underline hover:text-[#F2F0E9] transition-colors">skills</a>
          <a href="#contact" className="link-underline hover:text-[#F2F0E9] transition-colors">contact</a>
          <span className="hidden md:inline text-xs" style={{ color: '#5A5C57' }}>{clock}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-28 relative z-10">
        <div className="hero-glow" />
        <div className="mono text-sm mb-6 fade-in" style={{ color: '#8A8B85' }}>
          <span style={{ color: '#7FE0A8' }}>$</span> whoami
        </div>
        <h1 className="mono text-4xl md:text-6xl font-bold tracking-tight mb-6 min-h-[1.2em]">
          {typed}
          <span style={{ opacity: cursorOn ? 1 : 0, color: '#7FE0A8' }}>_</span>
        </h1>
        <div
          style={{
            opacity: bootDone ? 1 : 0,
            transform: bootDone ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="sans text-lg max-w-xl leading-relaxed mb-2" style={{ color: '#B8B8B2' }}>
            Software engineering student building queue systems, automation
            tools, and things that solve real problems on campus.
          </p>
          <p className="mono text-sm mb-10" style={{ color: '#8A8B85' }}>
            PCPS College, Lalitpur · Nepal
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#work"
              className="mono px-5 py-2.5 text-sm font-medium rounded transition-all hover:scale-[1.03] hover:shadow-[0_8px_20px_-8px_rgba(127,224,168,0.5)]"
              style={{ background: '#7FE0A8', color: '#0D0F0E' }}
            >
              view work →
            </a>
            <a
              href="#contact"
              className="mono px-5 py-2.5 text-sm font-medium rounded border transition-colors hover:border-[#7FE0A8]"
              style={{ borderColor: '#2A2C2A', color: '#F2F0E9' }}
            >
              get in touch
            </a>
          </div>
        </div>
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

      {/* Education */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-16 relative z-10" style={{ borderTop: '1px solid #1E201E' }}>
        <Reveal>
          <div className="mono text-sm mb-10" style={{ color: '#7FE0A8' }}>
            $ cat education.log
          </div>
        </Reveal>
        <div className="space-y-6">
          {educationList.length === 0 && (
            <p className="sans text-sm" style={{ color: '#8A8B85' }}>No education entries added yet.</p>
          )}
          {educationList.map((e, i) => (
            <Reveal key={e.school} delay={i * 100}>
              <div
                className="edu-row pl-4"
                style={{ borderLeft: '2px solid #2A2C2A' }}
              >
                <div className="mono text-xs mb-1" style={{ color: '#7FE0A8' }}>
                  {e.period}
                </div>
                <div className="sans font-medium" style={{ color: '#F2F0E9' }}>
                  {e.school}
                </div>
                <div className="sans text-sm" style={{ color: '#8A8B85' }}>
                  {e.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16 relative z-10" style={{ borderTop: '1px solid #1E201E' }}>
        <Reveal>
          <div className="mono text-sm mb-10" style={{ color: '#7FE0A8' }}>
            $ cat skills.json
          </div>
        </Reveal>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 100}>
              <h3 className="mono text-sm mb-4 font-semibold" style={{ color: '#F2F0E9' }}>
                // {category.toLowerCase()}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="mono text-xs px-3 py-1.5 rounded border transition-colors hover:border-[#7FE0A8]"
                    style={{
                      borderColor: '#2A2C2A',
                      background: '#141613',
                      color: '#8A8B85'
                    }}
                  >
                    {skill}
                  </span>
                ))}
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
