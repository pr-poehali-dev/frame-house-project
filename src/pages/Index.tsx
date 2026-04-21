import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/2a9240ad-d53c-490e-8464-71dc2f3863df.jpg";
const CONSULT_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/dac6f41a-04e9-42e3-a26c-301d968147f9.jpg";

const PHONE_SCREEN_1 = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/bucket/0efad4c2-ef98-47d7-a893-c7e68bbd20be.jpeg";
const PHONE_SCREEN_2 = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/bucket/cdbf14bb-c3d7-4a8d-90f7-759ab28f3053.jpeg";
const PHONE_SCREEN_3 = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/bucket/e50a08cc-ed97-40ea-9b4e-dbb6ba83cc96.jpeg";

const C = {
  bg: "#f0f5ff",
  white: "#ffffff",
  blue: "#2563eb",
  navy: "#0f172a",
  muted: "#64748b",
  border: "#dbeafe",
};

const R = 10;
const IC = 40;
const IS = 18;

function PhoneMockup({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
      <div
        style={{
          width: "100%",
          maxWidth: 180,
          background: "#0f172a",
          borderRadius: 24,
          padding: "7px 5px",
          boxShadow: "0 16px 40px rgba(15,23,42,0.35), 0 0 0 1.5px rgba(255,255,255,0.08) inset",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
          <div style={{ width: 36, height: 4, background: "#1e293b", borderRadius: 10 }} />
        </div>
        <div style={{ borderRadius: 14, overflow: "hidden", background: "#fff" }}>
          <img src={src} alt={label} style={{ width: "100%", display: "block" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <div style={{ width: 28, height: 3, background: "#1e293b", borderRadius: 10 }} />
        </div>
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-center leading-tight" style={{ color: C.muted }}>{label}</span>
    </div>
  );
}

function SectionLabel({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center justify-center shrink-0" style={{ width: IC, height: IC, background: C.blue, borderRadius: R }}>
        <Icon name={icon} size={IS} className="text-white" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>{text}</span>
    </div>
  );
}

export default function Index() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.bg, color: C.navy, minHeight: "100vh" }}>

      {/* ══ HERO ══ */}
      <section style={{ background: C.bg }} className="pt-10 pb-0">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

            <div className="md:col-span-7 pb-0 md:pb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest"
                style={{ background: C.blue, color: C.white, borderRadius: R }}
              >
                <Icon name="FileText" size={13} />
                Кейс · Future Care 360
              </div>

              <h1 className="text-3xl md:text-5xl font-black leading-[1.15] mb-5" style={{ color: C.navy }}>
                Как мы ускорили конверсию пациентов{" "}
                <span style={{ color: C.blue }}>в&nbsp;2&nbsp;раза</span>
              </h1>

              <p className="text-base mb-8 leading-relaxed" style={{ color: C.muted }}>
                С помощью интерактивных триггеров в Future Care 360 тот же результат достигается за вдвое меньший срок — без скидочных войн и ручной работы.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { icon: "Clock", label: "Срок сокращён", val: "в 2 раза" },
                  { icon: "TrendingUp", label: "Вовлечённость", val: "×2 выше" },
                  { icon: "Users", label: "Конверсия", val: "до 60%" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-4 px-4 py-3" style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: R }}>
                    <div className="flex items-center justify-center shrink-0" style={{ width: 36, height: 36, background: C.blue, borderRadius: R }}>
                      <Icon name={f.icon} size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-black leading-tight" style={{ color: C.navy }}>{f.val}</div>
                      <div className="text-xs leading-tight" style={{ color: C.muted }}>{f.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 relative self-end mt-6 md:mt-0">
              <div
                className="overflow-hidden relative"
                style={{ background: C.blue, minHeight: 300, borderRadius: `${R * 2}px ${R * 2}px 0 0` }}
              >
                <img
                  src={HERO_IMG}
                  alt="Кабинет стоматолога"
                  className="w-full object-cover"
                  style={{ opacity: 0.88, height: 340 }}
                />
                <div
                  className="absolute bottom-4 left-4 right-4 p-3 flex items-center gap-3"
                  style={{ background: C.white, borderRadius: R }}
                >
                  <div className="flex items-center justify-center shrink-0" style={{ width: 36, height: 36, background: C.blue, borderRadius: R }}>
                    <Icon name="Stethoscope" size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: C.navy }}>Future Care 360</div>
                    <div className="text-xs" style={{ color: C.muted }}>Платформа автоматизации клиник</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ ПРОБЛЕМА ══ */}
      <section style={{ background: C.white }} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <SectionLabel icon="AlertCircle" text="Контекст" />
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-4" style={{ color: C.navy }}>
                Классические напоминания работали, но медленно
              </h2>
              <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                Вторичные и лояльные пациенты — главный источник стабильной выручки. Стандартные триггеры давали результат, но путь от напоминания до записи занимал слишком много времени.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <div className="overflow-hidden" style={{ border: `2px solid ${C.border}`, borderRadius: R * 2 }}>
                <img src={CONSULT_IMG} alt="Консультация" className="w-full object-cover" style={{ height: 260 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ РАНЬШЕ ══ */}
      <section style={{ background: C.navy }} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center shrink-0" style={{ width: IC, height: IC, background: C.blue, borderRadius: R }}>
                  <Icon name="BarChart2" size={IS} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Раньше</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-6 text-white">
                Стандартное сообщение
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "Users", val: "40%", lbl: "конверсия вторичных", color: C.blue },
                  { icon: "Heart", val: "60%", lbl: "конверсия лояльных", color: C.blue },
                  { icon: "Clock", val: "~12 мес.", lbl: "на достижение результата", color: "#f59e0b" },
                ].map((item) => (
                  <div key={item.lbl} className="p-4 flex items-center gap-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: R }}>
                    <div className="flex items-center justify-center shrink-0" style={{ width: 36, height: 36, background: item.color, borderRadius: R }}>
                      <Icon name={item.icon} size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white leading-tight">{item.val}</div>
                      <div className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>{item.lbl}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="p-5 md:p-8" style={{ background: C.white, borderRadius: R * 2 }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center shrink-0" style={{ width: IC, height: IC, background: C.blue, borderRadius: R }}>
                    <Icon name="MessageSquare" size={IS} className="text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Пример сообщения</span>
                </div>
                <div className="space-y-2.5 text-sm leading-relaxed" style={{ color: C.navy }}>
                  <p>Здравствуйте, Евгения Сергеевна!</p>
                  <p>Пора немного позаботиться о себе — прошло больше 6 месяцев с последнего осмотра.</p>
                  <p>Профилактическая гигиена помогает сохранить зубы и дёсны здоровыми, а улыбку — свежей.</p>
                  <p>Только сейчас — дополнительная скидка 10% на профессиональную чистку в течение 15 дней.</p>
                  <div className="flex items-center gap-2 pt-1 flex-wrap">
                    <Icon name="ArrowRight" size={15} style={{ color: C.blue }} />
                    <span className="break-all" style={{ color: C.blue }}>futuresmile-clinic.ru/pamyatka-gigiena</span>
                  </div>
                  <p style={{ color: C.muted }} className="pt-1">С уважением, Future Smile</p>
                </div>

                <a
                  href="https://future-it-dent.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-5 overflow-hidden group"
                  style={{ border: `1.5px solid ${C.border}`, borderRadius: R }}
                >
                  <img
                    src="https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/bucket/03d9ba5b-040d-4134-8644-98a9a8939d2e.png"
                    alt="Страница futuresmile-clinic.ru"
                    className="w-full object-cover object-top group-hover:opacity-90 transition-opacity"
                    style={{ maxHeight: 180 }}
                  />
                  <div className="flex items-center gap-2 px-4 py-2.5 flex-wrap" style={{ background: C.bg }}>
                    <Icon name="ExternalLink" size={13} style={{ color: C.blue }} />
                    <span className="text-xs font-semibold" style={{ color: C.blue }}>futuresmile-clinic.ru — Важность профгигиены</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ГИПОТЕЗА ══ */}
      <section style={{ background: C.bg }} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <SectionLabel icon="Lightbulb" text="Гипотеза" />
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-4" style={{ color: C.navy }}>
                Проблема не в предложении — в&nbsp;формате
              </h2>
              <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                Если дать пациенту выбор и вовлечь его в диалог — решение принимается быстрее. Не читать сообщение, а реагировать на него.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <div className="p-7" style={{ background: C.blue, borderRadius: R * 2 }}>
                <div className="flex items-center justify-center mb-4" style={{ width: IC, height: IC, background: "rgba(255,255,255,0.15)", borderRadius: R }}>
                  <Icon name="MousePointerClick" size={IS} className="text-white" />
                </div>
                <p className="text-white font-bold text-lg leading-snug">
                  Дай пациенту выбор — и он запишется быстрее
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ЧТО ИЗМЕНИЛИ ══ */}
      <section style={{ background: C.white }} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10 items-end">
            <div className="md:col-span-6">
              <SectionLabel icon="Zap" text="Что изменили" />
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2]" style={{ color: C.navy }}>
                Интерактивные триггеры с выбором
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                Пациент не читает — он выбирает. Три варианта, один клик — и он уже в воронке.
              </p>
            </div>
          </div>

          <div
            className="flex flex-row items-center justify-center gap-3 md:gap-10 mb-10 py-8 px-4"
            style={{ background: C.bg, borderRadius: R * 2 }}
          >
            <PhoneMockup src={PHONE_SCREEN_2} label="Вторичные" />
            <PhoneMockup src={PHONE_SCREEN_1} label="VIP-пациенты" />
            <PhoneMockup src={PHONE_SCREEN_3} label="После удаления" />
          </div>

          <div className="grid grid-cols-1 gap-3">
            {[
              { icon: "Sparkles", label: "15–40% на профессиональную гигиену" },
              { icon: "Activity", label: "10–15% на лечение кариеса" },
              { icon: "Gift", label: "1000–2000 бонусов на счёт" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 px-5 py-4"
                style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: R }}
              >
                <div className="flex items-center justify-center shrink-0" style={{ width: IC, height: IC, background: C.blue, borderRadius: R }}>
                  <Icon name={item.icon} size={IS} className="text-white" />
                </div>
                <span className="text-sm font-semibold" style={{ color: C.navy }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ РЕЗУЛЬТАТЫ ══ */}
      <section style={{ background: C.navy }} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center shrink-0" style={{ width: IC, height: IC, background: C.blue, borderRadius: R }}>
                  <Icon name="TrendingUp" size={IS} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Результат</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2] text-white">
                Тот же результат — вдвое быстрее
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
                По текущей динамике ожидаем дополнительный рост на 30–40% на годовом горизонте.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 md:p-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: R * 2 }}>
              <div className="flex items-center gap-3 mb-5">
                <Icon name="Minus" size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span className="text-xs uppercase tracking-widest font-bold" style={{ color: "rgba(255,255,255,0.4)" }}>До внедрения</span>
              </div>
              <div className="text-5xl md:text-6xl font-black text-white mb-2">12 мес.</div>
              <div className="text-sm md:text-base mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>для достижения конверсии 40% / 60%</div>
              <div className="grid grid-cols-2 gap-3">
                {[["40%", "вторичные"], ["60%", "лояльные"]].map(([val, lbl]) => (
                  <div key={lbl} className="p-3 md:p-4 text-center" style={{ background: "rgba(255,255,255,0.06)", borderRadius: R }}>
                    <div className="text-xl md:text-2xl font-black text-white">{val}</div>
                    <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8" style={{ background: C.blue, borderRadius: R * 2 }}>
              <div className="flex items-center gap-3 mb-5">
                <Icon name="CheckCircle" size={16} className="text-white opacity-70" />
                <span className="text-xs uppercase tracking-widest font-bold text-white opacity-70">После внедрения</span>
              </div>
              <div className="text-5xl md:text-6xl font-black text-white mb-2">6 мес.</div>
              <div className="text-sm md:text-base mb-6 text-white opacity-80">та же конверсия за половину срока</div>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {[["×2", "вовлечённость"], ["↑", "скорость записи"], ["↓", "путь до записи"]].map(([val, lbl]) => (
                  <div key={lbl} className="p-2 md:p-3 text-center" style={{ background: "rgba(255,255,255,0.15)", borderRadius: R }}>
                    <div className="text-lg md:text-xl font-black text-white">{val}</div>
                    <div className="text-xs mt-1 text-white opacity-70 leading-tight">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ПОЧЕМУ СРАБОТАЛО ══ */}
      <section style={{ background: C.bg }} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="mb-10">
            <SectionLabel icon="Star" text="Механика" />
            <h2 className="text-2xl md:text-3xl font-black leading-[1.2]" style={{ color: C.navy }}>Почему это сработало</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { n: "01", icon: "Hand", title: "Выбор вместо давления", desc: "Пациент чувствует контроль над решением." },
              { n: "02", icon: "Zap", title: "Мгновенное вовлечение", desc: "Ответить на кнопку проще, чем обдумывать запись." },
              { n: "03", icon: "Brain", title: "Снижение нагрузки", desc: "Мы убрали необходимость «решать самому»." },
            ].map((item) => (
              <div
                key={item.n}
                className="p-6 md:p-7"
                style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: R * 2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center shrink-0" style={{ width: IC, height: IC, background: C.navy, borderRadius: R }}>
                    <Icon name={item.icon} size={IS} className="text-white" />
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
      <section style={{ background: C.white }} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <SectionLabel icon="Flag" text="Вывод" />
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-4" style={{ color: C.navy }}>
                Разговаривать, а не рассылать
              </h2>
              <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                Вторичные и лояльные пациенты — это не просто база. Интерактивные триггеры ускоряют принятие решений и увеличивают конверсию.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-7">
              {[
                { icon: "Rocket", text: "Ускорить принятие решения" },
                { icon: "TrendingUp", text: "Повысить вовлечённость" },
                { icon: "ShieldCheck", text: "Увеличить конверсию без скидочных войн" },
              ].map((item, i) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 py-4"
                  style={{ borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}
                >
                  <div className="flex items-center justify-center shrink-0" style={{ width: IC, height: IC, background: C.blue, borderRadius: R }}>
                    <Icon name={item.icon} size={IS} className="text-white" />
                  </div>
                  <span className="text-base font-semibold" style={{ color: C.navy }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: C.navy, borderTop: "1px solid rgba(255,255,255,0.08)" }} className="py-7">
        <div className="max-w-6xl mx-auto px-5 md:px-12 flex items-center justify-between gap-4">
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>© Future Care 360</span>
          <a
            href="https://future-it-dent.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-white transition-colors"
            style={{ color: C.blue }}
          >
            future-it-dent.ru
          </a>
        </div>
      </footer>
    </div>
  );
}