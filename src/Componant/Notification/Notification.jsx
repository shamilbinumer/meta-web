import { useEffect } from 'react';
import './Notification.scss'
const Notification = ({ message, type, onClose }) => {
    useEffect(() => {
        if (message) {
          const timer = setTimeout(() => {
            onClose();
          }, 2000);
          return () => clearTimeout(timer);
        }
      }, [message, onClose]);
    
      if (!message) return null;
    
      return (
       <div className="not">
         <div className={`notification ${type}`}>
          <span>{message}</span>
        </div>
       </div>
      );
    };
    

export default Notification
