import ActivitySidebar from "./ActivitySidebar";
import CategoriesSidebar from "./CategoriesSidebar";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

const mockProjects = [
   {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    description: "Building a next-generation e-commerce platform with AI recommendations, real-time analytics, and seamless user experience. Looking for passionate developers and designers to join our team.",
    techStack: ["React", "Python", "Machine Learning"],
    author: {
      name: "Sarah Chen",
      role: "Senior Full-Stack Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    members: 3,
    maxMembers: 5,
    postedTime: "2 days ago",
    likes: 24,
    status: "Open" as const
  },
  {
    id: 2,
    title: "Mental Health Support App",
    description: "Creating a mobile app to provide accessible mental health resources and peer support. We need mobile developers, therapists, and marketing specialists to make this vision a reality.",
    techStack: ["Flutter", "Firebase", "UI/UX"],
    author: {
      name: "Alex Rodriguez",
      role: "Product Designer & Entrepreneur",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    members: 2,
    maxMembers: 6,
    postedTime: "1 week ago",
    likes: 18,
    status: "Recruiting" as const
  },
  {
    id: 3,
    title: "Decentralized Learning Platform",
    description: "Building a blockchain-based platform for peer-to-peer learning with NFT certificates. Looking for Web3 developers, educators, and community managers.",
    techStack: ["Solidity", "Web3", "Next.js"],
    author: {
      name: "Michael Thompson",
      role: "Blockchain Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    members: 1,
    maxMembers: 4,
    postedTime: "3 days ago",
    likes: 32,
    status: "Open" as const
  },
  {
    id: 4,
    title: "Sustainable Living Marketplace",
    description: "E-commerce platform connecting eco-friendly brands with conscious consumers. Need full-stack developers and sustainability experts.",
    techStack: ["Next.js", "PostgreSQL", "Stripe"],
    author: {
      name: "Emma Green",
      role: "Environmental Advocate",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
    members: 4,
    maxMembers: 6,
    postedTime: "5 days ago",
    likes: 15,
    status: "Recruiting" as const
  }
];

const ProjectGrid = () => {
  return (
    
<div className="container mx-auto px-10 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-3">
            <CategoriesSidebar />
          </div>

          {/* Main Content - Projects */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Discover Projects
                </h1>
                
                {/* Filter Tabs */}
                <div className="flex gap-2 mb-6">
                  {(["Latest", "Popular", "My Interests"] as const).map((filter) => (
                    <Button
                      key={filter}
                  
                      size="sm"
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Project Cards */}
              <div className="space-y-4">
                {mockProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Activity */}
          <div className="lg:col-span-3">
            <ActivitySidebar />
          </div>
        </div>
      </div>
  );
};

export default ProjectGrid;
