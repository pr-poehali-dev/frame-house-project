import Icon from '@/components/ui/icon';

const stats = [
  { value: '440 000', label: 'пациентов обслужено за год' },
  { value: '2 млн+', label: 'пациентов в базе' },
  { value: '95%', label: 'удовлетворённость клиентов' },
  { value: '20–25%', label: 'EBITDA от выручки' },
  { value: '4,5', label: 'визита в год на пациента' },
  { value: '84%', label: 'рассрочек — оплата картой' },
];

const touches = [
  {
    num: '01',
    title: 'Обращение / первый контакт',
    goal: 'Быстро довести до записи',
    actions: [
      'Ответить/перезвонить быстро, без "мы уточним"',
      'Дать 2–3 варианта времени',
      'Зафиксировать запись и источник',
    ],
    kpi: [{ label: 'Конверсия "обращение → запись"', value: '≥ 65%' }],
    border: 'border-blue-200',
    bg: 'bg-blue-50/60',
    numColor: 'text-blue-700',
    iconColor: 'text-blue-600',
  },
  {
    num: '02',
    title: 'После приёма (ресепшен)',
    goal: 'Не отпустить без плана и следующей записи',
    actions: [
      'Врач выдаёт план лечения/КП (этапы + цена) и это фиксируется',
      'Администратор проговаривает варианты оплаты и ценность',
      'Пациента записывают на повторный визит (конкретная дата/время)',
      'Если "подумаю" — статус "думает" + задача на дожим',
    ],
    kpi: [
      { label: 'План лечения/КП выдан', value: '100%' },
      { label: 'Конверсия "план/КП → продажа"', value: '≥ 70%' },
      { label: 'Конверсия "продажа → повторные визиты"', value: '≥ 80%' },
    ],
    border: 'border-indigo-200',
    bg: 'bg-indigo-50/60',
    numColor: 'text-indigo-700',
    iconColor: 'text-indigo-600',
  },
  {
    num: '03',
    title: 'Follow-up (в течение 24 часов)',
    goal: 'Никто не теряется, сомневающихся возвращаем',
    actions: [
      'Звонок/сообщение: "Как самочувствие после приёма?"',
      'Если нет записи — предложить 2–3 слота',
      'Отправить запрос оценки (NPS) и рекомендаций/отзыва',
    ],
    kpi: [
      { label: 'Follow-up (≤ 24 часа + опрос самочувствия)', value: '100%' },
      { label: 'NPS / удовлетворённость', value: '≥ 95%' },
      { label: 'Конверсия "продажа → рекомендации"', value: '≥ 80%' },
    ],
    border: 'border-violet-200',
    bg: 'bg-violet-50/60',
    numColor: 'text-violet-700',
    iconColor: 'text-violet-600',
  },
];

const kpiGroups = [
  {
    icon: 'UserPlus',
    title: 'Первичный поток',
    subtitle: 'Обращение → запись',
    items: [
      { label: 'Конверсия обращения в запись пациента', value: '≥ 65%' },
    ],
  },
  {
    icon: 'TrendingUp',
    title: 'Продажи и воронка',
    items: [
      { label: 'Врач → пациенту: выдан план лечения/КП', value: '100%' },
      { label: 'Конверсия "план/КП → продажа"', value: '≥ 70%' },
      { label: 'Конверсия "продажа → повторные визиты"', value: '≥ 80%' },
      { label: 'Конверсия "продажа → рекомендации"', value: '≥ 80%' },
    ],
  },
  {
    icon: 'Stethoscope',
    title: 'Направления к смежным',
    subtitle: 'Специалисты',
    items: [
      { label: 'Рекомендации к ортодонту', value: '≥ 20%' },
      { label: 'Рекомендации к хирургу-имплантологу', value: '≥ 20%' },
    ],
  },
  {
    icon: 'Star',
    title: 'Сервис и контроль качества',
    items: [
      { label: 'Обзвон / уведомление пациента после приёма (≤ 24 ч + опрос)', value: '100%' },
      { label: 'NPS / удовлетворённость', value: '≥ 95%' },
    ],
  },
  {
    icon: 'RefreshCw',
    title: 'Возврат пациентов',
    subtitle: 'Окно 6 месяцев',
    items: [
      { label: 'Вторичные пациенты — конверсия возврата', value: '≥ 30%' },
      { label: 'Лояльные пациенты — конверсия возврата', value: '≥ 50%' },
    ],
  },
  {
    icon: 'BarChart2',
    title: 'Операционный микс',
    subtitle: 'Контроль структуры услуг',
    items: [
      { label: 'Проф. гигиена (очистка)', value: '≥ 27%' },
    ],
  },
];

const roles = [
  {
    icon: 'Stethoscope',
    role: 'Врач',
    duties: [
      'План/КП — 100%',
      'Направления к смежным: ортодонт ≥20%, хирург ≥20%',
      'Корректная фиксация в карте пациента',
    ],
  },
  {
    icon: 'UserCheck',
    role: 'Администратор / куратор',
    duties: [
      'Конверсия обращения в запись ≥ 65%',
      'Доведение КП до продажи ≥ 70%',
      'Запись на повтор ≥ 80%',
      'Follow-up 100% + запрос NPS и рекомендаций',
    ],
  },
  {
    icon: 'ClipboardList',
    role: 'Управляющий / старший администратор',
    duties: [
      'Ежедневный контроль дисциплины',
      'Еженедельный разбор KPI',
      'Устранение "дырок" в процессе',
      'Обучение и система мотивации/санкций',
    ],
  },
];

const funnel = [
  'Обращение',
  'Запись',
  'Визит',
  'План / КП',
  'Продажа',
  'Повторный визит',
  'Follow-up',
  'NPS',
  'Рекомендации',
];

const conclusions = [
  { icon: 'Layers', label: 'Правило трёх касаний', desc: 'это операционная модель' },
  { icon: 'BarChart2', label: 'Аналитика конверсий', desc: 'инструмент управления' },
  { icon: 'Database', label: 'МИС', desc: 'система роста, а не программа учёта' },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">

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

          {/* Pull quote */}
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

          {/* Truth moment */}
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

      {/* Three Touches */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-10">
            <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Методология
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              Правило трёх касаний
            </h2>
            <p className="text-muted-foreground max-w-xl text-base">
              Пациент редко принимает решение с первого раза. Клиника обязана сделать 3 касания — каждое завершается следующим шагом в CRM.
            </p>
          </div>

          <div className="space-y-4">
            {touches.map((t) => (
              <div key={t.num} className={`rounded-2xl border ${t.border} ${t.bg} p-6 md:p-8`}>
                <div className="flex flex-col md:flex-row md:gap-8">
                  <div className="md:w-64 flex-shrink-0 mb-6 md:mb-0">
                    <div className={`text-6xl font-black font-mono ${t.numColor} opacity-20 leading-none mb-3`}>
                      {t.num}
                    </div>
                    <h3 className="text-base font-bold leading-snug mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Цель:</span> {t.goal}
                    </p>
                  </div>

                  <div className="flex-1 mb-6 md:mb-0">
                    <p className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground mb-3">
                      Что делаем
                    </p>
                    <ul className="space-y-2">
                      {t.actions.map((a, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm">
                          <Icon name="Check" size={14} className={`${t.iconColor} mt-0.5 flex-shrink-0`} />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:w-60 flex-shrink-0">
                    <p className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground mb-3">
                      KPI касания
                    </p>
                    <div className="space-y-3">
                      {t.kpi.map((k, i) => (
                        <div key={i} className="flex flex-col gap-0.5">
                          <span className={`text-xl font-black font-mono ${t.numColor}`}>{k.value}</span>
                          <span className="text-xs text-muted-foreground leading-snug">{k.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Checklist */}
      <section className="border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-10">
            <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Еженедельный / ежемесячный контроль
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              Чек-лист KPI
            </h2>
            <p className="text-muted-foreground max-w-xl text-base">
              Все показатели обязательны к выполнению. Разбор каждую неделю и каждый месяц.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {kpiGroups.map((group, gi) => (
              <div key={gi} className="rounded-2xl border border-border bg-white p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={group.icon} size={17} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-tight">{group.title}</h3>
                    {group.subtitle && (
                      <p className="text-xs text-muted-foreground">{group.subtitle}</p>
                    )}
                  </div>
                </div>
                <div>
                  {group.items.map((item, ii) => (
                    <div key={ii} className="flex items-center justify-between gap-4 py-2.5 border-b border-border last:border-0">
                      <span className="text-sm text-muted-foreground leading-snug flex-1">{item.label}</span>
                      <span className="text-sm font-black font-mono text-primary whitespace-nowrap">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
            <div className="flex items-start gap-3">
              <Icon name="AlertCircle" size={17} className="text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-sm text-amber-900 mb-2">Мини-контроль «чтобы не было отмазок»</p>
                <ul className="space-y-1.5">
                  {[
                    'У каждого пациента после визита есть следующий шаг: запись / план / рекомендация / задача администратору',
                    'Нет «потерянных»: если нет записи — обязательный follow-up',
                  ].map((t, i) => (
                    <li key={i} className="text-sm text-amber-800 flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-10">
            <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Регламент
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              Путь каждого пациента
            </h2>
            <p className="text-muted-foreground max-w-xl text-base">
              Каждый пациент проходит понятный путь — и всё фиксируется в CRM.
            </p>
          </div>

          <div className="bg-background rounded-2xl border border-border p-6 mb-8 overflow-x-auto">
            <div className="flex flex-wrap items-center gap-2 min-w-max">
              {funnel.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium shadow-sm whitespace-nowrap">
                    <span className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                    <span>{step}</span>
                  </div>
                  {i < funnel.length - 1 && (
                    <Icon name="ChevronRight" size={15} className="text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {roles.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name={r.icon} size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-sm leading-tight">{r.role}</h3>
                </div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Ответственность</p>
                <ul className="space-y-2">
                  {r.duties.map((d, di) => (
                    <li key={di} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="Dot" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
