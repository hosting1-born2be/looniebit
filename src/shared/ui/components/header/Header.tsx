"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WEBSITE_EMAIL,
  WEBSITE_PHONE,
  YOUTUBE_URL,
} from "@/shared/lib/constants/constants";

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
            <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
            <Link href={`tel:${WEBSITE_PHONE}`}>{WEBSITE_PHONE}</Link>
          </div>
          <div className={styles.headerTopSocials}>
            <Link href={YOUTUBE_URL} target="_blank">
              <Youtube />
            </Link>
            <Link href={FACEBOOK_URL} target="_blank">
              <Facebook />
            </Link>
            <Link href={INSTAGRAM_URL} target="_blank">
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
            <Link href="/insights">Insights</Link>
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
          <Link href="/insights">Insights</Link>
          <Link href="#">Contacts</Link>
        </nav>
        <div className={styles.socials}>
          <Link href={YOUTUBE_URL} target="_blank">
            <Youtube />
          </Link>
          <Link href={FACEBOOK_URL} target="_blank">
            <Facebook />
          </Link>
          <Link href={INSTAGRAM_URL} target="_blank">
            <Instagram />
          </Link>
        </div>
      </div>
    </>
  );
}
