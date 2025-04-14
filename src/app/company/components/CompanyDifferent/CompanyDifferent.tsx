"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./CompanyDifferent.module.scss";

export default function CompanyDifferent() {
  return (
    <section className={styles.companyDifferent}>
      <div className={"_container"}>
        <div className={styles.companyDifferentContent}>
          <div className={styles.companyDifferentContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              What Makes Us Different?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              LoonieBit isn’t just another crypto exchange. We offer a variety
              of benefits that set us apart
            </motion.p>
          </div>
          <div className={styles.companyDifferentContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/company/dif1.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Seamless Payment Methods</h3>
                <p>
                  Pay easily using credit cards, bank wire transfers, or local
                  payment options.
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
                  src="/images/company/dif2.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>No Hidden Fees</h3>
                <p>
                  Our fee structure is transparent, so you know exactly what
                  you’re paying for.
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
                  src="/images/company/dif3.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Advanced Security Protocols</h3>
                <p>
                  We use encryption technology to protect your data and funds.
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
                  src="/images/company/dif4.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Easy-to-Use Interface</h3>
                <p>
                  Our platform is intuitive and user-friendly whether you’re new
                  to crypto or have been trading for years.
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
                  src="/images/company/dif5.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Exceptional Support</h3>
                <p>
                  Our customer service team can always assist you, ensuring a
                  hassle-free experience.
                </p>
              </motion.div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
