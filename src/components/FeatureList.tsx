interface FeatureListProps {
  features: string[];
}

const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <ul className="space-y-4 text-left max-w-2xl mx-auto">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-center gap-3 text-lg text-foreground/90 animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;