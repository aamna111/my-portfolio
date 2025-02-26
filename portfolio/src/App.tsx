import { useState, useEffect } from 'react';
import './styles.css';
import { ProjectsCard } from './components/ProjectsCard';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ExpoerienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';

function App() {
  const [_scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setIsLoading(false), 1000);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex items-center justify-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Aamna
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Experience Section */}
      <ExpoerienceSection />

      {/* Projects Section */}
      <ProjectsCard />

      {/* Contact Section */}
      <Footer />
    </div>
  );
}

export default App
