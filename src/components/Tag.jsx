import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  function clickHandler() {
    fetchData(tag);
  }

  return (
    <section
      className="animate-fade-up surface-card flex flex-1 flex-col items-center gap-6 border-brand-cyan/25 sm:min-w-0 md:max-w-xl"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="relative z-10 flex w-full flex-col items-center gap-2 text-center">
        <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-brand-cyan">
          By keyword
        </span>
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Search: <span className="text-brand-cyan">{tag || "…"}</span>
        </h2>
        <p className="max-w-sm text-sm text-slate-400">
          Type a topic and generate a random GIF tagged with that idea.
        </p>
      </div>

      <div className="relative z-10 flex min-h-[280px] w-full max-w-md items-center justify-center rounded-2xl bg-black/25 ring-1 ring-inset ring-white/10">
        {loading ? (
          <Spinner />
        ) : (
          <img
            alt={`GIF tagged ${tag}`}
            src={gif}
            className="max-h-[min(400px,55vh)] w-full max-w-full rounded-xl object-contain p-3"
          />
        )}
      </div>

      <label className="relative z-10 flex w-full max-w-sm flex-col gap-2 text-left">
        <span className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">
          Keyword
        </span>
        <input
          type="text"
          value={tag}
          className="input-tag font-sans"
          onChange={changeHandler}
          placeholder="e.g. cat, space, dance"
          autoComplete="off"
        />
      </label>

      <button
        type="button"
        onClick={clickHandler}
        className="btn-primary-cool relative z-10 font-sans"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? "Loading…" : "Generate tagged GIF"}
      </button>
    </section>
  );
}
