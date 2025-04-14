"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./CompanyStory.module.scss";

export default function CompanyStory() {
  return (
    <section className={styles.companyStory}>
      <div className={"_container"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.companyStoryContent}
        >
          <div className={styles.readyToStartImage}></div>
          <div className={styles.readyToStartContent}>
            <h3>Our Story</h3>
            <div>
              <p>
                LoonieBit was founded with a clear mission: to offer everyone a
                seamless, secure, and transparent cryptocurrency exchange
                experience. We’re proud to provide a platform that supports all
                users — from beginners to experienced traders — while
                maintaining the highest security and compliance standards.
                <br />
                <br />
                As a fully licensed and regulated exchange, LoonieBit bridges
                the gap between traditional finance and cryptocurrency, enabling
                users to easily and securely buy and sell digital assets. Our
                commitment to continuous innovation aims to transform how people
                access and trade crypto, ensuring a smooth and reliable
                experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
