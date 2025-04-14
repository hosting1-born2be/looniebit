"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "./CompanyStarted.module.scss";

export default function CompanyStarted() {
  return (
    <section className={styles.сompanyStarted}>
      <div className={"_container"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.readyToStart}
        >
          <div className={styles.readyToStartContent}>
            <div>
              <h3>Ready to Start Exchanging?</h3>
              <p>
                Join LoonieBit today and experience a more innovative way to
                exchange crypto. Our platform is easy to use, secure, and ready
                for you to start your digital asset journey.
              </p>
            </div>
            <Button url="#" type="link">
              Sign Up and Begin Your Crypto Journey
            </Button>
          </div>
          <div className={styles.readyToStartImage}></div>
        </motion.div>
      </div>
    </section>
  );
}
