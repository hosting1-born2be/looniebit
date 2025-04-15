'use client';

import Image from 'next/image';

import st from './KycForm.module.scss';

export function KycForm() {
  return (
    <section className={st.layout}>
      <h2 className={st.title}>KYC Forms</h2>
      <p className={st.text}>
        To finalize your identity verification, you’ll need to fill out a couple
        of forms:
      </p>
      <section className={st.formsLayout}>
        <section className={st.formContent}>
          <section className={st.form}>
            <div>
              <h5 className={st.formTitle}>Form 501</h5>
              <p className={st.formDesc}>
                Cryptocurrency Purchase Confirmation
              </p>
            </div>
            <Image
              src="/images/user-guide/sphere-01.png"
              alt="sphere"
              width={256}
              height={185}
            />
          </section>
          <section className={st.form}>
            <div>
              <h5 className={st.formTitle}>Form 501</h5>
              <p className={st.formDesc}>
                Cryptocurrency Purchase Confirmation
              </p>
            </div>
            <Image
              src="/images/user-guide/arrows.png"
              alt="sphere"
              width={242}
              height={194}
            />
          </section>
        </section>
        <p className={st.annotation}>
          These forms will be sent to your registered email for electronic
          signing. Alternatively, you can print, sign, scan, and return them to
          the Compliance Team via email.
        </p>
      </section>
    </section>
  );
}
