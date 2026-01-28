'use client';

import Link from 'next/link';

import styles from './Disclaimer.module.scss';

export const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
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
          From 1 January 2026, Clearcrest Inc. UAB will no longer provide crypto-asset services within the European Union. Users located in the European Union may access Coinsdrom crypto-asset services only by registering directly with Monteris Sp. z o.o., a crypto-asset service provider established in the Republic of Poland, and by agreeing to its terms and conditions. For more details visit{' '}
          <Link href="https://looniebit.com/legal-disclosure">Legal Disclosure</Link> page.
        </p>
      </div>
    </div>
  );
};
