"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./CompanyServices.module.scss";

export default function CompanyServices() {
  return (
    <section className={styles.companyServices}>
      <div className={"_container"}>
        <div className={styles.companyServicesContent}>
          <div className={styles.companyServicesContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Services
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              LoonieBit offers an array of services designed to help <br />
              you engage with the crypto world with ease:
            </motion.p>
          </div>
          <div className={styles.companyServicesContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/company/service1.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Buy and Sell Cryptocurrencies</h3>
                <p>
                  Effortlessly exchange top cryptocurrencies like Bitcoin,
                  Ethereum, etc.
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
                  src="/images/company/service2.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Instant Transactions</h3>
                <p>
                  Enjoy fast transaction speeds, so you don’t have to wait
                  around.
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
                  src="/images/company/service3.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Secure Wallet Solutions</h3>
                <p>
                  Our integrated and secure wallet system keeps your digital
                  assets safe.
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
                  src="/images/company/service4.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Global Accessibility</h3>
                <p>
                  Available to users worldwide, LoonieBit ensures that crypto is
                  accessible to everyone.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
