export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="glass-panel sticky top-24 h-fit rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold">Your Stack</h3>
          <p className="text-xs text-base-muted">
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="rounded-full border border-base-border px-3 py-1.5 text-xs font-medium text-base-muted transition-colors hover:border-rose-400/40 hover:text-rose-300"
          >
            Remove All
          </button>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        {stack.length === 0 ? (
          <EmptyState />
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-base-border bg-white/[0.02] p-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] p-1.5">
                <img src={tech.icon} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-base-text">
                  {tech.name}
                </p>
                <p className="text-xs text-base-muted">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech)}
                aria-label={`Remove ${tech.name} from your stack`}
                className="shrink-0 rounded-full p-1.5 text-base-muted transition-colors hover:bg-rose-400/10 hover:text-rose-300"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-base-border px-4 py-10 text-center">
      <p className="text-sm text-base-muted">
        Your stack is empty. Add technologies from the grid to start
        building it.
      </p>
    </div>
  );
}
