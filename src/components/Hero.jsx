export default function Hero({ onExploreClick }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 lg:grid-cols-2 lg:pb-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-base-border bg-white/[0.03] px-3 py-1 text-xs text-base-muted">
            13+ technologies, one stack
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Build your own
            <br />
            <span className="brand-text">developer stack</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-base-muted">
            Explore frontend, backend, database, and tooling choices side by
            side, then collect the ones you'd actually reach for on your next
            project.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="rounded-full brand-fill px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-violet/25 transition-transform hover:scale-[1.03]"
            >
              Explore Technologies
            </button>
            <a
              href="#about"
              className="rounded-full border border-base-border px-7 py-3 text-sm font-semibold text-base-text transition-colors hover:border-brand-pink/60"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute inset-0 -z-10 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, var(--brand-violet), transparent)",
            }}
          />
          <img
            src="/assets/hero-stack.webp"
            alt="Layered illustration of a technology stack, from hardware at the base to interface controls on top"
            className="w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
