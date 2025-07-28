import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState } from 'react';
import devopsProject from '@/assets/devops-project.jpg';

const PortfolioSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const flutterImages = [
    'https://i.postimg.cc/GpQBhBgH/1.png',
    'https://i.postimg.cc/Vk9vDr8D/10.png',
    'https://i.postimg.cc/3wnRQsWG/11.png',
    'https://i.postimg.cc/RFh0SgnD/12.png',
    'https://i.postimg.cc/bJ5ws1xN/13.png',
    'https://i.postimg.cc/4yhNtnPv/14.png',
    'https://i.postimg.cc/NGy1b4PD/15.png',
    'https://i.postimg.cc/6TJ6hwbk/16.png',
    'https://i.postimg.cc/HsXb1Lm7/17.png',
    'https://i.postimg.cc/05L74wTs/18.png',
    'https://i.postimg.cc/sgJS10vj/19.png',
    'https://i.postimg.cc/9MQD4Ws1/2.png',
    'https://i.postimg.cc/VkwnfcsZ/20.png',
    'https://i.postimg.cc/Gp7yx8F6/21.png',
    'https://i.postimg.cc/vBCxCJSz/22.png',
    'https://i.postimg.cc/nzXQRFTr/23.png',
    'https://i.postimg.cc/nrsMk3FD/3.png',
    'https://i.postimg.cc/fLqJmGNs/4.png',
    'https://i.postimg.cc/wMSMbDMb/5.png',
    'https://i.postimg.cc/WpKd3c86/6.png',
    'https://i.postimg.cc/FsL7kCnt/7.png',
    'https://i.postimg.cc/CxpdGCWR/8.png',
    'https://i.postimg.cc/MGWT46Zx/9.png',
    'https://i.postimg.cc/gjRLpgCP/paiment.png',
    'https://i.postimg.cc/RCnHw0Nb/printing.png'
  ];

  const projects = [
    {
      title: 'Flutter Mobile App',
      platform: 'iOS & Android',
      description: 'Cross-platform mobile application showcasing responsive UI design using Flutter widgets and Material Design principles.',
      image: flutterImages[0],
      tags: ['Flutter', 'Dart', 'REST APIs', 'Material Design', 'Provider', 'Mobile Development'],
      features: [
        'Responsive UI using Flutter widgets',
        'Integrated REST APIs for dynamic content',
        'Provider for efficient state management',
        'Cross-platform compatibility ensured',
        'Comprehensive testing and debugging'
      ],
      images: flutterImages
    },
    {
      title: 'DevOps Pipeline Automation',
      platform: 'Docker, GitLab CI/CD, Ubuntu',
      description: 'Comprehensive DevOps solution featuring containerized Django application with CI/CD and scripting.',
      image: devopsProject,
      tags: ['Docker', 'GitLab CI/CD', 'Vagrant', 'Django', 'Trivy', 'Bash Scripting', 'Ubuntu'],
      features: [
        'Containerized Django app with multi-stage Dockerfile',
        'Deployed via Vagrant on Ubuntu infrastructure',
        'CI/CD pipelines for linting and security scans',
        'Automated image build and registry push',
        'Custom Bash scripts for backup automation',
        'Container testing and validation workflows'
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world applications and DevOps solutions that demonstrate technical expertise and problem-solving skills
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.title}>
              <Card className="border hover:border-primary transition overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative">
                        <div className="h-80 lg:h-96 flex items-center justify-center bg-neutral-900">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="max-h-[300px] w-auto object-contain transition-transform duration-500 hover:scale-105 rounded"
                            loading="lazy"
                          />
                        </div>
                        {project.images && (
                          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                            <Button
                              size="sm"
                              className="glow-primary"
                              onClick={() => {
                                const section = document.getElementById('flutter-gallery');
                                section?.scrollIntoView({ behavior: 'smooth' });
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Demo
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`p-8 sm:p-10 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="mb-4">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-primary font-medium">{project.platform}</p>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {project.title === 'Flutter Mobile App' && (
                <div id="flutter-gallery" className="mt-12">
                  <h3 className="text-2xl font-bold text-center mb-6">Flutter App Gallery</h3>
                  <div className="max-w-4xl mx-auto relative">
                    <Carousel opts={{ align: 'start', loop: true }} setApi={(api) => api.on('select', () => setCurrentImageIndex(api.selectedScrollSnap()))}>
                      <CarouselContent>
                        {flutterImages.map((image, index) => (
                          <CarouselItem key={index} className="p-2">
                            <img
                              src={image}
                              alt={`Flutter screenshot ${index + 1}`}
                              className="w-full max-h-[400px] object-contain rounded shadow"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                    <div className="absolute bottom-2 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                      {currentImageIndex + 1} of {flutterImages.length}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PortfolioSection;
