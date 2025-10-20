import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, query, orderBy, limit, onSnapshot, where } from 'firebase/firestore';
import firebaseConfig from '../firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Collection names
const ANALYTICS_COLLECTION = 'portfolioAnalytics';
const BUTTON_CLICKS_COLLECTION = 'buttonClicks';

class FirebaseService {
  // Initialize analytics data in Firebase
  async initializeData() {
    try {
      const analyticsData = {
        totalVisits: 0,
        averageViewTime: 0,
        clicks: 0,
        timestamp: new Date()
      };
      
      const docRef = await addDoc(collection(db, ANALYTICS_COLLECTION), analyticsData);
      return { id: docRef.id, ...analyticsData };
    } catch (error) {
      console.error('Error initializing data: ', error);
      throw error;
    }
  }

  // Get the latest analytics data from Firebase
  async getLatestData() {
    try {
      const q = query(
        collection(db, ANALYTICS_COLLECTION),
        orderBy('timestamp', 'desc'),
        limit(1)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        // If no data exists, initialize it
        return await this.initializeData();
      }
      
      const latestDoc = querySnapshot.docs[0];
      return { id: latestDoc.id, ...latestDoc.data() };
    } catch (error) {
      console.error('Error getting latest data: ', error);
      throw error;
    }
  }

  // Subscribe to real-time updates for analytics data
  subscribeToRealTimeUpdates(callback) {
    const q = query(
      collection(db, ANALYTICS_COLLECTION),
      orderBy('timestamp', 'desc'),
      limit(1)
    );
    
    // Set up real-time listener
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const latestDoc = querySnapshot.docs[0];
        callback({ id: latestDoc.id, ...latestDoc.data() });
      } else {
        // If no data exists, initialize it
        this.initializeData().then(data => callback(data));
      }
    }, (error) => {
      console.error('Error in real-time subscription: ', error);
      callback(null);
    });
    
    return unsubscribe;
  }

  // Update analytics data in Firebase
  async updateData(dataId, newData) {
    try {
      const dataToUpdate = {
        ...newData,
        timestamp: new Date()
      };
      
      await updateDoc(doc(db, ANALYTICS_COLLECTION, dataId), dataToUpdate);
      
      // Return updated data
      return { id: dataId, ...dataToUpdate };
    } catch (error) {
      console.error('Error updating data: ', error);
      throw error;
    }
  }

  // Increment visit count
  async incrementVisits(dataId, currentData) {
    const updatedData = {
      ...currentData,
      totalVisits: currentData.totalVisits + 1
    };
    
    return await this.updateData(dataId, updatedData);
  }

  // Update average view time
  async updateAverageViewTime(dataId, currentData, time) {
    const newAverage = ((currentData.averageViewTime * currentData.totalVisits) + time) / (currentData.totalVisits + 1);
    const updatedData = {
      ...currentData,
      averageViewTime: Math.round(newAverage * 100) / 100
    };
    
    return await this.updateData(dataId, updatedData);
  }

  // Increment clicks
  async incrementClicks(dataId, currentData) {
    const updatedData = {
      ...currentData,
      clicks: currentData.clicks + 1
    };
    
    return await this.updateData(dataId, updatedData);
  }

  // Record a button click
  async recordButtonClick(buttonName) {
    try {
      const buttonClickData = {
        buttonName: buttonName,
        timestamp: new Date(),
        count: 1
      };

      // Check if this button has been clicked before
      const q = query(
        collection(db, BUTTON_CLICKS_COLLECTION),
        where('buttonName', '==', buttonName)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // If button hasn't been clicked before, create new record
        await addDoc(collection(db, BUTTON_CLICKS_COLLECTION), buttonClickData);
      } else {
        // If button has been clicked before, increment count
        const docRef = querySnapshot.docs[0];
        const currentData = docRef.data();
        await updateDoc(doc(db, BUTTON_CLICKS_COLLECTION, docRef.id), {
          count: currentData.count + 1,
          timestamp: new Date()
        });
      }
    } catch (error) {
      console.error('Error recording button click: ', error);
      throw error;
    }
  }

  // Get top clicked buttons
  async getTopClickedButtons(limitCount = 5) {
    try {
      const q = query(
        collection(db, BUTTON_CLICKS_COLLECTION),
        orderBy('count', 'desc'),
        limit(limitCount)
      );

      const querySnapshot = await getDocs(q);
      const topButtons = [];

      querySnapshot.forEach((doc) => {
        topButtons.push({ id: doc.id, ...doc.data() });
      });

      return topButtons;
    } catch (error) {
      console.error('Error getting top clicked buttons: ', error);
      throw error;
    }
  }

  // Subscribe to real-time updates for top clicked buttons
  subscribeToTopButtonsUpdates(limitCount = 5, callback) {
    const q = query(
      collection(db, BUTTON_CLICKS_COLLECTION),
      orderBy('count', 'desc'),
      limit(limitCount)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const topButtons = [];
      querySnapshot.forEach((doc) => {
        topButtons.push({ id: doc.id, ...doc.data() });
      });
      callback(topButtons);
    }, (error) => {
      console.error('Error in top buttons real-time subscription: ', error);
      callback([]);
    });

    return unsubscribe;
  }
}

export default new FirebaseService();