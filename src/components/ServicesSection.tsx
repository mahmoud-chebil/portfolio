import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Server, Rocket, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'From backend APIs to responsive frontend interfaces, I deliver clean, efficient web solutions tailored to your needs—built for performance, scalability, and great UX.',
      features: ['Responsive Design', 'REST APIs', 'Modern Frameworks', 'Database Integration'],
      color: 'primary'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using Flutter, delivering native performance with beautiful, intuitive interfaces that work seamlessly on iOS and Android.',
      features: ['Cross-Platform', 'Native Performance', 'Material Design', 'State Management'],
      color: 'accent'
    },
    {
      icon: Server,
      title: 'Backend Solutions',
      description: 'Robust backend systems with Spring Boot, including RESTful APIs, database design, and microservices architecture for scalable enterprise applications.',
      features: ['Spring Boot', 'Microservices', 'Database Design', 'API Security'],
      color: 'primary'
    },
    {
      icon: Rocket,
      title: 'DevOps & Deployment',
      description: 'Streamlined deployment pipelines with Docker, CI/CD automation, and cloud infrastructure setup to ensure reliable, efficient application delivery.',
      features: ['Docker Containers', 'CI/CD Pipelines', 'Cloud Deployment', 'Monitoring'],
      color: 'accent'
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end development solutions from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="border-border hover:border-primary/50 transition-smooth hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Service Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${
                    service.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'
                  } transition-fast`}>
                    <service.icon className={`w-8 h-8 ${
                      service.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full group-hover:border-primary group-hover:text-primary transition-fast"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with clean code, modern design, and efficient deployment.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="glow-primary hover:glow-primary transition-smooth px-8"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;