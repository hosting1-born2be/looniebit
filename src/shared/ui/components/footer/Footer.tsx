import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LINKS, WEBSITE_EMAIL } from '@/shared/lib/constants/constants';

import Facebook from '../../icons/socials/Facebook';
import Instagram from '../../icons/socials/Instagram';
import X from '../../icons/socials/X';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Link href={'/'}>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={111}
              height={21}
              quality={100}
            />
          </Link>

          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className={styles.footerContentWrapper}>
          <div className={styles.footerContentWrapperItem}>
            <h3>Stay Social</h3>
            <nav>
              {LINKS.FACEBOOK && (
                <Link href={LINKS.FACEBOOK} target="_blank">
                  <Facebook />
                  Facebook
                </Link>
              )}
              {LINKS.INSTAGRAM && (
                <Link href={LINKS.INSTAGRAM} target="_blank">
                  <Instagram />
                  Instagram
                </Link>
              )}
              {LINKS.X && (
                <Link href={LINKS.X} target="_blank">
                  <X />
                  Twitter
                </Link>
              )}
            </nav>
          </div>
          <div className={styles.footerContentWrapperItem}>
            <h3>Navigation</h3>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/company">Company</Link>
              <Link href="/user-guide">User Guide</Link>
              <Link href="/support-center">Support Center</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/contacts">Contacts</Link>
            </nav>
          </div>
          <div className={styles.footerContentWrapperItem}>
            <h3>Clearcrest Inc. UAB</h3>
            <nav>
              <Link href="/terms-conditions-2">Terms & Conditions</Link>
              <Link href="/refund-policy">Refund policy</Link>
              <Link href="/privacy-policy-2">Privacy policy</Link>
              <Link href="/disclaimer">Risks Disclosure</Link>
              <Link href="/aml-kyc-policy-2">AML policy</Link>
              <Link href="/complaints-procedure-2">Complaints Procedure</Link>
              <Link href="-disclosure">Legal Disclosure</Link>
            </nav>
          </div>
          <div className={styles.footerContentWrapperItem}>
            <h3>Monteris Sp. z o.o.</h3>
            <nav>
              <Link href="/terms-conditions-1">Terms & Conditions</Link>
              <Link href="/refund-policy">Refund policy</Link>
              <Link href="/privacy-policy-1">Privacy policy</Link>
              <Link href="/disclaimer">Risks Disclosure</Link>
              <Link href="/aml-kyc-policy-1">AML policy</Link>
              <Link href="/complaints-procedure-1">Complaints Procedure</Link>
              <Link href="-disclosure">Legal Disclosure</Link>
            </nav>
          </div>
          <div className={styles.footerContentWrapperItem}>
            <h3>Reach Out to Us</h3>
            <div className={styles.address}>
              <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
              <Link href="tel:+14378869702">+14378869702</Link>
              <Link href="tel:+37052144957">+37052144957</Link>
              <Link href="tel:+48699740597">+48699740597</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerDisclaimer}>
        <p>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="26" height="26" rx="13" fill="#FF7F3E" />
            <path d="M8.01561 17.4375C8.01561 17.7141 8.23905 17.9375 8.51561 17.9375H17.4844C17.7609 17.9375 17.9844 17.7141 17.9844 17.4375V13.7969C17.9844 11.0437 15.7531 8.8125 13 8.8125C10.2469 8.8125 8.01561 11.0437 8.01561 13.7969V17.4375ZM9.14061 13.7969C9.14061 11.6656 10.8687 9.9375 13 9.9375C15.1312 9.9375 16.8594 11.6656 16.8594 13.7969V16.8125H11.3125V14.1406C11.3125 14.0547 11.2422 13.9844 11.1562 13.9844H10.4687C10.3828 13.9844 10.3125 14.0547 10.3125 14.1406V16.8125H9.14061V13.7969ZM8.38905 9.85156L9.0078 9.23281C9.05623 9.18437 9.05623 9.10469 9.0078 9.05625L7.94686 7.99531C7.92337 7.97205 7.89164 7.959 7.85858 7.959C7.82552 7.959 7.79379 7.97205 7.7703 7.99531L7.15155 8.61406C7.12828 8.63756 7.11523 8.66928 7.11523 8.70234C7.11523 8.73541 7.12828 8.76713 7.15155 8.79063L8.21248 9.85156C8.26092 9.9 8.33905 9.9 8.38905 9.85156ZM18.8515 8.61406L18.2328 7.99531C18.2093 7.97205 18.1776 7.959 18.1445 7.959C18.1115 7.959 18.0797 7.97205 18.0562 7.99531L16.9953 9.05625C16.972 9.07974 16.959 9.11147 16.959 9.14453C16.959 9.17759 16.972 9.20932 16.9953 9.23281L17.614 9.85156C17.6625 9.9 17.7422 9.9 17.7906 9.85156L18.8515 8.79063C18.9 8.74063 18.9 8.6625 18.8515 8.61406ZM18 18.9375H7.99998C7.72342 18.9375 7.49998 19.1609 7.49998 19.4375V19.8125C7.49998 19.8813 7.55623 19.9375 7.62498 19.9375H18.375C18.4437 19.9375 18.5 19.8813 18.5 19.8125V19.4375C18.5 19.1609 18.2765 18.9375 18 18.9375ZM12.5625 7.8125H13.4375C13.5062 7.8125 13.5625 7.75625 13.5625 7.6875V6.1875C13.5625 6.11875 13.5062 6.0625 13.4375 6.0625H12.5625C12.4937 6.0625 12.4375 6.11875 12.4375 6.1875V7.6875C12.4375 7.75625 12.4937 7.8125 12.5625 7.8125Z" fill="white" />
          </svg>
          This website and its materials have been created and shared with individuals outside the United Kingdom. The information presented here is not aimed at or designed for dissemination to, or utilisation by, any individuals or entities in the UK. The financial products and services discussed on this website are not suitable for use in the UK. In the United Kingdom, cryptoassets are categorised as Restricted Mass Market Investments, signifying their high-risk nature and rendering them unsuitable for most retail investors.
        </p>
      </div>
      <div className={styles.footerBottom}>
        <div>
          <p>
            You are provided with crypto-asset services through the Looniebit platform by the relevant legal entity, determined based on your place of residence or habitual location, as disclosed in the Legal Disclosure section of the <Link href="https://looniebit.com/">Looniebit.com</Link> website.
          </p>
        </div>
        <Image
          src="/images/visa.svg"
          alt="visa"
          width={134}
          height={36}
          quality={100}
        />
      </div>
    </footer>
  );
}
