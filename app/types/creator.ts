export interface Creator {
  id: number;
  name: string;
  category: string;
  image: string;
  cover?: string;
  patrons: number;
  description: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  website?: string;
  walletAddress: string;
  tiers?: {
    id: number;
    name: string;
    price: number;
    benefits: string[];
  }[];
} 