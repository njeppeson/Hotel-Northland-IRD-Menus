import React from 'react';
import { HOTEL_NAME, HOTEL_LOGO } from '../constants';

interface HeaderProps {
  compact?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ compact = false }) => {
  return (
    <header className={`text-center flex flex-col items-center justify-center ${compact ? 'py-4' : 'py-8'}`}>
      <img 
        src={HOTEL_LOGO} 
        alt={HOTEL_NAME} 
        className={`${compact ? 'h-16' : 'h-24'} w-auto object-contain mb-4`}
      />
      {!compact && (
        <div className="w-16 h-0.5 bg-brand-accent mt-2 mb-2 opacity-50"></div>
      )}
    </header>
  );
};