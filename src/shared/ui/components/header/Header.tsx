"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Burger from "../../icons/burger/burger";
import Facebook from "../../icons/socials/Facebook";
import Instagram from "../../icons/socials/Instagram";
import Youtube from "../../icons/socials/Youtube";
import styles from "./header.module.scss";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <Link href="#">example@gmail.com</Link>
            <Link href="#">+1 000 000 000</Link>
          </div>
          <div className={styles.headerTopSocials}>
            <Link href="#">
              <Youtube />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Instagram />
            </Link>
          </div>
        </div>
        <div className={styles.headerMain}>
          <div className={styles.headerMainBurger} onClick={toggleMobileMenu}>
            <Burger />
          </div>
          <Link href="/" className={styles.headerMainLogo}>
            <Image src="/images/logo.svg" alt="logo" width={100} height={24} />
          </Link>
          <nav className={styles.headerMainNav}>
            <Link href="/">Home</Link>
            <Link href="/company">Company</Link>
            <Link href="#">User Guide</Link>
            <Link href="#">Support Center</Link>
            <Link href="#">Insights</Link>
            <Link href="#">Contacts</Link>
          </nav>
          <div className={styles.headerMainButtons}>
            <Link href="#" className={styles.headerMainButtonsLogin}>
              Login
            </Link>
            <Link href="#" className={styles.headerMainButtonsSignUp}>
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <nav className={styles.headerMainNav}>
          <Link href="/">Home</Link>
          <Link href="/company">Company</Link>
          <Link href="#">User Guide</Link>
          <Link href="#">Support Center</Link>
          <Link href="#">Insights</Link>
          <Link href="#">Contacts</Link>
        </nav>
        <div className={styles.socials}>
          <Link href="#">
            <Youtube />
          </Link>
          <Link href="#">
            <Facebook />
          </Link>
          <Link href="#">
            <Instagram />
          </Link>
        </div>
      </div>
    </>
  );
}
