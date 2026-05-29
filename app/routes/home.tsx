import type { Route } from "./+types/home";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "lxrdszn - Full Stack Developer & Cybersecurity" },
    { name: "description", content: "Portfolio de lxrdszn - Estudiante de Ingeniería en Sistemas Computacionales especializado en desarrollo Full Stack y ciberseguridad" },
  ];
}

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
}
