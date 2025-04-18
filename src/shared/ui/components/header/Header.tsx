'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LINKS, WEBSITE_EMAIL } from '@/shared/lib/constants/constants';

import Burger from '../../icons/burger/burger';
import Facebook from '../../icons/socials/Facebook';
import Instagram from '../../icons/socials/Instagram';
import Youtube from '../../icons/socials/Youtube';
import CryptoTicker from '../cryptoTicker/cryptoTicker';
import styles from './header.module.scss';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
          </div>
          <div className={styles.headerTopSocials}>
            <Link href={LINKS.YOUTUBE} target="_blank">
              <Youtube />
            </Link>
            <Link href={LINKS.FACEBOOK} target="_blank">
              <Facebook />
            </Link>
            <Link href={LINKS.INSTAGRAM} target="_blank">
              <Instagram />
            </Link>
          </div>
        </div>
        <div className={styles.headerMain}>
          <div className={styles.headerMainBurger} onClick={toggleMobileMenu}>
            <Burger />
          </div>
          <Link href="/" className={styles.headerMainLogo}>
            <Image src="/images/logo.svg" alt="logo" width={111} height={21} />
          </Link>
          <nav className={styles.headerMainNav}>
            <Link href="/">Home</Link>
            <Link href="/company">Company</Link>
            <Link href="/user-guide">User Guide</Link>
            <Link href="/support-center">Support Center</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contacts">Contacts</Link>
          </nav>
          <div className={styles.headerMainButtons}>
            <Link
              href={LINKS.SIGN_IN}
              className={styles.headerMainButtonsLogin}
            >
              Login
            </Link>
            <Link
              href={LINKS.SIGN_UP}
              className={styles.headerMainButtonsSignUp}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <CryptoTicker />
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.active : ''
        }`}
      >
        <nav className={styles.headerMainNav}>
          <Link href="/">Home</Link>
          <Link href="/company">Company</Link>
          <Link href="/user-guide">User Guide</Link>
          <Link href="/support-center">Support Center</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contacts">Contacts</Link>
        </nav>
        <div className={styles.socials}>
          <Link href={LINKS.YOUTUBE} target="_blank">
            <Youtube />
          </Link>
          <Link href={LINKS.FACEBOOK} target="_blank">
            <Facebook />
          </Link>
          <Link href={LINKS.INSTAGRAM} target="_blank">
            <Instagram />
          </Link>
        </div>
      </div>
    </>
  );
}
