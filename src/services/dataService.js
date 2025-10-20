import firebaseService from './firebaseService';

// Check if user is admin
const isAdmin = () => {
  return localStorage.getItem('admin') === 'true';
};

// Mock data service for portfolio analytics
class DataService {
  constructor() {
    this.currentData = null;
  }

  // Initialize with default values if not exists
  async initializeData() {
    try {
      const data = await firebaseService.initializeData();
      this.currentData = data;
      return data;
    } catch (error) {
      console.error('Error initializing data: ', error);
      // Fallback to localStorage if Firebase fails
      return this.initializeLocalStorage();
    }
  }

  // Fallback to localStorage
  initializeLocalStorage() {
    const existingData = localStorage.getItem('data');
    if (!existingData) {
      const defaultData = {
        totalVisits: 0,
        averageViewTime: 0,
        clicks: 0,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('data', JSON.stringify(defaultData));
      return defaultData;
    }
    return JSON.parse(existingData);
  }

  // Get data from Firebase
  async getData() {
    // If user is admin, don't fetch data
    if (isAdmin()) {
      return this.currentData || {
        totalVisits: 0,
        averageViewTime: 0,
        clicks: 0
      };
    }
    
    try {
      const data = await firebaseService.getLatestData();
      this.currentData = data;
      return data;
    } catch (error) {
      console.error('Error getting data from Firebase: ', error);
      // Fallback to localStorage if Firebase fails
      return this.getLocalStorageData();
    }
  }

  // Get data from localStorage (fallback)
  getLocalStorageData() {
    const data = localStorage.getItem('data');
    return data ? JSON.parse(data) : this.initializeLocalStorage();
  }

  // Update data in Firebase
  async updateData(newData) {
    // If user is admin, don't update data
    if (isAdmin()) {
      return this.currentData;
    }
    
    try {
      if (!this.currentData) {
        await this.getData();
      }
      
      const updatedData = await firebaseService.updateData(this.currentData.id, newData);
      this.currentData = updatedData;
      return updatedData;
    } catch (error) {
      console.error('Error updating data in Firebase: ', error);
      // Fallback to localStorage if Firebase fails
      return this.updateLocalStorage(newData);
    }
  }

  // Update data in localStorage (fallback)
  updateLocalStorage(newData) {
    const currentData = this.getLocalStorageData();
    const updatedData = { ...currentData, ...newData, timestamp: new Date().toISOString() };
    localStorage.setItem('data', JSON.stringify(updatedData));
    return updatedData;
  }

  // Increment visit count
  async incrementVisits() {
    // If user is admin, don't increment visits
    if (isAdmin()) {
      return this.currentData;
    }
    
    try {
      if (!this.currentData) {
        await this.getData();
      }
      
      const updatedData = await firebaseService.incrementVisits(this.currentData.id, this.currentData);
      this.currentData = updatedData;
      return updatedData;
    } catch (error) {
      console.error('Error incrementing visits in Firebase: ', error);
      // Fallback to localStorage if Firebase fails
      return this.incrementLocalStorageVisits();
    }
  }

  // Increment visit count in localStorage (fallback)
  incrementLocalStorageVisits() {
    const data = this.getLocalStorageData();
    const updatedData = this.updateLocalStorage({ totalVisits: data.totalVisits + 1 });
    this.currentData = updatedData;
    return updatedData;
  }

  // Update average view time
  async updateAverageViewTime(time) {
    // If user is admin, don't update view time
    if (isAdmin()) {
      return this.currentData;
    }
    
    try {
      if (!this.currentData) {
        await this.getData();
      }
      
      const updatedData = await firebaseService.updateAverageViewTime(this.currentData.id, this.currentData, time);
      this.currentData = updatedData;
      return updatedData;
    } catch (error) {
      console.error('Error updating view time in Firebase: ', error);
      // Fallback to localStorage if Firebase fails
      return this.updateLocalStorageAverageViewTime(time);
    }
  }

  // Update average view time in localStorage (fallback)
  updateLocalStorageAverageViewTime(time) {
    const data = this.getLocalStorageData();
    const newAverage = ((data.averageViewTime * data.totalVisits) + time) / (data.totalVisits + 1);
    const updatedData = this.updateLocalStorage({ averageViewTime: Math.round(newAverage * 100) / 100 });
    this.currentData = updatedData;
    return updatedData;
  }

  // Increment clicks
  async incrementClicks() {
    // If user is admin, don't increment clicks
    if (isAdmin()) {
      return this.currentData;
    }
    
    try {
      if (!this.currentData) {
        await this.getData();
      }
      
      const updatedData = await firebaseService.incrementClicks(this.currentData.id, this.currentData);
      this.currentData = updatedData;
      return updatedData;
    } catch (error) {
      console.error('Error incrementing clicks in Firebase: ', error);
      // Fallback to localStorage if Firebase fails
      return this.incrementLocalStorageClicks();
    }
  }

  // Increment clicks in localStorage (fallback)
  incrementLocalStorageClicks() {
    const data = this.getLocalStorageData();
    const updatedData = this.updateLocalStorage({ clicks: data.clicks + 1 });
    this.currentData = updatedData;
    return updatedData;
  }

  // Record button click
  async recordButtonClick(buttonName) {
    // If user is admin, don't record button clicks
    if (isAdmin()) {
      return;
    }
    
    try {
      await firebaseService.recordButtonClick(buttonName);
    } catch (error) {
      console.error('Error recording button click in Firebase: ', error);
      // Fallback to localStorage if Firebase fails
      this.recordButtonClickLocalStorage(buttonName);
    }
  }

  // Record button click in localStorage (fallback)
  recordButtonClickLocalStorage(buttonName) {
    try {
      const clicksData = JSON.parse(localStorage.getItem('buttonClicks') || '{}');
      clicksData[buttonName] = (clicksData[buttonName] || 0) + 1;
      localStorage.setItem('buttonClicks', JSON.stringify(clicksData));
    } catch (error) {
      console.error('Error recording button click in localStorage: ', error);
    }
  }

  // Get top clicked buttons
  async getTopClickedButtons(limitCount = 5) {
    // If user is admin, return empty array
    if (isAdmin()) {
      return [];
    }
    
    try {
      return await firebaseService.getTopClickedButtons(limitCount);
    } catch (error) {
      console.error('Error getting top clicked buttons from Firebase: ', error);
      // Fallback to localStorage if Firebase fails
      return this.getTopClickedButtonsLocalStorage(limitCount);
    }
  }

  // Get top clicked buttons from localStorage (fallback)
  getTopClickedButtonsLocalStorage(limitCount = 5) {
    try {
      const clicksData = JSON.parse(localStorage.getItem('buttonClicks') || '{}');
      const buttonsArray = Object.entries(clicksData).map(([buttonName, count]) => ({
        buttonName,
        count
      }));
      
      // Sort by count descending
      buttonsArray.sort((a, b) => b.count - a.count);
      
      // Return top buttons
      return buttonsArray.slice(0, limitCount);
    } catch (error) {
      console.error('Error getting top clicked buttons from localStorage: ', error);
      return [];
    }
  }
}

export default new DataService();