type Item = { q: string; a: string };

/**
 * FAQ accordion built on native <details>/<summary>.
 * Works without JavaScript, keyboard accessible by default.
 */
export function Accordion({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-border rounded-lg bg-white shadow-card">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-lg text-navy marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="grid size-8 shrink-0 place-items-center rounded-full bg-sand text-pink transition-transform duration-200 group-open:rotate-45"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2v12M2 8h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <div className="px-6 pb-6 -mt-1 text-base text-muted">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
