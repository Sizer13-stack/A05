import TechCard from "./TechCard.jsx";

export default function TechGrid({ technologies, isLoading, isInStack, onAdd }) {
  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Browse technologies
        </h2>
        <p className="mt-2 text-sm text-base-muted">
          Pick anything that fits your project. You can remove items later.
        </p>
      </div>

      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              added={isInStack(tech.id)}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-base-border py-24 text-base-muted">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-pink border-t-transparent" />
      <p className="text-sm">Loading technologies…</p>
    </div>
  );
}
