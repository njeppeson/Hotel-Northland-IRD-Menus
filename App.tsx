import React, { useState } from 'react';
import { MENUS, PAGE_TITLE, PAGE_DESCRIPTION } from './constants';
import { MenuItem } from './types';
import { Header } from './components/Header';
import { MenuButton } from './components/MenuButton';
import { MenuViewer } from './components/MenuViewer';

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null);

  const handleMenuSelect = (menu: MenuItem) => {
    setActiveMenu(menu);
    // Push state to browser history so back button works natively on phones
    window.history.pushState({ menuId: menu.id }, '', `#${menu.id}`);
  };

  const handleBack = () => {
    setActiveMenu(null);
    window.history.pushState({}, '', window.location.pathname);
  };

  // Handle browser back button
  React.useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (!event.state?.menuId) {
        setActiveMenu(null);
      } else {
        const menu = MENUS.find(m => m.id === event.state.menuId);
        if (menu) setActiveMenu(menu);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // If a menu is selected, show the viewer (Full Screen)
  if (activeMenu) {
    return <MenuViewer menu={activeMenu} onBack={handleBack} />;
  }

  // Otherwise, show the landing page
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <main className="flex-grow flex flex-col items-center px-6 pb-12 max-w-md mx-auto w-full">
        
        <Header />

        <div className="text-center mb-10">
          <h2 className="text-lg font-bold text-stone-800 mb-3 uppercase tracking-wide">
            {PAGE_TITLE}
          </h2>
          <p className="text-stone-500 font-sans text-sm leading-relaxed max-w-xs mx-auto">
            {PAGE_DESCRIPTION}
          </p>
        </div>

        <nav className="w-full flex flex-col space-y-5">
          {MENUS.map((menu) => (
            <MenuButton 
              key={menu.id} 
              item={menu} 
              onClick={handleMenuSelect} 
            />
          ))}
        </nav>

      </main>
      
      <footer className="py-8 text-center text-stone-400 text-xs">
        <p>&copy; {new Date().getFullYear()} Hotel Northland</p>
      </footer>
    </div>
  );
};

export default App;