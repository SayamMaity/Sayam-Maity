
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observer.observe(card));

    return () => {
      projectCards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const projects = [
    {
      title: "Deep Learning in Fashion Design",
      description: "Utilized StyleGAN, PyTorch, and NumPy to create innovative clothing styles. Focused on using deep learning for personalized fashion creation and trend forecasting.",
      tech: ["StyleGAN", "PyTorch", "NumPy", "TensorFlow"],
      emoji: "🧥",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Student Monitoring System",
      description: "Designed and developed a website for student monitoring using Java, Python, and MySQL. Ensured efficient user interface and secure data management.",
      tech: ["Java", "Python", "MySQL", "Web Development"],
      emoji: "👨‍💻",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Baby Monitoring System",
      description: "Built using Arduino for real-time monitoring and alerting mechanisms. Integrated sensors to detect baby movement and environmental conditions.",
      tech: ["Arduino", "IoT", "Sensors", "Real-time Systems"],
      emoji: "👶",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Robo Car & Drone Development",
      description: "Developed robotic car to navigate and overcome obstacles using sensor integration. Designed and built a drone capable of stable flight and controlled navigation.",
      tech: ["Arduino", "Robotics", "Drone Technology", "Navigation"],
      emoji: "🚗",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 perspective-1000">
      <div className="max-w-6xl mx-auto" ref={projectsRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal-3d">
          Featured <span className="text-gradient animate-text-glow">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="project-card reveal-3d group hover:scale-105 transition-all duration-500 bg-navy-800/50 border-navy-700 hover:border-electric-500/50 cursor-pointer overflow-hidden card-3d transform-gpu hover:glow-effect"
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 animate-scale-in-rotate group-hover:animate-bounce">{project.emoji}</div>
                  <CardTitle className="text-xl text-white group-hover:text-electric-400 transition-colors duration-300 group-hover:animate-text-glow">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-electric-500/20 text-electric-400 rounded-full text-sm border border-electric-500/30 hover:bg-electric-500/30 hover:scale-105 transition-all duration-200 transform-gpu"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
