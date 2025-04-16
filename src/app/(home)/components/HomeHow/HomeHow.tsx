"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "./HomeHow.module.scss";

export default function HomeHow() {
  return (
    <section className={styles.homeHow}>
      <div className={"_container"}>
        <div className={styles.homeHowContent}>
          <div className={styles.homeHowContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              How We Keep You Safe
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              At LoonieBit, we take security seriously. Here’s how we protect
              your exchanges
            </motion.p>
          </div>
          <div className={styles.homeHowContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/home/why1.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Protected Transactions</h3>
                <p>
                  Our platform uses multi-layered security protocols to protect
                  every exchange, ensuring your funds and personal data remain
                  safe.
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
                  src="/images/home/why2.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Comprehensive Data Security</h3>
                <p>
                  We safeguard your personal information with advanced
                  encryption methods. Your sensitive data is securely stored and
                  managed with the highest care.
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
                  src="/images/home/why3.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Mandatory KYC Verification</h3>
                <p>
                  Every user must complete KYC (Know Your Customer)
                  verification. This ensures we maintain a trustworthy
                  environment and protect against fraud, creating a secure
                  platform.
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
                  src="/images/home/why4.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Commitment to Compliance</h3>
                <p>
                  We comply with all relevant laws and regulations, including
                  Anti-Money Laundering (AML) and KYC protocols. Our platform is
                  built to be secure, reliable, and compliant with industry
                  standards.
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
            <Button url="/user-guide" type="link">
              Get Started With the User Guide
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
