import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "hero" | "feature";
}

const Section = ({ id, title, children, className, variant = "default" }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen py-20 px-6 flex items-center justify-center relative",
        variant === "hero" && "bg-gradient-hero",
        variant === "feature" && "bg-gradient-card",
        className
      )}
    >
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
            {title}
          </h2>
        </div>
        <div className="animate-slide-up">{children}</div>
      </div>
    </section>
  );
};

export default Section;