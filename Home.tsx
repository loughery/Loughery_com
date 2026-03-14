import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'books', label: 'Books' },
    { id: 'about', label: 'About' },
    { id: 'writing', label: 'Writing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-cream border-b border-charcoal/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="text-2xl font-serif text-charcoal hover:text-navy transition-colors"
          >
            David O'Rourke
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-charcoal hover:text-navy transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => handleNavigate(page.id)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  currentPage === page.id
                    ? 'text-navy border-b-2 border-navy pb-1'
                    : 'text-charcoal hover:text-navy'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => handleNavigate(page.id)}
                className={`block w-full text-left text-sm uppercase tracking-wider transition-colors ${
                  currentPage === page.id
                    ? 'text-navy font-medium'
                    : 'text-charcoal hover:text-navy'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
