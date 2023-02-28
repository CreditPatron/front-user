import SectionTitle from "components/section-title";
import Widget from "components/widget";
import ClosedFunding from "../components/funders/closed-funding";

const Index: React.FC = () => {
  return (
      <>
        <SectionTitle title="" subtitle="Closed Funding" />
        <Widget>
          <div className="w-full">
            <ClosedFunding />
          </div>
        </Widget>
      </>
  );
};
export default Index;