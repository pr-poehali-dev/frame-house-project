import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    area: '',
    type: '',
  });
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculatePrice = () => {
    const area = parseInt(calculatorData.area);
    if (!area || !calculatorData.type) return;

    let pricePerSqm = 0;
    if (calculatorData.type === '60-100') pricePerSqm = 35000;
    else if (calculatorData.type === '100-140') pricePerSqm = 40000;
    else if (calculatorData.type === '140+') pricePerSqm = 45000;

    setEstimatedPrice(area * pricePerSqm);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary font-heading">СтройДом</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('process')} className="text-foreground hover:text-primary transition-colors">
              Процесс
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('calculator')} className="text-foreground hover:text-primary transition-colors">
              Калькулятор
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </nav>
      </header>

      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/4c971e4a-8b59-4322-b0b8-a9f3221910b0.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-heading">
              Каркасные дома по скандинавской технологии
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Строим надёжные дома для комфортной жизни с 2017 года. Более 146 реализованных проектов по всей России.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollToSection('calculator')} className="bg-accent hover:bg-accent/90">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">О компании</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground mb-6">
                Мы занимаемся строительством каркасных домов с 2017 года. За это время реализовали более 146 проектов — от частных
                домов для ПМЖ до глемпингов и парк-отелей.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Работаем только по договору, соблюдаем строительные нормы и несем ответственность за результат. Наши инженеры имеют
                более 10 лет опыта в каркасном домостроении.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-accent mb-2">146+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-accent mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Года гарантии</div>
                </Card>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/8b5e5899-a37b-4004-8e54-3f992cd439dd.jpg"
                alt="Интерьер дома"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" className="text-accent" size={24} />
                </div>
                <CardTitle>Дома 60–100 м²</CardTitle>
                <CardDescription>Компактные решения для дачи или постоянного проживания</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Оптимальный вариант для дачи, аренды или компактного дома. Самые популярные площади — 65 и 85 м².
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" className="text-accent" size={24} />
                </div>
                <CardTitle>Дома 100–140 м²</CardTitle>
                <CardDescription>Комфортные дома для семьи</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Просторные планировки с возможностью панорамного остекления. Идеально для семьи с детьми.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Castle" className="text-accent" size={24} />
                </div>
                <CardTitle>Дома 140+ м²</CardTitle>
                <CardDescription>Индивидуальные архитектурные решения</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Просторные дома для постоянного проживания с индивидуальными архитектурными решениями.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-accent/5 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-heading">Преимущества скандинавской технологии</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Icon name="Zap" className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Быстрое строительство</h4>
                  <p className="text-muted-foreground">2–3 месяца в базовой комплектации</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="ThermometerSnowflake" className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Энергоэффективность</h4>
                  <p className="text-muted-foreground">Экономия на отоплении до 40%</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Calendar" className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Круглогодичное строительство</h4>
                  <p className="text-muted-foreground">Работы в любое время года</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Shield" className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Надёжность</h4>
                  <p className="text-muted-foreground">Технология для сурового климата</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">Процесс строительства</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/6dd7777c-1daf-4503-ac81-75976b26d4ef/files/88fca807-15e8-46c1-a5e9-1b319abb77c0.jpg"
                alt="Процесс строительства"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <span>Проектирование</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Разработка индивидуального проекта с учётом ваших пожеланий и особенностей участка.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <span>Фундамент</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Устройство свайно-винтового фундамента, подобранного под геологию участка.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <span>Каркас и кровля</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Сборка каркаса из сухой строганной древесины и монтаж кровельной системы.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <span>Утепление и отделка</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Установка окон, утепление, внутренняя и внешняя отделка с монтажом инженерных систем.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                        5
                      </div>
                      <span>Сдача объекта</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Финальная приёмка работ, оформление документов и передача ключей.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-6 p-4 bg-accent/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  На каждом этапе проводится приёмка работ и предоставляются еженедельные фотоотчёты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <Icon name="MapPin" className="text-accent" size={48} />
              </div>
              <CardHeader>
                <CardTitle>Глемпинг в Сочи</CardTitle>
                <CardDescription>Комплекс из 8 каркасных домов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Уютный глемпинг-комплекс с панорамными окнами и видом на горы.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <Icon name="Hotel" className="text-accent" size={48} />
              </div>
              <CardHeader>
                <CardTitle>Парк-отель «Пересвет»</CardTitle>
                <CardDescription>15 коттеджей для гостей</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Современный парк-отель с индивидуальными архитектурными решениями.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <Icon name="Building" className="text-accent" size={48} />
              </div>
              <CardHeader>
                <CardTitle>Бутик-отели в Вятском</CardTitle>
                <CardDescription>Комплекс исторических построек</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Реконструкция и строительство бутик-отелей в селе Вятское.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">Калькулятор стоимости</h2>
          <Card>
            <CardHeader>
              <CardTitle>Рассчитайте примерную стоимость вашего дома</CardTitle>
              <CardDescription>Укажите параметры для предварительного расчёта</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="area">Площадь дома (м²)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Например, 85"
                  value={calculatorData.area}
                  onChange={(e) => setCalculatorData({ ...calculatorData, area: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Тип дома</Label>
                <Select value={calculatorData.type} onValueChange={(value) => setCalculatorData({ ...calculatorData, type: value })}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="60-100">60–100 м² (от 35 000 ₽/м²)</SelectItem>
                    <SelectItem value="100-140">100–140 м² (от 40 000 ₽/м²)</SelectItem>
                    <SelectItem value="140+">140+ м² (от 45 000 ₽/м²)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculatePrice} className="w-full bg-accent hover:bg-accent/90">
                Рассчитать стоимость
              </Button>

              {estimatedPrice && (
                <div className="p-6 bg-accent/5 rounded-lg text-center animate-fade-in">
                  <div className="text-sm text-muted-foreground mb-2">Примерная стоимость</div>
                  <div className="text-3xl font-bold text-accent">{estimatedPrice.toLocaleString('ru-RU')} ₽</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Итоговая цена зависит от комплектации и дополнительных опций
                  </div>
                </div>
              )}

              <div className="text-sm text-muted-foreground text-center">
                <p>Гарантия на работы — 3 года</p>
                <p>Возможна ипотека и счета эскроу</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Ответим на все вопросы и подберём оптимальное решение</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-accent" size={20} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-accent" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@stroydom.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-accent" size={20} />
                  <div>
                    <div className="font-semibold">Офис</div>
                    <div className="text-muted-foreground">г. Москва, ул. Строительная, д. 1</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-accent" size={20} />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>Можно ли менять материалы?</AccordionTrigger>
                    <AccordionContent>Да, при условии соответствия строительным нормам.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>Как контролировать строительство?</AccordionTrigger>
                    <AccordionContent>
                      Еженедельные фотоотчёты, совместные осмотры и оперативная связь с бригадиром.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>Какие гарантии вы даёте?</AccordionTrigger>
                    <AccordionContent>
                      Гарантия на работы — 3 года, на материалы — до 15 лет. Работаем строго по договору.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-heading">СтройДом</h3>
          <p className="text-primary-foreground/80 mb-4">Каркасные дома по скандинавской технологии с 2017 года</p>
          <div className="flex justify-center gap-6 text-sm text-primary-foreground/60">
            <span>© 2024 СтройДом</span>
            <span>•</span>
            <span>Все права защищены</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
