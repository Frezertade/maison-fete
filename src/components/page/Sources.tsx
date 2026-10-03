import type { Source } from "@/lib/service-pages";

export default function Sources({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <div className="mt-6 text-sm text-warm-gray">
      <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Sources</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-espresso">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
