import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Server, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'accent',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Responsive Design', level: 92 }
      ]
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'primary',
      skills: [
        { name: 'Spring Boot', level: 88 },
        { name: 'REST APIs', level: 90 },
        { name: 'JPA/Hibernate', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 82 }
      ]
    },
    {
      icon: Server,
      title: 'DevOps',
      color: 'primary',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'GitLab CI', level: 78 },
        { name: 'Jenkins', level: 75 },
        { name: 'Linux', level: 82 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools',
      color: 'accent',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'IntelliJ', level: 88 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Firebase', level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern applications from frontend to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="border-border hover:border-primary/50 transition-smooth hover-lift"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-2 rounded-lg ${
                    category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}>
                    <category.icon className={`w-6 h-6 ${
                      category.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-[1.5s] ease-out ${
                            category.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-to-r from-accent to-accent/70'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Logos Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {[
              'Spring Boot', 'Flutter', 'Docker', 'PostgreSQL', 'React', 
              'MySQL', 'Git', 'Firebase', 'Linux', 'Jenkins'
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-surface border border-border rounded-lg text-sm font-medium hover:border-primary/50 hover:text-primary transition-fast cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;