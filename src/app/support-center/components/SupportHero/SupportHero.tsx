"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./SupportHero.module.scss";

export default function SupportHero() {
  return (
    <section className={styles.supportHero}>
      <div className={"_container"}>
        <div className={styles.supportHeroContent}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            How Can We Assist You Today?
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Welcome to the LoonieBit Support Center!
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our dedicated team is here to provide you the help and guidance you
            need. Whether you have a question or an issue or need assistance
            with your account, we’re here to ensure you have the best experience
            possible.
          </motion.p>
        </div>
      </div>
      <div className={styles.images}>
        <Image
          src="/images/support/hero.png"
          width={727}
          height={541}
          alt="hero2"
          quality={100}
        />
      </div>
    </section>
  );
}
