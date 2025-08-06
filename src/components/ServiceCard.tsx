import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

const ServiceCard = ({ children, className, animated = true }: ServiceCardProps) => {
  return (
    <Card
      className={cn(
        "bg-gradient-card border-border/50 shadow-card backdrop-blur-sm transition-smooth hover:shadow-glow",
        animated && "hover:scale-105 hover:-translate-y-2",
        className
      )}
    >
      <CardContent className="p-8">{children}</CardContent>
    </Card>
  );
};

export default ServiceCard;