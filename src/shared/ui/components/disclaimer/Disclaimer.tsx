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
        <svg
          onClick={toggleDisclaimer}
          className={styles.closeDisclaimer}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.225254 11.8609C0.160909 11.8112 0.108063 11.7505 0.0697357 11.6824C0.0314083 11.6143 0.00835091 11.54 0.00188192 11.4639C-0.00458708 11.3877 0.00565929 11.3111 0.0320346 11.2385C0.0584099 11.166 0.100397 11.0988 0.155597 11.0408L4.95505 5.99304L0.155596 0.945282C0.0507919 0.827595 0.000865465 0.677783 0.0163714 0.527519C0.0318773 0.377255 0.1116 0.238316 0.238687 0.14007C0.365774 0.0418243 0.530265 -0.0080271 0.697387 0.00105473C0.864508 0.0101366 1.02116 0.0774402 1.13423 0.188737L6.29401 5.61477C6.39416 5.72013 6.44921 5.8543 6.44921 5.99304C6.44921 6.13178 6.39416 6.26595 6.29401 6.37131L1.13423 11.7973C1.02288 11.9142 0.864599 11.9865 0.69416 11.9983C0.523721 12.0101 0.355067 11.9604 0.225254 11.8601L0.225254 11.8609Z"
            fill="#242424"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7747 11.8609C11.8391 11.8112 11.8919 11.7505 11.9303 11.6824C11.9686 11.6143 11.9916 11.54 11.9981 11.4639C12.0046 11.3877 11.9943 11.3111 11.968 11.2385C11.9416 11.166 11.8996 11.0988 11.8444 11.0408L7.04495 5.99304L11.8444 0.945282C11.9492 0.827595 11.9991 0.677783 11.9836 0.527519C11.9681 0.377255 11.8884 0.238316 11.7613 0.14007C11.6342 0.0418243 11.4697 -0.0080271 11.3026 0.00105474C11.1355 0.0101366 10.9788 0.0774402 10.8658 0.188737L5.70599 5.61477C5.60584 5.72013 5.55079 5.8543 5.55079 5.99304C5.55079 6.13178 5.60584 6.26595 5.70599 6.37131L10.8658 11.7973C10.9771 11.9142 11.1354 11.9865 11.3058 11.9983C11.4763 12.0101 11.6449 11.9604 11.7747 11.8601L11.7747 11.8609Z"
            fill="#242424"
          />
        </svg>
      </div>
    </div>
  );
};
