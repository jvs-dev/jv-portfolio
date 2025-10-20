import React, { useEffect, useRef } from "react";
import "./Notification.css";

const Notification = ({ message, isVisible, type }) => {
   const audioRef = useRef(null);

   useEffect(() => {
      if (isVisible && audioRef.current) {
         audioRef.current.currentTime = 0;
         audioRef.current.play().catch(error => {
            console.log("Audio play failed:", error);
         });
      }
   }, [isVisible]);

   if (!isVisible) {
      return null;
   }

   return (
      <>
         <div
            className={`notification notification--${type} notification--visible`}
         >
            <div className="notification__content">
               {type === "success" ? <ion-icon className="notification__icon" name="checkmark-circle-outline"></ion-icon> : <ion-icon className="notification__icon" name="close-outline"></ion-icon>}
               <span className="notification__message">{message}</span>
            </div>
         </div>
         <audio ref={audioRef} src="/uiSounds/notify-pop.mp3" preload="auto" />
      </>
   );
};

export default Notification;