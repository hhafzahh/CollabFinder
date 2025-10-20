import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  rolesNeeded: string[];
  interestedCount: number;
}

const ProjectCards = ({ title, description, techStack, rolesNeeded, interestedCount }: ProjectCardProps) => {
  return (
    <div 
      className="group bg-card border border-border rounded-lg p-6 transition-all hover:border-primary/50"
      style={{ 
        boxShadow: 'var(--shadow-card)',
        transition: 'var(--transition-smooth)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="text-xs font-medium text-muted-foreground mb-2">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <div className="text-xs font-medium text-muted-foreground mb-2">Looking for</div>
            <div className="flex flex-wrap gap-2">
              {rolesNeeded.map((role) => (
                <Badge 
                  key={role} 
                  className="text-xs bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                >
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{interestedCount} interested</span>
          </div>
          
          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Heart className="mr-2 h-4 w-4" />
            Show Interest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
