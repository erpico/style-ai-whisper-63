
import React, { useState } from 'react';
import { useStyleAssistant } from '../context/StyleAssistantContext';

export const OutfitRecommendations: React.FC = () => {
  const { styleProfile, outfits, resetAssistant } = useStyleAssistant();
  const [selectedOutfit, setSelectedOutfit] = useState<number | null>(null);
  
  if (!styleProfile || outfits.length === 0) {
    return (
      <div className="text-center py-12">
        <p>Information not found. Please return to the beginning of the process.</p>
        <button onClick={resetAssistant} className="fashion-button-primary mt-4">
          Start Again
        </button>
      </div>
    );
  }
  
  const handleOutfitSelect = (outfitId: number) => {
    setSelectedOutfit(selectedOutfit === outfitId ? null : outfitId);
  };
  
  return (
    <div className="w-full mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-fashion-deepPurple mb-3">
          Your Perfect Outfits Are Ready!
        </h2>
        <p className="text-fashion-gray max-w-3xl mx-auto">
          Here are 10 outfits that are perfect for you. They combine comfort, style, and reflect your personality.
        </p>
      </div>
      
      {/* Style Profile */}
      <div className="fashion-card mb-12">
        <h3 className="text-xl font-semibold text-fashion-deepPurple mb-4">Your Fashion Profile</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium text-fashion-purple mb-2">Main Style</h4>
            <p className="mb-4">{styleProfile.mainStyle}</p>
            
            <h4 className="text-lg font-medium text-fashion-purple mb-2">Suitable Silhouettes</h4>
            <ul className="list-disc list-inside mb-4">
              {styleProfile.suitableSilhouettes.map((silhouette, index) => (
                <li key={index}>{silhouette}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-fashion-purple mb-2">Key Tags</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {styleProfile.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-fashion-lightGray rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <h4 className="text-lg font-medium text-fashion-purple mb-2">Color Palette</h4>
            <div className="flex flex-wrap gap-3">
              {styleProfile.colorPalette.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-8 h-8 rounded-full border border-gray-200" 
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Outfits */}
      <h3 className="text-2xl font-bold text-fashion-deepPurple mb-6 text-center">
        Recommended Outfits
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {outfits.map((outfit) => (
          <div 
            key={outfit.id} 
            className={`fashion-card cursor-pointer transition-all duration-300 ${
              selectedOutfit === outfit.id 
                ? 'border-fashion-purple shadow-md' 
                : 'hover:border-fashion-purple/50'
            }`}
            onClick={() => handleOutfitSelect(outfit.id)}
          >
            <h4 className="text-lg font-medium text-fashion-deepPurple mb-2">
              {outfit.title}
            </h4>
            <p className="text-fashion-gray text-sm mb-4">
              {outfit.occasion}
            </p>
            
            <p className="mb-4">{outfit.description}</p>
            
            {selectedOutfit === outfit.id && (
              <div className="mt-4 animate-fade-in">
                <h5 className="font-medium text-fashion-purple mb-2">Outfit Components:</h5>
                <ul className="space-y-2">
                  {outfit.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-medium mr-2">{item.type === 'top' ? '👕' : item.type === 'bottom' ? '👖' : item.type === 'shoes' ? '👟' : '✨'}</span>
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-fashion-gray text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button onClick={resetAssistant} className="fashion-button-primary">
          Start Again
        </button>
      </div>
    </div>
  );
};
