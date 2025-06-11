import React from "react";

const About = () => {
  const CARDS = [
    {
      value: "1",
      icon: "🎯",
      title: "Problem Solving",
      description:
        "Strong analytical and problem-solving skills with a focus on efficient solutions.",
    },
    {
      value: "2",
      icon: "🌐",
      title: "Web Development",
      description:
        "Expert in MERN stack development, creating responsive and dynamic web applications.",
    },
    {
      value: "3",
      icon: "📱",
      title: "Mobile Development",
      description:
        "Skilled in React Native for cross-platform mobile app development.",
    },
    {
      value: "4",
      icon: "💡",
      title: "Innovation",
      description:
        "Constantly learning and implementing new technologies to create better solutions.",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full pb-5 lg:pb-0">
      <div className="text-lg text-gray-300 leading-relaxed space-y-4">
        <p>
          I’m Anjul Singh, a final-year B.Tech IT student at MMMUT, Gorakhpur
          with strong problem-solving skills and a passion for building
          efficient digital solutions.
        </p>

        <p>
          I specialize in MERN stack web development and mobile app development
          using React Native, focusing on creating responsive, user-friendly,
          and impactful applications.
        </p>
      </div>

      <div className="w-full">
        <div className="font-bold text-3xl text-white pb-6">
          What I'm Doing
          <div className="w-20 h-1 bg-yellow-400 rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.value}
              className="group transform transition-all duration-300 hover:scale-105"
            >
              <div className="p-6 flex flex-col border-2 border-neutral-700 rounded-xl hover:bg-neutral-800/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
