import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WEBSITE_EMAIL,
  WEBSITE_OFFICE_ADDRESS,
  WEBSITE_PHONE,
  WEBSITE_REGISTRATION_ADDRESS,
  YOUTUBE_URL,
} from "@/shared/lib/constants/constants";

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
              <Link href={YOUTUBE_URL}>
                <Youtube />
                YouTube
              </Link>
              <Link href={FACEBOOK_URL}>
                <Facebook />
                Facebook
              </Link>
              <Link href={INSTAGRAM_URL}>
                <Instagram />
                Instagram
              </Link>
            </nav>
          </div>
          <div className={styles.footerContentWrapperItem}>
            <h3>Navigation</h3>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/company">Company</Link>
              <Link href="#">User Guide</Link>
              <Link href="#">Support Center</Link>
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
                <p>{WEBSITE_OFFICE_ADDRESS}</p>
              </div>
              <div>
                <span>Registered addresses:</span>
                <p>{WEBSITE_REGISTRATION_ADDRESS}</p>
              </div>
              <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
              <Link href={`tel:${WEBSITE_PHONE}`}>{WEBSITE_PHONE}</Link>
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
