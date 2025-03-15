'use client';

import { useState, useEffect } from 'react';

const previewScreens = [
  {
    title: 'Swipe & Match',
    description: 'Swipe through potential roommates and find your perfect match',
    color: 'from-orange-500 to-amber-500',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
  {
    title: 'Profile Details',
    description: 'View detailed profiles with lifestyle preferences and photos',
    color: 'from-amber-500 to-yellow-500',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
  },
  {
    title: 'Chat & Connect',
    description: 'Chat with matches and plan your living arrangements',
    color: 'from-yellow-500 to-orange-500',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
  },
];

export default function AppPreview() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentScreen((prev) => (prev + 1) % previewScreens.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentScreen((prev) => (prev - 1 + previewScreens.length) % previewScreens.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentScreen((prev) => (prev + 1) % previewScreens.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className={`absolute -inset-4 bg-gradient-to-r ${previewScreens[currentScreen].color} rounded-3xl blur-xl opacity-20 transition-colors duration-500`}></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
        <div className="aspect-[9/16] relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
          {/* Preview Content */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transform transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${direction * -100}%)`,
              opacity: 0,
              animation: 'slideIn 500ms ease-in-out forwards',
            }}
          >
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-4 transform transition-transform duration-500 hover:scale-110">
              <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {previewScreens[currentScreen].icon}
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {previewScreens[currentScreen].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {previewScreens[currentScreen].description}
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors transform hover:scale-110 duration-200"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors transform hover:scale-110 duration-200"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {previewScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentScreen ? 1 : -1);
                  setCurrentScreen(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentScreen
                    ? 'bg-orange-500 w-4'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(${direction * 100}%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
} 