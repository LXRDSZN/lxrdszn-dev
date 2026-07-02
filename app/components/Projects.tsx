import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Parrot OS + BSPWM - Entorno Personalizado",
      description: "Configuración completa de entorno de desarrollo y pentesting con Parrot OS usando BSPWM como window manager. Incluye atajos de teclado personalizados, scripts de automatización, temas customizados y optimización para trabajo en ciberseguridad.",
      technologies: ["Linux", "BSPWM", "Bash", "Parrot OS", "Terminal"],
      images: ["/projects/bspwm/bspwm1.jpg", "/projects/bspwm/bspwm2.jpg", "/projects/bspwm/bspwm3.jpg"]
    },
    {
      title: "Portfolio Web - React Router",
      description: "Portafolio profesional desarrollado con React Router 7 y Tailwind CSS. Incluye secciones de proyectos con carrusel de imágenes, skills técnicos, certificaciones y diseño responsive moderno con animaciones fluidas.",
      technologies: ["React", "React Router", "Tailwind CSS", "TypeScript", "Vite"],
      images: ["/projects/portfolio/portfolio1.jpg", "/projects/portfolio/portfolio2.jpg", "/projects/portfolio/portfolio3.jpg"]
    },
    {
      title: "Security Phish - Detección de Pesca Ilegal",
      description: "Plataforma que detecta, monitorea y alerta actividades sospechosas de pesca ilegal usando datos de ubicación y análisis de comportamiento. Sistema con alertas en tiempo real y dashboard de monitoreo.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Geolocation API", "Alertas"],
      images: ["/projects/phish/phish1.jpg", "/projects/phish/phish2.jpg", "/projects/phish/phish3.jpg"]
    },
    {
      title: "Sistema de Recursos Humanos",
      description: "Sistema completo de gestión de recursos humanos desarrollado con Vue.js. Incluye módulos de gestión de empleados, control de asistencia, nómina, evaluaciones de desempeño y reportes administrativos.",
      technologies: ["Vue.js", "Node.js", "Express", "PostgreSQL", "JWT"],
      images: ["/projects/rrhh/rrhh1.jpg", "/projects/rrhh/rrhh2.jpg", "/projects/rrhh/rrhh3.jpg"]
    },
    {
      title: "ChatBot WhatsApp Inteligente",
      description: "Bot automatizado para WhatsApp con funcionalidades de respuesta automática, gestión de consultas, integración con APIs externas y sistema de respuestas inteligentes para atención al cliente.",
      technologies: ["Node.js", "WhatsApp API", "JavaScript", "Express"],
      images: ["/projects/chatbot/chatbot1.jpg", "/projects/chatbot/chatbot2.jpg", "/projects/chatbot/chatbot3.jpg"]
    },
    {
      title: "RubberDucky con Raspberry Pi Pico",
      description: "Implementación de un dispositivo RubberDucky usando Raspberry Pi Pico para pentesting y pruebas de seguridad. Capaz de ejecutar payloads automatizados y simular dispositivos HID para auditorías de seguridad.",
      technologies: ["Raspberry Pi", "Python", "Hardware Hacking", "Pentesting"],
      images: ["/projects/ducky/ducky1.jpg", "/projects/ducky/ducky2.jpg", "/projects/ducky/ducky3.jpg", "/projects/ducky/ducky4.jpg", "/projects/ducky/ducky5.jpg"]
    },
    {
      title: "Pentesting Lab - TryHackMe & HackTheBox",
      description: "Programa de análisis de datos y pentesting en máquinas de TryHackMe y Hack The Box. Incluye scripts de reconocimiento, explotación, post-explotación y documentación detallada de vulnerabilidades encontradas.",
      technologies: ["Python", "Bash", "Metasploit", "Nmap", "Burp Suite"],
      images: ["/projects/pentest/pentest1.jpg", "/projects/pentest/pentest2.jpg", "/projects/pentest/pentest3.jpg"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-950 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Projects
        </h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true); // Comenzar como true para evitar flash
  const [imageError, setImageError] = useState(false);

  // Resetear estado cuando cambia la imagen actual
  useEffect(() => {
    setImageLoaded(true); // Asumir que cargará, para evitar flash
    setImageError(false);
  }, [currentImage, project.images]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const imageOnLeft = index % 2 === 0;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${imageOnLeft ? '' : 'lg:grid-flow-dense'}`}>
      {/* Carousel */}
      <div className={`relative group ${imageOnLeft ? '' : 'lg:col-start-2'}`}>
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 relative">
          {/* Imagen real */}
          <img 
            src={project.images[currentImage]} 
            alt={`${project.title} - Imagen ${currentImage + 1}`}
            className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            loading={index === 0 && currentImage === 0 ? "eager" : "lazy"}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(false);
            }}
          />
          
          {/* Placeholder solo cuando hay error */}
          {imageError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-sm text-gray-600 px-4 text-center">
                No se pudo cargar la imagen<br />
                <span className="font-mono text-xs text-cyan-500">{project.images[currentImage]}</span>
              </p>
            </div>
          )}
          
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Next image"
              >
                →
              </button>
            </>
          )}
        </div>
        
        {project.images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentImage === idx ? 'bg-cyan-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={imageOnLeft ? '' : 'lg:col-start-1 lg:row-start-1'}>
        <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-cyan-900/30 border border-cyan-700 text-cyan-400 rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
