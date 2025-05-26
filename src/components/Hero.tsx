import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-electric-500/20 rounded-full blur-3xl animate-float3d"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-electric-600/10 animate-morphing" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-400/5 rounded-full blur-3xl animate-float3d" style={{ animationDelay: "2s" }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-electric-500/15 rounded-full blur-2xl animate-float3d" style={{ animationDelay: "3s" }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-electric-400/10 rounded-full blur-2xl animate-float3d" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 transform-gpu">
        <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-text-glow">
            <span className="text-white">Sayam</span>{" "}
            <span className="text-gradient">Maity</span>
          </h1>
          <h2 className={`text-xl md:text-2xl text-gray-300 mb-4 font-light transition-all duration-700 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            Computer Science Engineer
          </h2>
          <p className={`text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto transition-all duration-700 ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            Passionate About AI & Innovation
          </p>
          <p className={`text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.6s" }}>
            I'm a Computer Science Engineering student passionate about building smart solutions using AI and coding.
          </p>
        </div>

        {/* Enhanced Stats Bar with 3D effects */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 perspective-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.8s" }}>
          <div className="glass-effect rounded-lg p-4 card-3d transform-gpu hover:glow-effect transition-all duration-500 stagger-1">
            <div className="text-2xl font-bold text-electric-400 animate-scale-in-rotate">🧠</div>
            <div className="text-sm text-gray-300">Deep Learning</div>
          </div>
          <div className="glass-effect rounded-lg p-4 card-3d transform-gpu hover:glow-effect transition-all duration-500 stagger-2">
            <div className="text-2xl font-bold text-electric-400 animate-scale-in-rotate">🤖</div>
            <div className="text-sm text-gray-300">Robotics</div>
          </div>
          <div className="glass-effect rounded-lg p-4 card-3d transform-gpu hover:glow-effect transition-all duration-500 stagger-3">
            <div className="text-2xl font-bold text-electric-400 animate-scale-in-rotate">📜</div>
            <div className="text-sm text-gray-300">6+ Certifications</div>
          </div>
          <div className="glass-effect rounded-lg p-4 card-3d transform-gpu hover:glow-effect transition-all duration-500 stagger-4">
            <div className="text-2xl font-bold text-electric-400 animate-scale-in-rotate">📘</div>
            <div className="text-sm text-gray-300">Research Author</div>
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "1s" }}>
          <Button 
            className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric-500/25 transform-gpu animate-pulse-glow"
            onClick={() => {
              // Create a link element
              const link = document.createElement('a');
              // Set the href to the PDF file in the public directory
              link.href = '/Sayam Maity resume.pdf';
              // Set the download attribute to force download
              link.download = 'Sayam Maity resume.pdf';
              // Append to body
              document.body.appendChild(link);
              // Trigger click
              link.click();
              // Clean up
              document.body.removeChild(link);
            }}
          >
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            className="border-electric-500 text-electric-400 hover:bg-electric-500 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric-500/25 transform-gpu"
            onClick={scrollToAbout}
          >
            Learn More
          </Button>
        </div>

        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: "1.2s" }}>
          <ArrowDown className="w-6 h-6 text-gray-400 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
