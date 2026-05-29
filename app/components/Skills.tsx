export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React", "Vue.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "APIs REST", "JWT Authentication", "Arquitecturas Modulares"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "PostgreSQL", "MariaDB", "MySQL", "SQL Optimization", "CRUD Operations"]
    },
    {
      title: "Linux & DevOps",
      icon: "🐧",
      skills: ["Parrot OS", "BSPWM", "SSH", "Terminal Avanzado", "Automatización", "Network Config"]
    },
    {
      title: "Cybersecurity",
      icon: "🔒",
      skills: ["System Hardening", "Vulnerability Analysis", "TryHackMe", "Hack The Box", "Forensics", "Security Practices"]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      skills: ["Git", "GitHub", "npm", "Modern IDEs", "Problem Solving", "Continuous Learning"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-900 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
