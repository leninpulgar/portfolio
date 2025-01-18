export interface ExperienceItem {
    name: string;            // Nombre de la empresa o proyecto
    location: string;        // Ubicación
    title: string;           // Título del trabajo
    date: string;            // Fechas de trabajo
    responsibilities: string[];  // Lista de responsabilidades
  }
  
  export interface ExperienceProps {
    experience: ExperienceItem[];  // Arreglo de objetos ExperienceItem
  }
  