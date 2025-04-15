'use client';
import { motion } from 'framer-motion';

import { LINKS } from '@/shared/lib/constants/constants';
import { fadeInUp } from '@/shared/lib/helpers/animations';
import Button from '@/shared/ui/components/button/Button';

import styles from './HomeHero.module.scss';

export default function HomeHero() {
  return (
    <section className={styles.homeHero}>
      <div className={'_container'}>
        <div className={styles.homeHeroContent}>
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
            <span>Welcome to LoonieBit</span>
          </motion.div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            The Future of Crypto Exchange
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Embrace the new era of digital finance. Leave behind traditional
            money and step into the world of crypto. LoonieBit provides a fast,
            secure, and reliable way to exchange your favorite cryptocurrencies.
            Experience seamless exchanges with unmatched convenience and
            security right at your fingertips.
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
