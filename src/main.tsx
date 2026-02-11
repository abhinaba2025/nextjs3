import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Initialize theme from localStorage or default to light
const initializeTheme = () => {
  const stored = localStorage.getItem('shopnex-theme');
  const theme = stored || 'light';
  
  // Set initial class on html element
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  
  // Set initial body styles
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#0F172A';
    document.body.style.color = '#F8FAFC';
  } else {
    document.body.style.backgroundColor = '#F8FAFC';
    document.body.style.color = '#0F172A';
  }
  
  // If no theme was stored, set light as default
  if (!stored) {
    localStorage.setItem('shopnex-theme', 'light');
  }
};

// Run theme initialization immediately
initializeTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
