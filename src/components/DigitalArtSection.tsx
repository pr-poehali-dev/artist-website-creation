const DigitalArtSection = () => {
  const artworks = [
    {
      title: "Космическая Одиссея",
      description: "3D визуализация",
      image:
        "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=300&fit=crop",
    },
    {
      title: "Неоновый Город",
      description: "Концепт-арт",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    },
    {
      title: "Киберпанк Портрет",
      description: "Цифровая живопись",
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="bento-card gradient-digital text-white col-span-2 lg:col-span-1 row-span-2">
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
          <h2 className="text-2xl font-bold">Цифровое Искусство</h2>
        </div>

        <p className="text-purple-100 mb-6 leading-relaxed">
          Создаю цифровые миры с помощью современных технологий.
          3D-моделирование, концепт-арт и цифровая живопись.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {artworks.map((artwork, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center p-3">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-16 h-16 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-white">{artwork.title}</h3>
                  <p className="text-purple-200 text-sm">
                    {artwork.description}
                  </p>
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
      <div
        className="absolute top-4 right-4 w-20 h-20 border border-cyan-400/30 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      ></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default DigitalArtSection;
