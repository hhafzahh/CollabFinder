import { Upload, Users, Rocket } from "lucide-react";
import { Plus, Search, Handshake, Twitter, Linkedin, Github } from "lucide-react";


const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Post Your Project",
      description: "Share your project idea and describe what you're building. Specify the roles and skills you need."
    },
    {
      icon: Users,
      title: "Find Collaborators",
      description: "Connect with talented individuals who are excited about your vision and ready to contribute."
    },
    {
      icon: Rocket,
      title: "Build Together",
      description: "Collaborate with your team, bring your project to life, and launch something amazing."
    }
  ];

  return (
     <section className="flex w-full min-h-[500px] px-6 py-20 justify-center items-center bg-white">
        <div className="flex w-full max-w-screen-xl flex-col justify-center items-center gap-16">
          <div className="text-center">
            <h2 className="text-gray-900 text-4xl font-bold mb-2">How CollabFinder Works</h2>
            <p className="text-gray-600 text-xl">Simple steps to find your perfect project match</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Step 1 */}
            <div className="w-80 text-center">
              <div className="flex w-20 h-20 justify-center items-center mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-900 to-emerald-500">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 text-2xl font-semibold mb-3">Post Your Project</h3>
              <p className="text-gray-600 text-base">
                Share your project idea, requirements, and what kind of collaborators you're looking for.
              </p>
            </div>

            {/* Step 2 */}
            <div className="w-80 text-center">
              <div className="flex w-20 h-20 justify-center items-center mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-blue-900">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 text-2xl font-semibold mb-3">Find Matches</h3>
              <p className="text-gray-600 text-base">
                Browse through interested collaborators or discover projects that match your skills and interests.
              </p>
            </div>

            {/* Step 3 */}
            <div className="w-80 text-center">
              <div className="flex w-20 h-20 justify-center items-center mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-900 to-emerald-500">
                <Handshake className="w-8 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 text-2xl font-semibold mb-3">Start Collaborating</h3>
              <p className="text-gray-600 text-base">
                Connect with your matches, discuss details, and begin working together on amazing projects.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;
 {/* How It Works Section */}
      