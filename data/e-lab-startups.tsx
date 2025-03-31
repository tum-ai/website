import { Person, SocialMedia } from "@data/e-lab";

export interface Startup {
  id: string;
  name: string;
  description: string;
  founders: Person[];
  metrics: Metrics;
  website: string;
  socialMedia?: SocialMedia;
  logo: string;
  about?: string;

  tag?: string;
  batch?: string;
  industry: string;
  jobs?: Job[];
  latest_news?: LatestNews[];
}

export interface Founder {
  name: string;
  role: string;
}

export type Metrics = Record<string, string>;

export interface Job {
  name: string;
  location: string;
  salary: string;
  experience: string;
}

export interface LatestNews {
  message: string;
  link: string;
  date: string;
}

export const startups: Startup[] = [];
