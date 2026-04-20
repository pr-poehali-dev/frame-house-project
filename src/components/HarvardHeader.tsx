import { useState } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'О кейсе', anchor: '#story' },
  { label: 'Три касания', anchor: '#three-touches' },
  { label: 'KPI и регламент', anchor: '#kpi' },
  { label: 'Выводы', anchor: '#conclusion' },
];

export default function HarvardHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (anchor: string) => {
    setMobileOpen(false);
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top crimson bar */}
      <div className="bg-[#A41034] text-white">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="text-xs font-table font-bold tracking-[0.18em] uppercase opacity-90">
            Harvard Business School
          </span>
          <a
            href="https://future-it-dent.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-table text-white/80 hover:text-white transition-colors"
          >
            <Icon name="ExternalLink" size={11} />
            Future IT Dent
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/bucket/86a43792-b5ea-4d59-8dfb-0ab213c2de9b.jpeg"
              alt="Harvard"
              className="h-10 w-10 object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm font-bold text-[#1b1b1b] font-table tracking-tight">Case Study</div>
              <div className="text-xs text-[#A41034] font-table font-semibold tracking-wide">Sorridents · 3 Касания</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.anchor}
                onClick={() => handleNav(item.anchor)}
                className="text-sm font-table text-gray-700 hover:text-[#A41034] transition-colors border-b-2 border-transparent hover:border-[#A41034] pb-0.5"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://disk.yandex.ru/i/2VkrVRZz7CpJRg"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-1.5 bg-[#A41034] text-white text-xs font-table font-semibold rounded hover:bg-[#8a0c2a] transition-colors"
            >
              Скачать PDF
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.anchor}
                onClick={() => handleNav(item.anchor)}
                className="text-sm font-table text-gray-700 hover:text-[#A41034] transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}