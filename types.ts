
export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Value {
  name: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TeamMember {
  image: string;
  name: string;
  role: string;
  skills: string[];
}
