import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex w-full h-[73px] px-20 py-0 pb-[1px] justify-center items-center border-b border-gray-200 bg-white shadow-sm">
      <div className="flex w-full max-w-screen-xl h-[72px] px-6 py-4 justify-center items-center">
        <div className="flex w-full h-10 justify-between items-start">
          {/* Logo and Navigation */}
          <div className="flex w-[557px] h-10 justify-center items-center gap-8">
            {/* Logo */}
            <div className="flex w-[167px] h-10 justify-center items-center gap-2">
              <Link to="/" className="text-gray-900 text-xl font-bold leading-7">CollabFinder</Link>
            </div>

            {/* Navigation */}
            <nav className="flex w-[560px] h-6 justify-center items-start gap-6">
              <Link to="/projects" className="text-gray-700 text-base font-medium leading-6 hover:text-blue-600">Discover</Link>
              <Link to="/talent" className="text-gray-700 text-base font-medium leading-6 hover:text-blue-600">Find Talent</Link>
              <Link to="/how-it-works" className="text-gray-700 text-base font-medium leading-6 hover:text-blue-600">How it Works</Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex w-100 h-10 justify-center items-center gap-4">
            <button className="flex w-[102px] h-10 pt-[2px] justify-center items-center">
              <span className="text-gray-700 text-center text-base font-medium">Sign In</span>
            </button>
            <button className="flex w-[150px] h-10 px-6 py-[10px] justify-center items-center rounded-lg bg-gradient-to-r from-blue-900 to-emerald-500">
              <span className="text-white text-center text-base font-medium">Post Project</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
