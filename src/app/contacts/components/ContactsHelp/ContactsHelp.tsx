"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "../ContactsWrap/ContactsWrap.module.scss";

export default function ContactsHelp() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.readyToStart}
    >
      <div className={styles.readyToStartContent}>
        <div>
          <h3>Need Help?</h3>
          <p>
            If you need further assistance or have questions, visit our Support
            Center. Our support team is here to assist you with anything you
            need.
          </p>
        </div>
        <Button url="#" type="link">
          Go to Support Center
        </Button>
      </div>
      <div className={styles.readyToStartImage}></div>
    </motion.div>
  );
}
