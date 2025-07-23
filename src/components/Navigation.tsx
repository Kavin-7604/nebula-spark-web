import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, User, Code, Mail, FileText, Trophy, Github } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Trophy },
    { id: "articles", label: "Articles", icon: FileText },
    { id: "profiles", label: "Profiles", icon: Github },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className={`
                    relative transition-all duration-300
                    ${activeSection === item.id 
                      ? 'bg-primary text-primary-foreground shadow-glow-primary' 
                      : 'hover:bg-muted hover:text-foreground'
                    }
                  `}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-md -z-10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Home className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;