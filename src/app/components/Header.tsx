'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-orange-600 dark:text-orange-400' : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-600 dark:bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">CoHaven</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link 
              href="/about" 
              className={`${isActive('/about')} transition-colors`}
            >
              About Us
            </Link>
            <Link 
              href="/terms" 
              className={`${isActive('/terms')} transition-colors`}
            >
              Terms & Conditions
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
} 