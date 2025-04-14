"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "./InsightsHero.module.scss";

export default function InsightsHero() {
  return (
    <section className={styles.insightsHero}>
      <div className={"_container"}>
        <div className={styles.insightsHeroContent}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.label}
          >
            <div className={styles.labelIcon}>
              <span></span>
              <span></span>
            </div>
            <span>Insights</span>
          </motion.div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Stay Informed, Stay Ahead
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Here, we provide expert insights, in-depth articles, and up-to-date
            content to help you navigate the evolving digital asset landscape.
            Whether you’re a beginner or a seasoned trader, our goal is to keep
            you informed and prepared for the future of finance.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.button}
          >
            <Button url="#" type="link">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
