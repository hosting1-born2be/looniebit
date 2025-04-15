import type { Metadata } from "next";

import SupportCenterSection from "./components/SupportCenter/SupportCenter";
import SupportFaq from "./components/SupportFaq/SupportFaq";
import SupportHelp from "./components/SupportHelp/SupportHelp";
import SupportHero from "./components/SupportHero/SupportHero";

export const metadata: Metadata = {
  title: "Support Center | Help with Your LoonieBit Account",
  description:
    "Need help using LoonieBit? Visit our Support Center for FAQs, technical assistance, and account guidance from our compliance and customer care teams.",
  openGraph: {
    title: "Support Center | Help with Your LoonieBit Account",
    description: "",
    //images: "",
  },
};

export default function SupportCenter() {
  return (
    <>
      <SupportHero />
      <SupportCenterSection />
      <SupportFaq />
      <SupportHelp />
    </>
  );
}
