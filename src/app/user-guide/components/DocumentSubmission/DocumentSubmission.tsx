'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { cn } from '@/shared/lib/styles/utils';

import st from './DocumentSubmission.module.scss';

export function DocumentSubmission() {
  return (
    <section className={st.layout}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={st.titleLayout}
      >
        <h2 className={st.title}>Document Submission Requirements</h2>
        <p className={st.text}>
          At LoonieBit, we categorize users into three levels based on their
          transaction volume. The required documentation will differ for each
          level. Depending on the situation, our Compliance Team may also ask
          for extra documents.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={st.bodyLayout}
      >
        <Image
          className={st.sphereImg}
          src="/images/user-guide/sphere.png"
          alt="sphere"
          width={187}
          height={189}
        />
        <section className={st.tableRow}>
          <h3 className={st.level}>Level 1</h3>
          <div className={st.tableValue}>
            <p className={st.tablePrice}>
              For transactions between €200 and €5000
            </p>
            <span className={st.tableList}>
              <p>Required Documents:</p>
              <ul>
                <li>Identity Verification</li>
                <li>Selfie with Liveness Test</li>
              </ul>
            </span>
          </div>
        </section>
        <section className={cn(st.tableRow, st.tableRowWithSphere)}>
          <h3 className={st.level}>Level 2</h3>
          <div className={st.tableValue}>
            <p className={st.tablePrice}>
              For transactions between €5001 and €75000
            </p>
            <span className={st.tableList}>
              <p>Required Documents:</p>
              <ul>
                <li>All documents from Level 1</li>
                <li>SProof of Residence</li>
                <li>Form 501 (Cryptocurrency Purchase Confirmation)</li>
              </ul>
            </span>
          </div>
        </section>
        <section className={st.tableRow}>
          <h3 className={st.level}>Level 3</h3>
          <div className={st.tableValue}>
            <p className={st.tablePrice}>For transactions above €75000</p>
            <span className={st.tableList}>
              <p>Required Documents:</p>
              <ul>
                <li>All documents from Level 1 and Level 2</li>
                <li>Form 502 (Request for Advanced Limits)</li>
                <li>Source of Funds Verification</li>
                <li>Video Call Verification</li>
              </ul>
            </span>
          </div>
        </section>
      </motion.div>
    </section>
  );
}
