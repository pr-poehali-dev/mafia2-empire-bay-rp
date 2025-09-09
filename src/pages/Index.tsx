import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [onlinePlayers] = useState(127);
  const [maxPlayers] = useState(200);
  
  const economyData = [
    { item: 'Хлеб', price: '$2', change: '+5%' },
    { item: 'Бензин', price: '$45', change: '-2%' },
    { item: 'Пистолет', price: '$850', change: '+12%' },
    { item: 'Автомобиль', price: '$15,000', change: '+8%' },
  ];

  const serverStats = [
    { label: 'Игроков онлайн', value: onlinePlayers, max: maxPlayers },
    { label: 'Фракций активно', value: 12, max: 15 },
    { label: 'Территорий захвачено', value: 8, max: 12 },
  ];

  return (
    <div className="min-h-screen bg-vintage-noir text-vintage-cream">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 28, 28, 0.7), rgba(47, 27, 20, 0.8)), url('/img/2c1f97eb-10d0-474a-8ddd-b190c24bf17d.jpg')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            {/* Vintage Logo */}
            <div className="mb-8">
              <h1 className="font-display text-6xl md:text-8xl font-bold text-vintage-gold animate-glow mb-4">
                EMPIRE BAY RP
              </h1>
              <div className="flex items-center justify-center space-x-4 text-vintage-gold text-2xl">
                <div className="w-20 h-0.5 bg-vintage-gold"></div>
                <span className="text-lg">★ ★ ★</span>
                <div className="w-20 h-0.5 bg-vintage-gold"></div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl font-serif text-vintage-cream max-w-2xl mx-auto">
              Погрузитесь в атмосферу 1940-50х годов. Станьте частью мафиозной семьи Empire Bay.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-vintage-gold text-vintage-noir hover:bg-vintage-gold/90 px-8 py-3 text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Начать играть
              </Button>
              <Button variant="outline" size="lg" className="border-vintage-gold text-vintage-gold hover:bg-vintage-gold/10 px-8 py-3 text-lg">
                <Icon name="Users" className="mr-2" size={20} />
                Discord сервер
              </Button>
            </div>

            {/* Server Status */}
            <div className="bg-vintage-chocolate/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-vintage-gold font-semibold">Статус сервера</span>
                <Badge className="bg-green-600 text-white">ОНЛАЙН</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Игроков онлайн: {onlinePlayers}/{maxPlayers}</span>
                <Icon name="Users" size={16} className="text-vintage-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-vintage-chocolate">
            <TabsTrigger value="overview" className="text-vintage-cream data-[state=active]:bg-vintage-gold data-[state=active]:text-vintage-noir">
              Обзор
            </TabsTrigger>
            <TabsTrigger value="rules" className="text-vintage-cream data-[state=active]:bg-vintage-gold data-[state=active]:text-vintage-noir">
              Правила
            </TabsTrigger>
            <TabsTrigger value="news" className="text-vintage-cream data-[state=active]:bg-vintage-gold data-[state=active]:text-vintage-noir">
              Новости
            </TabsTrigger>
            <TabsTrigger value="stats" className="text-vintage-cream data-[state=active]:bg-vintage-gold data-[state=active]:text-vintage-noir">
              Статистика
            </TabsTrigger>
            <TabsTrigger value="donate" className="text-vintage-cream data-[state=active]:bg-vintage-gold data-[state=active]:text-vintage-noir">
              Донат
            </TabsTrigger>
            <TabsTrigger value="contacts" className="text-vintage-cream data-[state=active]:bg-vintage-gold data-[state=active]:text-vintage-noir">
              Контакты
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Server Statistics */}
              <Card className="bg-vintage-chocolate border-vintage-leather">
                <CardHeader>
                  <CardTitle className="text-vintage-gold flex items-center">
                    <Icon name="BarChart3" className="mr-2" size={20} />
                    Статистика сервера
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {serverStats.map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{stat.label}</span>
                        <span>{stat.value}/{stat.max}</span>
                      </div>
                      <Progress 
                        value={(stat.value / stat.max) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Economy */}
              <Card className="bg-vintage-chocolate border-vintage-leather">
                <CardHeader>
                  <CardTitle className="text-vintage-gold flex items-center">
                    <Icon name="DollarSign" className="mr-2" size={20} />
                    Игровая экономика
                  </CardTitle>
                  <CardDescription className="text-vintage-cream/80">
                    Актуальные цены на товары
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {economyData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{item.item}</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">{item.price}</span>
                          <Badge 
                            variant={item.change.startsWith('+') ? 'default' : 'destructive'}
                            className={item.change.startsWith('+') ? 'bg-green-600' : 'bg-red-600'}
                          >
                            {item.change}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="bg-vintage-chocolate border-vintage-leather">
                <CardHeader>
                  <CardTitle className="text-vintage-gold flex items-center">
                    <Icon name="Star" className="mr-2" size={20} />
                    Особенности сервера
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Car" size={16} className="text-vintage-gold" />
                      <span>50+ уникальных автомобилей</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Building" size={16} className="text-vintage-gold" />
                      <span>15 активных фракций</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={16} className="text-vintage-gold" />
                      <span>Детальная карта Empire Bay</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Users" size={16} className="text-vintage-gold" />
                      <span>Активное сообщество</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Rules Tab */}
          <TabsContent value="rules">
            <Card className="bg-vintage-chocolate border-vintage-leather">
              <CardHeader>
                <CardTitle className="text-vintage-gold text-2xl">Правила сервера Empire Bay RP</CardTitle>
                <CardDescription className="text-vintage-cream/80">
                  Основные правила для комфортной игры на сервере
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-vintage-gold font-semibold mb-3 flex items-center">
                    <Icon name="Shield" className="mr-2" size={18} />
                    Общие правила
                  </h3>
                  <ul className="space-y-2 text-vintage-cream/90">
                    <li>• Соблюдайте культуру общения</li>
                    <li>• Запрещены читы и модификации</li>
                    <li>• Играйте в рамках своего персонажа</li>
                    <li>• Не нарушайте игровой процесс других игроков</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-vintage-gold font-semibold mb-3 flex items-center">
                    <Icon name="Car" className="mr-2" size={18} />
                    Правила дорожного движения
                  </h3>
                  <ul className="space-y-2 text-vintage-cream/90">
                    <li>• Соблюдайте ПДД в городе</li>
                    <li>• Не паркуйтесь в запрещенных местах</li>
                    <li>• Используйте поворотники</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news">
            <div className="space-y-6">
              <Card className="bg-vintage-chocolate border-vintage-leather">
                <CardHeader>
                  <CardTitle className="text-vintage-gold">Обновление 2.1: Новые районы</CardTitle>
                  <CardDescription className="text-vintage-cream/80">5 сентября 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-vintage-cream/90">
                    Добавлены новые районы города с уникальными локациями. Теперь доступны доки, новый деловой район и жилые кварталы.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-vintage-chocolate border-vintage-leather">
                <CardHeader>
                  <CardTitle className="text-vintage-gold">Турнир мафиозных семей</CardTitle>
                  <CardDescription className="text-vintage-cream/80">1 сентября 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-vintage-cream/90">
                    Стартует турнир между мафиозными семьями. Победители получат эксклюзивные призы и контроль над территориями.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-vintage-chocolate border-vintage-leather">
                <CardHeader>
                  <CardTitle className="text-vintage-gold">Топ игроков по уровню</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'Vito_Scaletta', level: 89, family: 'Клементе' },
                      { name: 'Joe_Barbaro', level: 85, family: 'Фальконе' },
                      { name: 'Henry_Tomasino', level: 82, family: 'Винчи' },
                      { name: 'Eddie_Scarpa', level: 78, family: 'Клементе' }
                    ].map((player, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">{player.name}</div>
                          <div className="text-sm text-vintage-cream/70">{player.family}</div>
                        </div>
                        <Badge className="bg-vintage-gold text-vintage-noir">
                          Уровень {player.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-vintage-chocolate border-vintage-leather">
                <CardHeader>
                  <CardTitle className="text-vintage-gold">Контроль территорий</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { family: 'Клементе', territories: 4, color: 'bg-red-600' },
                      { family: 'Фальконе', territories: 3, color: 'bg-blue-600' },
                      { family: 'Винчи', territories: 2, color: 'bg-green-600' }
                    ].map((family, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span>{family.family}</span>
                          <span>{family.territories} территорий</span>
                        </div>
                        <div className="w-full bg-vintage-noir rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${family.color}`}
                            style={{ width: `${(family.territories / 12) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Donate Tab */}
          <TabsContent value="donate">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: 'Базовый', 
                  price: '500₽', 
                  features: ['VIP статус', '10% бонус к опыту', 'Эксклюзивный транспорт'] 
                },
                { 
                  title: 'Премиум', 
                  price: '1500₽', 
                  features: ['Премиум статус', '25% бонус к опыту', 'Роскошная недвижимость', 'Приоритет входа'] 
                },
                { 
                  title: 'Элитный', 
                  price: '3000₽', 
                  features: ['Элитный статус', '50% бонус к опыту', 'Особняки в центре', 'Личный помощник'] 
                }
              ].map((plan, index) => (
                <Card key={index} className="bg-vintage-chocolate border-vintage-leather">
                  <CardHeader>
                    <CardTitle className="text-vintage-gold">{plan.title}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-vintage-cream">
                      {plan.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-vintage-cream/90">
                          <Icon name="Check" className="mr-2 text-vintage-gold" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-vintage-gold text-vintage-noir hover:bg-vintage-gold/90">
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-vintage-chocolate border-vintage-leather">
                <CardHeader>
                  <CardTitle className="text-vintage-gold">Связь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageSquare" className="text-vintage-gold" size={20} />
                    <div>
                      <div className="font-semibold">Discord сервер</div>
                      <div className="text-vintage-cream/80">empire-bay-rp.discord.gg</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="text-vintage-gold" size={20} />
                    <div>
                      <div className="font-semibold">Электронная почта</div>
                      <div className="text-vintage-cream/80">admin@empirebay-rp.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Globe" className="text-vintage-gold" size={20} />
                    <div>
                      <div className="font-semibold">IP сервера</div>
                      <div className="text-vintage-cream/80 font-mono">server.empirebay-rp.ru:22003</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-vintage-chocolate border-vintage-leather">
                <CardHeader>
                  <CardTitle className="text-vintage-gold">Администрация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: 'Don_Salieri', role: 'Главный администратор' },
                    { name: 'Frank_Colletti', role: 'Старший модератор' },
                    { name: 'Sam_Trapani', role: 'Модератор событий' }
                  ].map((admin, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{admin.name}</div>
                        <div className="text-sm text-vintage-cream/70">{admin.role}</div>
                      </div>
                      <Button size="sm" variant="outline" className="border-vintage-gold text-vintage-gold">
                        Связаться
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;