import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, color: "text-blue-400" },
        { name: "TypeScript", level: 90, color: "text-blue-600" },
        { name: "Next.js", level: 85, color: "text-gray-400" },
        { name: "Tailwind CSS", level: 92, color: "text-cyan-400" },
        { name: "Three.js", level: 80, color: "text-orange-400" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, color: "text-green-400" },
        { name: "Python", level: 82, color: "text-yellow-400" },
        { name: "PostgreSQL", level: 85, color: "text-blue-500" },
        { name: "MongoDB", level: 80, color: "text-green-500" },
        { name: "GraphQL", level: 75, color: "text-pink-400" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 80, color: "text-blue-400" },
        { name: "AWS", level: 75, color: "text-orange-400" },
        { name: "Git", level: 95, color: "text-red-400" },
        { name: "Figma", level: 85, color: "text-purple-400" },
        { name: "Linux", level: 82, color: "text-yellow-300" },
      ],
    },
  ];

  const certifications = [
    "AWS Certified Developer",
    "React Professional Certificate",
    "Google Cloud Associate",
    "MongoDB Certified Developer",
  ];

  return (
    <section className="min-h-screen py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />

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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border shadow-card hover:shadow-glow-primary transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.6 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${skill.color}`}>
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={0} 
                          className="h-2 bg-muted"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="absolute top-0 left-0 h-2 bg-gradient-neon rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-secondary">
            Certifications & Achievements
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-6 py-3 text-lg bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 cursor-pointer"
                >
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "4+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "15+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card/30 backdrop-blur-sm border-border">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-primary mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;