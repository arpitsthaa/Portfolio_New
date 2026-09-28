import { useEffect, useMemo, useRef, useState } from 'react';

const base = '/29march';
const config = {
  name: 'Bebe',
  openingName: 'Anisha',
  birthdate: '29·09·26',
  you: 'Arpit',
  music: `${base}/Music.mp3`,
  finalPhoto: `${base}/mem/WhatsApp Image 2026-09-28 at 10.55.04 AM (1).jpeg`,
  photos: [
    '10.55.11 AM.jpeg', '10.55.10 AM.jpeg', '10.55.10 AM (1).jpeg',
    '10.55.10 AM (2).jpeg', '10.55.09 AM.jpeg', '10.55.09 AM (1).jpeg',
    '10.55.09 AM (2).jpeg', '10.55.08 AM.jpeg', '10.55.08 AM (1).jpeg',
    '10.55.07 AM.jpeg', '5.33.49 PM.jpeg', '5.33.49 PM (1).jpeg',
  ].map((file) => `${base}/mem/WhatsApp Image 2026-09-28 at ${file}`),
  message: 'You make ordinary days feel like something worth remembering. Today, I hope the world gives you back a little of the warmth, laughter, and light you give so effortlessly to everyone around you.',
  reasons: [
    ['Your smile', 'It makes even the most ordinary day feel lighter.'],
    ['Your kindness', 'You make people feel seen, and that is a rare kind of beautiful.'],
    ['The way you understand me', 'You hear what I mean, even when I do not quite know how to say it.'],
    ['Your wonderfully weird side', 'The version of you that is entirely, unapologetically you.'],
    ['How safe you make everything feel', 'With you, home is not a place. It is a feeling.'],
    ['Your laugh', 'One of my favorite sounds in the world.'],
    ['The little things you do', 'The tiny details are the ones I carry with me.'],
    ['Simply, all of you', 'No explanation needed. Just you.'],
  ],
  quiz: [
    ['Where did we first meet?', ['Godawari', 'College', 'Patan'], 1],
    ['Who said “I love you” first?', ['He', 'Me', 'It’s a tie'], 0],
    ['What is my favorite thing about our time together?', ['How easily we laugh', 'That every moment feels easy', 'All of the above'], 2],
    ['What do I hope we keep collecting together?', ['Little adventures', 'Beautiful memories', 'Both, forever'], 2],
    ['Who is my favorite person in the whole world?', ['He himself', 'Anisha', 'The birthday girl'], 1],
  ],
  letter: `Happy birthday Sanu. 🎂💖

Today isn’t just another date. It’s the day the universe gave me the person who changed everything for me. You’ve made my world brighter and more beautiful, and I’m so grateful for your heart, your mind, and the way you care, even when it costs you.

You’re my safe place. With you, even small moments feel special, a random call, a silly joke only we understand, a quiet “goodnight sweet dreams” that means everything. You’ve shown me what it feels like to be truly seen and truly loved.

On your 19th, remember: you are enough, exactly as you are. You don’t have to prove anything to anyone. I love your strengths and your soft spots, your confidence and your doubts, your dreams and your fears.

I hope this year brings you peace, clarity, and joy, moments that take your breath away, and people who cherish you. You’re never alone—I’ll always be right here, holding your hand through it all.

Happy 19th birthday budi ❤️
I love you so much. 💕😘`,
};

const pages = ['opening', 'birthday', 'memories', 'reasons', 'quiz', 'letter', 'finale'];
const photoUrl = (file) => file;

function Button({ children, onClick, secondary = false, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex min-h-12 items-center justify-center gap-4 rounded-full px-6 py-3 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${
        secondary
          ? 'border border-white/25 bg-white/5 text-stone-100 hover:bg-white/10'
          : 'bg-gradient-to-r from-[#ee9bad] to-[#7c2946] text-white shadow-[0_14px_35px_rgba(200,117,134,.32)]'
      }`}
    >
      {children}<span className="text-lg font-serif transition-transform group-hover:translate-x-1">↗</span>
    </button>
  );
}

function Music({ audioRef }) {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const markReady = () => setReady(true);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('canplay', markReady);
    audio.addEventListener('loadeddata', markReady);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    if (audio.readyState >= 2) markReady();
    audio.muted = true;
    audio.play().catch(() => {});
    return () => {
      audio.removeEventListener('canplay', markReady);
      audio.removeEventListener('loadeddata', markReady);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [audioRef]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing && !audio.muted) audio.pause();
    else {
      audio.muted = false;
      audio.volume = 1;
      audio.play().catch(() => {});
    }
  };

  return (
    <button onClick={toggle} className="flex min-h-11 items-center gap-2 rounded-full border border-[#ee9bad]/50 bg-[#2e1422]/80 px-3 py-2 text-[9px] uppercase tracking-[.15em] text-stone-100 shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#ee9bad]" aria-label="Toggle birthday music">
      <span className="flex h-4 items-center gap-0.5">{[1, 2, 3, 4].map((bar) => <i key={bar} className={`h-2 w-0.5 bg-[#ee9bad] ${playing ? 'animate-pulse' : ''}`} />)}</span>
      <span className="max-w-[34vw] truncate">{playing ? 'Love Youu · on' : ready ? 'Love Youu · off' : 'Tap for music'}</span>
    </button>
  );
}

function Header({ go, audioRef }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-3 bg-gradient-to-b from-[#160c14]/90 to-transparent px-4 py-4 backdrop-blur-[2px] sm:px-8">
      <button onClick={() => go('opening')} className="max-w-[55vw] truncate rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left font-serif text-sm tracking-wide text-stone-100 transition hover:border-[#ee9bad]/60">
        a little something <span className="text-[#ee9bad] italic">for you</span>
      </button>
      <Music audioRef={audioRef} />
    </header>
  );
}

function Heading({ number, eyebrow, title, light = false }) {
  return (
    <div className="relative mb-10 max-w-2xl">
      <div className={`mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] ${light ? 'text-amber-300' : 'text-[#7c2946]'}`}>
        {number}<span className="h-px w-12 bg-[#c87586]" />{eyebrow}
      </div>
      <p className="font-script text-3xl text-[#ee9bad] drop-shadow-lg sm:text-4xl">{title}</p>
    </div>
  );
}

function Navigation({ go, back, next }) {
  return (
    <div className="mt-12 flex flex-col gap-3 border-t border-current/10 pt-8 sm:flex-row sm:justify-between">
      {back ? <Button onClick={() => go(back)} secondary>← Back</Button> : <span />}
      <Button onClick={() => go(next)}>Keep going</Button>
    </div>
  );
}

function Opening({ go }) {
  return <section className="relative grid min-h-screen place-items-center overflow-hidden bg-[radial-gradient(circle_at_72%_30%,#9f4e6c,#4a233b_25%,#251526_58%,#100b12)] px-6 py-28 text-center text-stone-100">
    <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full border border-[#ee9bad]/20 animate-[spin_24s_linear_infinite]" />
    <div className="absolute -left-32 bottom-10 h-64 w-64 rounded-full border border-[#c9a36a]/20" />
    <div className="relative z-10 max-w-2xl">
      <p className="mb-8 text-[10px] uppercase tracking-[.25em] text-amber-300">a small digital love note · {config.birthdate}</p>
      <p className="font-script text-4xl text-[#ee9bad] sm:text-5xl">Hey {config.openingName}<span className="text-[#f4c5ae]">...</span></p>
      <h1 className="mt-2 font-serif text-[clamp(4rem,16vw,8rem)] font-medium leading-[.82] tracking-[-.06em]">I made<br /><em className="text-[#ee9bad]">something</em> for you.</h1>
      <p className="mx-auto my-8 max-w-sm text-sm leading-7 text-stone-300">A little collection of memories, reasons, and all the things I never want you to forget.</p>
      <Button onClick={() => go('birthday')}>Open your birthday gift</Button>
      <p className="mt-16 text-[9px] uppercase tracking-[.25em] text-stone-400">— take your time —</p>
    </div>
  </section>;
}

function BirthdayHero({ go }) {
  return <section className="relative grid min-h-screen place-items-center overflow-hidden bg-[radial-gradient(circle_at_70%_25%,#8c3e60,#45243b_30%,#261626_68%,#170e17)] px-6 py-32 text-stone-100">
    <div className="absolute right-[-30vw] top-1/3 h-[80vw] w-[80vw] rounded-full border border-amber-200/20 shadow-[0_0_100px_rgba(200,117,134,.15)]" />
    <div className="relative z-10 w-full max-w-6xl">
      <div className="max-w-xl">
        <div className="mb-7 flex items-center gap-4 text-[10px] uppercase tracking-[.2em] text-stone-400">01 <span className="h-px w-14 bg-[#c87586]" /> the reason for all this</div>
        <p className="font-script text-4xl text-[#ee9bad]">Today is all about you</p>
        <h2 className="mt-2 font-serif text-[clamp(4rem,14vw,9rem)] leading-[.8] tracking-[-.06em]">Happy Birthday,<br /><em className="text-[#ee9bad]">{config.name}</em> <span className="text-[#ee9bad]">♥</span></h2>
        <p className="my-9 max-w-lg border-l-2 border-[#ee9bad]/70 pl-5 text-sm leading-7 text-stone-300">{config.message}</p>
        <Button onClick={() => go('memories')} secondary>See our memories</Button>
      </div>
    </div>
  </section>;
}

function Memories({ go }) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const unlock = (event) => {
    event.preventDefault();
    if (password.trim().toLowerCase() === '29march') setUnlocked(true);
    else setError(true);
  };
  if (!unlocked) return <section className="grid min-h-screen place-items-center bg-[linear-gradient(135deg,#21121d,#392033,#1a1018)] px-5 py-32 text-stone-100"><div className="w-full max-w-md rounded-3xl border border-amber-300/30 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-md sm:p-14"><span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-full border border-amber-300 text-amber-300">✦</span><p className="text-[10px] uppercase tracking-[.2em] text-amber-300">a little secret</p><h2 className="mt-4 font-serif text-5xl leading-none">Before the memories...</h2><p className="my-6 font-serif text-lg leading-7 text-stone-300">Some things are only for us. Enter the date that means everything.</p><form onSubmit={unlock} className="text-left"><label htmlFor="memory-password" className="text-[10px] uppercase tracking-[.15em] text-amber-300">Password</label><input id="memory-password" autoFocus type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }} placeholder="DDMonth" className="mt-2 w-full border border-white/25 bg-black/20 px-4 py-3 font-serif text-lg text-white outline-none focus:border-[#ee9bad]" /><small className="my-3 block text-[10px] tracking-widest text-stone-500">Hint: DDMonth</small>{error && <p className="mb-3 text-xs text-rose-300">That is not it. Try the special date again.</p>}<Button type="submit">Unlock our memories</Button></form><button onClick={() => go('birthday')} className="mt-7 text-[10px] uppercase tracking-widest text-stone-400 hover:text-white">← back to birthday</button></div></section>;
  return <section className="min-h-screen bg-[radial-gradient(circle_at_15%_5%,#713852,#321b2b_42%,#171019)] px-4 py-32 text-stone-100 sm:px-8"><div className="mx-auto max-w-6xl"><Heading number="02" eyebrow="kept close" title="The moments that made us" light /><h2 className="font-serif text-[clamp(3.5rem,10vw,7rem)] leading-[.82] tracking-[-.06em]">Little Moments,<br /><em className="text-[#ee9bad]">Big Memories</em></h2><p className="my-7 max-w-sm text-sm leading-7 text-stone-400">A few frames from the days I want to keep close.</p><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{config.photos.map((photo, index) => <button key={photo} onClick={() => setSelected(photo)} className="group rounded bg-[#fff9ef] p-2 pb-4 text-left shadow-2xl transition hover:-translate-y-2 hover:rotate-0 sm:nth-[2n]:mt-8"><div className="h-72 overflow-hidden sm:h-64"><img src={photoUrl(photo)} alt={`Memory ${index + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><span className="mt-2 block px-1 font-serif text-lg text-[#7c2946]">memory {String(index + 1).padStart(2, '0')}</span></button>)}</div><Navigation go={go} back="birthday" next="reasons" />{selected && <div className="fixed inset-0 z-50 grid place-items-center bg-[#140a11]/95 p-4 pt-24" onClick={() => setSelected(null)}><button onClick={() => setSelected(null)} className="absolute right-4 top-20 grid h-12 w-12 place-items-center rounded-full border border-white/30 text-3xl text-white">×</button><img src={selected} alt="Selected memory" className="max-h-[78svh] max-w-full rounded object-contain shadow-2xl" /></div>}</div></section>;
}

function Reasons({ go }) {
  return <section className="min-h-screen bg-[radial-gradient(circle_at_90%_0,#713852,#321b2b_42%,#171019_100%)] px-4 py-32 text-stone-100 sm:px-8"><div className="mx-auto max-w-6xl"><Heading number="03" eyebrow="no particular order" title="I could go on forever" light /><h2 className="font-serif text-[clamp(3.5rem,10vw,7rem)] leading-[.82] tracking-[-.06em]">Things I Love<br /><em className="text-[#ee9bad]">About You</em></h2><p className="my-7 text-sm text-stone-400">Tap a card. I wrote a little something underneath each one.</p><div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">{config.reasons.map(([title, text], index) => <button key={title} onClick={(e) => e.currentTarget.classList.toggle('bg-[#4b263d]')} className="min-h-44 rounded-2xl border border-[#ee9bad]/20 bg-white/5 p-5 text-left shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#ee9bad]/60 hover:bg-[#4b263d] hover:shadow-[0_18px_38px_rgba(0,0,0,.25)]"><span className="font-serif text-[#ee9bad]">0{index + 1}</span><h3 className="mt-7 font-serif text-2xl text-stone-100">{title}</h3><p className="mt-3 text-xs leading-6 text-stone-300">{text}</p></button>)}</div><Navigation go={go} back="memories" next="quiz" /></div></section>;
}

function Quiz({ go }) {
  const [state, setState] = useState({ index: 0, score: 0 });
  const complete = state.index >= config.quiz.length;
  return <section className="min-h-screen bg-[radial-gradient(circle_at_10%_15%,#713852,#321b2b_45%,#171019_100%)] px-4 py-32 text-stone-100 sm:px-8"><div className="mx-auto max-w-3xl text-center"><Heading number="04" eyebrow="just for fun" title="A tiny test of our little universe" light /><h2 className="font-serif text-6xl tracking-[-.06em]">One Little <em className="text-[#ee9bad]">Game</em></h2><div className="mx-auto mt-10 rounded-3xl border border-[#ee9bad]/20 bg-white/5 p-6 text-left shadow-2xl backdrop-blur-md sm:p-10">{complete ? <div className="text-center"><strong className="font-serif text-4xl text-[#ee9bad]">{state.score}/{config.quiz.length} — not bad at all.</strong><p className="my-5 text-sm leading-7 text-stone-300">No matter how many you got right, you're still my favorite person.</p><Button onClick={() => setState({ index: 0, score: 0 })}>Play again</Button></div> : <><p className="text-[10px] uppercase tracking-widest text-[#ee9bad]">Question {state.index + 1} of {config.quiz.length}</p><h3 className="my-7 font-serif text-3xl text-stone-100">{config.quiz[state.index][0]}</h3><div className="grid gap-3">{config.quiz[state.index][1].map((choice, index) => <button key={choice} onClick={() => setState({ index: state.index + 1, score: state.score + (index === config.quiz[state.index][2] ? 1 : 0) })} className="rounded-xl border border-white/20 bg-white/5 p-4 text-left text-stone-200 transition hover:translate-x-1 hover:border-[#ee9bad] hover:bg-[#4b263d]">{choice}</button>)}</div></>}</div><Navigation go={go} back="reasons" next="letter" /></div></section>;
}

function Letter({ go }) {
  const [open, setOpen] = useState(false);
  return <section className="min-h-screen bg-[linear-gradient(135deg,#21121d,#392033,#1a1018)] px-4 py-32 text-stone-100 sm:px-8"><div className="mx-auto max-w-4xl text-center"><Heading number="05" eyebrow="from me to you" title="The part I wanted to say slowly" light /><h2 className="font-serif text-6xl tracking-[-.06em]">A Letter <em className="text-[#ee9bad]">For You</em></h2><button onClick={() => setOpen(true)} className="group mx-auto mt-12 block transition hover:-translate-y-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"><div className="relative h-44 w-72 rounded bg-[#a65e70] shadow-[0_24px_45px_rgba(0,0,0,.4)]"><div className="absolute inset-x-0 top-0 z-20 h-0 border-x-[9rem] border-t-[5.5rem] border-x-transparent border-t-[#c47a88] transition duration-500 [transform-origin:top] group-hover:[transform:rotateX(180deg)]" /><div className="absolute bottom-0 left-0 z-10 h-0 w-0 border-b-[5.5rem] border-r-[9rem] border-b-[#8e4a60] border-r-transparent" /><div className="absolute bottom-0 right-0 z-10 h-0 w-0 border-b-[5.5rem] border-l-[9rem] border-b-[#78384e] border-l-transparent" /><div className="absolute inset-x-6 bottom-5 z-[5] grid h-36 place-items-center bg-[#f8efe5] font-script text-3xl text-[#531f32] shadow-lg transition duration-500 group-hover:-translate-y-16">for {config.name}</div><div className="absolute bottom-14 left-1/2 z-30 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-[#c9a36a] font-script text-xl text-white shadow-md">A</div></div><span className="mt-5 block text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-[#ee9bad]">click to open ↗</span></button><Navigation go={go} back="quiz" next="finale" />{open && <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4" onClick={() => setOpen(false)}><article onClick={(e) => e.stopPropagation()} className="max-h-[85svh] w-full max-w-xl overflow-y-auto bg-[#faf2e7] p-7 text-left text-[#20141c] shadow-2xl sm:p-12"><div className="whitespace-pre-line font-serif text-lg leading-7">{config.letter}</div><p className="mt-8 text-center text-[10px] uppercase tracking-widest text-[#8e7c80]">click outside to close</p></article></div>}</div></section>;
}

function Finale() {
  const [open, setOpen] = useState(false);
  return <section className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_50%_35%,#8e4260,#3d2036_35%,#170d16_78%)] px-5 py-32 text-center text-stone-100"><div className="max-w-2xl"><p className="mb-6 text-[10px] uppercase tracking-[.2em] text-amber-300">06 · one last thing</p><p className="font-script text-4xl text-[#ee9bad]">Before you go...</p><h2 className="mt-2 font-serif text-[clamp(4rem,15vw,8rem)] leading-[.8] tracking-[-.06em]">One Last <em className="text-[#ee9bad]">Thing</em>.</h2><p className="my-8 text-sm leading-7 text-stone-300">There is one more little surprise with your name on it.</p>{!open ? <Button onClick={() => setOpen(true)}>Open it</Button> : <div className="animate-[fadeUp_.8s_ease-out] font-serif text-xl leading-8"><p>I didn't buy you something expensive.</p><p>I made you something.</p><p className="my-4">Because sometimes the things we spend our time creating mean more than the things we simply buy.</p><strong className="block font-script text-4xl text-[#ee9bad]">Happy Birthday, {config.name} ♥</strong><img src={config.finalPhoto} alt="A special memory" className="mx-auto my-6 max-h-[55svh] w-full max-w-md rounded border border-amber-300/40 object-cover shadow-2xl" /><p className="text-xs text-stone-400">with all my love,<br /><span className="font-script text-3xl text-[#ee9bad]">{config.you}</span></p></div>}</div></section>;
}

export default function Birthday() {
  const [page, setPage] = useState('opening');
  const audioRef = useRef(null);
  const go = (next) => {
    if (pages.includes(next)) {
      setPage(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const content = useMemo(() => ({
    opening: <Opening go={go} />,
    birthday: <BirthdayHero go={go} />,
    memories: <Memories go={go} />,
    reasons: <Reasons go={go} />,
    quiz: <Quiz go={go} />,
    letter: <Letter go={go} />,
    finale: <Finale />,
  }), [page]);
  return <div className="min-h-screen overflow-x-hidden bg-[#20141c]"><Header go={go} audioRef={audioRef} /><main>{content[page]}</main><audio ref={audioRef} loop preload="auto" src={config.music} /></div>;
}
