import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/f719904a-031f-4ef4-a8bd-2d04dd79de9d.jpg";
const CONSULT_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/dac6f41a-04e9-42e3-a26c-301d968147f9.jpg";

// Скриншоты интерфейса телефона
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

// Мокап телефона
function PhoneMockup({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Корпус телефона */}
      <div
        className="relative"
        style={{
          width: 220,
          background: "#0f172a",
          borderRadius: 36,
          padding: "10px 8px",
          boxShadow: "0 32px 64px rgba(15,23,42,0.35), 0 0 0 1.5px rgba(255,255,255,0.08) inset",
        }}
      >
        {/* Верхняя полоска / глазок */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <div style={{ width: 60, height: 6, background: "#1e293b", borderRadius: 10 }} />
        </div>
        {/* Экран */}
        <div style={{ borderRadius: 24, overflow: "hidden", background: "#fff" }}>
          <img src={src} alt={label} style={{ width: "100%", display: "block" }} />
        </div>
        {/* Нижняя полоска */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
          <div style={{ width: 50, height: 4, background: "#1e293b", borderRadius: 10 }} />
        </div>
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.muted }}>{label}</span>
    </div>
  );
}

export default function Index() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.bg, color: C.navy, minHeight: "100vh" }}>

      {/* ══ HERO ══ */}
      <section style={{ background: C.bg }} className="pt-12 pb-0">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 items-end">

          {/* Текст */}
          <div className="col-span-12 md:col-span-7 pb-12">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-widest"
              style={{ background: C.blue, color: C.white }}
            >
              <Icon name="FileText" size={13} />
              Кейс · Future Care 360
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-[1.1] mb-6" style={{ color: C.navy }}>
              Как мы ускорили конверсию пациентов{" "}
              <span style={{ color: C.blue }}>в 2 раза</span>
            </h1>

            <p className="text-base mb-10" style={{ color: C.muted, maxWidth: 480 }}>
              С помощью интерактивных триггеров в Future Care 360 тот же результат достигается за вдвое меньший срок — без скидочных войн и ручной работы.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "Clock", label: "Срок сокращён", val: "в 2 раза" },
                { icon: "TrendingUp", label: "Вовлечённость", val: "×2 выше" },
                { icon: "Users", label: "Конверсия", val: "до 60%" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="rounded-3xl p-5"
                  style={{ background: C.white, border: `1px solid ${C.border}` }}
                >
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3" style={{ background: C.blue }}>
                    <Icon name={f.icon} size={18} className="text-white" />
                  </div>
                  <div className="text-xl font-black mb-0.5" style={{ color: C.navy }}>{f.val}</div>
                  <div className="text-xs" style={{ color: C.muted }}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Фото на синем фоне */}
          <div className="col-span-12 md:col-span-5 relative self-end">
            <div
              className="rounded-t-[2rem] overflow-hidden relative"
              style={{ background: C.blue, minHeight: 440 }}
            >
              <img
                src={HERO_IMG}
                alt="Специалист клиники"
                className="w-full h-[440px] object-cover object-top"
                style={{ mixBlendMode: "luminosity", opacity: 0.92 }}
              />
              <div
                className="absolute bottom-5 left-5 right-5 rounded-3xl p-4 flex items-center gap-3"
                style={{ background: C.white }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: C.blue }}>
                  <Icon name="Stethoscope" size={20} className="text-white" />
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: C.blue }}>
                <Icon name="AlertCircle" size={18} className="text-white" />
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
            <div className="rounded-[2rem] overflow-hidden" style={{ border: `2px solid ${C.border}` }}>
              <img src={CONSULT_IMG} alt="Консультация" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ РАНЬШЕ ══ */}
      <section style={{ background: C.navy }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: C.blue }}>
                <Icon name="BarChart2" size={18} className="text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Раньше</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black leading-[1.2] mb-6 text-white">
              Стандартное сообщение
            </h2>
            <div className="space-y-3">
              {[
                { icon: "Users", val: "40%", lbl: "конверсия вторичных", color: C.blue },
                { icon: "Heart", val: "60%", lbl: "конверсия лояльных", color: C.blue },
                { icon: "Clock", val: "~12 мес.", lbl: "на достижение результата", color: "#f59e0b" },
              ].map((item) => (
                <div key={item.lbl} className="rounded-3xl p-5 flex items-center gap-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: item.color }}>
                    <Icon name={item.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">{item.val}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{item.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="rounded-[2rem] p-6 md:p-8" style={{ background: C.white }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: C.blue }}>
                  <Icon name="MessageSquare" size={18} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Пример сообщения</span>
              </div>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: C.navy }}>
                <p>Здравствуйте, Евгения Сергеевна!</p>
                <p>Пора немного позаботиться о себе — прошло больше 6 месяцев с последнего осмотра.</p>
                <p>Профилактическая гигиена помогает сохранить зубы и дёсны здоровыми, а улыбку — свежей.</p>
                <p>Только сейчас — дополнительная скидка 10% на профессиональную чистку в течение 15 дней.</p>
                <div className="flex items-center gap-2 pt-1">
                  <Icon name="ArrowRight" size={15} style={{ color: C.blue }} />
                  <span style={{ color: C.blue }}>futuresmile-clinic.ru/pamyatka-gigiena</span>
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: C.blue }}>
                <Icon name="Lightbulb" size={18} className="text-white" />
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
            <div className="rounded-[2rem] p-8" style={{ background: C.blue }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(255,255,255,0.15)" }}>
                <Icon name="MousePointerClick" size={28} className="text-white" />
              </div>
              <p className="text-white font-bold text-lg leading-snug">
                Дай пациенту выбор — и он запишется быстрее
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ЧТО ИЗМЕНИЛИ + МОКАПЫ ТЕЛЕФОНОВ ══ */}
      <section style={{ background: C.white }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Заголовок */}
          <div className="grid grid-cols-12 gap-8 mb-14 items-end">
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: C.blue }}>
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.blue }}>Что изменили</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-[1.2]" style={{ color: C.navy }}>
                Интерактивные триггеры с выбором
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                Пациент не читает — он выбирает. Три варианта, один клик — и он уже в воронке.
              </p>
            </div>
          </div>

          {/* Мокапы телефонов */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mb-14 py-10 px-6" style={{ background: C.bg, borderRadius: 32 }}>
            <PhoneMockup src={PHONE_SCREEN_2} label="Вторичные пациенты" />
            <PhoneMockup src={PHONE_SCREEN_1} label="VIP-пациенты" />
            <PhoneMockup src={PHONE_SCREEN_3} label="После удаления зуба" />
          </div>

          {/* Варианты выбора */}
          <div className="grid grid-cols-12 gap-4">
            {[
              { icon: "Sparkles", label: "15–40% на профессиональную гигиену" },
              { icon: "Activity", label: "10–15% на лечение кариеса" },
              { icon: "Gift", label: "1000–2000 бонусов на счёт" },
            ].map((item) => (
              <div
                key={item.label}
                className="col-span-12 md:col-span-4 flex items-center gap-4 rounded-3xl px-6 py-5"
                style={{ background: C.bg, border: `1px solid ${C.border}` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: C.blue }}>
                  <Icon name={item.icon} size={20} className="text-white" />
                </div>
                <span className="text-sm font-semibold" style={{ color: C.navy }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ РЕЗУЛЬТАТЫ ══ */}
      <section style={{ background: C.navy }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: C.blue }}>
                  <Icon name="TrendingUp" size={18} className="text-white" />
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
            <div className="col-span-12 md:col-span-6 rounded-[2rem] p-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Minus" size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
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

            <div className="col-span-12 md:col-span-6 rounded-[2rem] p-8" style={{ background: C.blue }}>
              <div className="flex items-center gap-3 mb-6">
                <Icon name="CheckCircle" size={16} className="text-white opacity-70" />
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
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: C.blue }}>
                  <Icon name="Star" size={18} className="text-white" />
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
                className="col-span-12 md:col-span-4 rounded-[2rem] p-7"
                style={{ background: C.white, border: `1px solid ${C.border}` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: C.navy }}>
                    <Icon name={item.icon} size={20} className="text-white" />
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: C.blue }}>
                <Icon name="Flag" size={18} className="text-white" />
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
          <div className="col-span-12 md:col-span-5 md:col-start-7">
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
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: C.blue }}>
                  <Icon name={item.icon} size={20} className="text-white" />
                </div>
                <span className="text-base font-semibold" style={{ color: C.navy }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: C.navy, borderTop: "1px solid rgba(255,255,255,0.08)" }} className="py-8">
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