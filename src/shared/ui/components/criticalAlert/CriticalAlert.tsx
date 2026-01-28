'use client';

import { useEffect, useState } from 'react';

import styles from './CriticalAlert.module.scss';

const STORAGE_KEY = 'criticalAlertShown';

export const CriticalAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const wasShown = localStorage.getItem(STORAGE_KEY);

    if (!wasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = 'auto';
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.icon}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0625 49.75C12.0625 50.8563 12.9562 51.75 14.0625 51.75H49.9375C51.0438 51.75 51.9375 50.8563 51.9375 49.75V35.1875C51.9375 24.175 43.0125 15.25 32 15.25C20.9875 15.25 12.0625 24.175 12.0625 35.1875V49.75ZM16.5625 35.1875C16.5625 26.6625 23.475 19.75 32 19.75C40.525 19.75 47.4375 26.6625 47.4375 35.1875V47.25H25.25V36.5625C25.25 36.2188 24.9688 35.9375 24.625 35.9375H21.875C21.5312 35.9375 21.25 36.2188 21.25 36.5625V47.25H16.5625V35.1875ZM13.5562 19.4062L16.0312 16.9312C16.225 16.7375 16.225 16.4188 16.0312 16.225L11.7875 11.9812C11.6935 11.8882 11.5666 11.836 11.4344 11.836C11.3021 11.836 11.1752 11.8882 11.0812 11.9812L8.60625 14.4563C8.5132 14.5502 8.461 14.6771 8.461 14.8094C8.461 14.9416 8.5132 15.0685 8.60625 15.1625L12.85 19.4062C13.0437 19.6 13.3562 19.6 13.5562 19.4062ZM55.4062 14.4563L52.9313 11.9812C52.8373 11.8882 52.7104 11.836 52.5781 11.836C52.4459 11.836 52.319 11.8882 52.225 11.9812L47.9813 16.225C47.8882 16.319 47.836 16.4459 47.836 16.5781C47.836 16.7104 47.8882 16.8373 47.9813 16.9312L50.4562 19.4062C50.65 19.6 50.9687 19.6 51.1625 19.4062L55.4062 15.1625C55.6 14.9625 55.6 14.65 55.4062 14.4563ZM52 55.75H12C10.8937 55.75 10 56.6437 10 57.75V59.25C10 59.525 10.225 59.75 10.5 59.75H53.5C53.775 59.75 54 59.525 54 59.25V57.75C54 56.6437 53.1063 55.75 52 55.75ZM30.25 11.25H33.75C34.025 11.25 34.25 11.025 34.25 10.75V4.75C34.25 4.475 34.025 4.25 33.75 4.25H30.25C29.975 4.25 29.75 4.475 29.75 4.75V10.75C29.75 11.025 29.975 11.25 30.25 11.25Z" fill="#FF7F3E" />
          </svg>
        </div>
        <h2 className={styles.title}>CRITICAL ALERT</h2>
        <p className={styles.text}>
          Restricted Service Availability for Retail Clients in the UK. Please
          note that the services provided on this platform are presently
          unavailable to Retail Clients residing in the United Kingdom.
        </p>
        <button className={styles.button} onClick={handleClose}>
          Continue
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.56251 8.70828L12.7348 8.70828L9.17226 5.14578L10.2917 4.02637L15.7653 9.49995L10.2917 14.9735L9.17226 13.8541L12.7348 10.2916L3.56251 10.2916L3.56251 8.70828Z" fill="#0F0F0F" />
          </svg>
        </button>
      </div>
    </div>
  );
};
