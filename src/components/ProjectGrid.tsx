import ProjectCards from "./ProjectCard";

const mockProjects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "Building an intelligent task management system that learns from your habits and suggests optimal scheduling.",
    techStack: ["React", "TypeScript", "Python", "TensorFlow"],
    rolesNeeded: ["ML Engineer", "UI/UX Designer"],
    interestedCount: 12
  },
  {
    id: 2,
    title: "Decentralized Social Network",
    description: "Creating a privacy-first social platform using blockchain technology for user data ownership.",
    techStack: ["Solidity", "React", "IPFS", "Node.js"],
    rolesNeeded: ["Blockchain Dev", "Frontend Dev"],
    interestedCount: 28
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description: "Comprehensive wellness app with nutrition tracking, workout planning, and progress analytics.",
    techStack: ["Flutter", "Firebase", "Swift"],
    rolesNeeded: ["Mobile Dev", "Backend Dev"],
    interestedCount: 15
  },
  {
    id: 4,
    title: "Virtual Reality Art Gallery",
    description: "Immersive VR platform for artists to showcase and sell their digital artwork in virtual spaces.",
    techStack: ["Unity", "C#", "WebGL", "Three.js"],
    rolesNeeded: ["VR Developer", "3D Artist"],
    interestedCount: 9
  },
  {
    id: 5,
    title: "Sustainable Living Marketplace",
    description: "E-commerce platform connecting eco-friendly brands with conscious consumers.",
    techStack: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    rolesNeeded: ["Full Stack Dev", "Product Manager"],
    interestedCount: 22
  },
  {
    id: 6,
    title: "Real-time Collaboration Tool",
    description: "Next-gen collaborative workspace with live editing, video calls, and AI assistance.",
    techStack: ["Vue.js", "WebRTC", "Redis", "Docker"],
    rolesNeeded: ["Frontend Dev", "DevOps Engineer"],
    interestedCount: 31
  }
];

const ProjectGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover exciting projects looking for talented collaborators. Find your next opportunity to build something amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <ProjectCards
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              rolesNeeded={project.rolesNeeded}
              interestedCount={project.interestedCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
