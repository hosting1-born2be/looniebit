"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "./HomeWhy.module.scss";

export default function HomeWhy() {
  return (
    <section className={styles.homeWhy}>
      <div className={"_container"}>
        <div className={styles.homeWhyContent}>
          <div className={styles.homeWhyContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Why Choose LoonieBit?
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
          <div className={styles.homeWhyContentRow}>
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
                />
                <h3>Top-Level Security</h3>
                <p>
                  At LoonieBit, we prioritize the safety of your crypto
                  exchanges. Our platform uses state-of-the-art encryption and
                  security measures to protect your transactions.
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
                />
                <h3>Clear and Transparent Fees</h3>
                <p>
                  Transparency is key. You won’t find any hidden charges or
                  surprise fees here. Always know exactly what you’re paying for
                  so you can confidently exchange.
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
                />
                <h3>User-Friendly Experience</h3>
                <p>
                  Whether you’re a crypto enthusiast or new to the space,
                  LoonieBit is designed to make exchanging cryptocurrencies
                  simple, intuitive, and efficient. Our platform is crafted to
                  meet the needs of all users.
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
                />
                <h3>24/7 Customer Support</h3>
                <p>
                  Our dedicated support team is available around the clock to
                  assist with any questions or concerns. Whether you need help
                  with an exchange or have a technical inquiry, we’re here
                  anytime.
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
            <Button url="/company" type="link">
              About the Company
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
