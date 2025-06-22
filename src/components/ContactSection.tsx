import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contacts = [
    {
      type: "Email",
      value: "art@alexandra.ru",
      icon: "Mail",
      color: "text-blue-400",
    },
    {
      type: "Telegram",
      value: "@alexandra_art",
      icon: "MessageCircle",
      color: "text-cyan-400",
    },
    {
      type: "Instagram",
      value: "@alexandra.artist",
      icon: "Instagram",
      color: "text-pink-400",
    },
  ];

  return (
    <div className="bento-card bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white col-span-2 lg:col-span-1">
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <Icon name="Phone" size={24} className="text-pink-400 mr-3" />
          <h2 className="text-2xl font-bold">Контакты</h2>
        </div>

        <p className="text-purple-200 mb-6 leading-relaxed">
          Готова обсудить ваш проект! Свяжитесь со мной удобным способом.
        </p>

        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="group flex items-center p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`p-2 rounded-lg mr-4 ${contact.color} bg-white/10`}
              >
                <Icon name={contact.icon as any} size={20} />
              </div>
              <div>
                <div className="text-sm text-purple-300">{contact.type}</div>
                <div className="font-semibold text-white group-hover:text-pink-300 transition-colors">
                  {contact.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-xl border border-pink-500/20">
          <div className="flex items-center">
            <Icon name="Clock" size={16} className="text-pink-400 mr-2" />
            <span className="text-pink-200 text-sm">
              Отвечаю в течение 2-3 часов
            </span>
          </div>
        </div>

        <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Написать сейчас
        </button>
      </div>

      <div className="absolute top-4 right-4 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse"></div>
    </div>
  );
};

export default ContactSection;
