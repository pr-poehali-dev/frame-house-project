import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2a4a] to-[#1a4a7a] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 tracking-wide uppercase">
            Кейс · Future Care 360
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Как мы ускорили и увеличили конверсию вторичных и лояльных пациентов с помощью интерактивных триггеров
          </h1>
          <p className="text-white/75 text-lg">
            Работа со вторичными и лояльными пациентами — ключевой источник стабильной выручки клиники. Но именно здесь часто возникает иллюзия: «пациенты и так вернутся».
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#0f2a4a]">С чем мы столкнулись</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Мы столкнулись с тем, что классические напоминания работают, но не дают нужной скорости и глубины вовлечения. Через Future Care 360 мы выстраивали стандартные триггеры с напоминанием о профилактическом осмотре.
          </p>
        </div>
      </section>

      {/* Old message example */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-[#0f2a4a]">Как было раньше</h2>
          <div className="bg-[#f0f7ff] border border-[#c8dff7] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="MessageSquare" size={18} className="text-[#1a6abf]" />
              <span className="text-sm font-semibold text-[#1a6abf] uppercase tracking-wide">Пример сообщения</span>
            </div>
            <div className="bg-white rounded-xl p-5 text-gray-800 leading-relaxed shadow-sm text-base">
              <p className="mb-2">Здравствуйте, Евгения Сергеевна!</p>
              <p className="mb-3">Пора немного позаботиться о себе — прошло больше 6 месяцев с последнего осмотра 🦷</p>
              <p className="mb-3">Профилактическая гигиена помогает сохранить зубы и дёсны здоровыми, а улыбку — свежей ✨</p>
              <p className="mb-3">Только сейчас — дополнительная скидка 10% на профессиональную чистку в течение 15 дней.</p>
              <p className="mb-3">💬 Запишитесь на удобное время — ответьте на это сообщение</p>
              <p className="mb-3 text-blue-600 underline">👉 futuresmile-clinic.ru/pamyatka-gigiena-polosti-rta</p>
              <p className="text-gray-500 text-sm">С уважением, Future Smile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Old results */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="BarChart2" size={20} className="text-[#0f2a4a]" />
            <h2 className="text-2xl font-bold text-[#0f2a4a]">Результат</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-4xl font-bold text-[#1a6abf] mb-1">40%</div>
              <div className="text-gray-600">конверсия вторичных пациентов</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-4xl font-bold text-[#1a6abf] mb-1">60%</div>
              <div className="text-gray-600">конверсия лояльных пациентов</div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3">
            <Icon name="Clock" size={20} className="text-amber-600 mt-0.5 shrink-0" />
            <p className="text-amber-800">Но достижение этих показателей занимало <strong>до года</strong>. Пациенты долго принимали решения и часто откладывали запись.</p>
          </div>
        </div>
      </section>

      {/* Hypothesis */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0f2a4a] text-white rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Lightbulb" size={20} className="text-yellow-300" />
              <span className="text-sm uppercase tracking-wide text-white/60 font-semibold">Гипотеза</span>
            </div>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              Мы предположили, что проблема не в самом предложении, а в <strong className="text-white">формате коммуникации</strong>.
            </p>
            <p className="text-white/80 text-lg">
              Если дать пациенту выбор и вовлечь его в диалог — решение будет приниматься быстрее.
            </p>
          </div>
        </div>
      </section>

      {/* What changed */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#0f2a4a]">Что мы изменили</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Мы протестировали интерактивные триггеры в Future Care 360 — сообщения, где пациенту предлагается <strong>выбрать</strong>, а не просто прочитать.
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <Icon name="MousePointerClick" size={18} className="text-[#1a6abf]" />
              <span className="text-sm font-semibold text-[#1a6abf] uppercase tracking-wide">Пример сценария выбора</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-[#f0f7ff] rounded-xl px-5 py-4 border border-[#c8dff7]">
                <span className="text-2xl">🎁</span>
                <span className="text-gray-800 font-medium">15% на профессиональную гигиену</span>
              </div>
              <div className="flex items-center gap-4 bg-[#f0f7ff] rounded-xl px-5 py-4 border border-[#c8dff7]">
                <span className="text-2xl">🦷</span>
                <span className="text-gray-800 font-medium">15% на лечение</span>
              </div>
              <div className="flex items-center gap-4 bg-[#f0f7ff] rounded-xl px-5 py-4 border border-[#c8dff7]">
                <span className="text-2xl">⭐</span>
                <span className="text-gray-800 font-medium">2000 бонусов на счёт</span>
              </div>
            </div>
            <p className="mt-5 text-gray-500 text-sm">Пациенту не нужно думать «что мне сейчас нужно» — он просто выбирает подходящий вариант.</p>
          </div>
        </div>
      </section>

      {/* Results after */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Icon name="TrendingUp" size={22} className="text-green-600" />
            <h2 className="text-2xl font-bold text-[#0f2a4a]">Что произошло после внедрения</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">×2</div>
              <div className="text-green-800 text-sm">вовлечённость пациентов</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">↑</div>
              <div className="text-green-800 text-sm">скорость записи после получения сообщения</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">↓</div>
              <div className="text-green-800 text-sm">путь от триггера до записи</div>
            </div>
          </div>

          <div className="bg-[#0f2a4a] text-white rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-5">
              <Icon name="Star" size={18} className="text-yellow-300" />
              <span className="font-bold text-lg">Главный результат</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                <div className="text-white/60 text-sm mb-2">До внедрения</div>
                <div className="text-white font-bold text-lg">40% / 60% конверсии</div>
                <div className="text-white/70 mt-1">достигались за ~12 месяцев</div>
              </div>
              <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                <div className="text-white/60 text-sm mb-2">После внедрения</div>
                <div className="text-white font-bold text-lg">40% / 60% конверсии</div>
                <div className="text-white/70 mt-1">достигаются за <strong className="text-yellow-300">6 месяцев</strong></div>
              </div>
            </div>
            <p className="mt-5 text-white/70 text-sm">
              По текущей динамике ожидаем рост ещё на <strong className="text-white">30–40%</strong> по сравнению с обычными триггерами на годовом горизонте.
            </p>
          </div>
        </div>
      </section>

      {/* Why it worked */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-[#0f2a4a]">Почему это сработало</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-[#0f2a4a] text-white flex items-center justify-center font-bold text-lg shrink-0">1</div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Выбор вместо давления</div>
                <div className="text-gray-600">Пациент чувствует контроль над решением.</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-[#0f2a4a] text-white flex items-center justify-center font-bold text-lg shrink-0">2</div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Мгновенное вовлечение</div>
                <div className="text-gray-600">Ответить на кнопку проще, чем обдумывать запись.</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-[#0f2a4a] text-white flex items-center justify-center font-bold text-lg shrink-0">3</div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Снижение когнитивной нагрузки</div>
                <div className="text-gray-600">Мы убрали необходимость «решать самому».</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-5 text-[#0f2a4a]">Вывод</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Вторичные и лояльные пациенты — это не просто база, а аудитория, с которой важно <strong>разговаривать</strong>, а не рассылать напоминания.
          </p>
          <div className="bg-[#f0f7ff] border border-[#c8dff7] rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Icon name="CheckCircle" size={18} className="text-green-600 shrink-0" />
              <span className="text-gray-800">Ускорить принятие решения</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="CheckCircle" size={18} className="text-green-600 shrink-0" />
              <span className="text-gray-800">Повысить вовлечённость</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="CheckCircle" size={18} className="text-green-600 shrink-0" />
              <span className="text-gray-800">Увеличить конверсию без скидочных войн и ручной работы</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100 border-t border-gray-200">
        <div className="max-w-3xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="text-gray-500 text-sm">© Future Care 360</span>
          <a
            href="https://futuresmile-clinic.ru/pamyatka-gigiena-polosti-rta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a6abf] text-sm hover:underline"
          >
            futuresmile-clinic.ru
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
