
import React from 'react';
import { useStyleAssistant } from '../context/StyleAssistantContext';

export const Hero: React.FC = () => {
  const { setCurrentStep } = useStyleAssistant();
  
  const handleGetStarted = () => {
    setCurrentStep(1);
  };
  
  return (
    <div className="relative overflow-hidden py-12 md:py-24">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full fashion-gradient opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-fashion-blue opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-fashion-deepPurple mb-6 leading-tight">
              Ваш персональный<br /><span className="text-fashion-purple">AI-стилист</span>
            </h1>
            <p className="text-lg text-fashion-gray mb-8 max-w-lg mx-auto md:mx-0">
              Не знаете, что подойдёт именно вам? Наш AI-стилист подберёт идеальные образы на основе вашего типа внешности и образа жизни.
            </p>
            <button 
              onClick={handleGetStarted} 
              className="fashion-button-primary text-lg px-8 py-4"
            >
              Подобрать мой стиль
            </button>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                  alt="AI Fashion Assistant" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <span className="bg-fashion-purple text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                      AI рекомендация
                    </span>
                    <p className="text-lg font-medium">
                      Узнайте, какие образы подойдут именно вам
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 fashion-card rotate-6">
                <div className="h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-purple">
                    <path d="M20.38 3.46 16 2a4 4 0 0 1 4.38 1.46Z"></path>
                    <path d="M9.75 2.81 2 10.56c-.6.6-.6 1.54 0 2.13l9.31 9.31c.6.6 1.54.6 2.13 0l7.75-7.75c.6-.6.6-1.54 0-2.13L11.88 2.81a1.5 1.5 0 0 0-2.13 0Z"></path>
                    <path d="m5 21 14-14"></path>
                    <path d="M15 15h-5v-5"></path>
                    <path d="m8.03 5.97 1 1"></path>
                    <path d="m5.03 8.97 1 1"></path>
                    <path d="m2.03 11.97 1 1"></path>
                  </svg>
                </div>
              </div>
              
              <div className="hidden md:block absolute -bottom-6 -left-6 w-28 h-12 fashion-card -rotate-6">
                <div className="h-full flex items-center justify-center">
                  <span className="text-sm font-medium text-fashion-purple">10+ стилей</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="fashion-card text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-fashion-purple/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-purple">
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <path d="M12 11h4"></path>
                <path d="M12 16h4"></path>
                <path d="M8 11h.01"></path>
                <path d="M8 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-fashion-deepPurple mb-2">Персональная анкета</h3>
            <p className="text-fashion-gray">
              Расскажите о своих предпочтениях и образе жизни, чтобы получить максимально точные рекомендации
            </p>
          </div>
          
          <div className="fashion-card text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-fashion-purple/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-purple">
                <path d="M6.5 11h11"></path>
                <path d="M12 2v20"></path>
                <path d="m20 5-4 1m-4 1-4 1m-4 1-4 1"></path>
                <path d="m20 19-4-1m-4-1-4-1m-4-1-4-1"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-fashion-deepPurple mb-2">AI-анализ</h3>
            <p className="text-fashion-gray">
              Технологии искусственного интеллекта проанализируют ваши данные и подберут идеальные комбинации
            </p>
          </div>
          
          <div className="fashion-card text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-fashion-purple/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-purple">
                <path d="M20 22v-7l-8-4V5"></path>
                <path d="M4 13v9"></path>
                <path d="m15 5 5-3v4"></path>
                <path d="M4 7V2l8 5"></path>
                <path d="m4 7 8 5"></path>
                <path d="m12 12 8-5"></path>
                <path d="M4 22 20 7"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-fashion-deepPurple mb-2">Готовые образы</h3>
            <p className="text-fashion-gray">
              Получите 10 полностью подобранных образов с описанием и рекомендациями
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
