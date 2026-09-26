type Item = { q: string; a: string };

function Plus() {
  return (
    <span
      aria-hidden="true"
      className="grid size-8 shrink-0 place-items-center rounded-full border border-current/20 text-current transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/**
 * Hairline FAQ accordion on native <details>/<summary>.
 * Works without JavaScript and is keyboard accessible by default.
 */
export function Accordion({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  const line = dark ? "border-white/15" : "border-border";
  const body = dark ? "text-white/70" : "text-muted";
  return (
    <div className={`border-t ${line}`}>
      {items.map((item) => (
        <details key={item.q} className={`group border-b ${line}`}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg marker:content-none [&::-webkit-details-marker]:hidden md:py-6">
            <span>{item.q}</span>
            <Plus />
          </summary>
          <div className={`max-w-prose pb-6 text-base ${body}`}>{item.a}</div>
        </details>
      ))}
    </div>
  );
}
