export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mix-blend-normal filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10">


        {/* Hero Section */}
        <main className="px-6 py-16 max-w-7xl mx-auto mt-20">
          <div className="text-center space-y-6 mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                create-app-setup
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
              Your project is ready. Build fast. Ship faster.
            </p>
            
 
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Feature Card 1 */}
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Preconfigured tooling</h3>
              <p className="text-slate-400 leading-relaxed">
                ESLint, Prettier, and TypeScript configured out of the box. Start coding without the setup hassle.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-purple-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Best-practice folder structure</h3>
              <p className="text-slate-400 leading-relaxed">
                Organized, scalable architecture that grows with your project. Components, utils, and types ready to go.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-pink-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">TypeScript-first setup</h3>
              <p className="text-slate-400 leading-relaxed">
                Full type safety from the start. Catch errors early and enjoy better IDE support throughout development.
              </p>
            </div>
          </div>


        </main>
      </div>


    </div>
  );
}