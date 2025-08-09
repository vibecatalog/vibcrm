import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { RocketIcon } from '@/components/icons/RocketIcon';
import { MenuIcon } from '@/components/icons/MenuIcon';

const navigationItems = [
  { label: 'Home', href: '#', id: 'home' },
  { label: 'Features', href: '#features', id: 'features' },
  { label: 'Resources', href: '#resources', id: 'resources' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isMenuOpen) return;

      switch (event.key) {
        case 'Escape':
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex((prev) => (prev < navigationItems.length - 1 ? prev + 1 : 0));
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : navigationItems.length - 1));
          break;
        case 'Home':
          event.preventDefault();
          setFocusedIndex(0);
          break;
        case 'End':
          event.preventDefault();
          setFocusedIndex(navigationItems.length - 1);
          break;
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  // Focus management
  useEffect(() => {
    if (focusedIndex >= 0 && focusedIndex < menuItemRefs.current.length) {
      menuItemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setFocusedIndex(0);
    }
  };

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);

    // Smooth scroll to section if it's an anchor link
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className="w-full h-[80px] md:h-[100px] border-b border-white/16 bg-vibcrm-bg-dark relative z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px] h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <RocketIcon aria-hidden="true" />
          <span className="text-vibcrm-brand text-xl md:text-2xl font-bold tracking-tight">
            VibeCRM
          </span>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center gap-10" role="menubar">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              role="menuitem"
              className="text-vibcrm-text-muted text-base hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-vibcrm-primary focus:ring-offset-2 focus:ring-offset-vibcrm-bg-dark transition-colors duration-300 rounded-sm px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6">
          <Button variant="secondary" size="sm" aria-label="Login to your account">
            Login
          </Button>
          <Button variant="primary" size="sm" aria-label="Start your free trial">
            Get Started Free
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative" ref={menuRef}>
          <button
            ref={menuButtonRef}
            className="p-2 text-white hover:bg-white/10 focus:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-vibcrm-primary focus:ring-offset-2 focus:ring-offset-vibcrm-bg-dark"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-pressed={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <MenuIcon size={24} aria-hidden="true" />
          </button>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="absolute top-full right-0 mt-2 w-64 bg-vibcrm-card-bg border border-white/16 rounded-lg shadow-lg overflow-hidden"
              role="menu"
              aria-labelledby="mobile-menu-button"
            >
              <div className="py-2">
                {navigationItems.map((item, index) => (
                  <a
                    key={item.id}
                    ref={(el) => (menuItemRefs.current[index] = el)}
                    href={item.href}
                    role="menuitem"
                    className="block px-4 py-3 text-vibcrm-text-muted hover:text-white hover:bg-white/10 focus:text-white focus:bg-white/10 focus:outline-none transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick(item.href);
                    }}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="border-t border-white/16 mt-2 pt-2 px-4 pb-4 space-y-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full"
                    aria-label="Login to your account"
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full"
                    aria-label="Start your free trial"
                  >
                    Get Started Free
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
