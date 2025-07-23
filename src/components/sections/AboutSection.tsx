import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Code } from "lucide-react";

const AboutSection = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Led a team of 5 developers building scalable web applications with React and Node.js",
      icon: Award,
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed responsive web applications and improved user experience by 40%",
      icon: Code,
    },
    {
      year: "2020",
      title: "Junior Developer",
      company: "StartUp Hub",
      description: "Built and maintained multiple client websites using modern web technologies",
      icon: Calendar,
    },
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "AWS", "Docker", "GraphQL", "Three.js", "Framer Motion"
  ];

  return (
    <section className="min-h-screen py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional, 
            and user-friendly applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-primary">Background</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Based in San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>4+ years of experience</span>
                </div>
              </div>
              
              <p className="text-foreground mt-6 leading-relaxed">
                I specialize in creating exceptional digital experiences that are fast, 
                accessible, and visually appealing. My passion lies in solving complex 
                problems through clean, efficient code and intuitive design.
              </p>
            </Card>

            {/* Skills */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-3 py-1 bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">Experience Timeline</h3>
            
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border shadow-card hover:shadow-glow-primary transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-accent border-accent">
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-primary font-medium mb-3">{item.company}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Timeline connector */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;