
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Ready to innovate together?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations in AI, machine learning, and software development.
            </p>
            <p className="text-gray-300">
              Based in Kolkata, India 🇮🇳
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-electric-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-electric-400">📧</span>
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <a href="mailto:sayammaity03@gmail.com" className="text-electric-400 hover:underline">
                    sayammaity03@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-electric-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-electric-400">📞</span>
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <a href="tel:+919625142589" className="text-electric-400 hover:underline">
                    +91 9625142589
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-electric-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-electric-400">🔗</span>
                </div>
                <div>
                  <div className="text-white font-medium">LinkedIn</div>
                  <a 
                    href="https://www.linkedin.com/in/sayam-maity" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-electric-400 hover:underline"
                  >
                    linkedin.com/in/sayam-maity
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-effect border-electric-500/30">
            <CardHeader>
              <CardTitle className="text-gradient">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Interested in AI research, deep learning projects, or innovative software solutions? 
                Let's discuss how we can work together.
              </p>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-electric-500 hover:bg-electric-600 text-white"
                  onClick={() => window.location.href = 'mailto:sayammaity03@gmail.com'}
                >
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-electric-500 text-electric-400 hover:bg-electric-500 hover:text-white"
                  onClick={() => window.open('https://www.linkedin.com/in/sayam-maity', '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-navy-700">
          <p className="text-gray-400">
            © 2024 Sayam Maity. Bridging Intelligence & Innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
