import React from 'react';
import './CertificateModal.css';

const CertificateModal = ({ certificate, onClose }) => {
   if (!certificate) return null;

   return (
      <div className="certificate-modal-overlay" onClick={onClose}>
         <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="certificate-modal-header">
               <h2 className="certificate-modal-title">Certificate Details</h2>
               <button className="certificate-modal-close" onClick={onClose}>
                  <ion-icon name="close-outline"></ion-icon>
               </button>
            </div>
            <div className="certificate-modal-body">
               <div className="certificate-modal-image-container">
                  <img
                     src={certificate.src}
                     alt={certificate.title || 'Certificate'}
                     className="certificate-modal-image"
                  />
               </div>
               <div className="certificate-modal-info">
                  {certificate.title && (
                     <h3 className="certificate-modal-cert-title">{certificate.title}</h3>
                  )}
                  {certificate.date && (
                     <p className="certificate-modal-date">
                        <ion-icon name="calendar-outline"></ion-icon>
                        {certificate.date}
                     </p>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default CertificateModal;