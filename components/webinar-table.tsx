'use client';

import { useMemo, useState } from 'react';
import { CalendarClock, PlayCircle } from 'lucide-react';

type WebinarItem = {
  title: string;
  host: string;
  schedule: string;
  access: string;
  cta: string;
  type: 'Upcoming' | 'Previous';
};

export default function WebinarTable({ items }: { items: WebinarItem[] }) {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Previous'>('All');

  const filteredItems = useMemo(() => {
    if (filter === 'All') return items;
    return items.filter((item) => item.type === filter);
  }, [filter, items]);

  return (
    <section className="mt-14">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold">Webinars</h3>
          <p className="text-sm text-slate-300">Card-based webinars with tab navigation by status.</p>
        </div>
        <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
          {(['All', 'Upcoming', 'Previous'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                filter === tab ? 'bg-brand-gradient text-slate-900' : 'text-slate-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
            <div className={`h-32 bg-gradient-to-br ${index % 2 === 0 ? 'from-indigo-500/60 to-cyan-500/60' : 'from-emerald-500/60 to-blue-500/60'} p-4`}>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.type === 'Upcoming' ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-200 text-slate-800'}`}>
                {item.type}
              </span>
            </div>
            <div className="space-y-4 p-5">
              <h4 className="line-clamp-2 text-2xl font-semibold leading-snug text-white">{item.title}</h4>
              <p className="text-sm text-slate-300">Hosted by {item.host}</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1"><CalendarClock className="h-3.5 w-3.5" /> {item.schedule}</span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1"><PlayCircle className="h-3.5 w-3.5" /> {item.access}</span>
              </div>
              <button className="w-full rounded-lg bg-white/90 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white">
                {item.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
