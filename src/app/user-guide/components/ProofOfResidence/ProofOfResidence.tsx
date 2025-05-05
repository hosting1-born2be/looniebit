'use client';

import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { cn } from '@/shared/lib/styles/utils';

import st from './ProofOfResidence.module.scss';

export function ProofOfResidence() {
  return (
    <section className={st.layout}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={st.title}
      >
        <h2>Identity Verification</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={cn(st.tableBody, st.mobileTableBorderBottom)}
      >
        <section className={st.tableCell}>
          <span className={st.num}>01</span>
          <h4 className={st.tableHeading}>What is it?</h4>
          <p className={st.text}>
            Identity verification requires a government-issued document that
            proves your identity.
          </p>
        </section>
        <section className={st.tableCell}>
          <span className={st.num}>02</span>
          <h4 className={st.tableHeading}>Acceptable Identity Documents</h4>
          <ul className={cn(st.text, st.list)}>
            <li>Passport</li>
            <li>National ID Card</li>
            <li>Driver’s License</li>
            <li>Residence Permit (with country of origin ID)</li>
            <li>
              Temporary Identity Permits (if they are considered official IDs)
            </li>
          </ul>
        </section>
        <section className={st.tableCell}>
          <span className={st.num}>03</span>
          <h4 className={st.tableHeading}>Requirements</h4>
          <ul className={cn(st.text, st.list)}>
            <li>The document must be current and not expired.</li>
            <li>It should display your full name.</li>
          </ul>
        </section>
        <section className={st.tableCell}>
          <span className={st.num}>04</span>
          <h4 className={st.tableHeading}>How to Submit</h4>
          <ul className={cn(st.text, st.list)}>
            <li>A colour photo or scan of the full document is required.</li>
            <li>The document must include both sides in the scan.</li>
          </ul>
        </section>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={st.title}
      >
        <h2>Proof of Residence</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={cn(st.tableBody, st.tableBorderBottom)}
      >
        <section className={st.tableCell}>
          <span className={st.numGreen}>01</span>
          <h4 className={st.tableHeading}>What is it?</h4>
          <p className={st.text}>
            Proof of residence is an official document that shows your current
            home address.
          </p>
        </section>
        <section className={st.tableCell}>
          <span className={st.numGreen}>02</span>
          <h4 className={st.tableHeading}>Accepted Documents</h4>
          <ul className={cn(st.text, st.list)}>
            <li>Passport</li>
            <li>National ID Card</li>
            <li>Driver’s License</li>
            <li>Residence Permit (with country of origin ID)</li>
            <li>
              Temporary Identity Permits (if they are considered official IDs)
            </li>
          </ul>
        </section>
        <section className={st.tableCell}>
          <span className={st.numGreen}>03</span>
          <h4 className={st.tableHeading}>Requirements</h4>
          <ul className={cn(st.text, st.list)}>
            <li>The document must be dated within the past three months.</li>
            <li>
              It must clearly show your full name and current address (no P.O.
              Boxes)
            </li>
          </ul>
        </section>
        <section className={st.tableCell}>
          <span className={st.numGreen}>04</span>
          <h4 className={st.tableHeading}>How to Submit</h4>
          <ul className={cn(st.text, st.list)}>
            <li>A colour scan or photo of the document is needed.</li>
            <li>The document should include both sides.</li>
            <li>
              The name and address should match the information provided in your
              profile.
            </li>
          </ul>
        </section>
      </motion.div>
    </section>
  );
}
