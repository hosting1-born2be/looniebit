'use client';
import { useEffect, useState } from 'react';

import styles from './Disclaimer.module.scss';

export const Disclaimer = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleDisclaimer = () => {
    sessionStorage.setItem('disclaimer-closed', 'true');
    setIsClosed(true);
  };

  useEffect(() => {
    const disclaimerClosed = sessionStorage.getItem('disclaimer-closed');
    if (disclaimerClosed === 'true') {
      setIsClosed(true);
    }
  }, []);

  return (
    <div className={`${styles.disclaimer} ${isClosed ? styles.closed : ''}`}>
      <div className={styles.disclaimerContent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.99996 6.66663V9.99996M9.99996 13.3333H10.0083M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39759 5.39759 1.66663 9.99996 1.66663C14.6023 1.66663 18.3333 5.39759 18.3333 9.99996Z"
            stroke="#242424"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={styles.disclaimerText}>
          From 1 January 2026, Clearcrest Inc. UAB will cease the provision of
          crypto-asset services to clients within the European Union.
        </p>
        
      </div>
    </div>
  );
};
