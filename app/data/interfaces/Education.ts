
export  interface Education {
    institution: string;
    location: string;
    degree: string;
    field_of_study: string;
    completion_date: string;
  }
  
export  interface EducationType {
    education: Education[];
  }
  