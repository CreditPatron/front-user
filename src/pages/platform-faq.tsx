import Widget from "components/widget";
import {UnderlinedTabs} from "components/tabs";
import SectionTitle from "components/section-title";
import FaqSection1 from "../components/funders/faq/faq-section-1";
import FaqSection2 from "../components/funders/faq/faq-section-2";
import FaqSection3 from "../components/funders/faq/faq-section-3";
import FaqSection4 from "../components/funders/faq/faq-section-4";
import FaqSection5 from "../components/funders/faq/faq-section-5";

import Search from "components/faq/search";
import Features from "components/faq/features";
import Title from "components/faq/title";

const Index: React.FC = () => {
  const tabs = [
    {index: 0, title: "Startups", content: <FaqSection1 />},
    {index: 1, title: "Funding", content: <FaqSection2 />},
    {index: 2, title: "Return", content: <FaqSection3 />},
    {index: 3, title: "KYC", content: <FaqSection4 />},
    {index: 4, title: "Evig Alpha", content: <FaqSection5 />},
  ];
  return (
      <>
        <SectionTitle title="" subtitle="Funders FAQ" />



        <Widget>
          <div className="flex flex-wrap">
          <Search />

            <div className="w-full">
              <UnderlinedTabs tabs={tabs} />
            </div>
          </div>
        </Widget>
      </>
  );
};
export default Index;
