import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const activeCollaborators = [
  {
    name: "Emma Wilson",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    online: true
  },
  {
    name: "David Kim",
    role: "Backend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    online: true
  },
  {
    name: "Lisa Chen",
    role: "Data Scientist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    online: false
  }
];

const recentActivity = [
  {
    text: "New member joined AI Chatbot Project",
    time: "2 hours ago"
  },
  {
    text: "Project Green Energy App reached funding goal",
    time: "1 day ago"
  },
  {
    text: "You received a collaboration request",
    time: "2 days ago"
  }
];

const ActivitySidebar = () => {
  return (
    <div className="space-y-6">
      {/* Active Collaborators */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Active Collaborators</h3>
        <div className="space-y-3">
          {activeCollaborators.map((collaborator) => (
            <div key={collaborator.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                    <AvatarFallback>{collaborator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {collaborator.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-card" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{collaborator.name}</p>
                  <p className="text-xs text-muted-foreground">{collaborator.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border border-primary/20 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-2">Ready to Start?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Share your project idea and find the perfect collaborators to bring it to life.
        </p>
        <Button className="w-full bg-primary hover:bg-primary/90">
          + Create Project
        </Button>
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <p className="text-sm text-foreground">{activity.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitySidebar;
