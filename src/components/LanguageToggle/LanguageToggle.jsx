import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      aria-label={language === 'pt' ? 'Switch to English' : 'Alternar para Português'}
    >
      <span className={`flag ${language === 'pt' ? 'flag-pt' : 'flag-en'}`}>
        {language === 'pt' ? 'PT' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;