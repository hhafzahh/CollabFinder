import { Plus, Search, Handshake, Twitter, Linkedin, Github } from "lucide-react";
export default function Footer() {

    return (<>
    
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
    </>)
}