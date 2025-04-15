'use client';

import { cn } from '@/shared/lib/styles/utils';

import st from './DocSubmissionOptions.module.scss';

export function DocSubmissionOptions() {
  return (
    <section className={st.layout}>
      <h2 className={st.title}>Document Submission Options</h2>
      <p className={st.subtitle}>
        You can easily upload your verification documents in two ways:
      </p>
      <section className={st.tables}>
        <section className={st.formLayout}>
          <section className={st.formContent}>
            <div className={st.formTitleLayout}>
              <span className={st.num}>01</span>
              <h5 className={st.formTitle}>Upload via your account:</h5>
            </div>
            <p className={st.formText}>
              Simply use the “Upload Documents” option in your account
              dashboard.
            </p>
          </section>
          <section className={st.formContent}>
            <div className={st.formTitleLayout}>
              <span className={st.num}>02</span>
              <h5 className={st.formTitle}>Send via email:</h5>
            </div>
            <p className={st.formText}>
              Forward your documents to EMAIL from your registered email.
            </p>
          </section>
        </section>
        <section className={cn(st.formLayout, st.guidelineLayout)}>
          <h4 className={st.formHeading}>Important Guidelines</h4>
          <p className={st.formDesc}>
            Documents must be in clear colour copies (scans or photos).
          </p>
          <p className={st.formSubHeading}>We do not accept:</p>
          <ul className={st.formList}>
            <li>Fake, altered, or stolen identification</li>
            <li>Blurry, overexposed, or cropped images</li>
            <li>Expired documents or copies of copies</li>
          </ul>
        </section>
      </section>
    </section>
  );
}
