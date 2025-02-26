export const HeroSection =()=> {
    return(
        <section id="about" className="relative min-h-screen pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-gray-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                 Junior
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                1+ years of experience crafting exceptional web experiences.
                Specialized in React, TypeScript, and modern web technologies.
              </p>
            </div>
            {/* Key Skills */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-900 rounded-lg text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}