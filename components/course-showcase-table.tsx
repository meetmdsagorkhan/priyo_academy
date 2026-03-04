'use client';

import { useMemo, useState } from 'react';
import { Clock3, Star, Users } from 'lucide-react';

type CourseItem = {
  title: string;
  mentor: string;
  duration: string;
  fee: string;
  rating?: number;
  batch: 'Featured' | 'Upcoming Batch';
  cta: string;
};

export default function CourseShowcaseTable({ items }: { items: CourseItem[] }) {
  const [filter, setFilter] = useState<'All' | 'Featured' | 'Upcoming Batch'>('Upcoming Batch');

  const filtered = useMemo(() => {
    if (filter === 'All') return items;
    return items.filter((item) => item.batch === filter);
  }, [filter, items]);

  return (
    <section className="mt-12">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold">Courses</h3>
          <p className="text-sm text-slate-300">Card-based course catalog with category navigation.</p>
        </div>
        <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
          {(['Upcoming Batch', 'Featured', 'All'] as const).map((tab) => (
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

      <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <article key={item.title} className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
            <div className={`h-36 bg-gradient-to-br ${index % 2 === 0 ? 'from-emerald-500/70 to-cyan-500/60' : 'from-green-500/70 to-teal-500/60'} p-4`}>
              <span className="inline-flex rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white">{item.batch}</span>
            </div>
            <div className="flex flex-1 flex-col space-y-4 p-5">
              <h4 className="line-clamp-2 min-h-[4rem] text-2xl font-semibold leading-snug text-white">{item.title}</h4>
              <div className="grid grid-cols-3 gap-2 text-xs text-slate-300">
                <span className="rounded-md bg-white/5 px-2 py-1">Batch {index + 15}</span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1"><Users className="h-3.5 w-3.5" /> Mentor</span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1"><Clock3 className="h-3.5 w-3.5" /> {item.duration}</span>
              </div>
              <p className="text-sm text-slate-300">By {item.mentor}</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-brand-500">{item.fee}</p>
                <p className="inline-flex items-center gap-1 text-amber-400"><Star className="h-4 w-4 fill-current" /> {item.rating ?? 'New'}</p>
              </div>
              <button className="mt-auto w-full rounded-lg bg-white/90 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white">
                {item.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
