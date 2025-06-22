import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const services = [
    {
      title: "Цифровой портрет",
      price: "от 5,000₽",
      icon: "Monitor",
      features: ["Высокое разрешение", "3 правки", "Исходный файл"],
    },
    {
      title: "Живопись маслом",
      price: "от 15,000₽",
      icon: "Palette",
      features: ["Холст на подрамнике", "Доставка", "Сертификат"],
    },
    {
      title: "Концепт-арт",
      price: "от 8,000₽",
      icon: "Lightbulb",
      features: ["Эскизы", "Финальная версия", "Коммерческое использование"],
    },
  ];

  return (
    <div className="bento-card bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white col-span-2">
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <Icon name="DollarSign" size={24} className="text-yellow-400 mr-3" />
          <h2 className="text-2xl font-bold">Услуги и цены</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3">
                  <Icon
                    name={service.icon as any}
                    size={20}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{service.title}</h3>
                  <p className="text-yellow-400 font-bold">{service.price}</p>
                </div>
              </div>

              <ul className="space-y-1 text-sm text-gray-300">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Icon
                      name="Check"
                      size={14}
                      className="text-green-400 mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/20">
          <p className="text-center text-purple-200">
            💎 Скидка 20% на первый заказ для новых клиентов
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
