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
      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
              Кейс
            </span>
            <span className="text-xs font-mono text-muted-foreground">Harvard Business School</span>
            <a
              href="https://disk.yandex.ru/i/2VkrVRZz7CpJRg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline"
            >
              <Icon name="ExternalLink" size={12} />
              Смотреть кейс
            </a>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.0] mb-6">
            Sorridents
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Как правило «трёх касаний» из Harvard стало основой нашей аналитики и изменило экономику стоматологий.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 max-w-xl">
            <p className="text-base md:text-lg font-medium leading-relaxed text-foreground">
              «Их рост строился не на рекламе и не на скидках. Он строился на управлении конверсией.»
            </p>
          </blockquote>
        </div>
      </section>

      {/* Story: Origin */}
      <section className="border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Откуда всё началось
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5">
                Коротко о Sorridents
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Когда я учился в Harvard Online Business School, один кейс особенно запомнился — сеть стоматологий Sorridents.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                На первый взгляд — обычная стоматологическая сеть. Но при детальном разборе стало понятно: Sorridents — одна из крупнейших стоматологических сетей Бразилии, выросшая до сотён клиник по франчайзинговой модели.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Их ключевой управленческий принцип — <span className="font-semibold text-foreground">правило трёх касаний</span>. Именно управление переходами между этапами позволило им масштабировать сеть, прогнозировать выручку и удерживать стабильные KPI при открытии новых точек.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Три принципа модели
              </p>
              {[
                { icon: 'User', text: 'Пациент не всегда принимает решение с первого контакта' },
                { icon: 'GitBranch', text: 'Конверсия — это результат последовательных взаимодействий' },
                { icon: 'ArrowRight', text: 'Клиника должна управлять не визитами, а переходами между этапами' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-border rounded-xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} size={15} className="text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Кейс в цифрах
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 border border-border rounded-2xl overflow-hidden divide-x divide-y divide-border">
            {stats.map((s, i) => (
              <div key={i} className="p-6 bg-white hover:bg-secondary/50 transition-colors">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1 leading-none tabular-nums">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Ортодонтия ~32,9% операционного микса, проф. гигиена ~27% · Почти половина процедур — в рассрочку
          </p>
        </div>
      </section>

      {/* Story: Problem */}
      <section className="border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Проблема
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
            Теория есть. Инструмента — нет
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50/60 border border-red-200 rounded-2xl p-6">
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-red-500 mb-4">
                Что видели в МИС
              </p>
              <ul className="space-y-2">
                {['Записи', 'Приёмы', 'Выручку'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={14} className="text-red-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-slate-500 mb-4">
                Чего не видели
              </p>
              <ul className="space-y-2">
                {[
                  'Сколько первичных пациентов доходят до повторного визита',
                  'Сколько переходят в рекомендации',
                  'Где именно теряется пациент',
                  'Какие касания влияют на решение',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="X" size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-base font-semibold text-muted-foreground border border-border rounded-xl bg-white px-6 py-4 max-w-md mx-auto">
            Мы управляли <span className="text-foreground">ощущениями</span>
          </p>
        </div>
      </section>

      {/* Story: Solution */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Решение
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
            От идеи к собственной МИС
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Когда мы начали разрабатывать собственную МИС, цель была предельно конкретной: создать аналитику, которая показывает конверсии, а не отчёты.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div>
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Что нас интересовало
              </p>
              <ul className="space-y-2.5">
                {[
                  'Переход первичных пациентов в повторные',
                  'Движение пациентов по этапам',
                  'Поведение вторичных и лояльных пациентов',
                  'Точки потери',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Icon name="ChevronRight" size={15} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Пять лет разработки
              </p>
              <div className="space-y-2">
                {[
                  { label: 'Разработка системы', icon: 'Code2' },
                  { label: 'Тестирование гипотез', icon: 'FlaskConical' },
                  { label: 'Внедрение в собственных клиниках', icon: 'Building2' },
                  { label: 'Доработка на реальных данных', icon: 'BarChart2' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={step.icon} size={13} className="text-primary" />
                    </div>
                    <span className="text-sm">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Момент истины
            </p>
            <p className="text-base leading-relaxed mb-5">
              Когда мы впервые выгрузили реальные данные по клиникам, результат был неприятным. Фактические конверсии оказались значительно ниже ожиданий.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-xl p-4">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Раньше казалось</p>
                <p className="text-base font-semibold">«В целом всё нормально»</p>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="text-xs font-mono text-red-500 uppercase tracking-widest mb-2">В цифрах оказалось</p>
                <ul className="space-y-1">
                  {[
                    'Большие потери между этапами',
                    'Слабая конверсия в повторные визиты',
                    'Недоиспользованный потенциал базы',
                  ].map((t, i) => (
                    <li key={i} className="text-sm text-red-700 flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story: Why it worked */}
      <section className="border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Точка роста
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
              Почему аналитика изменила всё
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Пока мы не видели конверсии — мы не могли ими управлять.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              После появления аналитики мы начали работать с этапами, внедрили системные касания и стали управлять переходами, а не визитами.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-foreground mb-1">И именно в этот момент —</p>
              <p className="text-muted-foreground">
                KPI перестали быть теорией из кейса Harvard. Они стали реальными управляемыми показателями.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
