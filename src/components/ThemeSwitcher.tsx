import { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

type Theme = 'theme-a' | 'theme-b' | 'theme-c';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('theme-c');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('theme-a', 'theme-b', 'theme-c');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-full hover:bg-theme-bg-alt text-theme-text-muted hover:text-theme-text transition-colors border border-theme-border"
        aria-label="Theme switcher"
      >
        <Settings size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-theme-bg border border-theme-border rounded-lg shadow-xl py-2 z-50">
          <div className="px-4 py-2 text-xs font-mono text-theme-text-muted border-b border-theme-border mb-2">
            SELECT AESTHETIC
          </div>
          <button
            onClick={() => toggleTheme('theme-a')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-theme-bg-alt flex items-center justify-between ${theme === 'theme-a' ? 'text-theme-primary' : 'text-theme-text'}`}
          >
            <span className="font-mono">Terminal (A)</span>
            {theme === 'theme-a' && <span>●</span>}
          </button>
          <button
            onClick={() => toggleTheme('theme-b')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-theme-bg-alt flex items-center justify-between ${theme === 'theme-b' ? 'text-theme-primary' : 'text-theme-text'}`}
          >
            <span className="font-mono">Synthwave (B)</span>
            {theme === 'theme-b' && <span>●</span>}
          </button>
          <button
            onClick={() => toggleTheme('theme-c')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-theme-bg-alt flex items-center justify-between ${theme === 'theme-c' ? 'text-theme-primary' : 'text-theme-text'}`}
          >
            <span className="font-mono">Analógico (C)</span>
            {theme === 'theme-c' && <span>●</span>}
          </button>
        </div>
      )}
    </div>
  );
}
