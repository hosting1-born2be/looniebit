import HomeBenefits from "./components/HomeBenefits/HomeBenefits";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeHow from "./components/HomeHow/HomeHow";
import HomeJourney from "./components/HomeJourney/HomeJourney";
import HomeSecond from "./components/HomeSecond/HomeSecond";
import HomeValue from "./components/HomeValue/HomeValue";
import HomeWhy from "./components/HomeWhy/HomeWhy";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSecond />
      <HomeWhy />
      <HomeHow />
      <HomeBenefits />
      <HomeValue />
      <HomeJourney />
    </>
  );
}
