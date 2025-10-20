import dataService from '../services/dataService';

// Track button clicks
export const trackButtonClick = (buttonName) => {
  // Record the button click
  dataService.recordButtonClick(buttonName);
  
  // Also increment the general clicks counter
  dataService.incrementClicks();
};

// Add click tracking to a button element
export const addClickTrackingToButton = (buttonElement, buttonName) => {
  if (buttonElement && buttonName) {
    const handleClick = () => {
      trackButtonClick(buttonName);
    };
    
    buttonElement.addEventListener('click', handleClick);
    
    // Return cleanup function
    return () => {
      buttonElement.removeEventListener('click', handleClick);
    };
  }
  
  return () => {}; // Return empty cleanup function if params are missing
};