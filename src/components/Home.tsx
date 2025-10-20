
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";


export default function Home() {

  return (
    <div className=" bg-gray-50">
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

            <Link to="/projects">
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Browse Projects
          
              </Button>
              </Link>

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

    </div>
  );
}
