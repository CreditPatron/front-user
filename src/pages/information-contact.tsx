import Widget from "components/widget";
import Subscribe from "../components/information/contact";
import CenteredForm from "../layouts/centered-form";
import SectionTitle from "../components/section-title";

const Index: React.FC = () => {
  return (
      <>
        <SectionTitle title="" subtitle="Contact Us" />
        <Widget>
          <div className="max-w-2xl mx-auto">
            <CenteredForm
                title="Subscribe"
                subtitle="Please enter your email address to subscribe to our newsletter to receive weekly updates">
              <Subscribe />
            </CenteredForm>
          </div>
        </Widget>
      </>
  );
};
export default Index;