import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../translations/en';
import pt from '../translations/pt';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  const [translations, setTranslations] = useState(pt);

  // Load language preference from localStorage on initial load
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio_language') || 'pt';
    setLanguage(savedLanguage);
    setTranslations(savedLanguage === 'en' ? en : pt);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    setTranslations(newLanguage === 'en' ? en : pt);
    localStorage.setItem('portfolio_language', newLanguage);
  };

  const t = (key) => {
    // Navigate through the translation object using the key
    // Key format: "section.key" e.g., "header.home"
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Return the key itself if translation is not found
        return key;
      }
    }
    
    return value;
  };

  const value = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};