import Icon from '@/components/ui/icon';

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
    accent: true,
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
    accent: false,
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
    accent: true,
  },
];

export default function ThreeTouchesSection() {
  return (
    <section className="border-b border-border bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-primary" />
            <p className="text-xs font-table font-bold tracking-[0.12em] uppercase text-primary">
              Методология
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Правило трёх касаний
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            Пациент редко принимает решение с первого раза. Клиника обязана сделать 3 касания — каждое завершается следующим шагом в CRM.
          </p>
        </div>

        <div className="space-y-5">
          {touches.map((t) => (
            <div
              key={t.num}
              className={`rounded-2xl border p-6 md:p-8 ${
                t.accent
                  ? 'border-primary/30 bg-red-50/40'
                  : 'border-border bg-[#fafaf9]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:gap-8">
                {/* Left: number + title */}
                <div className="md:w-64 flex-shrink-0 mb-6 md:mb-0">
                  <div
                    className={`text-7xl font-bold leading-none mb-3 ${
                      t.accent ? 'text-primary opacity-15' : 'text-foreground opacity-10'
                    }`}
                    style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
                  >
                    {t.num}
                  </div>
                  <h3 className="text-base font-bold leading-snug mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Цель:</span> {t.goal}
                  </p>
                </div>

                {/* Center: actions */}
                <div className="flex-1 mb-6 md:mb-0">
                  <p className="text-xs font-table font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Что делаем
                  </p>
                  <ul className="space-y-2.5">
                    {t.actions.map((a, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-base">
                        <Icon
                          name="Check"
                          size={15}
                          className={`mt-0.5 flex-shrink-0 ${t.accent ? 'text-primary' : 'text-muted-foreground'}`}
                        />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: KPI */}
                <div className="md:w-56 flex-shrink-0">
                  <p className="text-xs font-table font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    KPI касания
                  </p>
                  <div className="space-y-4">
                    {t.kpi.map((k, i) => (
                      <div key={i} className="flex flex-col gap-0.5">
                        <span
                          className={`text-2xl font-bold tabular-nums leading-none ${t.accent ? 'text-primary' : 'text-foreground'}`}
                          style={{ fontFamily: '"Merriweather", Georgia, serif' }}
                        >
                          {k.value}
                        </span>
                        <span className="text-xs font-table text-muted-foreground leading-snug mt-1">{k.label}</span>
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
  );
}
