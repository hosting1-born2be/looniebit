"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { LINKS } from '@/shared/lib/constants/constants';
import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "./SupportFaq.module.scss";

export default function SupportFaq() {
  return (
    <section className={styles.supportFaq}>
      <div className={"_container"}>
        <div className={styles.supportFaqContent}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            FAQ
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Got a question? You might find the answer right here in our
            Frequently Asked Questions section. Browse through our knowledge
            base for helpful articles, guides, and answers to the most common
            inquiries from our users.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.button}
          >
            <Button url={LINKS.FAQ} type="link">
              Explore the FAQ
            </Button>
          </motion.div>
        </div>
      </div>
      <Image
        src="/images/support/faqMain.png"
        width={350}
        height={250}
        alt="faqMain"
        className={styles.faqMain}
        quality={100}
      />
      <Image
        src="/images/support/coinRight.png"
        width={150}
        height={150}
        alt="coinRight"
        className={styles.coinRight}
        quality={100}
      />
      <Image
        src="/images/support/coinLeft.png"
        width={150}
        height={150}
        alt="coinLeft"
        className={styles.coinLeft}
        quality={100}
        />
      <Image
        src="/images/support/coinBottom.png"
        width={120}
        height={107}
        alt="coinBottom"
        className={styles.coinBottom}
        quality={100}
      />
    </section>
  );
}
