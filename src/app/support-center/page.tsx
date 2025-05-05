import type { Metadata } from "next";

import SupportCenterSection from "./components/SupportCenter/SupportCenter";
import SupportFaq from "./components/SupportFaq/SupportFaq";
import SupportHelp from "./components/SupportHelp/SupportHelp";
import SupportHero from "./components/SupportHero/SupportHero";

export const metadata: Metadata = {
  title: "Support Center | Help with Your LoonieBit Profile",
  description:
    "Need help using LoonieBit? Visit our Support Center for FAQs, technical assistance, and profile guidance from our compliance and customer care teams.",
  openGraph: {
    title: "Support Center | Help with Your LoonieBit Profile",
    description: "",
    images: "https://looniebit.com/images/meta.png",
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
