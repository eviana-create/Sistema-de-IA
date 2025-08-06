import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("ia");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["ia", "sites", "apps", "manutencao", "pagamentos", "contato"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#ia", label: "Atendimento IA" },
    { href: "#sites", label: "Sites" },
    { href: "#apps", label: "Apps" },
    { href: "#manutencao", label: "Manutenção" },
    { href: "#pagamentos", label: "Pagamentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-accent/50",
                activeSection === item.href.slice(1)
                  ? "bg-primary text-primary-foreground shadow-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;