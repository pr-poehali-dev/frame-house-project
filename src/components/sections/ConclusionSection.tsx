import Icon from '@/components/ui/icon';

const conclusions = [
  { icon: 'Layers', label: 'Правило трёх касаний', desc: 'это операционная модель' },
  { icon: 'BarChart2', label: 'Аналитика конверсий', desc: 'инструмент управления' },
  { icon: 'Database', label: 'МИС', desc: 'система роста, а не программа учёта' },
];

export default function ConclusionSection() {
  return (
    <>
      {/* Conclusion */}
      <section className="border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Главный вывод
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 max-w-2xl">
            Стоматология перестаёт быть ремеслом — и становится управляемым бизнесом
          </h2>

          <div className="max-w-2xl space-y-3 mb-10 text-muted-foreground">
            <p>Sorridents дали правильную модель мышления.</p>
            <p>Но реальный рост начинается не с вдохновения кейсом — а с появления системы измерения.</p>
            <div className="pt-2 space-y-2">
              <p className="font-semibold text-foreground">Нельзя управлять тем, что нельзя измерить.</p>
              <p className="font-semibold text-foreground">Нельзя масштабировать то, что не стандартизировано.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {conclusions.map((c, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon} size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5">{c.label}</p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-black text-xl">Sorridents</p>
            <p className="text-sm text-muted-foreground mt-0.5">Пациентопоток → продажа → повтор → рекомендации</p>
          </div>
          <a
            href="https://disk.yandex.ru/i/2VkrVRZz7CpJRg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 rounded-full px-5 py-2.5 hover:bg-primary hover:text-white transition-colors"
          >
            <Icon name="FileText" size={14} />
            Полный кейс Harvard
          </a>
        </div>
      </footer>
    </>
  );
}
