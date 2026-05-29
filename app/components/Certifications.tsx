import { useState, useEffect } from "react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  images: string[];
}

export default function Certifications() {
  const certificates: Certificate[] = [
    {
      title: "Fundamentos de Ciberseguridad",
      issuer: "Coderfy",
      date: "2024",
      description: "Certificado completo en fundamentos de ciberseguridad, incluyendo hardening de sistemas, análisis de vulnerabilidades, mejores prácticas de seguridad informática y respuesta a incidentes. Formación práctica en protección de sistemas y redes.",
      skills: ["System Hardening", "Vulnerability Assessment", "Security Best Practices", "Incident Response"],
      images: ["/certificates/coderfy/cert1.jpg", "/certificates/coderfy/cert2.jpg"]
    }
  ];

  return (
    <section id="certifications" className="min-h-screen bg-gray-900 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Certifications
        </h2>
        
        <div className="space-y-16">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Resetear estado cuando cambia la imagen actual
  useEffect(() => {
    setImageLoaded(true);
    setImageError(false);
  }, [currentImage, certificate.images]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % certificate.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + certificate.images.length) % certificate.images.length);
  };

  const imageOnLeft = index % 2 === 0;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${imageOnLeft ? '' : 'lg:grid-flow-dense'}`}>
      {/* Carousel */}
      <div className={`relative group ${imageOnLeft ? '' : 'lg:col-start-2'}`}>
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 relative">
          {/* Imagen real */}
          <img 
            src={certificate.images[currentImage]} 
            alt={`${certificate.title} - Imagen ${currentImage + 1}`}
            className={`w-full h-full object-contain ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
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
              <div className="text-6xl mb-4">🎓</div>
              <p className="text-sm text-gray-600 px-4 text-center">
                No se pudo cargar la imagen<br />
                <span className="font-mono text-xs text-cyan-500">{certificate.images[currentImage]}</span>
              </p>
            </div>
          )}
          
          {certificate.images.length > 1 && (
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
        
        {certificate.images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {certificate.images.map((_, idx) => (
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
        <div className="inline-block px-3 py-1 bg-cyan-900/30 border border-cyan-700 text-cyan-400 rounded-full text-sm mb-3">
          {certificate.issuer} • {certificate.date}
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">{certificate.title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {certificate.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
