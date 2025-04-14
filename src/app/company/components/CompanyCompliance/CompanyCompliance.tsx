"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./CompanyCompliance.module.scss";

export default function CompanyCompliance() {
  return (
    <section className={styles.companyCompliance}>
      <div className={"_container"}>
        <div className={styles.companyComplianceContent}>
          <div className={styles.companyComplianceContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Commitment to Compliance
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We understand that security and regulation are paramount in the
              world of cryptocurrency. That’s why LoonieBit strictly follows
              industry regulations:
            </motion.p>
          </div>
          <div className={styles.companyComplianceContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span>01</span>
                <h3>AML (Anti-Money Laundering)</h3>
                <p>
                  We implement rigorous AML policies to prevent illicit
                  activities and ensure the safety of our platform.
                </p>
              </motion.div>
            </div>
            <div className={styles.empty1}></div>
            <div className={styles.empty2}></div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span>02</span>
                <h3>KYC (Know Your Customer)</h3>
                <p>
                  We verify the identity of every user to maintain a secure
                  exchange environment and protect against fraud.
                </p>
              </motion.div>
            </div>
            <div className={styles.empty3}></div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span>03</span>
                <h3>KYT (Know Your Transaction)</h3>
                <p>
                  Our system actively monitors transactions to detect unusual
                  activities, ensuring further security for crypto assets.
                </p>
              </motion.div>
            </div>

            <div className={styles.empty4}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
