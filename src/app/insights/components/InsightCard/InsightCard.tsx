"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Arrow from "@/shared/ui/icons/arrow/arrow";

import styles from "./InsightCard.module.scss";
import type { Insight } from "@/features/insights/types";

export default function InsightCard({ insight }: { insight: Insight }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className={styles.insightCard}>
        <div>
          <Link
            href={`/insights/${insight.slug}`}
            className={styles.insightCardImage}
          >
            <Image
              src={insight.imageUrl ?? "/images/insights/article1.png"}
              alt={insight.title}
              width={555}
              height={212}
            />
          </Link>
          <div className={styles.insightCardContent}>
            <h3>{insight.title}</h3>
            <p>{insight.excerpt_inner}</p>
          </div>
        </div>
        <Link
          href={`/insights/${insight.slug}`}
          className={styles.insightCardLink}
        >
          Read Now
          <Arrow />
        </Link>
      </div>
    </motion.div>
  );
}
