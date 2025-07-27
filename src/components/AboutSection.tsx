import { GraduationCap, Brain, Zap, Users, MessageCircle, Bug } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const softSkills = [
    { icon: Brain, title: 'Problem-solving mindset', description: 'Analytical approach to complex challenges' },
    { icon: Zap, title: 'Fast learner', description: 'Quick adaptation to new technologies' },
    { icon: Users, title: 'Adaptability', description: 'Flexible in changing environments' },
    { icon: MessageCircle, title: 'Communication', description: 'Clear technical communication' },
    { icon: Bug, title: 'Debugging', description: 'Systematic error detection and resolution' }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating scalable solutions with clean code and efficient deployments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hi, I'm Mahmoud, a web developer passionate about clean, scalable code and mobile-first design. 
                With experience in <span className="text-primary font-medium">Spring Boot</span> and <span className="text-accent font-medium">Flutter</span>, 
                I've built real-world applications that run smoothly across platforms.
              </p>
              <p className="text-lg leading-relaxed">
                I thrive on solving problems, learning fast, and improving systems with efficient 
                <span className="text-primary font-medium"> DevOps pipelines</span>. My goal is to create 
                applications that not only work flawlessly but also provide exceptional user experiences.
              </p>
            </div>

            {/* Education */}
            <Card className="border-primary/20 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-lg font-medium text-primary">Computer Science Engineering</p>
                    <p className="text-muted-foreground">ESPRIT Tunisia</p>
                    <p className="text-sm text-muted-foreground">Graduated January 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Soft Skills</h3>
            <div className="grid gap-4">
              {softSkills.map((skill, index) => (
                <Card 
                  key={skill.title}
                  className="border-border hover:border-primary/50 transition-fast hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <skill.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;