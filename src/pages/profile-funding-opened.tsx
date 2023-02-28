import SectionTitle from "components/section-title";
import Widget from "components/widget";
import Invoices from "../components/startup/funding_completed";

const Index: React.FC = () => {
  return (
      <>
        <SectionTitle title="" subtitle="Opened funding that you have applied" />
        <Widget>
          <div className="w-full">
            <Invoices />
          </div>
        </Widget>
      </>
  );
};
export default Index;