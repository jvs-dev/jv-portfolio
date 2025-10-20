import React, { useState, useEffect } from 'react';
import './PasswordProtection.css';

const PasswordProtection = ({ onAuthorized }) => {
   const [password, setPassword] = useState('');
   const [rememberMe, setRememberMe] = useState(false);
   const [error, setError] = useState('');

   const correctPassword = import.meta.env.VITE_DASHBOARD_PASSWORD;
   
   useEffect(() => {
      const isRemembered = localStorage.getItem('dashboardRemembered') === 'true';
      const storedPassword = localStorage.getItem('dashboardPassword');

      if (isRemembered && storedPassword === correctPassword) {
         localStorage.setItem('admin', 'true');
         onAuthorized();
      }
   }, [onAuthorized, correctPassword]);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (password === correctPassword) {         
         localStorage.setItem('admin', 'true');
         
         if (rememberMe) {
            localStorage.setItem('dashboardRemembered', 'true');
            localStorage.setItem('dashboardPassword', password);
         } else {
            localStorage.removeItem('dashboardRemembered');
            localStorage.removeItem('dashboardPassword');
         }

         onAuthorized();
      } else {
         setError('Senha incorreta. Por favor, tente novamente.');
         setPassword('');
      }
   };

   return (
      <div className="password-protection">
         <div className="password-form-container">
            <h2>Acesso Protegido</h2>
            <p>Por favor, digite a senha para visualizar os dados do painel.</p>
            <form onSubmit={handleSubmit}>
               <div className="form-group">
                  <label htmlFor="password">Senha:</label>
                  <input
                     type="password"
                     id="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Digite a senha"
                     required
                  />
               </div>

               <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                     <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                     />
                     <span className="checkmark"></span>
                     Lembrar-me
                  </label>
               </div>

               {error && <div className="error-message">{error}</div>}
               <button type="submit" className="submit-button">Acessar Painel</button>
            </form>
         </div>
      </div>
   );
};

export default PasswordProtection;