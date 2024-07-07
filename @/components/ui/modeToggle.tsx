// components/ui/modeToggle.tsx

import { useTheme } from 'next-themes';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../theme-provider';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const context = useContext(ThemeContext); // Store context in a variable

  // Check if context is undefined
  if (!context) {
    throw new Error('useContext: ThemeContext is undefined');
  }

  const { darkMode, toggleDarkMode } = context; // Destructure values from context
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        toggleDarkMode(); // Toggle local state
        setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle next-themes state
      }}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      Toggle Mode
    </button>
  );
}
