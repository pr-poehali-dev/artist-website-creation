import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl floating"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl floating"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500 rounded-full blur-3xl floating"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div
        className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white text-glow">
          Александра
          <span className="block text-artist-purple">Художница</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Создаю цифровое искусство и живопись, которые рассказывают истории
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-artist-purple hover:bg-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Посмотреть работы
          </button>
          <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full font-semibold transition-all duration-300">
            Связаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
