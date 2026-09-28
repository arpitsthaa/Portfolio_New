var BirthdayApp = (() => {
  const { useEffect, useState } = React;
  const CONFIG = {
    name: "Bebe",
    openingName: "Anisha",
    birthdate: "29\xB709\xB726",
    you: "Arpit",
    music: "Music.mp3",
    message: "You make ordinary days feel like something worth remembering. Today, I hope the world gives you back a little of the warmth, laughter, and light you give so effortlessly to everyone around you.",
    finalPhoto: "mem/WhatsApp Image 2026-09-28 at 10.55.04 AM (1).jpeg",
    photos: [
      "mem/WhatsApp Image 2026-09-28 at 10.55.11 AM.jpeg",
      "mem/WhatsApp Image 2026-09-28 at 10.55.10 AM.jpeg",
      "mem/WhatsApp Image 2026-09-28 at 10.55.10 AM (1).jpeg",
      "mem/WhatsApp Image 2026-09-28 at 10.55.10 AM (2).jpeg",
      "mem/WhatsApp Image 2026-09-28 at 10.55.09 AM.jpeg",
      "mem/WhatsApp Image 2026-09-28 at 10.55.09 AM (1).jpeg",
      "mem/WhatsApp Image 2026-09-28 at 10.55.09 AM (2).jpeg",
      "mem/WhatsApp Image 2026-09-28 at 10.55.08 AM.jpeg",
      "mem/WhatsApp Image 2026-09-28 at 10.55.08 AM (1).jpeg",
      "mem/WhatsApp Image 2026-09-28 at 10.55.07 AM.jpeg",
      "mem/WhatsApp Image 2026-09-28 at 5.33.49 PM.jpeg",
      "mem/WhatsApp Image 2026-09-28 at 5.33.49 PM (1).jpeg"
    ],
    reasons: [["Your smile", "It makes even the most ordinary day feel lighter."], ["Your kindness", "You make people feel seen, and that is a rare kind of beautiful."], ["The way you understand me", "You hear what I mean, even when I do not quite know how to say it."], ["Your wonderfully weird side", "The version of you that is entirely, unapologetically you."], ["How safe you make everything feel", "With you, home is not a place. It is a feeling."], ["Your laugh", "One of my favorite sounds in the world."], ["The little things you do", "The tiny details are the ones I carry with me."], ["Simply, all of you", "No explanation needed. Just you."]],
    quiz: [
      ["Where did we first meet?", ["Godawari", "College", "Patan"], 1],
      ["Who said \u201CI love you\u201D first?", ["He", "Me", "It\u2019s a tie"], 0],
      ["What is my favorite thing about our time together?", ["How easily we laugh", "That every moment feels easy", "All of the above"], 2],
      ["What do I hope we keep collecting together?", ["Little adventures", "Beautiful memories", "Both, forever"], 2],
      ["Who is my favorite person in the whole world?", ["He himself", "Anisha", "The birthday girl"], 1]
    ],
    letter: `Happy birthday Sanu. \u{1F382}\u{1F496}

Today isn\u2019t just another date. It\u2019s the day the universe gave me the person who changed everything for me. You\u2019ve made my world brighter and more beautiful, and I\u2019m so grateful for your heart, your mind, and the way you care, even when it costs you.

You\u2019re my safe place. With you, even small moments feel special, a random call, a silly joke only we understand, a quiet \u201Cgoodnight sweet dreams\u201D that means everything. You\u2019ve shown me what it feels like to be truly seen and truly loved.

On your 19th, remember: you are enough, exactly as you are. You don\u2019t have to prove anything to anyone. I love your strengths and your soft spots, your confidence and your doubts, your dreams and your fears. I love how you try, how you feel deeply, and how you keep going even when it\u2019s hard.

I hope this year brings you peace, clarity, and joy, moments that take your breath away, and people who cherish you. You\u2019re never alone\u2014I\u2019ll always be right here, holding your hand through it all.

Happy 19th birthday budi \u2764\uFE0F
I love you so much. \u{1F495}\u{1F618}`
  };
  const $ = (selector) => document.querySelector(selector);
  let navigate = () => {};
  const go = (page2) => navigate(page2);
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
      audio.addEventListener("loadeddata", onReady);
      audio.addEventListener("loadedmetadata", onReady);
      if (audio.readyState >= 2) onReady();
      audio.addEventListener("play", onPlay);
      audio.addEventListener("pause", onPause);
      audio.muted = true;
      audio.play().catch(() => {
      });
      return () => {
        audio.removeEventListener("canplay", onReady);
        audio.removeEventListener("loadeddata", onReady);
        audio.removeEventListener("loadedmetadata", onReady);
        audio.removeEventListener("play", onPlay);
        audio.removeEventListener("pause", onPause);
      };
    }, []);
    const toggle = () => {
      const audio = $("#birthday-audio");
      if (!audio) return;
      if (playing && !audio.muted) audio.pause();
      else {
        audio.muted = false;
        audio.volume = 1;
        audio.play().catch(() => {
        });
      }
    };
    return /* @__PURE__ */ React.createElement("button", { className: `music-toggle ${playing ? "is-playing" : ""}`, onClick: toggle, "aria-label": ready ? "Enable sound or pause Love Youu" : "Start Love Youu" }, /* @__PURE__ */ React.createElement("span", { className: "music-bars" }, /* @__PURE__ */ React.createElement("i", null), /* @__PURE__ */ React.createElement("i", null), /* @__PURE__ */ React.createElement("i", null), /* @__PURE__ */ React.createElement("i", null)), playing ? "Love Youu \xB7 on" : ready ? "Love Youu \xB7 off" : "Tap for music");
  }
  function Shell({ children }) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "noise" }), /* @__PURE__ */ React.createElement("header", { className: "site-header" }, /* @__PURE__ */ React.createElement("a", { className: "wordmark", href: "#opening", onClick: (event) => { event.preventDefault(); go("opening"); } }, "a little something ", /* @__PURE__ */ React.createElement("span", null, "for you")), /* @__PURE__ */ React.createElement(Music, null)), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement("audio", { id: "birthday-audio", loop: true, preload: "auto", src: CONFIG.music }));
  }
  function Head({ number, eyebrow, title, light = false }) {
    return /* @__PURE__ */ React.createElement("div", { className: `section-heading reveal in-view ${light ? "heading-light" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "heading-number" }, number, " ", /* @__PURE__ */ React.createElement("span", null), " ", eyebrow), /* @__PURE__ */ React.createElement("p", { className: "script-line" }, title));
  }
  function Nav({ back, next }) {
    return /* @__PURE__ */ React.createElement("div", { className: "page-nav" }, back ? /* @__PURE__ */ React.createElement("button", { className: "button button-ghost", onClick: () => go(back) }, "\u2190 Back") : /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("button", { className: "button button-primary", onClick: () => go(next) }, "Keep going ", /* @__PURE__ */ React.createElement("span", null, "\u2197")));
  }
  function Opening() {
    return /* @__PURE__ */ React.createElement("section", { className: "opening panel" }, /* @__PURE__ */ React.createElement("div", { className: "opening-inner reveal in-view" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "a small digital love note \xB7 ", CONFIG.birthdate), /* @__PURE__ */ React.createElement("p", { className: "script-line" }, "Hey ", CONFIG.openingName, /* @__PURE__ */ React.createElement("span", { className: "rose" }, "...")), /* @__PURE__ */ React.createElement("h1", null, "I made", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("em", null, "something"), " for you."), /* @__PURE__ */ React.createElement("p", { className: "opening-copy" }, "A little collection of memories, reasons, and all the things I never want you to forget."), /* @__PURE__ */ React.createElement("button", { className: "button button-primary", onClick: () => go("birthday") }, "Open your birthday gift ", /* @__PURE__ */ React.createElement("span", null, "\u2197")), /* @__PURE__ */ React.createElement("p", { className: "scroll-hint" }, /* @__PURE__ */ React.createElement("span", { className: "line" }), " take your time ", /* @__PURE__ */ React.createElement("span", { className: "line" }))), /* @__PURE__ */ React.createElement("div", { className: "opening-orbit orbit-one" }), /* @__PURE__ */ React.createElement("div", { className: "opening-orbit orbit-two" }), /* @__PURE__ */ React.createElement("div", { className: "opening-stamp" }, "made", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "with"), /* @__PURE__ */ React.createElement("br", null), "intention"));
  }
  function Birthday() {
    return /* @__PURE__ */ React.createElement("section", { className: "hero panel" }, /* @__PURE__ */ React.createElement("div", { className: "hero-glow" }), /* @__PURE__ */ React.createElement("div", { className: "section-inner hero-inner reveal in-view" }, /* @__PURE__ */ React.createElement("div", { className: "hero-meta" }, "01 ", /* @__PURE__ */ React.createElement("span", { className: "rule" }), " the reason for all this"), /* @__PURE__ */ React.createElement("p", { className: "script-line" }, "Today is all about you"), /* @__PURE__ */ React.createElement("h2", null, "Happy Birthday,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("em", null, CONFIG.name), " ", /* @__PURE__ */ React.createElement("span", { className: "heart" }, "\u2665")), /* @__PURE__ */ React.createElement("p", { className: "hero-message" }, CONFIG.message), /* @__PURE__ */ React.createElement("button", { className: "button button-ghost", onClick: () => go("memories") }, "See our memories ", /* @__PURE__ */ React.createElement("span", null, "\u2197"))), /* @__PURE__ */ React.createElement("div", { className: "hero-ring" }), /* @__PURE__ */ React.createElement("div", { className: "hero-doodle" }, "for my", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, "favorite"), /* @__PURE__ */ React.createElement("br", null), "person"));
  }
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
    if (!unlocked) return /* @__PURE__ */ React.createElement("section", { className: "gallery section-dark page-section password-page" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner password-inner" }, /* @__PURE__ */ React.createElement("div", { className: "password-card reveal in-view" }, /* @__PURE__ */ React.createElement("span", { className: "password-lock" }, "\u2726"), /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "a little secret"), /* @__PURE__ */ React.createElement("h2", null, "Before the memories..."), /* @__PURE__ */ React.createElement("p", null, "Some things are only for us. Enter the date that means everything."), /* @__PURE__ */ React.createElement("form", { onSubmit: unlock }, /* @__PURE__ */ React.createElement("label", { htmlFor: "memory-password" }, "Password"), /* @__PURE__ */ React.createElement("input", { id: "memory-password", type: "password", value: password, onChange: (event) => {
      setPassword(event.target.value);
      setError(false);
    }, placeholder: "DDMonth", autoComplete: "off", autoFocus: true }), /* @__PURE__ */ React.createElement("small", null, "Hint: DDMonth"), error && /* @__PURE__ */ React.createElement("div", { className: "password-error" }, "That is not it. Try the special date again."), /* @__PURE__ */ React.createElement("button", { className: "button button-primary", type: "submit" }, "Unlock our memories ", /* @__PURE__ */ React.createElement("span", null, "\u2197"))), /* @__PURE__ */ React.createElement("button", { className: "password-back", onClick: () => go("birthday") }, "\u2190 back to birthday"))));
    return /* @__PURE__ */ React.createElement("section", { className: "gallery section-dark page-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement(Head, { number: "02", eyebrow: "kept close", title: "The moments that made us", light: true }), /* @__PURE__ */ React.createElement("h2", { className: "section-title-light" }, "Little Moments,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("em", null, "Big Memories")), /* @__PURE__ */ React.createElement("p", { className: "section-intro" }, "A few frames from the days I want to keep close."), /* @__PURE__ */ React.createElement("div", { className: "gallery-grid" }, CONFIG.photos.map((photo, i) => /* @__PURE__ */ React.createElement("button", { className: "gallery-card reveal in-view", key: photo, onClick: () => setModal(photo) }, /* @__PURE__ */ React.createElement("div", { className: "gallery-image", style: { backgroundImage: `url("${photo}")` } }, /* @__PURE__ */ React.createElement("span", null, i + 1))))), /* @__PURE__ */ React.createElement(Nav, { back: "birthday", next: "reasons" }), modal && /* @__PURE__ */ React.createElement("div", { className: "photo-modal open", onClick: () => setModal(null) }, /* @__PURE__ */ React.createElement("button", { className: "modal-close", onClick: () => setModal(null) }, "\xD7"), /* @__PURE__ */ React.createElement("div", { className: "modal-content" }, /* @__PURE__ */ React.createElement("div", { className: "modal-image", style: { backgroundImage: `url("${modal}")` } })))));
  }
  function Reasons() {
    return /* @__PURE__ */ React.createElement("section", { className: "reasons section-light page-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement(Head, { number: "03", eyebrow: "no particular order", title: "I could go on forever" }), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "Things I Love", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("em", null, "About You")), /* @__PURE__ */ React.createElement("p", { className: "section-intro" }, "Tap a card. I wrote a little something underneath each one."), /* @__PURE__ */ React.createElement("div", { className: "reason-grid" }, CONFIG.reasons.map(([title, text], i) => /* @__PURE__ */ React.createElement("button", { className: "reason-card reveal in-view", key: title, onClick: (e) => e.currentTarget.classList.toggle("open") }, /* @__PURE__ */ React.createElement("span", { className: "reason-no" }, "0", i + 1), /* @__PURE__ */ React.createElement("h3", null, title), /* @__PURE__ */ React.createElement("p", null, text)))), /* @__PURE__ */ React.createElement(Nav, { back: "memories", next: "quiz" })));
  }
  function Quiz() {
    const [state, setState] = useState({ index: 0, score: 0 });
    const complete = state.index >= CONFIG.quiz.length;
    return /* @__PURE__ */ React.createElement("section", { className: "quiz section-blush page-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner quiz-inner" }, /* @__PURE__ */ React.createElement(Head, { number: "04", eyebrow: "just for fun", title: "A tiny test of our little universe" }), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "One Little ", /* @__PURE__ */ React.createElement("em", null, "Game")), /* @__PURE__ */ React.createElement("div", { className: "quiz-card reveal in-view" }, complete ? /* @__PURE__ */ React.createElement("div", { className: "quiz-result" }, /* @__PURE__ */ React.createElement("strong", null, state.score, "/", CONFIG.quiz.length, " \u2014 not bad at all."), /* @__PURE__ */ React.createElement("p", null, "No matter how many you got right, you're still my favorite person."), /* @__PURE__ */ React.createElement("button", { className: "button button-primary", onClick: () => setState({ index: 0, score: 0 }) }, "Play again ", /* @__PURE__ */ React.createElement("span", null, "\u2197"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "quiz-progress" }, "Question ", state.index + 1, " of ", CONFIG.quiz.length), /* @__PURE__ */ React.createElement("div", { className: "quiz-question" }, CONFIG.quiz[state.index][0]), /* @__PURE__ */ React.createElement("div", { className: "quiz-options" }, CONFIG.quiz[state.index][1].map((choice, i) => /* @__PURE__ */ React.createElement("button", { className: "quiz-option", key: choice, onClick: () => setState({ index: state.index + 1, score: state.score + (i === CONFIG.quiz[state.index][2] ? 1 : 0) }) }, choice))))), /* @__PURE__ */ React.createElement(Nav, { back: "reasons", next: "letter" })));
  }
  function Letter() {
    const [open, setOpen] = useState(false);
    return /* @__PURE__ */ React.createElement("section", { className: "letter section-dark page-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner letter-inner" }, /* @__PURE__ */ React.createElement(Head, { number: "05", eyebrow: "from me to you", title: "The part I wanted to say slowly", light: true }), /* @__PURE__ */ React.createElement("h2", { className: "section-title-light" }, "A Letter ", /* @__PURE__ */ React.createElement("em", null, "For You")), /* @__PURE__ */ React.createElement("button", { className: `envelope-wrap ${open ? "open" : ""}`, onClick: () => setOpen(true) }, /* @__PURE__ */ React.createElement("span", { className: "envelope" }, /* @__PURE__ */ React.createElement("span", { className: "envelope-flap" }), /* @__PURE__ */ React.createElement("span", { className: "envelope-front" }), /* @__PURE__ */ React.createElement("span", { className: "envelope-letter" }, /* @__PURE__ */ React.createElement("span", null, "for ", CONFIG.name)), /* @__PURE__ */ React.createElement("span", { className: "envelope-seal" }, "A")), /* @__PURE__ */ React.createElement("span", { className: "envelope-cta" }, "click to open ", /* @__PURE__ */ React.createElement("span", null, "\u2197"))), open && /* @__PURE__ */ React.createElement("div", { className: "letter-overlay", onClick: () => setOpen(false) }, /* @__PURE__ */ React.createElement("article", { className: "letter-paper visible", onClick: (event) => event.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { className: "letter-text" }, CONFIG.letter), /* @__PURE__ */ React.createElement("p", { className: "letter-dismiss" }, "click outside to close"))), /* @__PURE__ */ React.createElement(Nav, { back: "quiz", next: "finale" })));
  }
  function Finale() {
    const [open, setOpen] = useState(false);
    return /* @__PURE__ */ React.createElement("section", { className: "final panel" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner final-inner reveal in-view" }, /* @__PURE__ */ React.createElement("div", { className: "heading-number" }, "06 ", /* @__PURE__ */ React.createElement("span", null), " one last thing"), /* @__PURE__ */ React.createElement("p", { className: "script-line" }, "Before you go..."), /* @__PURE__ */ React.createElement("h2", null, "One Last ", /* @__PURE__ */ React.createElement("em", null, "Thing"), /* @__PURE__ */ React.createElement("span", { className: "rose" }, ".")), /* @__PURE__ */ React.createElement("p", { className: "final-intro" }, "There is one more little surprise with your name on it."), !open && /* @__PURE__ */ React.createElement("button", { className: "button button-primary", onClick: () => setOpen(true) }, "Open it ", /* @__PURE__ */ React.createElement("span", null, "\u2197")), open && /* @__PURE__ */ React.createElement("div", { className: "surprise-message visible" }, /* @__PURE__ */ React.createElement("p", null, "I didn't buy you something expensive."), /* @__PURE__ */ React.createElement("p", null, "I made you something."), /* @__PURE__ */ React.createElement("p", null, "Because sometimes the things we spend our time creating mean more than the things we simply buy."), /* @__PURE__ */ React.createElement("strong", null, "Happy Birthday, ", CONFIG.name, " ", /* @__PURE__ */ React.createElement("span", null, "\u2665")), /* @__PURE__ */ React.createElement("img", { className: "special-photo-image", src: CONFIG.finalPhoto, alt: "A special memory" }), /* @__PURE__ */ React.createElement("p", { className: "signature" }, "with all my love,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, CONFIG.you)))));
  }
  const routeFromHash = () => {
    const route = window.location.hash.slice(1);
    return ["opening", "birthday", "memories", "reasons", "quiz", "letter", "finale"].includes(route) ? route : document.body.dataset.page || "opening";
  };
  function App() {
    const [page, setPage] = useState(routeFromHash);
    useEffect(() => {
      const onPopState = () => setPage(routeFromHash());
      navigate = (nextPage) => {
        if (nextPage === page) return;
        window.history.pushState({ page: nextPage }, "", `#${nextPage}`);
        setPage(nextPage);
        window.scrollTo(0, 0);
      };
      window.addEventListener("popstate", onPopState);
      return () => {
        window.removeEventListener("popstate", onPopState);
        navigate = () => {};
      };
    }, [page]);
    const content = page === "opening" ? /* @__PURE__ */ React.createElement(Opening, null) : page === "birthday" ? /* @__PURE__ */ React.createElement(Birthday, null) : page === "memories" ? /* @__PURE__ */ React.createElement(Memories, null) : page === "reasons" ? /* @__PURE__ */ React.createElement(Reasons, null) : page === "quiz" ? /* @__PURE__ */ React.createElement(Quiz, null) : page === "letter" ? /* @__PURE__ */ React.createElement(Letter, null) : /* @__PURE__ */ React.createElement(Finale, null);
    return /* @__PURE__ */ React.createElement(Shell, null, content);
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
