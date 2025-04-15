"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "../ContactsWrap/ContactsWrap.module.scss";

export default function ContactsHero() {
  return (
    <div className={styles.contactsHeroContent}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={styles.label}
      >
        <div className={styles.labelIcon}>
          <span></span>
          <span></span>
        </div>
        <span>We are always here to help!</span>
      </motion.div>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Don’t hesitate to get in touch if you have questions about our services,
        need assistance with your account, or want to learn more about
        LoonieBit.
      </motion.p>
    </div>
  );
}
