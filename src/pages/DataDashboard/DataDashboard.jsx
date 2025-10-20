import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import firebaseService from '../../services/firebaseService';
import './DataDashboard.css';

const DataDashboard = () => {
   const [data, setData] = useState({
      totalVisits: 0,
      averageViewTime: 0,
      clicks: 0
   });

   const [topButtons, setTopButtons] = useState([]);
   const [loading, setLoading] = useState(true);
   const [isAdmin, setIsAdmin] = useState(false);
   const [unsubscribe, setUnsubscribe] = useState(null);
   const [unsubscribeTopButtons, setUnsubscribeTopButtons] = useState(null);

   useEffect(() => {
      // Check if user is admin
      const adminStatus = localStorage.getItem('admin') === 'true';
      setIsAdmin(adminStatus);

      // Set up real-time listener for Firebase data
      const unsubscribeFn = firebaseService.subscribeToRealTimeUpdates((firebaseData) => {
         if (firebaseData) {
            setData(firebaseData);
            setLoading(false);
         } else {
            // Fallback to data service if Firebase fails
            dataService.getData().then(fallbackData => {
               setData(fallbackData);
               setLoading(false);
            });
         }
      });

      // Set up real-time listener for top clicked buttons
      const unsubscribeTopButtonsFn = firebaseService.subscribeToTopButtonsUpdates(5, (topButtonsData) => {
         setTopButtons(topButtonsData);
      });

      // Store unsubscribe functions to clean up later
      setUnsubscribe(() => unsubscribeFn);
      setUnsubscribeTopButtons(() => unsubscribeTopButtonsFn);

      // Increment visit count for dashboard access (only for non-admin users)
      if (!adminStatus) {
         dataService.incrementVisits();
      }

      // Clean up subscriptions on component unmount
      return () => {
         if (unsubscribeFn) {
            unsubscribeFn();
         }
         if (unsubscribeTopButtonsFn) {
            unsubscribeTopButtonsFn();
         }
      };
   }, []);

   if (loading) {
      return (
         <div className="dashboard">
            <div className="loading-container">
               <p>Carregando dados do painel...</p>
            </div>
         </div>
      );
   }

   return (
      <div className="dashboard">
         <div className="dashboard-header">
            <h1>Painel de Análise do Portfólio</h1>
            {isAdmin && (
               <div className="admin-notice">
                  <p>Modo Administrador: Sua atividade não está sendo registrada nas análises.</p>
               </div>
            )}
            <p>Dados em tempo real e insights sobre o desempenho do seu portfólio</p>
         </div>

         <div className="dashboard-cards">
            <div className="card">
               <div className="card-header">
                  <h3>Total de Visitas</h3>
               </div>
               <div className="card-content">
                  <div className="metric-value">{data.totalVisits}</div>
                  <div className="metric-description">Número de visitas ao seu portfólio</div>
               </div>
            </div>

            <div className="card">
               <div className="card-header">
                  <h3>Tempo Médio de Visualização</h3>
               </div>
               <div className="card-content">
                  <div className="metric-value">{data.averageViewTime ? `${data.averageViewTime}s` : '0s'}</div>
                  <div className="metric-description">Tempo médio que os usuários passam no seu portfólio</div>
               </div>
            </div>

            <div className="card">
               <div className="card-header">
                  <h3>Cliques na Tela</h3>
               </div>
               <div className="card-content">
                  <div className="metric-value">{data.clicks}</div>
                  <div className="metric-description">Total de cliques registrados no seu portfólio</div>
               </div>
            </div>
         </div>

         <div className="dashboard-cards">
            <div className="card full-width">
               <div className="card-header">
                  <h3>Botões Mais Clicados</h3>
               </div>
               <div className="card-content">
                  {topButtons.length > 0 ? (
                     <div className="top-buttons-list">
                        {topButtons.map((button, index) => (
                           <div key={button.id || index} className="button-item">
                              <div className="button-rank">#{index + 1}</div>
                              <div className="button-name">{button.buttonName}</div>
                              <div className="button-count">{button.count} cliques</div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p className="no-data">Nenhum dado de botões disponível ainda.</p>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default DataDashboard;