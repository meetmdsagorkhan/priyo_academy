'use client';

import { useMemo, useState } from 'react';

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
          <p className="text-sm text-slate-300">One table with navigation to switch between upcoming and previous sessions.</p>
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

      <div className="glass-card overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 bg-white/5 text-slate-200">
            <tr>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Webinar</th>
              <th className="px-4 py-3">Host</th>
              <th className="px-4 py-3">Schedule / Attendance</th>
              <th className="px-4 py-3">Access</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.title} className="border-b border-white/5">
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.type === 'Upcoming'
                        ? 'bg-brand-500/15 text-brand-500'
                        : 'bg-slate-500/20 text-slate-300'
                    }`}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-slate-100">{item.title}</td>
                <td className="px-4 py-3 text-slate-300">{item.host}</td>
                <td className="px-4 py-3 text-slate-300">{item.schedule}</td>
                <td className="px-4 py-3 text-brand-500">{item.access}</td>
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
