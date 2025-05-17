
import React, { useState } from 'react';
import { useStyleAssistant } from '../context/StyleAssistantContext';

export const UserInfoForm: React.FC = () => {
  const { setUserSize, setCurrentStep } = useStyleAssistant();
  
  const [age, setAge] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!age.trim() || !size.trim()) {
      setValidationError('Пожалуйста, заполните все поля');
      return;
    }
    
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      setValidationError('Пожалуйста, введите корректный возраст');
      return;
    }
    
    setValidationError('');
    setUserSize({ age: ageNum, size: size.trim() });
    setCurrentStep(3);
  };
  
  const sizeOptions = [
    'XS (42)', 'S (44)', 'M (46)', 'L (48)', 'XL (50)', 'XXL (52)', '3XL (54)', '4XL (56)'
  ];
  
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-fashion-deepPurple mb-3">Ваш возраст и размер</h2>
        <p className="text-fashion-gray">
          Чтобы точнее подобрать вещи, скажите, пожалуйста, ваш возраст и размер одежды
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="fashion-card">
        {validationError && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
            {validationError}
          </div>
        )}
        
        <div className="mb-6">
          <label htmlFor="age" className="block text-sm font-medium text-fashion-deepPurple mb-2">
            Возраст
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="fashion-input"
            placeholder="Введите ваш возраст"
            min="1"
            max="120"
          />
        </div>
        
        <div className="mb-8">
          <label htmlFor="size" className="block text-sm font-medium text-fashion-deepPurple mb-2">
            Размер одежды
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {sizeOptions.map(option => (
              <button
                key={option}
                type="button"
                className={`px-4 py-2 rounded-lg border text-center transition-all ${
                  size === option 
                    ? 'border-fashion-purple bg-fashion-purple/10 text-fashion-purple' 
                    : 'border-fashion-lightGray text-fashion-gray hover:border-fashion-purple hover:text-fashion-purple'
                }`}
                onClick={() => setSize(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end">
          <button type="submit" className="fashion-button-primary">
            Продолжить
          </button>
        </div>
      </form>
    </div>
  );
};
