"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { LINKS } from '@/shared/lib/constants/constants';
import { fadeInUp } from '@/shared/lib/helpers/animations';
import Button from '@/shared/ui/components/button/Button';

import styles from './HomeJourney.module.scss';

export default function HomeJourney() {
  return (
    <section className={styles.homeJourney}>
      <div className={"_container"}>
        <div className={styles.homeJourneyContent}>
          <div className={styles.homeJourneyContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Your Journey with LoonieBit Starts Here
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Marketifire creates scalable marketing solutions that help
              businesses generate leads, nurture customers, and drive higher
              lifetime value.
            </motion.p>
          </div>
          <div className={styles.homeJourneyContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/home/journey1.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Secure Exchanges</h3>
                <p>
                  Our platform employs advanced security systems that protect
                  every exchange you make. Each transaction is carefully
                  safeguarded, ensuring that your crypto exchanges are fast and
                  secure. You can trade with peace of mind, knowing your
                  transactions are safe.
                </p>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/home/journey2.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Personalized Data Protection</h3>
                <p>
                  Your personal information is safeguarded using the latest
                  encryption technologies, ensuring that your data remains
                  private and secure at all times. We take every step necessary
                  to protect sensitive information, offering you complete
                  confidence when exchanging crypto on our platform.
                </p>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/home/journey3.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>KYC Verification</h3>
                <p>
                  Users must undergo KYC (Know Your Customer) verification to
                  ensure a safe and legitimate exchange environment. This
                  process helps us verify users’ identities, prevent fraud,
                  maintain high security, and fully comply with global
                  regulatory standards.
                </p>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/home/journey4.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Compliance with Industry Standards</h3>
                <p>
                  We fully adhere to all relevant regulations to provide a
                  secure and legal trading environment. Our commitment to
                  compliance ensures that every user’s experience is safe,
                  transparent, and in line with the latest industry standards,
                  giving you the peace of mind to exchange crypto confidently.
                </p>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/home/journey5.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Expert Customer Support</h3>
                <p>
                  At LoonieBit, we believe in building a supportive community.
                  Our dedicated customer support team is available 24/7 to
                  assist you with any questions or concerns. Whether you are a
                  beginner or an expert, we’re always here to ensure you have
                  the best possible experience with our platform.
                </p>
              </motion.div>
            </div>
            <div>
              <Button url="/contacts" type="link">
                Contact Us Today
              </Button>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.readyToStart}
          >
            <div className={styles.readyToStartContent}>
              <div>
                <h3>Ready to Start Exchanging?</h3>
                <p>
                  The future of finance is here. LoonieBit makes it easy to
                  exchange cryptocurrencies securely, quickly, and easily.
                </p>
              </div>
              <Button url={LINKS.SIGN_UP} type="link">
                Create an Account and Start Exchanging!
              </Button>
            </div>
            <div className={styles.readyToStartImage}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
