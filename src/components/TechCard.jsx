const DIFFICULTY_STYLES = {
  "Beginner-Friendly": "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
  Intermediate: "text-amber-300 bg-amber-400/10 border-amber-400/20",
  Advanced: "text-rose-300 bg-rose-400/10 border-rose-400/20",
};

export default function TechCard({ tech, added, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <article className="glass-panel flex flex-col rounded-2xl p-5 transition-colors hover:border-white/[0.16]">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] p-2">
          <img src={icon} alt="" className="h-full w-full object-contain" />
        </div>
        {badge && (
          <span className="rounded-full brand-fill px-2.5 py-1 text-[11px] font-medium text-white">
            {badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold">{name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-base-muted">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full border border-base-border px-2.5 py-1 text-base-muted">
          {category}
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 ${DIFFICULTY_STYLES[difficulty] ?? "border-base-border text-base-muted"}`}
        >
          {difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 font-medium text-base-text">
          <StarIcon />
          {rating.toFixed(1)}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={added}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition-transform ${
          added
            ? "cursor-default border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
            : "brand-fill text-white hover:scale-[1.02]"
        }`}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-3.5 w-3.5 fill-brand-orange"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.7l-5.18 2.73.99-5.77L1.62 7.6l5.79-.84L10 1.5z" />
    </svg>
  );
}
