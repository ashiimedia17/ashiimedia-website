export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Branding' | 'Social Media' | 'Video Marketing' | 'Digital Campaign' | 'Content Strategy';
  year: string;
  image: string;
  accentColor?: string;
  aspectRatio: 'vertical' | 'wide' | 'square' | 'arch';
  role: string;
  tools: string[];
  objective: string;
  creativeApproach: string;
  marketingApproach: string;
  finalOutput: string;
  results: string;
  client?: string;
  galleryImages: string[];
}

export interface SkillItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  previewImage: string;
}

export interface TimelineItem {
  number: string;
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  tag: string;
}

export interface ToolItem {
  name: string;
  category: 'Design' | 'Video & Motion' | 'Marketing & Analytics' | 'AI & Strategy';
  level: string;
  description: string;
}
