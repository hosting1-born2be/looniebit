import type { Metadata } from "next";

import ContactsWrap from "./components/ContactsWrap/ContactsWrap";

export const metadata: Metadata = {
  title: "Contact LoonieBit | Get in Touch with Our Crypto Support Team",
  description:
    "Reach out to the LoonieBit team for help with account verification, trading, or security. We’re available to support you at every step.",
  openGraph: {
    title: "Contact LoonieBit | Get in Touch with Our Crypto Support Team",
    description:
      "Reach out to the LoonieBit team for help with account verification, trading, or security. We’re available to support you at every step.",
    images: "https://looniebit.com/images/meta.png",
  },
};

export default function Contacts() {
  return (
    <>
      <ContactsWrap />
    </>
  );
}
