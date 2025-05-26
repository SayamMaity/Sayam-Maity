
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a Computer Science Engineering graduate from Bengal Institute of Technology with strong skills in 
              Java, Python, and C. Currently, I am working on a deep learning fashion project using StyleGAN, PyTorch, 
              Tensorflow and NumPy.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have also developed a Student Monitoring System website and worked on hardware projects like a drone, 
              a robo car, and a baby monitoring system using Arduino. My research paper, "Education in Pandemic: 
              Navigating the New Normal," highlights my analytical abilities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am eager to contribute to innovative projects and continuously enhance my technical expertise.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-400">2025</div>
                <div className="text-gray-400">Graduation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-400">4+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-400">3</div>
                <div className="text-gray-400">Languages</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-gradient mb-6">Education</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white">Bengal Institute of Technology</h4>
                  <p className="text-electric-400">B.Tech in Computer Science Engineering</p>
                  <p className="text-gray-400">2021-2025</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white">Oxford Senior Secondary School</h4>
                  <p className="text-electric-400">Class - 12th</p>
                  <p className="text-gray-400">2020-2021</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">Oxford Senior Secondary School</h4>
                  <p className="text-electric-400">Class - 10th</p>
                  <p className="text-gray-400">2018-2019</p>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-electric-500/30 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
