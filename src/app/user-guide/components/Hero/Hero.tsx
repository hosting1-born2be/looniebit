'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import st from './Hero.module.scss';

export function Hero() {
  return (
    <section className={st.layout}>
      <h1 className={st.title}>KYC Verification Process</h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={st.contentLayout}
      >
        <section className={st.contentImgLayout}>
          <Image
            className={st.btcUsd}
            src="/images/user-guide/btc-usd.png"
            alt="btc-usd"
            width={156}
            height={153}
            quality={100}
          />
          <Image
            className={st.btc}
            src="/images/user-guide/btc.png"
            alt="btc"
            width={164}
            height={164}
            quality={100}
          />
          <h2 className={st.subtitle}>Why is KYC Required?</h2>
          <div className={st.ellipse} />
        </section>
        <p className={st.text}>
          As a licensed and regulated platform, LoonieBit is dedicated to
          providing all users with a secure and compliant environment. Our Know
          Your Customer (KYC) procedure is critical to our security measures,
          helping us prevent fraud and criminal activities while safeguarding
          your account. By following KYC protocols, we protect your personal
          information and the integrity of our platform. <br />
          <br /> We require specific documents based on your activity level to
          verify your identity and ensure secure exchanges. The documents vary
          depending on your transaction volume, and our Compliance Team may
          request additional verification if necessary.
        </p>
      </motion.div>
    </section>
  );
}
