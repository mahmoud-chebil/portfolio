import { ArrowDown, Download, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Mahmoud</span>
              <span className="block gradient-text">Chebil</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium">
              Web & Mobile Developer | DevOps Enthusiast
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              "Clean Code. Smart Deployments. Scalable Apps."
            </p>

            {/* Tech Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {['Spring Boot', 'Flutter', 'Docker', 'React', 'PostgreSQL'].map((tech, index) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary transition-fast"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="glow-primary hover:glow-primary transition-smooth px-8 py-3"
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:mahmoudchbl@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="tel:55804169">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 glow-primary">
                <img
                  src="https://i.postimg.cc/sXfkGJ5d/74507284.png"
                  alt="Mahmoud Chebil"
                  className="w-full h-full object-cover animate-glow"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-surface border border-border rounded-lg px-3 py-2 animate-float">
                <span className="text-sm font-medium text-primary">Spring Boot</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-surface border border-border rounded-lg px-3 py-2 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium text-accent">Flutter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
