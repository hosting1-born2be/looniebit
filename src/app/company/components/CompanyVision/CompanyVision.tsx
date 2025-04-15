"use client";
import { useEffect, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./CompanyVision.module.scss";

export default function CompanyVision() {
  const element = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const text =
    "LoonieBit aims to lead the digital asset exchange industry by offering innovative solutions that make crypto accessible, secure, and trustworthy for everyone. We are committed to evolving our services and platform, expanding our features, and empowering individuals to make the most of the digital economy.";

  const { scrollYProgress } = useScroll({
    target: element,
    offset: isMobile
      ? ["start 0.9", "start 0.5"]
      : ["start 0.5", "start start"],
  });


  const words = text.split(" ");

  return (
    <section className={styles.companyVision} ref={element}>
      <div className={"_container"}>
        <div className={styles.companyVisionContent}>
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
            <span>Our Vision for the Future</span>
          </motion.div>
          <p className={styles.text}>
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  word={word}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const characters = word.split("");
  const amount = range[1] - range[0];
  const step = amount / word.length;
  return (
    <span className={styles.word}>
      {characters.map((character, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Character
            key={i}
            character={character}
            range={[start, end]}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

const Character = ({
  character,
  range,
  progress,
}: {
  character: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.character}>
      <span className={styles.shadow}>{character}</span>
      <motion.span style={{ opacity }}>{character}</motion.span>
    </span>
  );
};
