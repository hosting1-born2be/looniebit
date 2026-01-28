'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LINKS, WEBSITE_EMAIL } from '@/shared/lib/constants/constants';

import Burger from '../../icons/burger/burger';
import Facebook from '../../icons/socials/Facebook';
import Instagram from '../../icons/socials/Instagram';
import X from '../../icons/socials/X';
import { Disclaimer } from '../disclaimer/Disclaimer';
import { Notice } from '../notice/Notice';
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
      <Notice />
      <Disclaimer />
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
            <Link href="tel:+14378869702">+14378869702</Link>
            <Link href="tel:+37052144957">+37052144957</Link>
            <Link href="tel:+48699740597">+48699740597</Link>
          </div>
          <div className={styles.headerTopSocials}>
            {LINKS.FACEBOOK && (
              <Link href={LINKS.FACEBOOK} target="_blank">
                <Facebook />
              </Link>
            )}
            {LINKS.INSTAGRAM && (
              <Link href={LINKS.INSTAGRAM} target="_blank">
                <Instagram />
              </Link>
            )}
            {LINKS.X && (
              <Link href={LINKS.X} target="_blank">
                <X />
              </Link>
            )}
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
      {/* <div className={styles.headerContent}>
        <CryptoTicker />
      </div> */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''
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
          {LINKS.FACEBOOK && (
            <Link href={LINKS.FACEBOOK} target="_blank">
              <Facebook />
            </Link>
          )}
          {LINKS.INSTAGRAM && (
            <Link href={LINKS.INSTAGRAM} target="_blank">
              <Instagram />
            </Link>
          )}
          {LINKS.X && (
            <Link href={LINKS.X} target="_blank">
              <X />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
