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
    <div id="kpi">
      {/* KPI Checklist */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#A41034]" />
              <p className="text-xs font-table font-bold tracking-[0.14em] uppercase text-[#A41034]">
                Еженедельный / ежемесячный контроль
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-[#1b1b1b]"
              style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              Чек-лист KPI
            </h2>
            <p className="text-base text-gray-500 max-w-xl leading-relaxed font-table">
              Все показатели обязательны к выполнению. Разбор каждую неделю и каждый месяц.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {kpiGroups.map((group, gi) => (
              <div
                key={gi}
                className={`rounded-xl border p-6 hover:shadow-sm transition-shadow bg-white ${
                  group.accent ? 'border-[#A41034]/25' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    group.accent ? 'bg-[#A41034]' : 'bg-[#A41034]/10'
                  }`}>
                    <Icon name={group.icon} size={17} className={group.accent ? 'text-white' : 'text-[#A41034]'} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#1b1b1b]">{group.title}</p>
                    {group.subtitle && (
                      <p className="text-xs font-table text-gray-400">{group.subtitle}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="flex items-center justify-between gap-4">
                      <span className="text-sm font-table text-gray-600 leading-snug">{item.label}</span>
                      <span className={`text-base font-bold tabular-nums flex-shrink-0 ${
                        group.accent ? 'text-[#A41034]' : 'text-[#1b1b1b]'
                      }`}
                        style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel */}
      <section className="border-b border-gray-200 bg-white">
        <div className="py-14">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#A41034]" />
              <p className="text-xs font-table font-bold tracking-[0.14em] uppercase text-[#A41034]">
                Путь пациента
              </p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#1b1b1b]"
              style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              Воронка: от обращения до рекомендаций
            </h3>
          </div>

          <div className="hidden md:flex items-stretch w-full">
            {funnel.map((step, i) => {
              const widths = [100, 90, 85, 80, 72, 65, 60, 56, 50];
              const w = widths[i] ?? 50;
              return (
                <div key={i} className="flex flex-col items-center flex-1">
                  <div
                    className="w-full flex items-center justify-center text-center px-2 py-4 text-sm font-table font-semibold text-white"
                    style={{
                      background: i === 0 ? '#A41034' : `rgba(164,16,52,${0.85 - i * 0.08})`,
                      minHeight: '64px',
                      clipPath: i < funnel.length - 1
                        ? 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)'
                        : 'none',
                      zIndex: funnel.length - i,
                    }}
                  >
                    <span className="leading-tight">{step}</span>
                  </div>
                  <div className="text-xs font-table text-gray-400 mt-2">{w}%</div>
                </div>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="flex md:hidden flex-col gap-2 px-6">
            {funnel.map((step, i) => {
              const widths = [100, 90, 85, 80, 72, 65, 60, 56, 50];
              const w = widths[i] ?? 50;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center px-4 py-2.5 text-sm font-table font-semibold text-white rounded"
                    style={{ background: i === 0 ? '#A41034' : `rgba(164,16,52,${0.85 - i * 0.08})`, minWidth: '140px' }}
                  >
                    {step}
                  </div>
                  <span className="text-xs font-table text-gray-400">{w}%</span>
                </div>
              );
            })}
          </div>

          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-table text-gray-400 mt-4">
              * Примерные показатели конверсии на каждом этапе воронки
            </p>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-[#A41034]" />
            <p className="text-xs font-table font-bold tracking-[0.14em] uppercase text-[#A41034]">
              Регламент исполнения
            </p>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#1b1b1b]"
            style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
            Зоны ответственности
          </h3>

          <div className="grid md:grid-cols-3 gap-5">
            {roles.map((r, i) => (
              <div key={i} className={`rounded-xl border p-6 ${
                r.accent ? 'border-[#A41034]/25 bg-white' : 'border-gray-200 bg-white'
              }`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  r.accent ? 'bg-[#A41034]' : 'bg-[#A41034]/10'
                }`}>
                  <Icon name={r.icon} size={18} className={r.accent ? 'text-white' : 'text-[#A41034]'} />
                </div>
                <h4 className="font-bold text-base text-[#1b1b1b] mb-4">{r.role}</h4>
                <ul className="space-y-2">
                  {r.duties.map((d, di) => (
                    <li key={di} className="flex items-start gap-2 text-sm font-table text-gray-600">
                      <Icon name="ChevronRight" size={13} className="text-[#A41034] mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}