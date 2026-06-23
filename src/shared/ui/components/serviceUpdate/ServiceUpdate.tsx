import styles from './ServiceUpdate.module.scss';

export default function ServiceUpdate() {
  return (
    <section className={styles.serviceUpdate}>
      <div className={styles.grid} aria-hidden />
      <div className={styles.gradient} aria-hidden />

      <div className={styles.content}>
        <div className={styles.group}>
          <h1 className={styles.title}>Thank You for Your Trust</h1>

          <p className={styles.lead}>
            Our exchange platform has now ceased its operations and is no longer
            providing services.
          </p>

          <p className={styles.text}>
            We would like to sincerely thank all clients who have used our
            platform over the years. Your trust and support have been greatly
            appreciated.
            <br />
            <br />
            If you require access to account-related information, orders records,
            or assistance regarding your previous activity on the platform,
            please contact us at:{' '}
            <a href="mailto:support@looniebit.com">support@looniebit.com</a>
            <br />
            <br />
            Requests will be handled in accordance with applicable legal
            obligations, regulatory requirements, and data retention policies.
          </p>
        </div>

        <p className={styles.outro}>Thank you for being part of our journey.</p>
      </div>
    </section>
  );
}
