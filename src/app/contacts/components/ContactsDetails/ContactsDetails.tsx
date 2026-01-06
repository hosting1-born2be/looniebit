'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { WEBSITE_EMAIL } from '@/shared/lib/constants/constants';
import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from '../ContactsWrap/ContactsWrap.module.scss';

export default function ContactsDetails() {
  return (
    <div className={styles.contactsDetailsContent}>
      <div className={styles.item}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Our Registered Office</h2>
          <p>For official correspondence, please use our registered address:</p>
          <Link href="#" className={styles.address}>
            <Image
              src="/images/contacts/location.svg"
              alt="map"
              width={20}
              height={20}
              quality={100}
            />
            <span>
            Lviv st. 21A, LT-09313, Vilnius, Lithuania
            </span>
          </Link>
        </motion.div>
      </div>
      <div className={styles.item}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Reach Us via Email</h2>
          <p>Have a question or need support? Send us an email at:</p>
          <Link href={`mailto:${WEBSITE_EMAIL}`} className={styles.address}>
            <Image
              src="/images/contacts/email.svg"
              alt="map"
              width={20}
              height={20}
              quality={100}
            />
            <span>{WEBSITE_EMAIL}</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
