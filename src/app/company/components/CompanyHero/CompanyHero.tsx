'use client';
import { motion } from 'framer-motion';

import { LINKS } from '@/shared/lib/constants/constants';
import { fadeInUp } from '@/shared/lib/helpers/animations';
import Button from '@/shared/ui/components/button/Button';

import styles from './CompanyHero.module.scss';

export default function CompanyHero() {
  return (
    <section className={styles.companyHero}>
      <div className={"_container"}>
        <div className={styles.companyHeroContent}>
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
            <span>
              Pioneering secure and transparent crypto exchange solutions
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            About LoonieBit
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            LoonieBit is dedicated to offering a seamless and secure crypto
            exchange experience. We provide a transparent platform for buying
            and selling cryptocurrencies, ensuring that every transaction is
            fast, reliable, and compliant with global regulations.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.button}
          >
            <Button url={LINKS.SIGN_UP} type="link">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
