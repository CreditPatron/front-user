import posts from "json/posts.json";
import Icons from "./icons";
import Comments from "./comments";
import Input from "./input";

export type Post = {
  title: string;
  sentence: string;
  description: string;
  sentences: string;
  paragraphs: string;
  number: number;
  largeImage: string;
  img: string;
  timeago: string;
};

const Campaign: React.FC = ({campaign}) => {
  const item = posts[0];
  return (
    <div className="w-full">
      <div className="flex flex-col px-4 space-y-4">
        <div className="w-full">{campaign.fullDescription}</div>
        <div className="w-full">
          <img
            src={item.largeImage}
            alt="media"
            className="object-cover w-full h-48"
          />
        </div>

        <Icons />
        <Input img={item.img} />
        <Comments />
      </div>
    </div>
  );
};

export default Campaign;
