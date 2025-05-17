
import React from 'react';
import { useStyleAssistant } from '../context/StyleAssistantContext';

export const Header: React.FC = () => {
  const { resetAssistant } = useStyleAssistant();
  
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div onClick={resetAssistant} className="flex items-center space-x-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full fashion-gradient flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m16 6 2 2-2 2"></path>
              <path d="M18 8H9a4 4 0 1 0 0 8h7"></path>
            </svg>
          </div>
          <h1 className="font-bold text-xl text-fashion-deepPurple">Fashion<span className="text-fashion-purple">AI</span></h1>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button className="fashion-button-outline py-2">Start Again</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
