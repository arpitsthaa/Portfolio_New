const { useEffect, useState } = React;

/* ✦ EDIT THIS CONFIGURATION BLOCK ✦ */
const CONFIG = {
  name: "Bebe",
  openingName: "Anisha",
  birthdate: "29·09·26",
  you: "Arpit",
  music: "Music.mp3",
  message: "You make ordinary days feel like something worth remembering. Today, I hope the world gives you back a little of the warmth, laughter, and light you give so effortlessly to everyone around you.",
  finalPhoto: "mem/WhatsApp Image 2026-09-28 at 10.55.04 AM (1).jpeg",
  photos: [
    "mem/WhatsApp Image 2026-09-28 at 10.55.11 AM.jpeg", "mem/WhatsApp Image 2026-09-28 at 10.55.10 AM.jpeg",
    "mem/WhatsApp Image 2026-09-28 at 10.55.10 AM (1).jpeg", "mem/WhatsApp Image 2026-09-28 at 10.55.10 AM (2).jpeg",
    "mem/WhatsApp Image 2026-09-28 at 10.55.09 AM.jpeg", "mem/WhatsApp Image 2026-09-28 at 10.55.09 AM (1).jpeg",
    "mem/WhatsApp Image 2026-09-28 at 10.55.09 AM (2).jpeg", "mem/WhatsApp Image 2026-09-28 at 10.55.08 AM.jpeg",
    "mem/WhatsApp Image 2026-09-28 at 10.55.08 AM (1).jpeg", "mem/WhatsApp Image 2026-09-28 at 10.55.07 AM.jpeg"
  ],
  reasons: [["Your smile", "It makes even the most ordinary day feel lighter."], ["Your kindness", "You make people feel seen, and that is a rare kind of beautiful."], ["The way you understand me", "You hear what I mean, even when I do not quite know how to say it."], ["Your wonderfully weird side", "The version of you that is entirely, unapologetically you."], ["How safe you make everything feel", "With you, home is not a place. It is a feeling."], ["Your laugh", "One of my favorite sounds in the world."], ["The little things you do", "The tiny details are the ones I carry with me."], ["Simply, all of you", "No explanation needed. Just you."]],
  quiz: [
    ["Where did we first meet?", ["Godawari", "College", "Patan"], 1],
    ["Who said “I love you” first?", ["He", "Me", "It’s a tie"], 0],
    ["What is my favorite thing about our time together?", ["How easily we laugh", "That every moment feels easy", "All of the above"], 2],
    ["What do I hope we keep collecting together?", ["Little adventures", "Beautiful memories", "Both, forever"], 2],
    ["Who is my favorite person in the whole world?", ["He himself", "Anisha", "The birthday girl"], 1]
  ],
  letter: `Happy birthday Sanu. 🎂💖

Today isn’t just another date. It’s the day the universe gave me the person who changed everything for me. You’ve made my world brighter and more beautiful, and I’m so grateful for your heart, your mind, and the way you care, even when it costs you.

You’re my safe place. With you, even small moments feel special, a random call, a silly joke only we understand, a quiet “goodnight sweet dreams” that means everything. You’ve shown me what it feels like to be truly seen and truly loved.

On your 19th, remember: you are enough, exactly as you are. You don’t have to prove anything to anyone. I love your strengths and your soft spots, your confidence and your doubts, your dreams and your fears. I love how you try, how you feel deeply, and how you keep going even when it’s hard.

I hope this year brings you peace, clarity, and joy, moments that take your breath away, and people who cherish you. You’re never alone—I’ll always be right here, holding your hand through it all.

Happy 19th birthday budi ❤️
I love you so much. 💕😘`
};

const $ = (selector) => document.querySelector(selector);
const go = (page) => { window.location.href = `${page}.html`; };
function Music() {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const audio = $("#birthday-audio");
    if (!audio) return;
    const onReady = () => setReady(true);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("canplay", onReady);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.muted = true;
    audio.play().catch(() => {});
    return () => {
      audio.removeEventListener("canplay", onReady);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);
  const toggle = () => {
    const audio = $("#birthday-audio");
    if (!ready || !audio) return;
    if (playing && !audio.muted) audio.pause();
    else {
      audio.muted = false;
      audio.volume = 1;
      audio.play().catch(() => {});
    }
  };
  return <button className={`music-toggle ${playing ? "is-playing" : ""}`} onClick={toggle} disabled={!ready} aria-label={ready ? "Enable sound or pause Love Youu" : "Loading Love Youu"}><span className="music-bars"><i /><i /><i /><i /></span>{playing ? "Love Youu · on" : ready ? "Love Youu · off" : "Loading"}</button>;
}
function Shell({ children }) { return <><div className="noise" /><header className="site-header"><a className="wordmark" href="index.html">a little something <span>for you</span></a><Music /></header><main>{children}</main><audio id="birthday-audio" loop preload="auto" src={CONFIG.music} /></>; }
function Head({ number, eyebrow, title, light = false }) { return <div className={`section-heading reveal in-view ${light ? "heading-light" : ""}`}><div className="heading-number">{number} <span /> {eyebrow}</div><p className="script-line">{title}</p></div>; }
function Nav({ back, next }) { return <div className="page-nav">{back ? <button className="button button-ghost" onClick={() => go(back)}>← Back</button> : <span />}<button className="button button-primary" onClick={() => go(next)}>Keep going <span>↗</span></button></div>; }
function Opening() { return <section className="opening panel"><div className="opening-inner reveal in-view"><p className="eyebrow">a small digital love note · {CONFIG.birthdate}</p><p className="script-line">Hey {CONFIG.openingName}<span className="rose">...</span></p><h1>I made<br /><em>something</em> for you.</h1><p className="opening-copy">A little collection of memories, reasons, and all the things I never want you to forget.</p><button className="button button-primary" onClick={() => go("birthday")}>Open your birthday gift <span>↗</span></button><p className="scroll-hint"><span className="line" /> take your time <span className="line" /></p></div><div className="opening-orbit orbit-one" /><div className="opening-orbit orbit-two" /><div className="opening-stamp">made<br /><span>with</span><br />intention</div></section>; }
function Birthday() { return <section className="hero panel"><div className="hero-glow" /><div className="section-inner hero-inner reveal in-view"><div className="hero-meta">01 <span className="rule" /> the reason for all this</div><p className="script-line">Today is all about you</p><h2>Happy Birthday,<br /><em>{CONFIG.name}</em> <span className="heart">♥</span></h2><p className="hero-message">{CONFIG.message}</p><button className="button button-ghost" onClick={() => go("memories")}>See our memories <span>↗</span></button></div><div className="hero-ring" /><div className="hero-doodle">for my<br /><span>favorite</span><br />person</div></section>; }
function Memories() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(null);
  const unlock = (event) => {
    event.preventDefault();
    if (password.trim().toLowerCase() === "29march") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  if (!unlocked) return <section className="gallery section-dark page-section password-page"><div className="section-inner password-inner"><div className="password-card reveal in-view"><span className="password-lock">✦</span><p className="eyebrow">a little secret</p><h2>Before the memories...</h2><p>Some things are only for us. Enter the date that means everything.</p><form onSubmit={unlock}><label htmlFor="memory-password">Password</label><input id="memory-password" type="password" value={password} onChange={(event) => { setPassword(event.target.value); setError(false); }} placeholder="DDMonth" autoComplete="off" autoFocus /><small>Hint: DDMonth</small>{error && <div className="password-error">That is not it. Try the special date again.</div>}<button className="button button-primary" type="submit">Unlock our memories <span>↗</span></button></form><button className="password-back" onClick={() => go("birthday")}>← back to birthday</button></div></div></section>;
  return <section className="gallery section-dark page-section"><div className="section-inner"><Head number="02" eyebrow="kept close" title="The moments that made us" light /><h2 className="section-title-light">Little Moments,<br /><em>Big Memories</em></h2><p className="section-intro">A few frames from the days I want to keep close.</p><div className="gallery-grid">{CONFIG.photos.map((photo, i) => <button className="gallery-card reveal in-view" key={photo} onClick={() => setModal(photo)}><div className="gallery-image" style={{ backgroundImage: `url("${photo}")` }}><span>{i + 1}</span></div></button>)}</div><Nav back="birthday" next="reasons" />{modal && <div className="photo-modal open" onClick={() => setModal(null)}><button className="modal-close" onClick={() => setModal(null)}>×</button><div className="modal-content"><div className="modal-image" style={{ backgroundImage: `url("${modal}")` }} /></div></div>}</div></section>;
}
function Reasons() { return <section className="reasons section-light page-section"><div className="section-inner"><Head number="03" eyebrow="no particular order" title="I could go on forever" /><h2 className="section-title">Things I Love<br /><em>About You</em></h2><p className="section-intro">Tap a card. I wrote a little something underneath each one.</p><div className="reason-grid">{CONFIG.reasons.map(([title, text], i) => <button className="reason-card reveal in-view" key={title} onClick={(e) => e.currentTarget.classList.toggle("open")}><span className="reason-no">0{i + 1}</span><h3>{title}</h3><p>{text}</p></button>)}</div><Nav back="memories" next="quiz" /></div></section>; }
function Quiz() { const [state, setState] = useState({ index: 0, score: 0 }); const complete = state.index >= CONFIG.quiz.length; return <section className="quiz section-blush page-section"><div className="section-inner quiz-inner"><Head number="04" eyebrow="just for fun" title="A tiny test of our little universe" /><h2 className="section-title">One Little <em>Game</em></h2><div className="quiz-card reveal in-view">{complete ? <div className="quiz-result"><strong>{state.score}/{CONFIG.quiz.length} — not bad at all.</strong><p>No matter how many you got right, you're still my favorite person.</p><button className="button button-primary" onClick={() => setState({ index: 0, score: 0 })}>Play again <span>↗</span></button></div> : <><div className="quiz-progress">Question {state.index + 1} of {CONFIG.quiz.length}</div><div className="quiz-question">{CONFIG.quiz[state.index][0]}</div><div className="quiz-options">{CONFIG.quiz[state.index][1].map((choice, i) => <button className="quiz-option" key={choice} onClick={() => setState({ index: state.index + 1, score: state.score + (i === CONFIG.quiz[state.index][2] ? 1 : 0) })}>{choice}</button>)}</div></>}</div><Nav back="reasons" next="letter" /></div></section>; }
function Letter() { const [open, setOpen] = useState(false); return <section className="letter section-dark page-section"><div className="section-inner letter-inner"><Head number="05" eyebrow="from me to you" title="The part I wanted to say slowly" light /><h2 className="section-title-light">A Letter <em>For You</em></h2><button className={`envelope-wrap ${open ? "open" : ""}`} onClick={() => setOpen(true)}><span className="envelope"><span className="envelope-flap" /><span className="envelope-front" /><span className="envelope-letter"><span>for {CONFIG.name}</span></span><span className="envelope-seal">A</span></span><span className="envelope-cta">click to open <span>↗</span></span></button>{open && <div className="letter-overlay" onClick={() => setOpen(false)}><article className="letter-paper visible" onClick={(event) => event.stopPropagation()}><div className="letter-text">{CONFIG.letter}</div><p className="letter-dismiss">click outside to close</p></article></div>}<Nav back="quiz" next="finale" /></div></section>; }
function Finale() { const [open, setOpen] = useState(false); return <section className="final panel"><div className="section-inner final-inner reveal in-view"><div className="heading-number">06 <span /> one last thing</div><p className="script-line">Before you go...</p><h2>One Last <em>Thing</em><span className="rose">.</span></h2><p className="final-intro">There is one more little surprise with your name on it.</p>{!open && <button className="button button-primary" onClick={() => setOpen(true)}>Open it <span>↗</span></button>}{open && <div className="surprise-message visible"><p>I didn't buy you something expensive.</p><p>I made you something.</p><p>Because sometimes the things we spend our time creating mean more than the things we simply buy.</p><strong>Happy Birthday, {CONFIG.name} <span>♥</span></strong><img className="special-photo-image" src={CONFIG.finalPhoto} alt="A special memory" /><p className="signature">with all my love,<br /><span>{CONFIG.you}</span></p></div>}</div></section>; }
const page = document.body.dataset.page;
const content = page === "opening" ? <Opening /> : page === "birthday" ? <Birthday /> : page === "memories" ? <Memories /> : page === "reasons" ? <Reasons /> : page === "quiz" ? <Quiz /> : page === "letter" ? <Letter /> : <Finale />;
ReactDOM.createRoot(document.getElementById("root")).render(<Shell>{content}</Shell>);
