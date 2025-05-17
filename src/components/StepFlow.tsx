
import React from 'react';

interface StepFlowProps {
  currentStep: number;
  steps: string[];
}

export const StepFlow: React.FC<StepFlowProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full mb-12">
      <div className="flex justify-between items-center relative">
        {/* Progress bar */}
        <div className="absolute top-1/2 w-full h-1 bg-fashion-lightGray -z-10"></div>
        <div 
          className="absolute top-1/2 h-1 bg-fashion-purple -z-10 transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep - 1) / (steps.length - 1) * 100}%` }}
        ></div>
        
        {/* Steps */}
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={stepNumber} className="flex flex-col items-center">
              <div 
                className={`
                  ${isActive ? 'fashion-step-active' : ''}
                  ${isCompleted ? 'fashion-step-completed' : ''}
                  ${!isActive && !isCompleted ? 'fashion-step-inactive' : ''}
                `}
              >
                {isCompleted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>
              <span className={`mt-2 text-xs font-medium ${isActive ? 'text-fashion-purple' : 'text-fashion-gray'}`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
