import { ChevronRight } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    role: "Junior Developer",
    company: "Ephanti Inc.",
    period: "2023 - Present",
    description: "Led development of enterprise applications using React and TypeScript.",
    achievements: [
      "Developed and optimized responsive React.js interfaces",
      "Collaborated with UX/UI designers to transform conceptual designs into fully-functional web applications",
      "Integrated and optimized RESTful API connections",
      "Implemented features using micro-frontend architecture"
    ]
  },
  {
    role: "Training",
    company: "CDAC Bangalore",
    period: "03/2022 - 09/2022",
    description: "Learn about the various technologies.",
    achievements: [
      "PG Diploma in Advanced Computer Science (PG-DAC)",
      "Web-based technologies",
      "Web-based technologies in Java",
      "Database technologies",
      "Fundamentals of data structures and algorithms."
    ]
  }
];

export const ExpoerienceSection = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  return (<section id="experience" className="py-20 bg-gray-900/50">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors group"
            onMouseEnter={() => setCurrentExperience(index)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400">
                  <ChevronRight size={18} className="text-blue-400 mt-1" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>)
}