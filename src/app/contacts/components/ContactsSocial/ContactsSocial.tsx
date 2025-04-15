"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
} from "@/shared/lib/constants/constants";
import { fadeInUp } from "@/shared/lib/helpers/animations";
import Facebook from "@/shared/ui/icons/socials/Facebook";
import Instagram from "@/shared/ui/icons/socials/Instagram";
import Youtube from "@/shared/ui/icons/socials/Youtube";

import styles from "../ContactsWrap/ContactsWrap.module.scss";

export default function ContactsSocial() {
  return (
    <div className={styles.contactsSocialContent}>
      <div className={styles.contactsSocialContentHeader}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Follow Us on Social Media
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Stay connected and get the latest updates by following us on social
          media:
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.socials}
        >
          <Link href={YOUTUBE_URL} target="_blank">
            <Youtube /> YouTube
          </Link>
          <Link href={FACEBOOK_URL} target="_blank">
            <Facebook /> Facebook
          </Link>
          <Link href={INSTAGRAM_URL} target="_blank">
            <Instagram /> Instagram
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={styles.images}
      >
        <Image
          src="/images/contacts/social.png"
          alt="contactsSocial"
          width={1110}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/contacts/socialMob.png"
          alt="contactsSocial"
          width={1110}
          height={300}
          className={styles.imageMob}
        />
      </motion.div>
    </div>
  );
}
