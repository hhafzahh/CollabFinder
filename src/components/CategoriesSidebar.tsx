import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Palette, TrendingUp, Lightbulb } from "lucide-react";

const categories = [
  { name: "Web Development", icon: Code, count: 24, active: true },
  { name: "Mobile Apps", icon: Smartphone, count: 18 },
  { name: "Design", icon: Palette, count: 12 },
  { name: "Marketing", icon: TrendingUp, count: 8 },
  { name: "Startup Ideas", icon: Lightbulb, count: 15 }
];

const trendingSkills = [
  "React", "Node.js", "Python", "UI/UX", "AWS", "Flutter"
];

const CategoriesSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className={`w-full flex items-center justify-between p-3 rounded-md transition-colors ${
                  category.active 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent text-foreground'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <Badge 
                  variant="secondary" 
                  className={category.active ? 'bg-primary-foreground/20 text-primary-foreground' : ''}
                >
                  {category.count}
                </Badge>
              </button>
            );
          })}
        </div>
      </div>

      {/* Trending Skills */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Trending Skills</h3>
        <div className="flex flex-wrap gap-2">
          {trendingSkills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSidebar;
