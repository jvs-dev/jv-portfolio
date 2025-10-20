import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
         setTimeout(() => {
            setIsVisible(false);
         }, 500);
      }, 1000);

      return () => clearTimeout(timer);
   }, []);

   if (!isVisible) {
      return null;
   }

   return (
      <div id="section-loading" className={isLoading ? '' : 'fade-out'}>
         <div className="loading__container">
            <div className="loading__ring"></div>
            <div className="loading__ring"></div>
            <div className="loading__ring"></div>
            <span className="loading__span">Loading...</span>
         </div>
      </div>
   );
};

export default LoadingScreen;