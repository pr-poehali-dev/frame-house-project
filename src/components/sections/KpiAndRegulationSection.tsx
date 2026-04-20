import Icon from '@/components/ui/icon';

const kpiGroups = [
  {
    icon: 'UserPlus',
    title: 'Первичный поток',
    subtitle: 'Обращение → запись',
    items: [
      { label: 'Конверсия обращения в запись пациента', value: '≥ 65%' },
    ],
    accent: true,
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
    accent: true,
  },
  {
    icon: 'Stethoscope',
    title: 'Направления к смежным',
    subtitle: 'Специалисты',
    items: [
      { label: 'Рекомендации к ортодонту', value: '≥ 20%' },
      { label: 'Рекомендации к хирургу-имплантологу', value: '≥ 20%' },
    ],
    accent: false,
  },
  {
    icon: 'Star',
    title: 'Сервис и контроль качества',
    items: [
      { label: 'Обзвон / уведомление пациента после приёма (≤ 24 ч + опрос)', value: '100%' },
      { label: 'NPS / удовлетворённость', value: '≥ 95%' },
    ],
    accent: false,
  },
  {
    icon: 'RefreshCw',
    title: 'Возврат пациентов',
    subtitle: 'Окно 6 месяцев',
    items: [
      { label: 'Вторичные пациенты — конверсия возврата', value: '≥ 30%' },
      { label: 'Лояльные пациенты — конверсия возврата', value: '≥ 50%' },
    ],
    accent: false,
  },
  {
    icon: 'BarChart2',
    title: 'Операционный микс',
    subtitle: 'Контроль структуры услуг',
    items: [
      { label: 'Проф. гигиена (очистка)', value: '≥ 27%' },
    ],
    accent: false,
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
    accent: true,
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
    accent: true,
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
    accent: false,
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

export default function KpiAndRegulationSection() {
  return (
    <>
      {/* KPI Checklist */}
      <section className="border-b border-border bg-[#fafaf9]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <p className="text-xs font-table font-bold tracking-[0.12em] uppercase text-primary">
                Еженедельный / ежемесячный контроль
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Чек-лист KPI
            </h2>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Все показатели обязательны к выполнению. Разбор каждую неделю и каждый месяц.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {kpiGroups.map((group, gi) => (
              <div
                key={gi}
                className={`rounded-2xl border p-6 hover:shadow-sm transition-shadow ${
                  group.accent
                    ? 'bg-white border-primary/25'
                    : 'bg-white border-border'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    group.accent ? 'bg-primary' : 'bg-primary/10'
                  }`}>
                    <Icon name={group.icon} size={17} className={group.accent ? 'text-white' : 'text-primary'} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">{group.title}</h3>
                    {group.subtitle && (
                      <p className="text-xs font-table text-muted-foreground">{group.subtitle}</p>
                    )}
                  </div>
                </div>
                <div>
                  {group.items.map((item, ii) => (
                    <div key={ii} className="flex items-center justify-between gap-4 py-2.5 border-b border-border last:border-0">
                      <span className="text-sm font-table text-muted-foreground leading-snug flex-1">{item.label}</span>
                      <span
                        className="font-bold whitespace-nowrap text-primary"
                        style={{ fontFamily: '"Merriweather", Georgia, serif', fontSize: '15px' }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Red accent alert */}
          <div className="mt-5 rounded-2xl border border-primary/20 bg-red-50/50 p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="AlertCircle" size={16} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-base text-foreground mb-2">Мини-контроль «чтобы не было отмазок»</p>
                <ul className="space-y-1.5">
                  {[
                    'У каждого пациента после визита есть следующий шаг: запись / план / рекомендация / задача администратору',
                    'Нет «потерянных»: если нет записи — обязательный follow-up',
                  ].map((t, i) => (
                    <li key={i} className="text-base text-muted-foreground flex items-start gap-2">
                      <div className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <p className="text-xs font-table font-bold tracking-[0.12em] uppercase text-primary">
                Регламент
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Путь каждого пациента
            </h2>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Каждый пациент проходит понятный путь — и всё фиксируется в CRM.
            </p>
          </div>

          {/* Funnel — Harvard style */}
          <div className="bg-[#fafaf9] rounded-2xl border border-border p-6 mb-8 overflow-x-auto">
            <div className="flex flex-wrap items-center gap-2 min-w-max">
              {funnel.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-table font-medium shadow-sm whitespace-nowrap border ${
                    i === 0 || i === funnel.length - 1
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-white border-border'
                  }`}>
                    <span className={`text-xs font-mono ${
                      i === 0 || i === funnel.length - 1 ? 'text-white/70' : 'text-muted-foreground'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
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
              <div
                key={i}
                className={`rounded-2xl border p-6 ${
                  r.accent ? 'bg-red-50/40 border-primary/20' : 'bg-[#fafaf9] border-border'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    r.accent ? 'bg-primary' : 'bg-foreground'
                  }`}>
                    <Icon name={r.icon} size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-base leading-tight">{r.role}</h3>
                </div>
                <p className="text-xs font-table font-bold text-muted-foreground uppercase tracking-widest mb-3">
                  Ответственность
                </p>
                <ul className="space-y-2">
                  {r.duties.map((d, di) => (
                    <li key={di} className="flex items-start gap-2 text-base text-muted-foreground">
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
    </>
  );
}
