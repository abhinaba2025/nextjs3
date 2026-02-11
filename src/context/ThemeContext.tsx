import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first, default to light
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('shopnex-theme') as Theme | null;
      return stored || 'light';
    }
    return 'light';
  });

  // Apply theme class to document
  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add the new theme class
    root.classList.add(newTheme);
    
    // Also set data attribute for additional styling hooks
    root.setAttribute('data-theme', newTheme);
    
    // Update body background colors directly for immediate effect
    if (newTheme === 'dark') {
      document.body.style.backgroundColor = '#0F172A';
      document.body.style.color = '#F8FAFC';
    } else {
      document.body.style.backgroundColor = '#F8FAFC';
      document.body.style.color = '#0F172A';
    }
    
    // Store in localStorage
    localStorage.setItem('shopnex-theme', newTheme);
  }, []);

  // Apply theme on mount and when theme changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
