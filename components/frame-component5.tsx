import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

export type FrameComponent5Type = {
  className?: string;
};


const useThemeAndMounting = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { theme, setTheme, resolvedTheme, mounted };
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  const { theme, setTheme, resolvedTheme, mounted } = useThemeAndMounting();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"];

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className="relative w-full">
      <header
        className={`self-stretch ${
          isDarkMode ? 'bg-neutral-darkest text-gray-100' : 'bg-neutral-silver text-gray-900'
        } overflow-hidden flex flex-row items-center justify-between py-4 px-5 md:px-10 box-border top-0 z-[99] sticky gap-8 max-w-full transition-colors duration-200 ${className}`}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="w-[35px] h-[24px]" loading="lazy" alt="" src="/icon.svg" />
          <img className="h-[20.7px] w-auto" loading="lazy" alt="" src="/nexcent.svg" />
        </div>

        {/* Full navbar for medium and larger screens */}
        <nav className="hidden md:flex flex-row items-center justify-between flex-1 gap-12">
          {navItems.map((item, index) => (
            <a key={index} className={`${
              isDarkMode ? 'text-green-500 hover:text-green-400' : 'text-gray-900 hover:text-brand-primary'
            } transition-colors text-2xl font-bold`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="flex flex-row items-center gap-4">
          <div className="hidden md:flex gap-2">
            <button className={`py-2 px-4 rounded-md text-lg font-bold text-neutral-white hover:bg-opacity-90 transition-colors ${
              isDarkMode ? 'bg-green-500 hover:bg-green-400' : 'bg-brand-primary'
            }`}>
              Login
            </button>
            <button className="py-2 px-4 bg-brand-primary rounded-md text-lg font-bold text-neutral-white hover:bg-opacity-90 transition-colors">
              Sign up
            </button>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${
          isDarkMode ? 'bg-neutral-darkest' : 'bg-neutral-silver'
        } overflow-y-auto max-h-[calc(100vh-80px)] shadow-lg transition-colors duration-200 z-50`}>
          <nav className="flex flex-col items-start p-5">
            <div className="w-full flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a key={index} className={`${
                  isDarkMode ? 'text-green-500 hover:text-green-400' : 'text-gray-900 hover:text-brand-primary'
                } transition-colors py-2 text-lg font-bold`}>
                  {item}
                </a>
              ))}
              <button className={`w-full py-2 px-4 rounded-md text-lg font-bold text-neutral-white hover:bg-opacity-90 transition-colors mt-2 ${
                isDarkMode ? 'bg-green-500 hover:bg-green-400' : 'bg-brand-primary'
              }`}>
                Login
              </button>
              <button className="w-full py-2 px-4 bg-brand-primary rounded-md text-lg font-bold text-neutral-white hover:bg-opacity-90 transition-colors mt-2">
                Sign up
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default FrameComponent5;
