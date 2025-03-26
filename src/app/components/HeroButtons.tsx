'use client';

import Button from './Button';

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Button 
        variant="secondary" 
        onClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-hunyadi_yellow-400 hover:bg-hunyadi_yellow-500 text-jet-900 font-semibold dark:bg-earth_yellow-400 dark:hover:bg-earth_yellow-500 dark:text-jet-100"
      >
        Learn More
      </Button>
    </div>
  );
} 