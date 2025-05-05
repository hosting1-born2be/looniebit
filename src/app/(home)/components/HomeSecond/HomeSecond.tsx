"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { LINKS } from '@/shared/lib/constants/constants';
import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from './HomeSecond.module.scss';

export default function HomeSecond() {
  return (
    <section className={styles.homeSecond}>
      <div className={"_container"}>
        <div className={styles.homeSecondContent}>
          <div className={styles.homeSecondContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Start Exchanging in 3 Simple Steps
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Struggling to gain traction, increase conversions, or optimize
              marketing spending? Our experts build holistic, ROI-driven
              strategies designed for long-term success.
            </motion.p>
          </div>
          <Image
            src="/images/home/homeSecond.png"
            alt="home"
            width={1110}
            height={300}
            className={styles.homeSecondContentImage}
            quality={100}
          />
          <Image
            src="/images/home/homeSecondMob.png"
            alt="home"
            width={1110}
            height={300}
            className={styles.homeSecondContentImageMobile}
            quality={100}
          />
          <div className={styles.homeSecondContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span>01</span>
                <h3>Sign Up and Verify Your Profile</h3>
                <p>
                  Register for an profile easily. Once signed up, verify your
                  email to complete the initial step toward joining the
                  LoonieBit community.
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
                <span>02</span>
                <h3>Complete the Profile Verification</h3>
                <p>
                  Complete our straightforward verification process for your
                  security. This step helps us ensure the integrity of our
                  platform and protect your personal information.
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
                <span>03</span>
                <h3>Start Exchanging Without Limits</h3>
                <p>
                  Once your profile is verified, you can exchange
                  cryptocurrencies without restrictions. Enjoy quick, secure,
                  and seamless crypto exchanges with just a few clicks
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.button}
          >
            <Button url={LINKS.SIGN_UP} type="link">
              Create Your Profile Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
