import { useState, useEffect } from 'react';

const useTypingEffect = (texts, speed = 100, delay = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {        
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
        
        if (currentIndex === currentText.length) {          
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts, speed, delay]);

  return displayText;
};

export default useTypingEffect;