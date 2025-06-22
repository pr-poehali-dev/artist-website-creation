import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating neon elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan rounded-full blur-3xl floating opacity-20"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full blur-3xl floating opacity-20"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-neon-green rounded-full blur-3xl floating opacity-20"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div
        className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          <span className="text-glow">Александра</span>
          <span className="block text-neon-purple text-glow-purple mt-2">
            Художница
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Создаю цифровое искусство и живопись в стиле будущего
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-neon-cyan hover:bg-cyan-400 text-dark-bg rounded-xl font-semibold transition-all duration-300 hover:scale-105 glow-border pulse-glow">
            Посмотреть работы
          </button>
          <button className="px-8 py-4 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Связаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
