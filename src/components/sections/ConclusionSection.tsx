import Icon from '@/components/ui/icon';

const conclusions = [
  { icon: 'Layers', label: 'Правило трёх касаний', desc: 'это операционная модель' },
  { icon: 'BarChart2', label: 'Аналитика конверсий', desc: 'инструмент управления' },
  { icon: 'Database', label: 'МИС', desc: 'система роста, а не программа учёта' },
];

export default function ConclusionSection() {
  return (
    <>
      {/* Red accent divider */}
      <div className="bg-primary">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <p
            className="text-white/80 text-sm font-table tracking-wide text-center"
          >
            «Нельзя управлять тем, что нельзя измерить» — Harvard Business School
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <section className="border-b border-border bg-[#fafaf9]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-[2px] bg-primary" />
            <p className="text-xs font-table font-bold tracking-[0.12em] uppercase text-primary">
              Главный вывод
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 max-w-2xl">
            Стоматология перестаёт быть ремеслом — и становится управляемым бизнесом
          </h2>

          <div className="max-w-2xl space-y-4 mb-10 text-base text-muted-foreground leading-relaxed">
            <p>Sorridents дали правильную модель мышления.</p>
            <p>Но реальный рост начинается не с вдохновения кейсом — а с появления системы измерения.</p>
            <div className="pt-2 space-y-3 border-l-4 border-primary pl-6">
              <p
                className="font-semibold text-foreground text-lg"
                style={{ fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic' }}
              >
                Нельзя управлять тем, что нельзя измерить.
              </p>
              <p
                className="font-semibold text-foreground text-lg"
                style={{ fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic' }}
              >
                Нельзя масштабировать то, что не стандартизировано.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {conclusions.map((c, i) => (
              <div key={i} className={`border rounded-2xl p-5 flex items-start gap-4 ${
                i === 0 ? 'bg-primary border-primary' : 'bg-white border-border'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  i === 0 ? 'bg-white/20' : 'bg-primary'
                }`}>
                  <Icon name={c.icon} size={18} className={i === 0 ? 'text-white' : 'text-white'} />
                </div>
                <div>
                  <p className={`font-bold text-base mb-0.5 ${i === 0 ? 'text-white' : ''}`}>{c.label}</p>
                  <p className={`text-sm font-table ${i === 0 ? 'text-white/75' : 'text-muted-foreground'}`}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Top bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div>
              <p
                className="font-bold text-2xl text-white mb-1"
                style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
              >
                Sorident
              </p>
              <p className="text-sm font-table text-white/50">Пациентопоток → продажа → повтор → рекомендации</p>
            </div>
            <a
              href="https://disk.yandex.ru/i/2VkrVRZz7CpJRg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-table font-semibold bg-primary text-white rounded-full px-5 py-2.5 hover:bg-primary/90 transition-colors"
            >
              <Icon name="FileText" size={14} />
              Полный кейс Harvard
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <p className="text-xs font-table text-white/30">
              Harvard Business School · Case Study
            </p>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <p className="text-xs font-table text-white/30">
              Методология правила трёх касаний
            </p>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <p className="text-xs font-table text-white/30">
              Sorridents Brasil
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
