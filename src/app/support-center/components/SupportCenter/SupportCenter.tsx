"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { LINKS } from '@/shared/lib/constants/constants';
import { fadeInUp } from '@/shared/lib/helpers/animations';
import Button from '@/shared/ui/components/button/Button';

import styles from './SupportCenter.module.scss';

export default function SupportCenter() {
  return (
    <section className={styles.supportCenter}>
      <div className={"_container"}>
        <div className={styles.supportCenterContent}>
          <div className={styles.supportCenterContentTop}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Support Center
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Access the Support Portal for a streamlined way to get the help
              you need. Everything you need is in one place, from submitting
              tickets to tracking their status. This section is your starting
              point for all support-related inquiries. Whether you’re submitting
              a new ticket, checking the status of an existing one, or browsing
              our knowledge base, the Support Portal has you covered.
            </motion.p>
          </div>
          <div className={styles.supportCenterContentRow}>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div>
                  <Image
                    src="/images/support/icon1.svg"
                    alt="why"
                    width={48}
                    height={48}
                    quality={100}
                  />
                  <h3>Submit a Ticket</h3>
                  <p>
                    Need personalized help? Submit a support ticket to our
                    expert team. Just fill out the form below, and one of our
                    team members will reply promptly. We’re here to assist with
                    anything from profile issues to technical questions.
                  </p>
                </div>
                <Button url={LINKS.SUPPORT} type="link" target="_blank">
                  Submit Your Ticket
                </Button>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div>
                  <Image
                    src="/images/support/icon2.svg"
                    alt="why"
                    width={48}
                    height={48}
                    quality={100}
                  />
                  <h3>Track a Ticket</h3>
                  <p>
                    Already submitted a ticket? No problem! You can easily track
                    the progress of your request by entering your email address
                    and ticket number. Stay informed on the status and
                    resolution of your issue.
                  </p>
                </div>
                <Button url={LINKS.SUPPORT} type="link" target="_blank">
                  Track Your Ticket
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
