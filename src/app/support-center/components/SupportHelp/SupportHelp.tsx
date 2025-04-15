"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "./SupportHelp.module.scss";

export default function SupportHelp() {
  return (
    <section className={styles.supportHelp}>
      <div className={"_container"}>
        <div className={styles.supportHelpContent}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.readyToStart}
          >
            <div className={styles.readyToStartContent}>
              <div>
                <h3>Still Need Help?</h3>
                <p>
                  If you can’t find the answers you’re looking for or need
                  further assistance, don’t hesitate to reach out. Our support
                  team is here to help ensure you have a smooth experience.
                </p>
              </div>
              <Button url="/contacts" type="link">
                Contact Us
              </Button>
            </div>
            <div className={styles.readyToStartImage}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
