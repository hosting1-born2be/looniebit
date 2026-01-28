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
          This website and its materials have been created and shared with individuals outside the United Kingdom. The information presented here is not aimed at or designed for dissemination to, or utilisation by, any individuals or entities in the UK. The financial products and services discussed on this website are not suitable for use in the UK. In the United Kingdom, cryptoassets are categorised as Restricted Mass Market Investments, signifying their high-risk nature and rendering them unsuitable for most retail investors.
        </p>
      </div>
      <div className={styles.footerBottom}>
        <div>
          <p>© {new Date().getFullYear()} All rights reserved</p>
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
