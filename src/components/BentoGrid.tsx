import DigitalArtSection from "./DigitalArtSection";
import TraditionalArtSection from "./TraditionalArtSection";
import AboutSection from "./AboutSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";

const BentoGrid = () => {
  return (
    <section className="py-20 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            <span className="text-neon-cyan">Порт</span>
            <span className="text-neon-purple">фолио</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Исследуйте мир цифрового искусства в футуристическом стиле
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento auto-rows-fr">
          <DigitalArtSection />
          <TraditionalArtSection />
          <AboutSection />
          <PricingSection />
          <ContactSection />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
