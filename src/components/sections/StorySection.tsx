import Icon from '@/components/ui/icon';

const stats = [
  { value: '440 000', label: 'пациентов обслужено за год' },
  { value: '2 млн+', label: 'пациентов в базе' },
  { value: '95%', label: 'удовлетворённость клиентов' },
  { value: '20–25%', label: 'EBITDA от выручки' },
  { value: '4,5', label: 'визита в год на пациента' },
  { value: '84%', label: 'рассрочек — оплата картой' },
];

export default function StorySection() {
  return (
    <div id="story">
      {/* Hero Banner — Harvard Symposium style */}
      <section className="relative h-[520px] md:h-[600px] overflow-hidden">
        {/* Background photo */}
        <img
          src="https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/006ab0c5-e940-40e8-a068-839573b2115f.jpg"
          alt="Harvard campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Text block bottom-left — Harvard Symposium style */}
        <div className="absolute bottom-0 left-0 right-0 md:right-auto md:max-w-[55%]">
          <div className="bg-[#1a1a1a]/95 px-8 pt-8 pb-10 md:px-12 md:pt-10 md:pb-14">
            <div className="w-10 h-[2px] bg-[#A41034] mb-4" />
            <p className="text-white/60 text-sm font-table mb-2">Harvard Business School · Case Study</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              Три касания, которые изменили стоматологию
            </h1>
            <p className="text-white/75 text-base leading-relaxed mb-6 max-w-lg">
              Как правило управления конверсией из Harvard стало основой аналитики сети Sorridents и изменило экономику клиник.
            </p>
            <button
              onClick={() => document.querySelector('#three-touches')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 text-white text-sm font-table font-semibold"
            >
              <span className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
                <Icon name="ArrowRight" size={16} />
              </span>
              Читать методологию
            </button>
          </div>
        </div>
      </section>

      {/* About Sorridents */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-[#A41034]" />
                <p className="text-xs font-table font-bold tracking-[0.14em] uppercase text-[#A41034]">
                  Откуда всё началось
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#1b1b1b]"
                style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
                Коротко о Sorridents
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/bucket/9494c93c-7ba3-4f6b-b29a-7be4a209fd02.jpeg"
                  alt="Sorridents"
                  className="h-10 object-contain"
                />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Когда я учился в Harvard Online Business School, один кейс особенно запомнился — сеть стоматологий Sorridents.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                На первый взгляд — обычная стоматологическая сеть. Но при детальном разборе стало понятно: Sorridents — одна из крупнейших стоматологических сетей Бразилии, выросшая до сотён клиник по франчайзинговой модели.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Их ключевой управленческий принцип — <span className="font-semibold text-[#1b1b1b]">правило трёх касаний</span>. Именно управление переходами между этапами позволило им масштабировать сеть и прогнозировать выручку.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-[#A41034]" />
                <p className="text-xs font-table font-bold tracking-[0.14em] uppercase text-[#A41034]">
                  Три принципа модели
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: 'User', text: 'Пациент не всегда принимает решение с первого контакта' },
                  { icon: 'GitBranch', text: 'Конверсия — это результат последовательных взаимодействий' },
                  { icon: 'ArrowRight', text: 'Клиника должна управлять не визитами, а переходами между этапами' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 border border-gray-200 rounded-lg p-5 hover:border-[#A41034]/30 hover:bg-red-50/30 transition-colors">
                    <div className="w-8 h-8 rounded bg-[#A41034]/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={15} className="text-[#A41034]" />
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Blockquote */}
              <div className="mt-6 border-l-4 border-[#A41034] pl-5 py-1">
                <p className="text-base italic text-gray-700 leading-relaxed mb-2"
                  style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
                  «Их рост строился не на рекламе и не на скидках. Он строился на управлении конверсией.»
                </p>
                <p className="text-xs font-table text-gray-500">— Harvard Business School Case, Sorridents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crimson banner */}
      <div className="bg-[#A41034]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <p className="text-white/60 text-xs font-table font-bold tracking-[0.14em] uppercase whitespace-nowrap">
            Кейс в цифрах
          </p>
          <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed"
            style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
            Sorridents обслужили более 440 000 пациентов за год, удерживая EBITDA 20–25% и NPS ≥ 95%
          </p>
        </div>
      </div>

      {/* Stats grid */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-[#A41034]" />
            <p className="text-xs font-table font-bold tracking-[0.14em] uppercase text-[#A41034]">
              Ключевые показатели
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 border border-gray-200 rounded-xl overflow-hidden divide-x divide-y divide-gray-200">
            {stats.map((s, i) => (
              <div key={i} className="p-6 bg-white hover:bg-red-50/40 transition-colors group">
                <div
                  className="text-3xl md:text-4xl font-bold text-[#A41034] mb-1 leading-none tabular-nums"
                  style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
                >
                  {s.value}
                </div>
                <div className="text-sm font-table text-gray-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs font-table text-gray-400">
            Ортодонтия ~32,9% операционного микса, проф. гигиена ~27% · Почти половина процедур — в рассрочку
          </p>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#A41034]" />
            <p className="text-xs font-table font-bold tracking-[0.14em] uppercase text-[#A41034]">
              Проблема
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-[#1b1b1b]"
            style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
            Теория есть. Инструмента — нет
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="border-2 border-[#A41034]/20 rounded-xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#A41034]" />
                <p className="text-xs font-table font-bold uppercase tracking-widest text-[#A41034]">
                  Что видели в МИС
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  'Количество записей в день',
                  'Сумма выставленных планов',
                  'Выручка по кассе',
                  'Процент незакрытых планов',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-table text-gray-600">
                    <Icon name="Minus" size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-[#A41034] rounded-xl p-6 bg-red-50/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#A41034]" />
                <p className="text-xs font-table font-bold uppercase tracking-widest text-[#A41034]">
                  Чего не хватало
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  'Конверсия звонка в запись',
                  'Конверсия визита в план лечения',
                  'Конверсия плана в оплату',
                  'Причины потери на каждом этапе',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-table text-gray-700">
                    <Icon name="Plus" size={14} className="text-[#A41034] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-3xl">
            <p className="text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#1b1b1b]">Результат:</span> клиники видели «хорошие» цифры и не понимали, почему выручка не растёт. Без измерения конверсии между касаниями — это невозможно диагностировать.
            </p>
          </div>
        </div>
      </section>

      {/* Photo banner 1 — between Problem and Methodology */}
      <div className="relative h-52 md:h-72 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/2ebf08bb-75d7-4335-a79f-1ccdb09b5920.jpg"
          alt="Harvard campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/55" />
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <p className="text-white/50 text-xs font-table font-bold tracking-[0.16em] uppercase mb-2">Harvard Business School</p>
            <p className="text-white text-2xl md:text-3xl font-bold leading-snug max-w-xl"
              style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              Управляй переходами — а не визитами
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}