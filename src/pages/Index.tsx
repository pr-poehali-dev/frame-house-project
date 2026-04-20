import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/b7330965-c114-43c1-947c-c2af73d0cf12.jpg";
const CONSULT_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/dac6f41a-04e9-42e3-a26c-301d968147f9.jpg";
const PHONE_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/44bfae36-29c2-4949-b101-21560e3222b1.jpg";

// Цвета: белый #ffffff, синий #2563eb, тёмно-синий #0f172a, светло-синий bg #eff6ff
const C = {
  bg: "#f0f5ff",
  white: "#ffffff",
  blue: "#2563eb",
  navy: "#0f172a",
  muted: "#64748b",
  border: "#dbeafe",
};

export default function Index() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.bg, color: C.navy, minHeight: "100vh" }}>

      {/* ══ HERO ══ */}
      <section style={{ background: C.bg }} className="pt-12 pb-0">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 items-end">

          {/* Левая: текст */}
          <div className="col-span-12 md:col-span-7 pb-12">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-widest"
              style={{ background: C.blue, color: C.white }}
            >
              <Icon name="FileText" size={12} />
              Кейс · Future Care 360
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-[1.1] mb-6" style={{ color: C.navy }}>
              Как мы ускорили конверсию пациентов{" "}
              <span style={{ color: C.blue }}>в 2 раза</span>
            </h1>

            <p className="text-base mb-10" style={{ color: C.muted, maxWidth: 480 }}>
              С помощью интерактивных триггеров в Future Care 360 тот же результат достигается за вдвое меньший срок — без скидочных войн и ручной работы.
            </p>

            {/* Три факта */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "Clock", label: "Срок сокращён", val: "в 2 раза" },
                { icon: "TrendingUp", label: "Вовлечённость", val: "×2 выше" },
                { icon: "Users", label: "Конверсия", val: "до 60%" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl p-5"
                  style={{ background: C.white, border: `1px solid ${C.border}` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: C.blue }}>
                      <Icon name={f.icon} size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="text-xl font-black mb-0.5" style={{ color: C.navy }}>{f.val}</div>
                  <div className="text-xs" style={{ color: C.muted }}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая: фото на синем фоне как на референсе */}
          <div className="col-span-12 md:col-span-5 relative self-end">
            <div
              className="rounded-t-3xl overflow-hidden relative"
              style={{ background: C.blue, minHeight: 420 }}
            >
              <img
                src={HERO_IMG}
                alt="Специалист клиники"
                className="w-full h-[420px] object-cover object-top mix-blend-luminosity opacity-90"
              />
              {/* Карточка поверх фото */}
              <div
                className="absolute bottom-5 left-5 right-5 rounded-2xl p-4 flex items-center gap-3"
                style={{ background: C.white }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: C.blue }}
                >
                  <Icon name="Stethoscope" size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: C.navy }}>Future Care 360</div>
                  <div className="text-xs" style={{ color: C.muted }}>Платформа автоматизации клиник</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ПРОБЛЕМА ══ */}
      <section style={{ background: C.white }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: C.blue }}>
                <Icon name="AlertCircle" size={13} className="text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Контекст</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-5" style={{ color: C.navy }}>
              Классические напоминания работали, но медленно
            </h2>
            <p className="text-base leading-relaxed" style={{ color: C.muted }}>
              Вторичные и лояльные пациенты — главный источник стабильной выручки. Стандартные триггеры давали результат, но путь от напоминания до записи занимал слишком много времени.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="rounded-3xl overflow-hidden" style={{ border: `2px solid ${C.border}` }}>
              <img src={CONSULT_IMG} alt="Консультация" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ РАНЬШЕ ══ */}
      <section style={{ background: C.navy }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-start">

          {/* Цифры */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: C.blue }}>
                <Icon name="BarChart2" size={13} className="text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Раньше</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-6 text-white">
              Стандартное сообщение
            </h2>
            <div className="space-y-3">
              <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: C.blue }}>
                  <Icon name="Users" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">40%</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>конверсия вторичных</div>
                </div>
              </div>
              <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: C.blue }}>
                  <Icon name="Heart" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">60%</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>конверсия лояльных</div>
                </div>
              </div>
              <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#f59e0b" }}>
                  <Icon name="Clock" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">~12 мес.</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>на достижение результата</div>
                </div>
              </div>
            </div>
          </div>

          {/* Пример сообщения */}
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="rounded-3xl p-6 md:p-8" style={{ background: C.white }}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: C.blue }}>
                  <Icon name="MessageSquare" size={13} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Пример сообщения</span>
              </div>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: C.navy }}>
                <p>Здравствуйте, Евгения Сергеевна!</p>
                <p>Пора немного позаботиться о себе — прошло больше 6 месяцев с последнего осмотра.</p>
                <p>Профилактическая гигиена помогает сохранить зубы и дёсны здоровыми, а улыбку — свежей.</p>
                <p>Только сейчас — дополнительная скидка 10% на профессиональную чистку в течение 15 дней.</p>
                <div className="flex items-center gap-2 pt-1">
                  <Icon name="ArrowRight" size={14} style={{ color: C.blue }} />
                  <span style={{ color: C.blue }}>futuresmile-clinic.ru/pamyatka-gigiena-polosti-rta</span>
                </div>
                <p style={{ color: C.muted }} className="pt-1">С уважением, Future Smile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ГИПОТЕЗА ══ */}
      <section style={{ background: C.bg }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: C.blue }}>
                <Icon name="Lightbulb" size={13} className="text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Гипотеза</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-5" style={{ color: C.navy }}>
              Проблема не в предложении — в формате
            </h2>
            <p className="text-base leading-relaxed" style={{ color: C.muted }}>
              Если дать пациенту выбор и вовлечь его в диалог — решение принимается быстрее. Не читать сообщение, а реагировать на него.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="rounded-3xl p-8" style={{ background: C.blue }}>
              <Icon name="MousePointerClick" size={36} className="text-white mb-5 opacity-80" />
              <p className="text-white font-bold text-lg leading-snug">
                Дай пациенту выбор — и он запишется быстрее
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ЧТО ИЗМЕНИЛИ ══ */}
      <section style={{ background: C.white }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-3xl overflow-hidden" style={{ border: `2px solid ${C.border}` }}>
              <img src={PHONE_IMG} alt="Смартфон" className="w-full h-80 object-cover" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: C.blue }}>
                <Icon name="Zap" size={13} className="text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Что изменили</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-5" style={{ color: C.navy }}>
              Интерактивные триггеры с выбором
            </h2>
            <p className="text-base mb-8" style={{ color: C.muted }}>
              Пациент не читает — он выбирает. Три варианта, один клик — и он уже в воронке.
            </p>
            <div className="space-y-3">
              {[
                { icon: "Sparkles", label: "15% на профессиональную гигиену" },
                { icon: "Activity", label: "15% на лечение" },
                { icon: "Gift", label: "2000 бонусов на счёт" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl px-5 py-4"
                  style={{ background: C.bg, border: `1px solid ${C.border}` }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: C.blue }}>
                    <Icon name={item.icon} size={15} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: C.navy }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ РЕЗУЛЬТАТЫ ══ */}
      <section style={{ background: C.navy }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: C.blue }}>
                  <Icon name="TrendingUp" size={13} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Результат</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2] text-white">
                Тот же результат — вдвое быстрее
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
                По текущей динамике ожидаем дополнительный рост на 30–40% на годовом горизонте.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* До */}
            <div className="col-span-12 md:col-span-6 rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Minus" size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span className="text-xs uppercase tracking-widest font-bold" style={{ color: "rgba(255,255,255,0.4)" }}>До внедрения</span>
              </div>
              <div className="text-6xl font-black text-white mb-2">12 мес.</div>
              <div className="text-base mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>для достижения конверсии 40% / 60%</div>
              <div className="grid grid-cols-2 gap-3">
                {[["40%", "вторичные"], ["60%", "лояльные"]].map(([val, lbl]) => (
                  <div key={lbl} className="rounded-2xl p-4 text-center" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="text-2xl font-black text-white">{val}</div>
                    <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* После */}
            <div className="col-span-12 md:col-span-6 rounded-3xl p-8" style={{ background: C.blue }}>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="CheckCircle" size={14} className="text-white opacity-70" />
                <span className="text-xs uppercase tracking-widest font-bold text-white opacity-70">После внедрения</span>
              </div>
              <div className="text-6xl font-black text-white mb-2">6 мес.</div>
              <div className="text-base mb-8 text-white opacity-80">та же конверсия за половину срока</div>
              <div className="grid grid-cols-3 gap-3">
                {[["×2", "вовлечённость"], ["↑", "скорость записи"], ["↓", "путь до записи"]].map(([val, lbl]) => (
                  <div key={lbl} className="rounded-2xl p-3 text-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <div className="text-xl font-black text-white">{val}</div>
                    <div className="text-xs mt-1 text-white opacity-70">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ПОЧЕМУ СРАБОТАЛО ══ */}
      <section style={{ background: C.bg }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: C.blue }}>
                  <Icon name="Star" size={13} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Механика</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2]" style={{ color: C.navy }}>Почему это сработало</h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {[
              { n: "01", icon: "Hand", title: "Выбор вместо давления", desc: "Пациент чувствует контроль над решением." },
              { n: "02", icon: "Zap", title: "Мгновенное вовлечение", desc: "Ответить на кнопку проще, чем обдумывать запись." },
              { n: "03", icon: "Brain", title: "Снижение нагрузки", desc: "Мы убрали необходимость «решать самому»." },
            ].map((item) => (
              <div
                key={item.n}
                className="col-span-12 md:col-span-4 rounded-3xl p-7"
                style={{ background: C.white, border: `1px solid ${C.border}` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: C.navy }}>
                    <Icon name={item.icon} size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-bold tracking-widest" style={{ color: C.muted }}>{item.n}</span>
                </div>
                <h3 className="text-base font-black mb-2" style={{ color: C.navy }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ВЫВОД ══ */}
      <section style={{ background: C.white }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: C.blue }}>
                <Icon name="Flag" size={13} className="text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Вывод</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-5" style={{ color: C.navy }}>
              Разговаривать,<br />а не рассылать
            </h2>
            <p className="text-base leading-relaxed" style={{ color: C.muted }}>
              Вторичные и лояльные пациенты — это не просто база. Интерактивные триггеры ускоряют принятие решений и увеличивают конверсию.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-7 space-y-0">
            {[
              { icon: "Rocket", text: "Ускорить принятие решения" },
              { icon: "TrendingUp", text: "Повысить вовлечённость" },
              { icon: "ShieldCheck", text: "Увеличить конверсию без скидочных войн" },
            ].map((item, i) => (
              <div
                key={item.text}
                className="flex items-center gap-4 py-5"
                style={{ borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: C.blue }}>
                  <Icon name={item.icon} size={15} className="text-white" />
                </div>
                <span className="text-base font-semibold" style={{ color: C.navy }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: C.navy, borderTop: `1px solid rgba(255,255,255,0.08)` }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-4 items-center">
          <span className="col-span-6 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>© Future Care 360</span>
          <a
            href="https://futuresmile-clinic.ru/pamyatka-gigiena-polosti-rta"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-6 text-right text-sm hover:text-white transition-colors"
            style={{ color: C.blue }}
          >
            futuresmile-clinic.ru
          </a>
        </div>
      </footer>
    </div>
  );
}
