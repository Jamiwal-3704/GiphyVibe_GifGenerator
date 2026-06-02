import Random from "./components/Random";
import Tag from "./components/Tag";
import About from "./components/About";
import { useEffect, useState } from "react";

export default function App() {
  const [view, setView] = useState(() =>
    window.location.hash === "#about" ? "about" : "home",
  );

  useEffect(() => {
    function onHash() {
      setView(window.location.hash === "#about" ? "about" : "home");
    }
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="background relative flex min-h-screen flex-col items-center overflow-x-hidden px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
      <header className="animate-fade-up relative z-10 mb-12 max-w-3xl text-center">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.35em] text-brand-peach/90">
          Giphy powered
        </p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-brand-peach via-white to-brand-cyan bg-clip-text text-transparent">
            GifSpark
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-sans text-base leading-relaxed text-slate-400 sm:text-lg">
          Discover a surprise animation or search by keyword — one tap, endless
          motion.
        </p>
      </header>

      <main className="relative z-10 flex w-full max-w-6xl flex-col items-stretch gap-10 md:flex-row md:items-start md:justify-center md:gap-8 lg:gap-12">
        {view === "home" ? (
          <>
            <Random />
            <Tag />
          </>
        ) : (
          <About />
        )}
      </main>

      <footer className="relative z-10 mt-16 text-center text-xs text-slate-600">
        <span className="mr-2">Built with React · GIFs from GIPHY</span>
        <a className="text-brand-peach underline ml-2" href="#about">
          About
        </a>
      </footer>
    </div>
  );
}
