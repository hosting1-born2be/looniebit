import CompanyCompliance from "./components/CompanyCompliance/CompanyCompliance";
import CompanyComunity from "./components/CompanyComunity/CompanyComunity";
import CompanyDifferent from "./components/CompanyDifferent/CompanyDifferent";
import CompanyHero from "./components/CompanyHero/CompanyHero";
import CompanyServices from "./components/CompanyServices/CompanyServices";
import CompanyStarted from "./components/CompanyStarted/CompanyStarted";
import CompanyStory from "./components/CompanyStory/CompanyStory";
import CompanyValues from "./components/CompanyValues/CompanyValues";
import CompanyVision from "./components/CompanyVision/CompanyVision";

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
