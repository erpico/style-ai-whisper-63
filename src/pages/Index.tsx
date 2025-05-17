
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { StepFlow } from '@/components/StepFlow';
import { PhotoUpload } from '@/components/PhotoUpload';
import { UserInfoForm } from '@/components/UserInfoForm';
import { LifestyleForm } from '@/components/LifestyleForm';
import { OutfitRecommendations } from '@/components/OutfitRecommendations';
import { useStyleAssistant, StyleAssistantProvider } from '@/context/StyleAssistantContext';

const steps = ['Photo', 'Size', 'Lifestyle', 'Results'];

const AssistantContent = () => {
  const { currentStep } = useStyleAssistant();
  
  return (
    <div>
      {currentStep > 0 && currentStep <= 4 && (
        <StepFlow currentStep={currentStep} steps={steps} />
      )}
      
      {currentStep === 1 && <PhotoUpload />}
      {currentStep === 2 && <UserInfoForm />}
      {currentStep === 3 && <LifestyleForm />}
      {currentStep === 4 && <OutfitRecommendations />}
      {currentStep === 0 && <Hero />}
    </div>
  );
};

const Index = () => {
  return (
    <StyleAssistantProvider>
      <Layout>
        <AssistantContent />
      </Layout>
    </StyleAssistantProvider>
  );
};

export default Index;
