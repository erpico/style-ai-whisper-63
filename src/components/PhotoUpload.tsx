
import React, { useState } from 'react';
import { useStyleAssistant } from '../context/StyleAssistantContext';
import { Button } from '@/components/ui/button';

export const PhotoUpload: React.FC = () => {
  const { photoUrl, setPhotoUrl, setCurrentStep } = useStyleAssistant();
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!isDragging) setIsDragging(true);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };
  
  const handleFiles = (files: FileList) => {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
      setIsLoading(true);
      const reader = new FileReader();
      
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setPhotoUrl(e.target.result);
          setIsLoading(false);
          
          // Simulate AI processing delay
          setTimeout(() => {
            setCurrentStep(2);
          }, 1500);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  const handleSkip = () => {
    setCurrentStep(2);
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-fashion-deepPurple mb-3">Загрузите Ваше фото</h2>
        <p className="text-fashion-gray">
          Загрузите, пожалуйста, фото — я посмотрю, какие силуэты и цвета вам подойдут лучше всего ✨
        </p>
      </div>
      
      <div
        className={`
          border-2 border-dashed rounded-xl p-8 text-center transition-all
          ${isDragging ? 'border-fashion-purple bg-fashion-purple/5' : 'border-fashion-lightGray'}
          ${photoUrl ? 'bg-fashion-lightGray/20' : ''}
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {isLoading ? (
          <div className="py-12 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-4 border-fashion-purple border-t-transparent animate-spin mb-4"></div>
            <p className="text-fashion-gray">Анализируем ваше фото...</p>
          </div>
        ) : photoUrl ? (
          <div className="relative py-4">
            <img 
              src={photoUrl} 
              alt="Uploaded" 
              className="mx-auto max-h-80 rounded-lg shadow-md" 
            />
            <button 
              onClick={() => setPhotoUrl(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-fashion-lightGray"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        ) : (
          <div className="py-12">
            <svg 
              className="mx-auto h-16 w-16 text-fashion-gray" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="mt-4 text-fashion-gray mb-6">
              Перетащите файл сюда или нажмите для загрузки
            </p>
            <label className="fashion-button-primary inline-block cursor-pointer">
              Выбрать файл
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileChange} 
              />
            </label>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center">
        <button 
          onClick={handleSkip}
          className="text-fashion-gray hover:text-fashion-purple transition-colors"
        >
          Продолжить без фото
        </button>
      </div>
    </div>
  );
};
