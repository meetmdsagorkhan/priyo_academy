'use client';

import { useEffect, useState } from 'react';

type Counter = {
  label: string;
  target: number;
  suffix?: string;
};

const counters: Counter[] = [
  { label: 'Active Students', target: 25000, suffix: '+' },
  { label: 'Expert Mentors', target: 180, suffix: '+' },
  { label: 'Course Rating', target: 4.9, suffix: '/5' },
  { label: 'Hiring Partners', target: 95, suffix: '+' }
];

export default function StatsCounter() {
  const [values, setValues] = useState(counters.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const steps = 45;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / steps, 1);

      setValues(
        counters.map((counter) => {
          const value = counter.target * progress;
          if (counter.target % 1 !== 0) {
            return Number(value.toFixed(1));
          }
          return Math.floor(value);
        })
      );

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {counters.map((counter, idx) => (
        <article key={counter.label} className="glass-card p-5 fade-up">
          <p className="text-3xl font-bold text-white">
            {values[idx]}
            {counter.suffix}
          </p>
          <p className="mt-2 text-sm text-slate-300">{counter.label}</p>
        </article>
      ))}
    </div>
  );
}
