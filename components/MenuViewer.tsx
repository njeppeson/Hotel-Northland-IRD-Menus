import React, { useState } from 'react';
import { MenuItem } from '../types';

interface MenuViewerProps {
  menu: MenuItem;
  onBack: () => void;
}

export const MenuViewer: React.FC<MenuViewerProps> = ({ menu, onBack }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-brand-bg">
      {/* Navigation Bar */}
      <div className="flex-none bg-white border-b border-stone-200 shadow-sm px-4 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-brand-dark hover:text-brand-accent transition-colors py-2 px-1 -ml-1"
          aria-label="Back to main menu"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium text-sm tracking-wide">BACK</span>
        </button>
        
        <h2 className="font-serif text-lg text-brand-dark truncate px-2">{menu.label}</h2>
        
        <div className="w-12"></div> {/* Spacer to center title roughly */}
      </div>

      {/* Content Area */}
      <div className="flex-grow relative w-full h-full bg-white">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-50 z-10">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-dark mb-4"></div>
              <p className="text-stone-500 text-sm animate-pulse">Loading Menu...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={menu.url}
          title={`${menu.label} Menu`}
          className="w-full h-full border-0"
          onLoad={() => setIsLoading(false)}
          allowFullScreen
        />
        
        {/* Fallback link if iframe has issues */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-stone-100 text-center text-xs text-stone-500 border-t border-stone-200">
          Trouble viewing? <a href={menu.url} target="_blank" rel="noopener noreferrer" className="underline font-bold text-brand-dark">Open in new window</a>
        </div>
      </div>
    </div>
  );
};