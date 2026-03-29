export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  email: string;
}

export interface AnalysisFormValues {
  resume: FileList | null;
  jobDescription: string;
}

export interface AnalysisResult {
  matchScore: number;
  skillGaps: string[];
  feedback: string[];
}

export interface ProfileFormValues {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  location: string;
  bio: string;
  linkedin: string;
  github: string;
  website: string;
}
