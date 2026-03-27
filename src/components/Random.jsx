import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <section
      className="animate-fade-up surface-card flex flex-1 flex-col items-center gap-6 border-brand-coral/20 sm:min-w-0 md:max-w-xl"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="relative z-10 flex w-full flex-col items-center gap-2 text-center">
        <span className="rounded-full border border-brand-coral/30 bg-brand-coral/10 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-brand-peach">
          Surprise me
        </span>
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Truly random
        </h2>
        <p className="max-w-sm text-sm text-slate-400">
          Each click pulls a fresh GIF from GIPHY with no keyword filter.
        </p>
      </div>

      <div className="relative z-10 flex min-h-[280px] w-full max-w-md items-center justify-center rounded-2xl bg-black/25 ring-1 ring-inset ring-white/10">
        {loading ? (
          <Spinner />
        ) : (
          <img
            alt="Random GIF from GIPHY"
            src={gif}
            className="max-h-[min(400px,55vh)] w-full max-w-full rounded-xl object-contain p-3"
          />
        )}
      </div>

      <button
        type="button"
        onClick={clickHandler}
        className="btn-primary-warm relative z-10 font-sans"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? "Loading…" : "Generate random GIF"}
      </button>
    </section>
  );
}
