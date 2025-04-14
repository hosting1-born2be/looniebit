import React from "react";
import Image from "next/image";
import Link from "next/link";

import Facebook from "../../icons/socials/Facebook";
import Instagram from "../../icons/socials/Instagram";
import Youtube from "../../icons/socials/Youtube";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Link href={"#"}>
          <Image src="/images/logo.svg" alt="logo" width={100} height={24} />
        </Link>
        <div className={styles.footerContentWrapper}>
          <div className={styles.footerContentWrapperItem}>
            <h3>Stay Social</h3>
            <nav>
              <Link href={"#"}>
                <Youtube />
                YouTube
              </Link>
              <Link href={"#"}>
                <Facebook />
                Facebook
              </Link>
              <Link href={"#"}>
                <Instagram />
                Instagram
              </Link>
            </nav>
          </div>
          <div className={styles.footerContentWrapperItem}>
            <h3>Navigation</h3>
            <nav>
              <Link href="#">Home</Link>
              <Link href="#">Company</Link>
              <Link href="#">User Guide</Link>
              <Link href="#">Support Center</Link>
              <Link href="#">Insights</Link>
              <Link href="#">Contacts</Link>
            </nav>
          </div>
          <div className={styles.footerContentWrapperItem}>
            <h3>Guidelines</h3>
            <nav>
              <Link href="#">Terms and Conditions</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Cookie Policy</Link>
              <Link href="#">Refund Policy</Link>
              <Link href="#">Disclaimer</Link>
              <Link href="#">AML Policy</Link>
              <Link href="#">Complaints Procedure</Link>
            </nav>
          </div>
          <div className={styles.footerContentWrapperItem}>
            <h3>Reach Out to Us</h3>
            <div className={styles.address}>
              <div>
                <span>Office addresses:</span>
                <p>Adresses example 74A </p>
              </div>
              <div>
                <span>Registered addresses:</span>
                <p>Adresses example 92B </p>
              </div>
              <Link href="#">example@gmail.com</Link>
              <Link href="#">+1 000 000 000</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div>
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <span>
            LoonieBit is operated by COMPANY NAME (Registration No. NUMBER),
            which is authorized to offer virtual currency services. The company
            is registered at REGISTERED ADDRESS.
          </span>
        </div>
        <Image src="/images/visa.svg" alt="visa" width={61} height={36} />
      </div>
    </footer>
  );
}
