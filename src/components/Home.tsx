import { Plus, Search, Handshake, Users, Twitter, Linkedin, Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex w-full h-[600px] px-20 py-[108px] justify-center items-center bg-gradient-to-r from-blue-50 via-white to-green-50">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Find Your Next{" "}
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Project Partner
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
            Connect with talented individuals, collaborate on exciting projects, and bring your ideas to life. Join thousands of creators building the future together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-900 to-emerald-500 text-white text-lg font-semibold">
              Start Collaborating
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-700 text-base font-semibold">
              Browse Projects
            </button>
          </div>
        </div>

      </section>

      {/* How It Works Section */}
      <section className="flex w-full h-[538px] px-20 py-20 justify-center items-center bg-white">
        <div className="flex w-full max-w-screen-xl h-[378px] px-6 flex-col justify-center items-start gap-16">
          <div className="flex w-full h-[84px] justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <h2 className="text-gray-900 text-center text-4xl font-bold leading-10">How ProjectMeet Works</h2>
              <p className="text-gray-600 text-center text-xl leading-7">Simple steps to find your perfect project match</p>
            </div>
          </div>
          
          <div className="flex w-full h-[230px] justify-center items-start gap-8">
            {/* Step 1 */}
            <div className="w-[389px] h-[230px] text-center">
              <div className="flex w-20 h-20 p-6 justify-center items-center mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-900 to-emerald-500">
                <Plus className="w-5 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 text-center text-2xl font-semibold leading-8 mb-4">Post Your Project</h3>
              <p className="text-gray-600 text-center text-base leading-[26px]">
                Share your project idea, requirements, and what kind of collaborators you're looking for.
              </p>
            </div>

            {/* Step 2 */}
            <div className="w-[389px] h-[230px] text-center">
              <div className="flex w-20 h-20 p-6 justify-center items-center mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-blue-900">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 text-center text-2xl font-semibold leading-8 mb-4">Find Matches</h3>
              <p className="text-gray-600 text-center text-base leading-[26px]">
                Browse through interested collaborators or discover projects that match your skills and interests.
              </p>
            </div>

            {/* Step 3 */}
            <div className="w-[389px] h-[230px] text-center">
              <div className="flex w-20 h-20 p-6 justify-center items-center mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-900 to-emerald-500">
                <Handshake className="w-8 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 text-center text-2xl font-semibold leading-8 mb-4">Start Collaborating</h3>
              <p className="text-gray-600 text-center text-base leading-[26px]">
                Connect with your matches, discuss details, and begin working together on amazing projects.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      {/* Footer */}
      <footer className="flex w-full h-[313px] px-20 py-12 justify-center items-center bg-gray-900">
        <div className="flex w-full max-w-screen-xl h-[217px] px-6 flex-col justify-center items-start gap-8">
          <div className="flex w-full h-32 justify-center items-start gap-8">
            {/* Brand */}
            <div className="flex w-[284px] h-32 pb-8 flex-col items-start gap-4">
              <div className="flex h-8 items-center gap-2">
                
                <span className="text-white text-lg font-bold leading-7">CollabFinder</span>
              </div>
              <p className="text-gray-400 text-base leading-6">
                Connecting creators and building the future together.
              </p>
            </div>

            {/* Platform Links */}
            <div className="flex w-[284px] h-32 flex-col justify-center items-start gap-4">
              <h3 className="text-white text-base font-semibold leading-6">Platform</h3>
              <div className="flex w-[284px] h-[88px] flex-col justify-center items-start gap-2">
                <a href="#" className="text-gray-400 text-base leading-6 hover:text-white">Browse Projects</a>
                <a href="#" className="text-gray-400 text-base leading-6 hover:text-white">Find Talent</a>
                <a href="#" className="text-gray-400 text-base leading-6 hover:text-white">Post Project</a>
              </div>
            </div>

            {/* Company Links */}
            <div className="flex w-[284px] h-32 flex-col justify-center items-start gap-4">
              <h3 className="text-white text-base font-semibold leading-6">Company</h3>
              <div className="flex w-[284px] h-[88px] flex-col justify-center items-start gap-2">
                <a href="#" className="text-gray-400 text-base leading-6 hover:text-white">About</a>
                <a href="#" className="text-gray-400 text-base leading-6 hover:text-white">Careers</a>
                <a href="#" className="text-gray-400 text-base leading-6 hover:text-white">Contact</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex w-[284px] h-32 pb-16 flex-col items-start gap-4">
              <h3 className="text-white text-base font-semibold leading-6">Connect</h3>
              <div className="flex w-[284px] h-6 items-start gap-4">
                <Twitter className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-[14px] h-4 text-gray-400 hover:text-white cursor-pointer" />
                <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex h-[57px] pt-8 justify-center items-center w-full border-t border-gray-800">
            <p className="text-gray-400 text-center text-base leading-6">
              © 2024 CollabFinder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
