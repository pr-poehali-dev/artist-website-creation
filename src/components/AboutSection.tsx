import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const skills = [
    { name: "Photoshop", level: 95 },
    { name: "Blender", level: 88 },
    { name: "Масляная живопись", level: 92 },
    { name: "Акварель", level: 85 },
  ];

  return (
    <div className="bento-card gradient-about text-white col-span-2 lg:col-span-1">
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <Icon name="User" size={24} className="text-emerald-300 mr-3" />
          <h2 className="text-2xl font-bold">Обо мне</h2>
        </div>

        <p className="text-emerald-100 mb-6 leading-relaxed">
          Художник с 8-летним опытом, совмещаю цифровое искусство и традиционную
          живопись. Выпускница Художественной академии, участница международных
          выставок.
        </p>

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-emerald-200">{skill.name}</span>
                <span className="text-emerald-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-emerald-400 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-300">150+</div>
            <div className="text-sm text-emerald-200">Работ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-300">50+</div>
            <div className="text-sm text-emerald-200">Клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-300">8</div>
            <div className="text-sm text-emerald-200">Лет опыта</div>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 w-20 h-20 border border-emerald-400/20 rounded-full"></div>
    </div>
  );
};

export default AboutSection;
