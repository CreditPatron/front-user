import SectionTitle from "components/section-title";
import Widget from "components/widget";
import Invoices from "../components/profile/funding-completed";
import items from "json/funding_completed.json";

const Index: React.FC = () => {
  return (
      <>
        <SectionTitle title="" subtitle="Your Startups opened funding" />
        <Widget>
          <div className="w-full">
            <Invoices />
          </div>
        </Widget>
      </>
  );
};
export default Index;