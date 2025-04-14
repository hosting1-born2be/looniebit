import type { Metadata } from "next";

import InsightsHero from "./components/HomeHero/InsightsHero";
import InsightsLoop from "./components/InsightsLoop/InsightsLoop";

export const metadata: Metadata = {
  title: "Insights & Analysis – Stay Ahead in Crypto",
  description:
    "Read expert articles and deep dives into crypto trends, blockchain developments, and DeFi innovations.",
  openGraph: {
    title: "Insights & Analysis – Stay Ahead in Crypto",
    description:
      "Read expert articles and deep dives into crypto trends, blockchain developments, and DeFi innovations.",
    //images: "",
  },
};

export default function Insights() {
  return (
    <>
      <InsightsHero />
      <InsightsLoop />
    </>
  );
}
