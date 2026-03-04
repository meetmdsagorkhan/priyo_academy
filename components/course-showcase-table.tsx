'use client';

import { useMemo, useState } from 'react';

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
  const [filter, setFilter] = useState<'All' | 'Featured' | 'Upcoming Batch'>('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return items;
    return items.filter((item) => item.batch === filter);
  }, [filter, items]);

  return (
    <section className="mt-12">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold">Courses</h3>
          <p className="text-sm text-slate-300">Browse courses in one table with tab-like navigation.</p>
        </div>
        <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
          {(['All', 'Featured', 'Upcoming Batch'] as const).map((tab) => (
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

      <div className="glass-card overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 bg-white/5 text-slate-200">
            <tr>
              <th className="px-4 py-3">Track</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Mentor</th>
              <th className="px-4 py-3">Duration / Start</th>
              <th className="px-4 py-3">Fee</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.title} className="border-b border-white/5">
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.batch === 'Featured' ? 'bg-brand-500/15 text-brand-500' : 'bg-cyan-500/15 text-cyan-300'
                    }`}
                  >
                    {item.batch}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-slate-100">{item.title}</td>
                <td className="px-4 py-3 text-slate-300">{item.mentor}</td>
                <td className="px-4 py-3 text-slate-300">{item.duration}</td>
                <td className="px-4 py-3 text-brand-500">{item.fee}</td>
                <td className="px-4 py-3 text-amber-400">{item.rating ?? '—'}</td>
                <td className="px-4 py-3 text-right">
                  <button className="rounded-lg bg-brand-gradient px-3 py-2 text-xs font-semibold text-slate-900">
                    {item.cta}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
