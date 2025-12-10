import React from 'react';
import { MenuItem } from '../types';

interface MenuButtonProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ item, onClick }) => {
  return (
    <button
      onClick={() => onClick(item)}
      className="group w-full bg-white border border-stone-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-accent transition-all duration-300 ease-out flex flex-col items-center text-center active:scale-[0.98]"
      aria-label={`Open menu for ${item.label}`}
    >
      <div className="flex items-center justify-center space-x-4 mb-2 w-full">
        {item.logo && (
          <img 
            src={item.logo} 
            alt="" 
            className="w-14 h-14 object-contain"
          />
        )}
        <span className="font-serif text-2xl text-brand-dark group-hover:text-brand-accent transition-colors">
          {item.label}
        </span>
      </div>
      
      {item.description && (
        <span className="text-sm text-stone-500 font-sans max-w-xs mx-auto">
          {item.description}
        </span>
      )}
      <div className="mt-4 text-xs font-bold tracking-wider uppercase text-brand-accent opacity-60 group-hover:opacity-100 transition-opacity">
        View Menu &rarr;
      </div>
    </button>
  );
};