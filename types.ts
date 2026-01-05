export enum PergolaSize {
  SIZE_3X3 = '3x3m',
  SIZE_3X4 = '3x4m',
  SIZE_4X4 = '4x4m',
  SIZE_CUSTOM = 'Custom',
}

export enum PergolaMaterial {
  ALUMINUM = '6063-T5 Aluminum',
  WOOD = 'Indonesian Teak',
  STEEL = 'Galvanized Steel',
}

export interface Product {
  id: string;
  name: string;
  category: string; // Changed from strict union type to string to support more categories
  priceRange: string;
  image: string;
  features: string[];
  description: string;
}

export interface FactoryStat {
  name: string;
  value: number;
  unit: string;
}

export interface NavItem {
  label: string;
  path: string;
}
