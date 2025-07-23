import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses using OpenAI API. Built with React, Socket.io, and Express.",
      image: "/placeholder.svg",
      tech: ["React", "Socket.io", "OpenAI", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/placeholder.svg",
      tech: ["React", "TypeScript", "Firebase", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "3D Portfolio Website",
      description: "Interactive 3D portfolio showcasing Three.js capabilities with immersive animations and particle effects.",
      image: "/placeholder.svg",
      tech: ["React", "Three.js", "Framer Motion", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section className="min-h-screen py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my best work showcasing various technologies and creative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className={`
                overflow-hidden bg-card/50 backdrop-blur-sm border-border shadow-card
                hover:shadow-glow-primary transition-all duration-300
                ${project.featured ? 'md:col-span-1 lg:col-span-1' : ''}
              `}>
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 lg:h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>

                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-glow-accent"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;