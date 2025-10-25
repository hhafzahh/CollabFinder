import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, Heart, Clock } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  members: number;
  maxMembers: number;
  postedTime: string;
  likes: number;
  status: "Open" | "Recruiting";
}

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  author, 
  members, 
  maxMembers,
  postedTime,
  likes,
  status 
}: ProjectCardProps) => {
  return (
    <div 
      className="group bg-card border border-border rounded-lg p-6 transition-all hover:shadow-lg"
    >
      {/* Author Info */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-foreground">{author.name}</h4>
            <p className="text-sm text-muted-foreground">{author.role}</p>
          </div>
        </div>
        <Badge 
          variant={status === "Open" ? "secondary" : "default"}
          className={status === "Open" ? "bg-green-500/10 text-green-600 hover:bg-green-500/20" : "bg-orange-500/10 text-orange-600 hover:bg-orange-500/20"}
        >
          {status}
        </Badge>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline"
              className="bg-primary/5 text-primary border-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{members}/{maxMembers} Members</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{postedTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{likes} likes</span>
          </div>
        </div>

        <Button size="sm" className="bg-primary hover:bg-primary/90">
          Join Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
