export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  type: string; // e.g. "Remote", "On-site"
  imageUrl: string;
}

export interface UserProfile {
  name: string;
  role: string;
  location: string;
  status: string;
  completionPercentage: number;
}