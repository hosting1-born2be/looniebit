'use client';

import st from './ChecklistForKYC.module.scss';

export function ChecklistForKYC() {
  return (
    <section className={st.layout}>
      <h2 className={st.title}>Checklist for KYC Document Submission</h2>
      <section className={st.grid}>
        <div className={st.gridCell}>
          <span className={st.num}>01</span>
          <p>
            Submit documents by uploading them directly or sending them to our
            Compliance email.
          </p>
        </div>
        <div className={st.gridCell}>
          <span className={st.num}>03</span>
          <p>
            Documents accepted: Valid proof of identity, proof of address, and
            any relevant forms.
          </p>
        </div>
        <div className={st.gridCell}>
          <span className={st.num}>02</span>
          <p>
            Only clear, colour scans or photos of the documents will be
            accepted.
          </p>
        </div>
        <div className={st.gridCell}>
          <span className={st.num}>04</span>
          <p>
            Documents not accepted: Any blurry, cropped, overexposed images or
            expired documents.
          </p>
        </div>
      </section>
    </section>
  );
}
