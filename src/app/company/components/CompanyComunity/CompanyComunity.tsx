"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./CompanyComunity.module.scss";

export default function CompanyComunity() {
  return (
    <section className={styles.companyComunity}>
      <div className={"_container"}>
        <div className={styles.companyComunityContent}>
          <div className={styles.companyComunityLeft}>
            <div className={styles.companyComunityContentTop}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Building a Crypto Community
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                At LoonieBit, we believe in the power of community. Our platform
                is more than just a place to exchange cryptocurrencies — it’s a
                space where users can connect, learn, and grow.
              </motion.p>
            </div>
            <Image
              src="/images/company/comunity.png"
              alt="value"
              width={555}
              height={417}
            />
          </div>

          <div className={styles.companyComunityContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/company/comunity1.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Educational Resources</h3>
                <p>
                  Whether you’re new to crypto or a seasoned trader, we provide
                  tutorials, blogs, and guides to help you succeed.
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
                  src="/images/company/comunity2.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Customer Support</h3>
                <p>
                  Our team can assist you with any inquiries or issues. We’re
                  available 24/7 and offer reliable and friendly help.
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
                  src="/images/company/comunity3.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Feedback-Driven Growth</h3>
                <p>
                  We listen to our users. Your feedback helps shape our platform
                  and ensures we constantly improve to meet your needs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
