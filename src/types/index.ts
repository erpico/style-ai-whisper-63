
export type UserSize = {
  size: string;
  age: number;
};

export type UserLifestyle = {
  occupation: string;
  activities: string;
  goals: string;
};

export type OutfitItem = {
  type: 'top' | 'bottom' | 'shoes' | 'accessory';
  name: string;
  description: string;
  imageUrl?: string;
  productUrl?: string;
};

export type Outfit = {
  id: number;
  title: string;
  description: string;
  items: OutfitItem[];
  occasion: string;
};

export type StyleProfile = {
  mainStyle: string;
  tags: string[];
  colorPalette: string[];
  suitableSilhouettes: string[];
  bodyCharacteristics?: string;
};
