"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./CompanyValues.module.scss";

export default function CompanyValues() {
  return (
    <section className={styles.companyValues}>
      <div className={"_container"}>
        <div className={styles.companyValuesContent}>
          <div className={styles.companyValuesContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Values
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our values shape everything we do. They guide our operations and
              interactions with our customers:
            </motion.p>
          </div>
          <div className={styles.companyValuesContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/company/value1.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Security First</h3>
                <p>
                  We prioritize the security of your funds and personal data
                  with cutting-edge security technologies.
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
                  src="/images/company/value2.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Customer-Centric</h3>
                <p>
                  We put our users first, designing features and solutions that
                  meet your needs.
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
                  src="/images/company/value3.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Transparency</h3>
                <p>
                  We believe in being open with our users about everything, from
                  fees to features, ensuring you always know what to expect.
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
                  src="/images/company/value4.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Compliance & Trust</h3>
                <p>
                  As a licensed platform, we adhere to global regulations to
                  ensure your trading experience is both secure and compliant.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.images}
          >
            <Image
              src="/images/company/value.png"
              alt="home"
              width={1110}
              height={300}
              className={styles.image}
              quality={100}
            />
            <Image
              src="/images/company/valueMob.png"
              alt="home"
              width={1110}
              height={300}
              className={styles.imageMobile}
              quality={100}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
