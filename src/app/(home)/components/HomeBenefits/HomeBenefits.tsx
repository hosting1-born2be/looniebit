"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "./HomeBenefits.module.scss";

export default function HomeBenefits() {
  return (
    <section className={styles.homeBenefits}>
      <div className={"_container"}>
        <div className={styles.homeBenefitsContent}>
          <div className={styles.homeBenefitsLeft}>
            <div className={styles.homeBenefitsContentTop}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Benefits of Exchanging with LoonieBit
              </motion.h2>
            </div>
            <Image
              src="/images/home/benefit.png"
              alt="value"
              width={555}
              height={691}
            />
          </div>

          <div className={styles.homeBenefitsContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/home/benefit1.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Limitless Crypto Exchanges</h3>
                <p>
                  Exchange your favorite cryptocurrencies with no restrictions.
                  We offer endless possibilities to diversify your digital
                  assets, whether buying, selling, or exchanging.
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
                  src="/images/home/benefit2.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Instant Transactions</h3>
                <p>
                  All your crypto exchanges are processed instantly, so you
                  don’t have to wait. Speed and efficiency are at the core of
                  our service.
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
                  src="/images/home/benefit3.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Global Access</h3>
                <p>
                  LoonieBit is a global platform that allows users worldwide to
                  access our services. No matter your location, you can easily
                  start exchanging crypto.
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
                  src="/images/home/benefit4.svg"
                  alt="why"
                  width={48}
                  height={48}
                />
                <h3>Wide Variety of Cryptocurrencies</h3>
                <p>
                  We support many cryptocurrencies, so you can easily exchange
                  popular and emerging digital assets. From Bitcoin to Ethereum
                  and more, we’ve got you covered.
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
            <Button url="#" type="link">
              Sign Up Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
