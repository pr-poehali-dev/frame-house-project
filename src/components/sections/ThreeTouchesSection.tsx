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

export default function ThreeTouchesSection() {
  return (
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
  );
}
