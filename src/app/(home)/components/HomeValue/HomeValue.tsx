"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "./HomeValue.module.scss";

export default function HomeValue() {
  return (
    <section className={styles.homeValue}>
      <div className={"_container"}>
        <div className={styles.homeValueContent}>
          <div className={styles.homeValueContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Core Values
            </motion.h2>
          </div>
          <Image
            src="/images/home/valueBack.svg"
            alt="value"
            width={1110}
            height={150}
            className={styles.homeValueBack}
            quality={100}
          />
          <Image
            src="/images/home/valueBackMob.svg"
            alt="value"
            width={1110}
            height={100}
            className={styles.homeValueBackMobile}
            quality={100}
          />
          <div className={styles.homeValueContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image
                  src="/images/home/value1.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Uncompromising Security</h3>
                <p>
                  Security is at the forefront of everything we do. Our
                  multi-layered protection ensures your assets and personal
                  information are safe, allowing you to exchange crypto with
                  peace of mind.
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
                  src="/images/home/value2.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Seamless Experience</h3>
                <p>
                  We’ve designed LoonieBit to be as intuitive as possible. No
                  complicated steps – just a clean, easy-to-use platform for
                  your exchanges.
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
                  src="/images/home/value3.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Absolute Transparency</h3>
                <p>
                  We believe in being open. You’ll always know exactly what
                  you’re paying and why, with no hidden fees or confusing terms.
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
                  src="/images/home/value4.svg"
                  alt="why"
                  width={48}
                  height={48}
                  quality={100}
                />
                <h3>Excellence in Customer Support</h3>
                <p>
                  Our team is committed to offering outstanding support whenever
                  you need it. We’re just a click away to assist with anything,
                  24/7.
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
            <Button url="/insights" type="link">
              Explore Insights
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
