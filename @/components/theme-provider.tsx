import { createContext, useState, ReactNode, useContext } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeProvider = ({
  children,
  attribute,
  defaultTheme,
  enableSystem,
}: {
  children: ReactNode;
  attribute: string;
  defaultTheme: string;
  enableSystem: boolean;
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
    >
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
};
