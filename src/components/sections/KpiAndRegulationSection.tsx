import Icon from '@/components/ui/icon';

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

export default function KpiAndRegulationSection() {
  return (
    <>
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
    </>
  );
}
