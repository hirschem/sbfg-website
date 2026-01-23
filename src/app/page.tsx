import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#001428] via-[#001f3f] to-[#002850] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#001428] via-[#001f3f] to-[#00162d] border-b border-blue-800/50 py-6 px-6 backdrop-blur-sm shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto flex items-center">
          <Image 
            src="/images/logo-white.png" 
            alt="Splash Boyz Financial Group Logo" 
            width={100} 
            height={100}
            className="mr-5 drop-shadow-2xl transition-transform hover:scale-105 duration-300"
          />
          <h1 className="text-lg font-bold text-white tracking-wider">Splash Boyz Financial Group</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 relative z-10">
        <div className="text-center">
          {/* Boat Image with glow effect */}
          <div className="mb-12 flex justify-center relative">
            <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full transform scale-75"></div>
            <Image 
              src="/images/boat-white.png" 
              alt="Sailboat" 
              width={400} 
              height={400}
              className="opacity-95 drop-shadow-2xl relative z-10 transition-transform hover:scale-105 duration-500 ease-in-out"
              priority
            />
          </div>
          
          {/* Slogan */}
          <p className="text-3xl md:text-4xl text-white font-bold tracking-wide mb-4 drop-shadow-lg">
            Navigating Your Financial Future
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto opacity-50"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#000d1a] via-[#001428] to-[#000d1a] text-gray-400 py-8 px-6 border-t border-blue-900/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm tracking-wide">&copy; {new Date().getFullYear()} Splash Boyz Financial Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
