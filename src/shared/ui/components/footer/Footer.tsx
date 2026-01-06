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
            <h3>Guidelines</h3>
            <nav>
              <Link href="/legal/terms-and-conditions">
                Terms and Conditions
              </Link>
              <Link href="/legal/privacy-policy">Privacy Policy</Link>
              <Link href="/legal/cookie-policy">Cookie Policy</Link>
              <Link href="/legal/refund-policy">Refund Policy</Link>
              <Link href="/legal/disclaimer">Disclaimer</Link>
              <Link href="/legal/aml-policy">AML Policy</Link>
              <Link href="/legal/complaints-procedure">
                Complaints Procedure
              </Link>
            </nav>
          </div>
          <div className={styles.footerContentWrapperItem}>
            <h3>Reach Out to Us</h3>
            <div className={styles.address}>
              <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
            </div>
          </div>
        </div>
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
