
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mods = [
  {
    id: 1,
    title: "Rainbow Trail",
    description: "Добавляет красочный радужный след за вашим кубиком",
    price: "Бесплатно",
    image: "/placeholder.svg",
    difficulty: "Легкий"
  },
  {
    id: 2,
    title: "Mega Pack Текстур",
    description: "100+ новых текстур для всех игровых объектов",
    price: "299 ₽",
    image: "/placeholder.svg",
    difficulty: "Средний"
  },
  {
    id: 3,
    title: "Custom Particles",
    description: "Настраиваемые частицы для эффектов смерти и прыжков",
    price: "199 ₽",
    image: "/placeholder.svg",
    difficulty: "Продвинутый"
  },
  {
    id: 4,
    title: "Music Visualizer",
    description: "Добавляет визуальные эффекты, синхронизированные с музыкой",
    price: "499 ₽",
    image: "/placeholder.svg",
    difficulty: "Эксперт"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      {/* Hero Section */}
      <header className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Geometry Dash Mods</h1>
          <p className="text-xl text-gray-200 mb-8">Улучши свою игру с помощью самых крутых модов</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">
            Просмотреть все моды
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Популярные моды</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mods.map((mod) => (
            <Card key={mod.id} className="bg-[#252542] border-none overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="aspect-video relative">
                <img
                  src={mod.image}
                  alt={mod.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-sm bg-blue-500 text-white rounded">
                    {mod.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{mod.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">{mod.price}</span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {mod.price === "Бесплатно" ? "Скачать" : "Купить"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#252542] text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">О нас</h3>
              <p className="text-sm">
                Мы предоставляем качественные моды для Geometry Dash, 
                чтобы сделать вашу игру еще более увлекательной.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Полезные ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Как установить моды</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: support@gdmods.com</li>
                <li>Discord: GD Mods Community</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 GD Mods. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
