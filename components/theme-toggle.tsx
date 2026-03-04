'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !dark);
  }, [dark]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((prev) => !prev)}
      className="rounded-full border border-white/20 bg-white/10 p-2 text-slate-100 transition hover:bg-white/20"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
