import type { Metadata } from "next";

import CompanyCompliance from "./components/CompanyCompliance/CompanyCompliance";
import CompanyComunity from "./components/CompanyComunity/CompanyComunity";
import CompanyDifferent from "./components/CompanyDifferent/CompanyDifferent";
import CompanyHero from "./components/CompanyHero/CompanyHero";
import CompanyServices from "./components/CompanyServices/CompanyServices";
import CompanyStarted from "./components/CompanyStarted/CompanyStarted";
import CompanyStory from "./components/CompanyStory/CompanyStory";
import CompanyValues from "./components/CompanyValues/CompanyValues";
import CompanyVision from "./components/CompanyVision/CompanyVision";

export const metadata: Metadata = {
  title: "About LoonieBit | Regulated & Transparent Crypto Exchange",
  description:
    "Learn more about LoonieBit’s mission, licensing, and commitment to providing a secure, transparent, and compliant crypto trading environment.",
  openGraph: {
    title: "About LoonieBit | Regulated & Transparent Crypto Exchange",
    description:
      "Learn more about LoonieBit’s mission, licensing, and commitment to providing a secure, transparent, and compliant crypto trading environment.",
    images: "https://looniebit.com/images/meta.png",
  },
};

export default function Company() {
  return (
    <>
      <CompanyHero />
      <CompanyStory />
      <CompanyDifferent />
      <CompanyValues />
      <CompanyServices />
      <CompanyVision />
      <CompanyCompliance />
      <CompanyComunity />
      <CompanyStarted />
    </>
  );
}
