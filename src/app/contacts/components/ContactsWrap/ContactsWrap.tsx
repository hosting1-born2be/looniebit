"use client";

import ContactsDetails from "../ContactsDetails/ContactsDetails";
import ContactsHelp from "../ContactsHelp/ContactsHelp";
import ContactsHero from "../ContactsHero/ContactsHero";
import ContactsSocial from "../ContactsSocial/ContactsSocial";
import styles from "./ContactsWrap.module.scss";

export default function ContactsWrap() {
  return (
    <section className={styles.contactsWrap}>
      <div className={"_container"}>
        <div className={styles.contactsWrapContent}>
          <ContactsHero />
          <ContactsDetails />
          <ContactsSocial />
          <ContactsHelp />
        </div>
      </div>
    </section>
  );
}
