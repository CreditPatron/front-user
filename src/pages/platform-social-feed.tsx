import SocialWidget from "components/social-feed/widget";
import UserWidget from "components/user-widgets/widget";
import Friends from "components/social-feed/friends";
import Posts from "components/social-feed/posts";

const Index: React.FC = () => {
  return (
    <SocialWidget>
      <div className="w-full mb-4">
        <UserWidget />
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
        <div className="w-full lg:w-3/4">
          <Posts />
        </div>
        <div className="w-full lg:w-1/4">
          <Friends />
        </div>
      </div>
    </SocialWidget>
  );
};
export default Index;
