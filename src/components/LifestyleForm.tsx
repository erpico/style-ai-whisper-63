
import React, { useState } from 'react';
import { useStyleAssistant } from '../context/StyleAssistantContext';
import { generateDemoOutfits, generateDemoProfile } from '../utils/demoData';

export const LifestyleForm: React.FC = () => {
  const { setUserLifestyle, setCurrentStep, setStyleProfile, setOutfits, photoUrl } = useStyleAssistant();
  
  const [occupation, setOccupation] = useState<string>('');
  const [activities, setActivities] = useState<string>('');
  const [goals, setGoals] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setUserLifestyle({
      occupation,
      activities,
      goals
    });
    
    // Simulate AI processing
    setIsLoading(true);
    
    setTimeout(() => {
      // Generate demo data based on the inputs
      const profile = generateDemoProfile(occupation, photoUrl);
      const outfits = generateDemoOutfits(occupation, activities, goals);
      
      setStyleProfile(profile);
      setOutfits(outfits);
      setIsLoading(false);
      setCurrentStep(4);
    }, 2000);
  };
  
  const occupationOptions = ['Офисная работа', 'Творческая профессия', 'Свободный график', 'Студент', 'Другое'];
  const styleGoals = ['Выглядеть стильно', 'Выглядеть профессионально', 'Комфорт прежде всего', 'Уверенность', 'Соответствие трендам'];
  
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {isLoading ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full fashion-gradient flex items-center justify-center animate-pulse-soft">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-fashion-deepPurple mb-2">Создаём ваш стильный профиль</h2>
          <p className="text-fashion-gray">Пожалуйста, подождите, мы подбираем для вас идеальные образы...</p>
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-fashion-deepPurple mb-3">Расскажите о вашем образе жизни</h2>
            <p className="text-fashion-gray">
              Расскажите немного о себе — чем занимаетесь, где проводите время, как хотите выглядеть
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="fashion-card">
            <div className="mb-6">
              <label htmlFor="occupation" className="block text-sm font-medium text-fashion-deepPurple mb-2">
                Чем вы занимаетесь?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                {occupationOptions.map(option => (
                  <button
                    key={option}
                    type="button"
                    className={`px-4 py-2 rounded-lg border text-center transition-all ${
                      occupation === option 
                        ? 'border-fashion-purple bg-fashion-purple/10 text-fashion-purple' 
                        : 'border-fashion-lightGray text-fashion-gray hover:border-fashion-purple hover:text-fashion-purple'
                    }`}
                    onClick={() => setOccupation(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {occupation === 'Другое' && (
                <input
                  type="text"
                  className="fashion-input mt-2"
                  placeholder="Укажите вашу сферу деятельности"
                  onChange={(e) => setOccupation(e.target.value)}
                />
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="activities" className="block text-sm font-medium text-fashion-deepPurple mb-2">
                Где вы чаще бываете?
              </label>
              <textarea
                id="activities"
                value={activities}
                onChange={(e) => setActivities(e.target.value)}
                className="fashion-input min-h-[100px]"
                placeholder="Например: в офисе, на встречах с друзьями, на природе, в спортзале..."
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-fashion-deepPurple mb-2">
                В чём хотите чувствовать себя комфортно?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {styleGoals.map(goal => (
                  <button
                    key={goal}
                    type="button"
                    className={`px-4 py-2 rounded-lg border text-center transition-all ${
                      goals === goal 
                        ? 'border-fashion-purple bg-fashion-purple/10 text-fashion-purple' 
                        : 'border-fashion-lightGray text-fashion-gray hover:border-fashion-purple hover:text-fashion-purple'
                    }`}
                    onClick={() => setGoals(goal)}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="fashion-button-primary"
                disabled={!occupation || !activities || !goals}
              >
                Создать мой стильный профиль
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
