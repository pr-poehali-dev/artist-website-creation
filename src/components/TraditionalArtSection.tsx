const TraditionalArtSection = () => {
  const paintings = [
    {
      title: "Закат в горах",
      medium: "Масло на холсте",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    },
    {
      title: "Портрет в красках",
      medium: "Акварель",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    },
    {
      title: "Натюрморт",
      medium: "Акрил",
      image:
        "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="bento-card gradient-traditional text-white col-span-2 lg:col-span-1 row-span-2">
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
          <h2 className="text-2xl font-bold">Традиционная Живопись</h2>
        </div>

        <p className="text-orange-100 mb-6 leading-relaxed">
          Работаю с классическими материалами: маслом, акварелью, акрилом.
          Каждая работа создается вручную с особой душой.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {paintings.map((painting, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center p-3">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="w-16 h-16 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-white">{painting.title}</h3>
                  <p className="text-orange-200 text-sm">{painting.medium}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white font-medium transition-all duration-300 hover:scale-105">
          Смотреть все →
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-yellow-400/30 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-400/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default TraditionalArtSection;
