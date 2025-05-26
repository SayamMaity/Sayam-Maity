
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C"],
      icon: "💻"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "MySQL"],
      icon: "🌐"
    },
    {
      title: "Deep Learning & AI",
      skills: ["PyTorch", "StyleGAN", "NumPy", "TensorFlow"],
      icon: "🧠"
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "VSCode", "IntelliJ"],
      icon: "🛠️"
    },
    {
      title: "Hardware & Robotics",
      skills: ["Arduino", "Drone Technology", "Robotics", "IoT"],
      icon: "🤖"
    },
    {
      title: "Other Skills",
      skills: ["Data Structures", "OOP", "Video Editing", "Digital Marketing"],
      icon: "📊"
    }
  ];

  const certifications = [
    "Getting Started with Artificial Intelligence",
    "Introduction to Generative AI & Generative AI Studio",
    "Introduction to Large Language Models & Transformer Models",
    "Attention Mechanism & Encoder-Decoder Architecture",
    "Introduction to Image Generation & Generative AI Fundamentals",
    "Build Your Own GPT-4 Content Generator (Bootcamp)"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & <span className="text-gradient">Certifications</span>
        </h2>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-electric-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-effect rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gradient mb-6 text-center">
            AI & Tech Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-navy-800/50 hover:bg-electric-500/10 transition-colors duration-200">
                <div className="text-electric-400 mt-1">📜</div>
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl mb-2">🇺🇸</div>
              <div className="text-gray-300">English (Fluent)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🇮🇳</div>
              <div className="text-gray-300">Hindi (Fluent)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🇧🇩</div>
              <div className="text-gray-300">Bengali (Fluent)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
