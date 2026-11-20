import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { birthday } from "@/config/birthday";
import { imageVariants } from "@/lib/images";

const landscape = imageVariants("7");

export function LittleThings() {
  const { title, intro, signoff, notes } = birthday.littleThings;
  const [selectedId, setSelectedId] = useState(notes[0]?.id);
  const reduceMotion = useReducedMotion();
  const note = notes.find((item) => item.id === selectedId) ?? notes[0];

  if (!note) return null;

  return (
    <section
      id="little-things"
      aria-labelledby="little-things-heading"
      className="relative isolate overflow-hidden px-6 py-20 sm:py-24 lg:py-28"
    >
      <img
        {...landscape}
        sizes="100vw"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-night/75" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night via-transparent to-night" />

      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-2xl text-gold">Chapter III</p>
          <h2
            id="little-things-heading"
            className="mt-2 text-balance font-display text-4xl italic leading-tight text-cream md:text-6xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream sm:text-lg">{intro}</p>
        </header>

        <div className="mt-10 grid items-center gap-8 sm:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
          <div
            role="group"
            aria-label="Pilih catatan untukmu"
            className="flex min-w-0 flex-wrap justify-center gap-x-6 gap-y-2 md:flex-col md:items-stretch md:gap-4"
          >
            {notes.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={item.id === note.id}
                aria-controls="little-things-note"
                onClick={() => setSelectedId(item.id)}
                className={`min-h-12 cursor-pointer rounded-sm border-b-2 px-2 py-3 font-hand text-2xl transition-colors duration-200 hover:bg-night/30 active:bg-night/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream motion-reduce:transition-none md:px-4 md:text-left md:text-3xl ${
                  item.id === note.id
                    ? "border-sakura font-bold text-sakura"
                    : "border-transparent text-cream hover:border-cream/60 hover:text-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div
            id="little-things-note"
            role="region"
            aria-label="Catatan untukmu"
            aria-live="polite"
            aria-atomic="true"
            className="min-h-80 min-w-0 rounded-sm bg-cream px-7 py-8 text-ink shadow-card sm:min-h-88 sm:p-10"
          >
            <motion.div
              key={note.id}
              initial={reduceMotion ? false : { opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
            >
              <h3 className="font-hand text-3xl font-bold sm:text-4xl">{note.title}</h3>
              <p className="mt-5 break-words font-display text-2xl italic leading-relaxed sm:text-3xl">
                {note.message}
              </p>
              <p className="mt-8 border-t border-ink/20 pt-4 font-hand text-xl leading-relaxed">
                {signoff}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
