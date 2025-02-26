import { Download } from "lucide-react"
import { useState, useEffect } from "react";

function downloadFile() {
  // Create an anchor element
  const link = document.createElement('a');

  // Set the href attribute to the file path
  link.href = 'http://localhost:5173/my-portfolio/resume.pdf';

  // Set the download attribute with optional filename
  link.download = 'resume.pdf';

  // Append to the body
  document.body.appendChild(link);

  // Trigger the click event
  link.click();

  // Clean up
  document.body.removeChild(link);
}


export const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedItem, setSelectedItem] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update selected item based on scroll position
      const sections = ['about', 'experience', 'projects', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some offset to make it feel natural)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setSelectedItem(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setSelectedItem(sectionId);
    }
  };


  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-gray-950/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text cursor-pointer"
          >
            Aamna
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                className="relative group text-sm font-medium"
                onClick={() => scrollToSection(item.id)}
              >
                <span className={`${selectedItem === item.id ? 'text-white' : 'text-gray-300 group-hover:text-white'} transition-colors duration-300`}>
                  {item.name}
                </span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform ${selectedItem === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  } transition-transform duration-300`} />
              </button>
            ))}
            <button
              onClick={downloadFile}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};