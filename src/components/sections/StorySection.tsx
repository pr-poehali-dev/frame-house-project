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
    <>
      {/* Harvard Header Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="text-xs font-table font-bold tracking-[0.15em] uppercase opacity-90">
              Harvard Business School
            </span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-xs font-table tracking-wide opacity-75">Case Study</span>
          </div>
          <a
            href="https://disk.yandex.ru/i/2VkrVRZz7CpJRg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-table font-semibold text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors"
          >
            <Icon name="ExternalLink" size={11} />
            Открыть кейс
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-28">

          {/* Logo + Brand */}
          <div className="mb-10">
            <div className="inline-flex items-baseline gap-3 mb-4">
              <h1
                className="text-[72px] md:text-[108px] font-bold tracking-[-0.02em] leading-none text-foreground"
                style={{ fontFamily: '"EB Garamond", Georgia, serif', letterSpacing: '-0.025em' }}
              >
                Sorident
              </h1>
              <span className="text-2xl md:text-4xl font-normal text-primary opacity-80 mb-1">®</span>
            </div>

            {/* Red accent rule under logo */}
            <div className="flex items-center gap-0 mb-6">
              <div className="h-[3px] w-24 bg-primary" />
              <div className="h-[3px] w-8 bg-primary/40" />
              <div className="h-[3px] w-4 bg-primary/20" />
            </div>

            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
              style={{ fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic' }}
            >
              Как правило «трёх касаний» из Harvard стало основой нашей аналитики
              и изменило экономику стоматологий.
            </p>
          </div>

          {/* Blockquote — Harvard style */}
          <div className="relative max-w-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
            <div className="pl-7">
              <p
                className="text-lg md:text-xl leading-relaxed text-foreground font-medium mb-3"
                style={{ fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic' }}
              >
                «Их рост строился не на рекламе и не на скидках.
                Он строился на управлении конверсией.»
              </p>
              <p className="text-sm text-muted-foreground font-table">
                — Harvard Business School Case, Sorridents
              </p>
            </div>
          </div>

          {/* Red accent pills */}
          <div className="flex flex-wrap gap-2 mt-10">
            {['Franquia', 'Gestão de conversão', 'Modelo de 3 toques', 'Brasil → Мировой масштаб'].map((tag, i) => (
              <span
                key={i}
                className={`text-xs font-table px-3 py-1.5 rounded-full border ${
                  i === 0
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-transparent text-primary border-primary/40'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Story: Origin */}
      <section className="border-b border-border bg-[#fafaf9]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-[2px] bg-primary" />
                <p className="text-xs font-table font-bold tracking-[0.12em] uppercase text-primary">
                  Откуда всё началось
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Коротко о Sorridents
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Когда я учился в Harvard Online Business School, один кейс особенно запомнился — сеть стоматологий Sorridents.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                На первый взгляд — обычная стоматологическая сеть. Но при детальном разборе стало понятно: Sorridents — одна из крупнейших стоматологических сетей Бразилии, выросшая до сотён клиник по франчайзинговой модели.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Их ключевой управленческий принцип — <span className="font-semibold text-foreground">правило трёх касаний</span>. Именно управление переходами между этапами позволило им масштабировать сеть, прогнозировать выручку и удерживать стабильные KPI при открытии новых точек.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-[2px] bg-primary" />
                <p className="text-xs font-table font-bold tracking-[0.12em] uppercase text-primary">
                  Три принципа модели
                </p>
              </div>
              {[
                { icon: 'User', text: 'Пациент не всегда принимает решение с первого контакта' },
                { icon: 'GitBranch', text: 'Конверсия — это результат последовательных взаимодействий' },
                { icon: 'ArrowRight', text: 'Клиника должна управлять не визитами, а переходами между этапами' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} size={15} className="text-primary" />
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Red accent banner */}
      <div className="bg-primary">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p
            className="text-white/70 text-xs font-table font-bold tracking-[0.12em] uppercase mb-2"
          >
            Кейс в цифрах
          </p>
          <p
            className="text-white text-xl md:text-2xl font-semibold max-w-2xl leading-relaxed"
            style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
          >
            Sorridents обслужили более 440 000 пациентов за год,
            удерживая EBITDA 20–25% и NPS ≥ 95%
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 border border-border rounded-2xl overflow-hidden divide-x divide-y divide-border">
            {stats.map((s, i) => (
              <div key={i} className="p-6 bg-white hover:bg-red-50/40 transition-colors group">
                <div
                  className="text-3xl md:text-4xl font-bold text-primary mb-1 leading-none tabular-nums group-hover:text-primary transition-colors"
                  style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
                >
                  {s.value}
                </div>
                <div className="text-sm font-table text-muted-foreground leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs font-table text-muted-foreground">
            Ортодонтия ~32,9% операционного микса, проф. гигиена ~27% · Почти половина процедур — в рассрочку
          </p>
        </div>
      </section>

      {/* Story: Problem */}
      <section className="border-b border-border bg-[#fafaf9]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-[2px] bg-primary" />
            <p className="text-xs font-table font-bold tracking-[0.12em] uppercase text-primary">
              Проблема
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Теория есть. Инструмента — нет
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-2 border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-xs font-table font-bold uppercase tracking-widest text-primary">
                  Что видели в МИС
                </p>
              </div>
              <ul className="space-y-2.5">
                {['Записи', 'Приёмы', 'Выручку'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-base">
                    <Icon name="Check" size={15} className="text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                <p className="text-xs font-table font-bold uppercase tracking-widest text-muted-foreground">
                  Чего не видели
                </p>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Сколько первичных пациентов доходят до повторного визита',
                  'Сколько переходят в рекомендации',
                  'Где именно теряется пациент',
                  'Какие касания влияют на решение',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-base text-muted-foreground">
                    <Icon name="X" size={15} className="text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl px-6 py-4 max-w-md">
            <p className="text-base font-semibold text-center">
              Мы управляли <span className="text-primary italic" style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>ощущениями</span>
            </p>
          </div>
        </div>
      </section>

      {/* Story: Solution */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-[2px] bg-primary" />
            <p className="text-xs font-table font-bold tracking-[0.12em] uppercase text-primary">
              Решение
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            От идеи к собственной МИС
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Когда мы начали разрабатывать собственную МИС, цель была предельно конкретной: создать аналитику, которая показывает конверсии, а не отчёты.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div>
              <p className="text-xs font-table font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Что нас интересовало
              </p>
              <ul className="space-y-2.5">
                {[
                  'Переход первичных пациентов в повторные',
                  'Движение пациентов по этапам',
                  'Поведение вторичных и лояльных пациентов',
                  'Точки потери',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-base">
                    <Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-table font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Пять лет разработки
              </p>
              <div className="space-y-2">
                {[
                  { label: 'Разработка системы', icon: 'Code2' },
                  { label: 'Тестирование гипотез', icon: 'FlaskConical' },
                  { label: 'Внедрение в собственных клиниках', icon: 'Building2' },
                  { label: 'Доработка на реальных данных', icon: 'BarChart2' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#fafaf9] border border-border">
                    <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={14} className="text-primary" />
                    </div>
                    <span className="text-base">{item.label}</span>
                    <span className="ml-auto text-xs font-table text-muted-foreground">
                      {['2019', '2020', '2021–22', '2023–24'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Moment of truth — red accent */}
          <div className="rounded-2xl border-l-4 border-primary bg-red-50/50 p-6 md:p-8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-xs font-table font-bold uppercase tracking-widest text-primary">
                Момент истины
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-table text-muted-foreground uppercase tracking-widest mb-2">Казалось</p>
                <p className="text-base font-medium text-muted-foreground italic" style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
                  «В целом всё нормально»
                </p>
              </div>
              <div>
                <p className="text-xs font-table text-muted-foreground uppercase tracking-widest mb-2">В цифрах оказалось</p>
                <ul className="space-y-1.5">
                  {[
                    'Большие потери между этапами',
                    'Слабая конверсия в повторные визиты',
                    'Недоиспользованный потенциал базы',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-base text-foreground">
                      <Icon name="AlertTriangle" size={14} className="text-primary mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-foreground text-background p-6">
            <p
              className="text-lg md:text-xl font-medium leading-relaxed"
              style={{ fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic' }}
            >
              «Пока мы не видели конверсии — мы не могли ими управлять.
              После появления аналитики KPI перестали быть теорией из кейса Harvard.
              Они стали реальными управляемыми показателями.»
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
