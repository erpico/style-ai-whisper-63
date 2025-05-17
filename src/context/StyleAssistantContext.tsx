
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserSize = {
  size: string;
  age: number;
};

type UserLifestyle = {
  occupation: string;
  activities: string;
  goals: string;
};

type OutfitItem = {
  type: 'top' | 'bottom' | 'shoes' | 'accessory';
  name: string;
  description: string;
  imageUrl?: string;
  productUrl?: string;
};

type Outfit = {
  id: number;
  title: string;
  description: string;
  items: OutfitItem[];
  occasion: string;
};

type StyleProfile = {
  mainStyle: string;
  tags: string[];
  colorPalette: string[];
  suitableSilhouettes: string[];
  bodyCharacteristics?: string;
};

type StyleAssistantContextType = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  photoUrl: string | null;
  setPhotoUrl: (url: string | null) => void;
  userSize: UserSize | null;
  setUserSize: (size: UserSize) => void;
  userLifestyle: UserLifestyle | null;
  setUserLifestyle: (lifestyle: UserLifestyle) => void;
  styleProfile: StyleProfile | null;
  setStyleProfile: (profile: StyleProfile) => void;
  outfits: Outfit[];
  setOutfits: (outfits: Outfit[]) => void;
  resetAssistant: () => void;
};

const StyleAssistantContext = createContext<StyleAssistantContextType | undefined>(undefined);

export const StyleAssistantProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [userSize, setUserSize] = useState<UserSize | null>(null);
  const [userLifestyle, setUserLifestyle] = useState<UserLifestyle | null>(null);
  const [styleProfile, setStyleProfile] = useState<StyleProfile | null>(null);
  const [outfits, setOutfits] = useState<Outfit[]>([]);

  const resetAssistant = () => {
    setCurrentStep(1);
    setPhotoUrl(null);
    setUserSize(null);
    setUserLifestyle(null);
    setStyleProfile(null);
    setOutfits([]);
  };

  return (
    <StyleAssistantContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        photoUrl,
        setPhotoUrl,
        userSize,
        setUserSize,
        userLifestyle,
        setUserLifestyle,
        styleProfile,
        setStyleProfile,
        outfits,
        setOutfits,
        resetAssistant,
      }}
    >
      {children}
    </StyleAssistantContext.Provider>
  );
};

export const useStyleAssistant = (): StyleAssistantContextType => {
  const context = useContext(StyleAssistantContext);
  if (context === undefined) {
    throw new Error('useStyleAssistant must be used within a StyleAssistantProvider');
  }
  return context;
};
