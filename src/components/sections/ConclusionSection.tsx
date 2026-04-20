import Icon from '@/components/ui/icon';

const conclusions = [
  { icon: 'Layers', label: 'Правило трёх касаний', desc: 'это операционная модель' },
  { icon: 'BarChart2', label: 'Аналитика конверсий', desc: 'инструмент управления' },
  { icon: 'Database', label: 'МИС', desc: 'система роста, а не программа учёта' },
];

export default function ConclusionSection() {
  return (
    <div id="conclusion">
      {/* Crimson quote bar */}
      <div className="bg-[#A41034]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-white/80 text-sm font-table tracking-wide text-center italic"
            style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
            «Нельзя управлять тем, что нельзя измерить» — Harvard Business School
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#A41034]" />
            <p className="text-xs font-table font-bold tracking-[0.14em] uppercase text-[#A41034]">
              Главный вывод
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 max-w-2xl text-[#1b1b1b]"
            style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
            Стоматология перестаёт быть ремеслом — и становится управляемым бизнесом
          </h2>

          <div className="max-w-2xl space-y-4 mb-10 text-base text-gray-600 leading-relaxed">
            <p>Sorridents дали правильную модель мышления.</p>
            <p>Но реальный рост начинается не с вдохновения кейсом — а с появления системы измерения.</p>
            <div className="pt-2 space-y-3 border-l-4 border-[#A41034] pl-6">
              <p className="font-semibold text-[#1b1b1b] text-lg italic"
                style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
                Нельзя управлять тем, что нельзя измерить.
              </p>
              <p className="font-semibold text-[#1b1b1b] text-lg italic"
                style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
                Нельзя масштабировать то, что не стандартизировано.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {conclusions.map((c, i) => (
              <div key={i} className={`border rounded-xl p-5 flex items-start gap-4 ${
                i === 0 ? 'bg-[#A41034] border-[#A41034]' : 'bg-white border-gray-200'
              }`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  i === 0 ? 'bg-white/20' : 'bg-[#A41034]'
                }`}>
                  <Icon name={c.icon} size={18} className="text-white" />
                </div>
                <div>
                  <p className={`font-bold text-base mb-0.5 ${i === 0 ? 'text-white' : 'text-[#1b1b1b]'}`}>{c.label}</p>
                  <p className={`text-sm font-table ${i === 0 ? 'text-white/75' : 'text-gray-500'}`}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer — Harvard dark style */}
      <footer className="bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/bucket/86a43792-b5ea-4d59-8dfb-0ab213c2de9b.jpeg"
                alt="Harvard"
                className="h-12 w-12 object-contain opacity-80"
              />
              <div>
                <p className="font-bold text-xl text-white mb-0.5"
                  style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
                  Harvard Business School
                </p>
                <p className="text-sm font-table text-white/50">Case Study · Sorridents · Три касания</p>
              </div>
            </div>
            <a
              href="https://disk.yandex.ru/i/2VkrVRZz7CpJRg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-table font-semibold bg-[#A41034] text-white rounded px-5 py-2.5 hover:bg-[#8a0c2a] transition-colors"
            >
              <Icon name="FileText" size={14} />
              Полный кейс Harvard
            </a>
          </div>


        </div>
      </footer>
    </div>
  );
}