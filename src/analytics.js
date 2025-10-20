import dataService from './services/dataService';

// Track page view time
let pageStartTime = Date.now();

// Check if user is admin
const isAdmin = () => {
  return localStorage.getItem('admin') === 'true';
};

// Track clicks
const handleClick = () => {
  // If user is admin, don't track clicks
  if (isAdmin()) {
    return;
  }
  
  // Increment clicks in Firebase
  dataService.incrementClicks();
};

// Initialize analytics
export const initAnalytics = () => {
  // If user is admin, don't initialize analytics
  if (isAdmin()) {
    return;
  }
  
  // Increment visit count in Firebase
  dataService.incrementVisits();
  
  // Set up click tracking
  document.addEventListener('click', handleClick);
  
  // Calculate and store view time when user leaves
  window.addEventListener('beforeunload', () => {
    // If user is admin, don't track view time
    if (isAdmin()) {
      return;
    }
    
    const viewTime = (Date.now() - pageStartTime) / 1000; // in seconds
    dataService.updateAverageViewTime(viewTime);
  });
  
  // For SPA navigation, we would need to track route changes
  // This is a simplified version for demonstration
};

// Call this function when the app loads
// In a real app, you might want to call this from your main App component