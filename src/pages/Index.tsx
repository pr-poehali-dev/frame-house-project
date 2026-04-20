import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/b7330965-c114-43c1-947c-c2af73d0cf12.jpg";
const CONSULT_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/dac6f41a-04e9-42e3-a26c-301d968147f9.jpg";
const PHONE_IMG = "https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/44bfae36-29c2-4949-b101-21560e3222b1.jpg";

export default function Index() {
  return (
    <div
      className="min-h-screen bg-white text-[#0d1f3c]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Клиника"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* лёгкий синий градиент только снизу для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/85 via-[#0d1f3c]/20 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pb-20 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#7ab3e0] mb-5">
              Кейс · Future Care 360
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.15] text-white mb-5">
              Как мы ускорили конверсию вторичных и лояльных пациентов в&nbsp;2&nbsp;раза
            </h1>
            <p className="text-base text-white/70 max-w-xl">
              С помощью интерактивных триггеров в Future Care 360 тот же результат — за вдвое меньший срок.
            </p>
          </div>
        </div>
      </section>

      {/* ── ПРОБЛЕМА ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#2a6dbf] mb-4">Контекст</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-[1.2] text-[#0d1f3c] mb-5">
            Классические напоминания работали, но медленно
          </h2>
          <p className="text-base text-[#4a5e78] leading-relaxed">
            Вторичные и лояльные пациенты — главный источник стабильной выручки клиники. Стандартные триггеры давали хороший результат, но путь от напоминания до записи занимал слишком много времени.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={CONSULT_IMG} alt="Консультация" className="w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* ── ПРИМЕР СООБЩЕНИЯ ── */}
      <section className="bg-[#f0f5fb] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#2a6dbf] mb-4">Раньше</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-[1.2] text-[#0d1f3c] mb-4">
              Стандартное сообщение
            </h2>
            <p className="text-base text-[#4a5e78] leading-relaxed">
              Пациент получал напоминание и должен был сам принять решение. Это создавало паузу.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white border border-[#d4e3f5] rounded-xl p-5">
                <div className="text-3xl font-bold text-[#0d1f3c] mb-1">40%</div>
                <div className="text-xs text-[#4a5e78]">конверсия вторичных</div>
              </div>
              <div className="bg-white border border-[#d4e3f5] rounded-xl p-5">
                <div className="text-3xl font-bold text-[#0d1f3c] mb-1">60%</div>
                <div className="text-xs text-[#4a5e78]">конверсия лояльных</div>
              </div>
              <div className="col-span-2 bg-white border border-[#d4e3f5] rounded-xl p-5 flex items-center gap-3">
                <Icon name="Clock" size={16} className="text-amber-500 shrink-0" />
                <div className="text-xs text-[#4a5e78]">достигались за <span className="text-[#0d1f3c] font-semibold">~12 месяцев</span></div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="bg-white border border-[#d4e3f5] rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Icon name="MessageSquare" size={14} className="text-[#2a6dbf]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#2a6dbf]">Пример сообщения</span>
              </div>
              <div className="space-y-3 text-sm md:text-base text-[#0d1f3c] leading-relaxed">
                <p>Здравствуйте, Евгения Сергеевна!</p>
                <p>Пора немного позаботиться о себе — прошло больше 6 месяцев с последнего осмотра 🦷</p>
                <p>Профилактическая гигиена помогает сохранить зубы и дёсны здоровыми, а улыбку — свежей ✨</p>
                <p>Только сейчас — дополнительная скидка 10% на профессиональную чистку в течение 15 дней.</p>
                <p>💬 Запишитесь на удобное время — ответьте на это сообщение</p>
                <p className="text-[#2a6dbf]">👉 futuresmile-clinic.ru/pamyatka-gigiena-polosti-rta</p>
                <p className="text-[#4a5e78] text-sm pt-2">С уважением, Future Smile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ГИПОТЕЗА ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-5 md:col-start-2">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#2a6dbf] mb-4">Гипотеза</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-[1.2] text-[#0d1f3c] mb-5">
            Проблема не в предложении — в формате
          </h2>
          <p className="text-base text-[#4a5e78] leading-relaxed">
            Если дать пациенту выбор и вовлечь его в диалог — решение принимается быстрее. Не читать сообщение, а реагировать на него.
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-9 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-[#eaf2fb] border border-[#c0d9f0] flex items-center justify-center">
            <Icon name="Lightbulb" size={32} className="text-[#2a6dbf]" />
          </div>
        </div>
      </section>

      {/* ── ЧТО ИЗМЕНИЛИ ── */}
      <section className="bg-[#f0f5fb] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={PHONE_IMG} alt="Интерактивный триггер" className="w-full h-80 object-cover" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#2a6dbf] mb-4">Что изменили</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-[1.2] text-[#0d1f3c] mb-5">
              Интерактивные триггеры с выбором
            </h2>
            <p className="text-base text-[#4a5e78] mb-8">
              Пациент не читает — он выбирает. Три варианта, один клик — и он уже в воронке.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-white border border-[#d4e3f5] rounded-xl px-5 py-4 shadow-sm">
                <span className="text-xl">🎁</span>
                <span className="text-sm font-medium text-[#0d1f3c]">15% на профессиональную гигиену</span>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#d4e3f5] rounded-xl px-5 py-4 shadow-sm">
                <span className="text-xl">🦷</span>
                <span className="text-sm font-medium text-[#0d1f3c]">15% на лечение</span>
              </div>
              <div className="flex items-center gap-4 bg-white border border-[#d4e3f5] rounded-xl px-5 py-4 shadow-sm">
                <span className="text-xl">⭐</span>
                <span className="text-sm font-medium text-[#0d1f3c]">2000 бонусов на счёт</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── РЕЗУЛЬТАТЫ ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#2a6dbf] mb-4">Результат</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-[1.2] text-[#0d1f3c]">
              Тот же результат — вдвое быстрее
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-base text-[#4a5e78]">
              По текущей динамике ожидаем дополнительный рост на 30–40% на годовом горизонте.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 bg-[#f0f5fb] border border-[#d4e3f5] rounded-2xl p-8">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#4a5e78] mb-6">До внедрения</div>
            <div className="text-5xl font-bold text-[#0d1f3c] mb-2">12 мес.</div>
            <div className="text-base text-[#4a5e78]">для достижения конверсии 40% / 60%</div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="bg-white border border-[#d4e3f5] rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-[#0d1f3c]">40%</div>
                <div className="text-xs text-[#4a5e78] mt-0.5">вторичные</div>
              </div>
              <div className="bg-white border border-[#d4e3f5] rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-[#0d1f3c]">60%</div>
                <div className="text-xs text-[#4a5e78] mt-0.5">лояльные</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 bg-[#1a4a8a] rounded-2xl p-8">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-6">После внедрения</div>
            <div className="text-5xl font-bold text-white mb-2">6 мес.</div>
            <div className="text-base text-white/80">та же конверсия за половину срока</div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="bg-white/15 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-white">×2</div>
                <div className="text-xs text-white/70 mt-0.5">вовлечённость</div>
              </div>
              <div className="bg-white/15 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-white">↑</div>
                <div className="text-xs text-white/70 mt-0.5">скорость записи</div>
              </div>
              <div className="bg-white/15 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-white">↓</div>
                <div className="text-xs text-white/70 mt-0.5">путь до записи</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ СРАБОТАЛО ── */}
      <section className="bg-[#f0f5fb] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#2a6dbf] mb-4">Механика</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-[1.2] text-[#0d1f3c]">Почему это сработало</h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {[
              { n: "01", title: "Выбор вместо давления", desc: "Пациент чувствует контроль над решением." },
              { n: "02", title: "Мгновенное вовлечение", desc: "Ответить на кнопку проще, чем обдумывать запись." },
              { n: "03", title: "Снижение нагрузки", desc: "Мы убрали необходимость «решать самому»." },
            ].map((item) => (
              <div key={item.n} className="col-span-12 md:col-span-4 bg-white border border-[#d4e3f5] rounded-2xl p-7 shadow-sm">
                <div className="text-[11px] tracking-[0.2em] text-[#2a6dbf]/50 mb-5">{item.n}</div>
                <h3 className="text-base font-bold text-[#0d1f3c] mb-3">{item.title}</h3>
                <p className="text-sm text-[#4a5e78] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ВЫВОД ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#2a6dbf] mb-4">Вывод</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-[1.2] text-[#0d1f3c] mb-5">
            Разговаривать, а не рассылать
          </h2>
          <p className="text-base text-[#4a5e78] leading-relaxed">
            Вторичные и лояльные пациенты — это не просто база. Интерактивные триггеры позволяют ускорить принятие решений и увеличить конверсию без скидочных войн и ручной работы.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-7 space-y-4">
          {[
            "Ускорить принятие решения",
            "Повысить вовлечённость",
            "Увеличить конверсию без скидочных войн",
          ].map((text) => (
            <div key={text} className="flex items-center gap-4 border-b border-[#d4e3f5] pb-4">
              <Icon name="Check" size={14} className="text-[#2a6dbf] shrink-0" />
              <span className="text-base text-[#0d1f3c]">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#d4e3f5] py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-4 items-center">
          <span className="col-span-6 text-sm text-[#4a5e78]">© Future Care 360</span>
          <a
            href="https://futuresmile-clinic.ru/pamyatka-gigiena-polosti-rta"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-6 text-right text-sm text-[#2a6dbf] hover:text-[#0d1f3c] transition-colors"
          >
            futuresmile-clinic.ru
          </a>
        </div>
      </footer>
    </div>
  );
}
