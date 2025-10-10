import { Plus, Search, Handshake, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-green-50 px-6">
        <div className="max-w-4xl text-center space-y-6 py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-600 font-medium mb-4">
            ✨ Where Ideas Meet Talent
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Find Your Perfect{" "}
            <span
              className="bg-clip-text text-transparent animate-pulse"
              style={{ backgroundImage: "linear-gradient(to right, #1e40af, #10b981)" }}
            >
              Project Partner
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Connect with talented individuals, showcase your projects, and build amazing things together.
            <span className="block mt-2 text-blue-600 font-medium">
              Your next collaboration starts here.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300"
              style={{ boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
            >
              Post Your Project
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Browse Projects
          
            </Button>

            <Link to="/collaborators">
              <Button
                size="lg"
                variant="secondary"
                className="hover:scale-105 transition-all duration-300"
              >
                Find Collaborators
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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

      {/* Footer */}
      <footer className="flex w-full px-20 py-12 justify-center items-center bg-gray-900">
        <div className="flex w-full max-w-screen-xl flex-col justify-center items-start gap-8">
          <div className="flex flex-wrap justify-between w-full gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-white text-lg font-bold">CollabFinder</h3>
              <p className="text-gray-400 mt-2">Connecting creators and building the future together.</p>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-white text-base font-semibold">Platform</h3>
              <ul className="mt-2 space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white">Browse Projects</a></li>
                <li><a href="#" className="hover:text-white">Find Talent</a></li>
                <li><a href="#" className="hover:text-white">Post Project</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-base font-semibold">Company</h3>
              <ul className="mt-2 space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white text-base font-semibold">Connect</h3>
              <div className="flex gap-4 mt-2">
                <Twitter className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="w-full pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2025 CollabFinder. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
